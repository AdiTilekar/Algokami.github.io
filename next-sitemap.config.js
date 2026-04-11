/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://algokami.tech',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] },
    ],
  },
  additionalPaths: async () => [
    { loc: '/',                    priority: 1.0 },
    { loc: '/about',               priority: 0.8 },
    { loc: '/services/web-app-development', priority: 0.9 },
    { loc: '/services/architecture',        priority: 0.85 },
    { loc: '/services/ecommerce',           priority: 0.9 },
    { loc: '/blog',                priority: 0.7 },
    { loc: '/contact',             priority: 0.8 },
  ],
}
