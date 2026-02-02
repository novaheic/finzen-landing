import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Production URL — update before launch
  site: 'https://finzen.app',

  integrations: [
    sitemap({
      // All pages included by default.
      // Set changefreq and priority per page type if needed.
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],

  // Enforce consistent trailing slash behavior
  trailingSlash: 'never',
});
