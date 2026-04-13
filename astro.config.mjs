import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // Production URL — update before launch
  site: 'https://finzen.org',

  integrations: [
    sitemap({
      // All pages included by default.
      // Set changefreq and priority per page type if needed.
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],

  // Enforce consistent trailing slash behavior
  trailingSlash: 'ignore',

  // Redirect old page URLs to new ones (SEO + bookmarks)
  redirects: {
    '/secure-finance-app': '/privacy-and-security',
    '/personal-finance-charts': '/data-visualization',
    '/mindful-money-tracking': '/the-finzen-method',
    '/budgeting-app': '/budgeting',
  },
});
