import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { Survey } from "./Survey";
import userEvent from "@testing-library/user-event";
import { setupServer, type SetupServerApi } from "msw/node";
import { rest } from "msw";

describe("Survey", () => {
  let requestBody: Record<string, unknown> | undefined;
  let server: SetupServerApi;

  beforeAll(() => {
    server = setupServer(
      rest.post("/survey", async (req, res, ctx) => {
        requestBody = await req.json<Record<string, unknown>>();
        return res(ctx.body("ok"));
      })
    );
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    requestBody = undefined;
  });

  const submit = async () => {
    const submit = await screen.getByRole("button", { name: "Submit" });
    await userEvent.click(submit);
    await waitFor(() => expect(requestBody).toBeDefined());
  };

  it("submits toppings", async () => {
    const { getByLabelText } = render(<Survey />);

    const artichoke = await getByLabelText("Artichoke Hearts");
    await userEvent.click(artichoke);

    await submit();

    expect(requestBody).toHaveProperty(
      "pizzaToppings",
      expect.arrayContaining(["Artichoke Hearts"])
    );
  });

  it("unselects toppings", async () => {
    const { getByLabelText } = render(<Survey />);

    const hot = await getByLabelText("Italian sausage (Hot)");
    const sweet = await getByLabelText("Italian sausage (Sweet)");

    await userEvent.click(hot);
    await userEvent.click(sweet);
    await userEvent.click(hot);

    await submit();

    expect(requestBody).toHaveProperty(
      "pizzaToppings",
      expect.arrayContaining(["Italian sausage (Sweet)"])
    );

    expect(requestBody).toHaveProperty(
      "pizzaToppings",
      expect.not.arrayContaining(["Italian sausage (Hot)"])
    );
  });

  it("submits name and password", async () => {
    const { getByLabelText } = render(<Survey />);

    const name = await getByLabelText("Name");
    await userEvent.type(name, "Erik P");
    const password = await getByLabelText("Password");
    await userEvent.type(password, "pass0rdw-");

    await submit();

    expect(requestBody).toHaveProperty("name", "Erik P");

    expect(requestBody).toHaveProperty("password", "pass0rdw-");
  });

  it("submits birthday", async () => {
    const { getByLabelText } = render(<Survey />);

    const birthday = await getByLabelText("Birthday");

    // This isn't an ideal test, since it just triggers the onChange and does an
    // end-run around the interaction mechanics of input[type=date]. In the long
    // run it might be best to use a third party calendar component that works
    // with with Testing Library.
    await fireEvent.change(birthday, { target: { value: "1981-01-01" } });

    await submit();

    expect(requestBody).toHaveProperty("birthday", "1981-01-01");
  });

  it("submits a tech preference", async () => {
    const { getByLabelText } = render(<Survey />);

    const both = await getByLabelText("Both");
    await userEvent.click(both);

    await submit();

    expect(requestBody).toHaveProperty("techPref", "both");
  });
});
