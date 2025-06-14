import { writePDFSitemap } from '../src/lib/pdf-sitemap';

async function main() {
  try {
    await writePDFSitemap();
    console.log('PDF sitemap generated successfully');
  } catch (error) {
    console.error('Error generating PDF sitemap:', error);
    process.exit(1);
  }
}

main(); 