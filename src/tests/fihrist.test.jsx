import {
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
  expect,
  test,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { server } from "../mocks/server";

import App from "../App";

import { BrowserRouter } from "react-router-dom";
import fs from "fs";
import path from "path";

const appFile = fs
  .readFileSync(path.resolve(__dirname, "../App.jsx"), "utf8")
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

const sideBarFile = fs
  .readFileSync(path.resolve(__dirname, "../components/SideBar.jsx"), "utf8")
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

const contactFile = fs
  .readFileSync(path.resolve(__dirname, "../components/Contact.jsx"), "utf8")
  .replaceAll(/(?:\r\n|\r|\n| )/g, "");

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = "";
});
beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("App.jsx'e QueryClientProvider eklenmiş mi?", () => {
  expect(appFile).toContain("<QueryClientProvider");
});

test("SideBar componentindeki useEffect kaldırılmış mı?", () => {
  expect(sideBarFile).not.toContain("useEffect(()=>{");
});

test("Contact componentindeki useEffect kaldırılmış mı?", () => {
  expect(contactFile).not.toContain("useEffect(()=>{");
});

test("Yeni kullanıcı kayıt edildikten sonra invalidateQueries kullanılarak yeni datanın gelmesi sağlanıyor mu?", async () => {
  const user = userEvent.setup();
  await user.click(await screen.findByText("New"));
  await user.type(await screen.findByPlaceholderText("First"), "Test");
  await user.type(await screen.findByPlaceholderText("Last"), "User");
  await user.type(
    await screen.findByPlaceholderText("john.doe@example.com"),
    "test@c2w.co"
  );
  await user.type(
    await screen.findByPlaceholderText("https://example.com/avatar.jpg"),
    "https://fastly.picsum.photos/id/788/300/300.jpg?hmac=vZbkqAx5e6Wjik2rP-gC-xLBHoE6tjXGGKebHc_0CAI"
  );
  await user.click(await screen.findByText("Save"));
  await screen.findByText("Test");
  await screen.findByText("User");
});

test("Kullanıcıyı silindikten sonra invalidateQueries kullanılarak silinen kullanıcı adının listeden kalkması sağlanıyor mu?", async () => {
  const user = userEvent.setup();
  const users = await screen.findAllByTestId("contact");
  await user.click(users[1]);
  await user.click(await screen.findByText("Delete"));
  await waitFor(() => {
    expect(screen.queryByText("Bosco")).not.toBeInTheDocument();
  });
});
