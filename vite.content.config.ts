import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: resolve(rootDir, "public"),
  build: {
    emptyOutDir: false,
    outDir: resolve(rootDir, "dist"),
    sourcemap: true,
    lib: {
      entry: resolve(rootDir, "src/content.ts"),
      formats: ["iife"],
      name: "AvasThemesContent",
      fileName: () => "assets/content.js",
    },
  },
});
