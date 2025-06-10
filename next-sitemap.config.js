/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://altas-capacidades-intelectuales.vercel.app',
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
      'https://altas-capacidades-intelectuales.vercel.app/sitemap.xml',
    ],
  },
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/arquetipos'),
    await config.transform(config, '/historia'),
    await config.transform(config, '/tests'),
    await config.transform(config, '/legislacion'),
    await config.transform(config, '/acerca'),
    await config.transform(config, '/profesionales'),
    await config.transform(config, '/curiosidades'),
  ],
}; 