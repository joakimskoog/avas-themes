import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

const readJson = <T>(path: string): T => JSON.parse(readFileSync(path, "utf8"));

const browserExtensionManifest = (): Plugin => ({
  name: "browser-extension-manifest",
  generateBundle() {
    const packageJson = readJson<{ version: string }>(resolve(rootDir, "package.json"));
    const manifest = readJson<Record<string, unknown>>(
      resolve(rootDir, "src", "manifest.template.json"),
    );
    manifest.version = packageJson.version;

    this.emitFile({
      type: "asset",
      fileName: "manifest.json",
      source: `${JSON.stringify(manifest, null, 2)}\n`,
    });
  },
});

export default defineConfig({
  publicDir: resolve(rootDir, "public"),
  plugins: [browserExtensionManifest()],
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
