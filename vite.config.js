import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about_me: resolve(__dirname, "about-me/index.html"),
        article_one: resolve(__dirname, "article-one/index.html"),
      },
    },
  },
});
