import { defineConfig } from 'vite';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Build every top-level HTML page so all DERU routes are published.
const htmlPages = readdirSync(process.cwd())
  .filter((file) => file.endsWith('.html'))
  .reduce((entries, file) => {
    entries[file.replace(/\.html$/, '')] = resolve(process.cwd(), file);
    return entries;
  }, {});

export default defineConfig({
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlPages,
    },
  },
});
