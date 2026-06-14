import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://oregon-trail-journal.netlify.app",
  integrations: [mdx()],
});
