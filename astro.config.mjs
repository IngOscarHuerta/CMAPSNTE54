// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio público para URLs absolutas (requerido por sitemap y canónicos)
  site: 'https://www.cmapsnte54.com.mx/',

  // Integraciones
  integrations: [
    sitemap(), // genera /sitemap-index.xml en build
  ],

  // Tu config de Vite (Tailwind plugin)
  vite: {
    plugins: [tailwindcss()],
  },
});
