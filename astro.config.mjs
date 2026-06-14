import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://oregontrail26.netlify.app",
  integrations: [mdx(), sitemap()],
});
