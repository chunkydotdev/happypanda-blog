// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://happypanda.ai/blog",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/blog/404"),
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({}),
  base: "/blog",
});
