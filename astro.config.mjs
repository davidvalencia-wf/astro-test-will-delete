// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare"; // Import the Cloudflare adapter
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: "/app",
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  build: {
    assetsPrefix: "/app",
  },
  site: "https://www.raymondcamden.com",
  integrations: [react()],
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: process.env.NODE_ENV === 'production' ? {
        "react-dom/server": "react-dom/server.edge",
      } : {},
    },
  }
});
