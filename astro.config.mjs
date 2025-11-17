// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare"; // Import the Cloudflare adapter
import preact from "@astrojs/preact";

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
  integrations: [preact()],
});
