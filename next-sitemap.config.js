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
      'https://altascapacidadesintelectuales.org/sitemap.xml'
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
    
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    };
  }
};

module.exports = config; 