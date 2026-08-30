// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://skyandswim.com',
  integrations: [
    // No filter needed: the /go/** affiliate redirectors it used to exclude were
    // removed 2026-08-30 (booking CTAs now link straight to CJ), and every
    // remaining page is content we want indexed.
    sitemap(),
  ],
});
