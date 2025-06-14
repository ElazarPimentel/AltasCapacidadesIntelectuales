// src/lib/pdf-sitemap.ts

import { promises as fs } from 'fs';
import path from 'path';
import glob from 'fast-glob';
import { format } from 'date-fns';

interface PDFEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export async function generatePDFSitemap(): Promise<string> {
  const publicDir = path.join(process.cwd(), 'public');
  const pdfFiles = await glob('**/*.pdf', {
    cwd: publicDir,
    absolute: false,
    ignore: ['**/node_modules/**']
  });

  const entries: PDFEntry[] = await Promise.all(
    pdfFiles.map(async (file) => {
      const filePath = path.join(publicDir, file);
      const stats = await fs.stat(filePath);
      
      return {
        loc: `https://altascapacidadesintelectuales.org/${file}`,
        lastmod: format(stats.mtime, "yyyy-MM-dd'T'HH:mm:ssXXX"),
        changefreq: 'monthly',
        priority: 0.5
      };
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
}

export async function writePDFSitemap(): Promise<void> {
  const sitemap = await generatePDFSitemap();
  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap-pdf.xml'),
    sitemap,
    'utf-8'
  );
}

export function generatePDFAlternateLink(pdfUrl: string): string {
  return `<link rel="alternate" type="application/pdf" href="${pdfUrl}" />`;
} 