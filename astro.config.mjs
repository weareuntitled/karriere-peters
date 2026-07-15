import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://karriere.peters-erp.com',
  server: { host: '127.0.0.1', port: 4321 },
  // ponytail: removed global text/html header — broke Vite CSS module imports
});