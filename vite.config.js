import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Ensure the base path is correct for relative URLs
  build: {
    outDir: "dist", // The output directory for the build
  },
});
