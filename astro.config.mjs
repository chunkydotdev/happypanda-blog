// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({}),
  base: "/blog", // This ensures assets are loaded correctly
});
