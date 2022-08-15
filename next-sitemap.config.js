/** @type {import('next-sitemap').IConfig} */
import config from "@config/config.json";
const { base_url } = config.site;
const config = {
  siteUrl: base_url,
  generateRobotsTxt: false,
  sitemapSize: 5000,
}

module.exports = config
