// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://skyandswim.com',
  integrations: [
    // Keep the affiliate redirectors (/go/**) out of the sitemap — they're
    // noindex,nofollow bounce pages, not content.
    sitemap({ filter: (page) => !page.includes('/go/') }),
  ],
});
