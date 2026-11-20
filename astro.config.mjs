import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://walidhadri-iron.github.io",
  image: {
    // YouTube thumbnails are downloaded and optimised at build time, then served from this site.
    domains: ["i.ytimg.com"],
  },
});
