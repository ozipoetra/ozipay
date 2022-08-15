/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://ozip.my.id",
  generateRobotsTxt: false,
  sitemapSize: 5000,
  exclude: ['/search', '/tags', '/elements', '/contacts']
}

module.exports = config
