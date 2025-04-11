import { defineConfig } from "#q-app/wrappers";
import { fileURLToPath } from "node:url";
export default defineConfig(() => ({
  boot: ["i18n"],
  build: {
    typescript: { strict: true, vueShim: true },
    vitePlugins: [
      [
        "@intlify/unplugin-vue-i18n/vite",
        { include: [fileURLToPath(new URL("./src/i18n", import.meta.url))] },
      ],
      [
        "vite-plugin-checker",
        {
          eslint: {
            lintCommand:
              'eslint -c ./eslint.config.ts "./src*/**/*.{ts,js,mjs,cjs,vue}"',
            useFlatConfig: true,
          },
          vueTsc: true,
        },
        { server: false },
      ],
    ],
  },
  css: ["app.css"],
  electron: {
    builder: { appId: "cms" },
    bundler: "builder",
    preloadScripts: ["electron-preload"],
  },
  extras: ["roboto-font", "material-icons"],
}));
