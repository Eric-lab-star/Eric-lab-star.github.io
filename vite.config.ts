import { defineConfig } from "vite";
// vite.config.js

import { resolve } from "path";
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "about/index.html"),
      },
    },
  },
});
