import fs from 'fs';
import path from 'path';

export type PDFEntry = {
  url: string;
  lastmod?: string;
  changefreq: 'monthly' | 'weekly' | 'daily' | 'yearly';
  priority: number;
};

export async function scanPDFs(publicDir: string = 'public'): Promise<PDFEntry[]> {
  const pdfDir = path.join(process.cwd(), publicDir);
  const files = await fs.promises.readdir(pdfDir);
  
  const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
  
  return Promise.all(
    pdfFiles.map(async (file) => {
      const filePath = path.join(pdfDir, file);
      const stats = await fs.promises.stat(filePath);
      
      return {
        url: `https://altascapacidadesintelectuales.org/${file}`,
        lastmod: stats.mtime.toISOString(),
        changefreq: 'monthly' as const,
        priority: 0.4,
      };
    })
  );
}

export function generatePDFAlternateLink(pdfUrl: string): string {
  return `<link rel="alternate" type="application/pdf" href="${pdfUrl}" />`;
} 