import { defineConfig } from "vite";
// vite.config.js

import { resolve } from "path";
export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resolution: resolve(__dirname, "log/resolution.html"),
        dev: resolve(__dirname, "log/dev.html"),
      },
    },
  },
});
