import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';

// Static staging build for this plain HTML/CSS/ES-module project.
// It keeps file paths intact, allowing a prebuilt dist folder to be deployed
// manually even when Vite cannot be installed in the local environment.
const root = process.cwd();
const out = resolve(root, 'dist');
const copyPaths = ['css', 'js', 'components', 'data', 'assets'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const entry of readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.html')) {
    cpSync(join(root, entry.name), join(out, entry.name));
  }
}

for (const item of copyPaths) {
  const from = join(root, item);
  if (existsSync(from)) cpSync(from, join(out, item), { recursive: true });
}

// Keep public assets at the same URL paths, if present.
const publicAssets = join(root, 'public', 'assets');
if (existsSync(publicAssets)) cpSync(publicAssets, join(out, 'assets'), { recursive: true, force: true });

if (!existsSync(join(out, 'index.html'))) {
  throw new Error('Build gagal: index.html tidak ditemukan pada akar proyek.');
}
console.log(`Static staging build selesai: ${out}`);
