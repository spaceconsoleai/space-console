import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Base URL - change this to your actual domain
const BASE_URL = 'https://space-console.com';

const routes = [
  '/',
  '/product',
  '/use-cases',
  '/use-cases/manufacturing',
  '/use-cases/service-ops',
  '/use-cases/sales-revops',
  '/use-cases/marketing',
  '/pricing',
  '/integrations',
  '/resources',
  '/company',
  '/book-demo',
  '/legal/privacy',
  '/legal/terms'
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
      .map((route) => {
        return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
      })
      .join('')}
</urlset>`;

  const publicDir = path.resolve(__dirname, '../public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();
