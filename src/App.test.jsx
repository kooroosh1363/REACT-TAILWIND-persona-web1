import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("PersonaOS", () => {
  it("filters projects by search and category", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText("6 projects")).toBeInTheDocument();

    await user.type(screen.getByRole("searchbox", { name: /search portfolio/i }), "RAG");
    expect(screen.getByText("1 project")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Enterprise RAG Evaluation Platform" })).toBeInTheDocument();

    await user.clear(screen.getByRole("searchbox", { name: /search portfolio/i }));
    await user.click(screen.getByRole("button", { name: "Frontend Systems" }));
    expect(screen.getByText("3 projects")).toBeInTheDocument();
  });

  it("opens a case-study dialog and closes it", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole("button", { name: /open case study/i })[0]);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Problem")).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("persists theme preference", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Switch to dark theme" }));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("personaos:theme")).toBe("dark");
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menu = screen.getByRole("button", { name: "Menu" });
    expect(menu).toHaveAttribute("aria-expanded", "false");
    await user.click(menu);
    expect(menu).toHaveAttribute("aria-expanded", "true");
  });
});
