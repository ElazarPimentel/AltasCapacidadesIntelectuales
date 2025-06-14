const { scanPDFs } = require('./src/lib/pdf-sitemap');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://altascapacidadesintelectuales.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://altascapacidadesintelectuales.org/sitemap.xml',
    ],
  },
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const basePaths = [
      await config.transform(config, '/'),
      await config.transform(config, '/arquetipos'),
      await config.transform(config, '/historia'),
      await config.transform(config, '/tests'),
      await config.transform(config, '/legislacion'),
      await config.transform(config, '/acerca'),
      await config.transform(config, '/profesionales'),
      await config.transform(config, '/curiosidades'),
      await config.transform(config, '/articulos'),
    ];

    const pdfPaths = await scanPDFs();
    return [...basePaths, ...pdfPaths];
  },
}; 