const { scanPDFs } = require('./src/lib/pdf-sitemap');

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL?.toLowerCase() || 'https://altascapacidadesintelectuales.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_*',
    '/404',
    '/500',
    '/sitemap.xml',
    '/robots.txt'
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://altascapacidadesintelectuales.org/sitemap.xml',
      'https://altascapacidadesintelectuales.org/sitemap-pdf.xml'
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/_*',
          '/404',
          '/500'
        ]
      }
    ]
  },
  transform: async (config, path) => {
    // Ensure URLs are lowercase
    const url = path.toLowerCase();
    
    // Add PDFs to sitemap
    if (url.endsWith('.pdf')) {
      return {
        loc: url,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString()
      };
    }
    
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    };
  }
};

module.exports = config; 