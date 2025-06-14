import { promises as fs } from 'fs';
import { generatePDFSitemap } from '../pdf-sitemap';

describe('PDF Sitemap Generation', () => {
  const mockPDFs = [
    'test1.pdf',
    'subdir/test2.pdf',
    'another/test3.pdf'
  ];

  beforeEach(() => {
    // Mock fs.stat to return a consistent date
    jest.spyOn(fs, 'stat').mockResolvedValue({
      mtime: new Date('2024-03-20T12:00:00Z')
    } as fs.Stats);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should generate valid XML sitemap', async () => {
    const sitemap = await generatePDFSitemap();
    
    // Basic XML structure validation
    expect(sitemap).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    
    // Check for PDF entries
    mockPDFs.forEach(pdf => {
      expect(sitemap).toContain(`<loc>https://altascapacidadesintelectuales.org/${pdf}</loc>`);
      expect(sitemap).toContain('<changefreq>monthly</changefreq>');
      expect(sitemap).toContain('<priority>0.5</priority>');
    });
  });

  it('should include lastmod dates', async () => {
    const sitemap = await generatePDFSitemap();
    expect(sitemap).toContain('2024-03-20T12:00:00+00:00');
  });
}); 