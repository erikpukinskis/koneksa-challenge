import { render, waitFor, screen } from "@testing-library/react";
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
});
