import { describe, expect, it } from "vitest";
import { normalizeTheme, readTheme, writeTheme } from "./theme";

function memoryStorage() {
  const map = new Map();
  return {
    getItem: (key) => map.get(key) ?? null,
    setItem: (key, value) => map.set(key, value)
  };
}

describe("theme policy", () => {
  it("normalizes unsupported values", () => {
    expect(normalizeTheme("sepia")).toBe("light");
  });

  it("persists supported values", () => {
    const storage = memoryStorage();
    expect(writeTheme("dark", storage)).toBe("dark");
    expect(readTheme(storage)).toBe("dark");
  });
});
