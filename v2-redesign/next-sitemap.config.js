/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sarazsilva.com',
  generateRobotsTxt: false,
  exclude: ['/server-sitemap.xml'],
  additionalPaths: async (config) => [
    await config.transform(config, '/combo-projecao'),
    await config.transform(config, '/kit-midia-igreja'),
    await config.transform(config, '/holyrics-vs-easyworship'),
    await config.transform(config, '/holyrics-vs-propresenter'),
    await config.transform(config, '/llm.txt'),
    await config.transform(config, '/llms.txt'),
    await config.transform(config, '/llms-full.txt'),
    await config.transform(config, '/pricing.md'),
  ],
};
