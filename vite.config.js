import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/REACT-TAILWIND-persona-web1/" : "/",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js"
  }
});
