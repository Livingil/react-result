import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: "Notes",
        short_name: "Notes",
        start_url: "/",
        display: "standalone",
        background_color: "#5d5b5b",
        theme_color: "#575151",
        orientation: "landscape",
        icons: [
          { src: "/pwa-72x72.png", sizes: "72x72", type: "image/png" },
          { src: "/pwa-96x96.png", sizes: "96x96", type: "image/png" },
          { src: "/pwa-128x128.png", sizes: "128x128", type: "image/png" },
          { src: "/pwa-144x144.png", sizes: "144x144", type: "image/png" },
          { src: "/pwa-152x152.png", sizes: "152x152", type: "image/png" },
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-384x384.png", sizes: "384x384", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
