/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
    }),
  ],
  preview: { open: true },
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@entities": path.resolve("src/entities"),
      "@features": path.resolve("src/features"),
      "@pages": path.resolve("src/pages"),
      "@shared": path.resolve("src/shared"),
      "@widgets": path.resolve("src/widgets"),
      "@public": path.resolve("public"),
    },
  },
});
