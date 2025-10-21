import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/My-Portfolio.github.io/', // Ruta base para GitHub Pages
  site: 'https://lilyreyes.github.io/My-Portfolio.github.io/', // URL completa con slash final
  integrations: [
    preact(),
    sitemap({
      filter: (page) =>
        !page.includes('/blog/tags') && !page.includes('/blog/techs'),
    }),
    tailwind(), // Integración correcta de Tailwind
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark', // Estilo de syntax highlighting
    },
  },
});
