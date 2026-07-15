// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spenglerei-peters.de',
  integrations: [mdx(), sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
  image: {
    domains: ['images.unsplash.com'],
  },
});
