import { defineConfig } from "vite";
// vite.config.js

import { resolve } from "path";
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        What_should_I_write: resolve(
          __dirname,
          "articles/What_should_I_write.html",
        ),
      },
    },
  },
});
