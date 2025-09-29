import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { bangs } from "./src/bang";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
    {
      name: "bangs-list-generator",
      buildStart() {
        this.emitFile({
          type: "asset",
          fileName: "bangs.json",
          source: JSON.stringify(bangs, null, 2),
        });
      },
    }
  ],
})