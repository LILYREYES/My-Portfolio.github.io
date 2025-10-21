import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  base: "/My-Portfolio.github.io/",  // 👈 base correcta para GitHub Pages
  site: "https://lilyreyes.github.io/My-Portfolio.github.io/",  // 👈 URL completa con slash final
  integrations: [
    preact(),
    icon(),
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags") && !page.includes("/blog/techs"),
    }),
    tailwind(), // ✅ integración correcta de Tailwind
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
