const KEY = "personaos:theme";

export function normalizeTheme(value) {
  return value === "dark" || value === "light" ? value : "light";
}

export function readTheme(storage = globalThis.localStorage) {
  try {
    return normalizeTheme(storage?.getItem(KEY));
  } catch {
    return "light";
  }
}

export function writeTheme(theme, storage = globalThis.localStorage) {
  const normalized = normalizeTheme(theme);
  try {
    storage?.setItem(KEY, normalized);
  } catch {
    // Storage is optional for this static portfolio.
  }
  return normalized;
}
