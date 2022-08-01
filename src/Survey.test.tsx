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

  it("can choose toppings", async () => {
    const { getByLabelText, getByRole } = render(<Survey />);

    const artichoke = await getByLabelText("Artichoke Hearts");
    await userEvent.click(artichoke);
    const submit = await getByRole("button", { name: "Submit" });
    await userEvent.click(submit);
    await waitFor(() => expect(requestBody).toBeDefined());

    expect(requestBody).toHaveProperty(
      "pizzaToppings",
      expect.arrayContaining(["Artichoke Hearts"])
    );
  });
});
