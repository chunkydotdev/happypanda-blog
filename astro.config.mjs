// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://happypanda.ai",
  integrations: [
    sitemap({
      filter: (page) => {
        // Filter out 404 page
        if (page.includes("/404")) return false;

        // Remove trailing slashes
        if (page.endsWith("/") && page !== "https://happypanda.ai/blog/") {
          return false;
        }

        // Ensure we don't have duplicate root pages
        if (page === "https://happypanda.ai/blog" && page.endsWith("/blog")) {
          return false;
        }

        return true;
      },
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
  trailingSlash: "never",
});
