/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://sara-silva-landing.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  additionalPaths: async (config) => [
    await config.transform(config, '/combo-projecao'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sara-silva-landing.vercel.app'}/sitemap.xml`,
    ],
  },
};
