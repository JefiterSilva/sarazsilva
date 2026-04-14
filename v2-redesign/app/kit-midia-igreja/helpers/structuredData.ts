import { affiliateUrl, pageName, pageUrl } from './metadata';
import { products } from './products';

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: pageName,
      url: pageUrl,
      description:
        'Pagina com curadoria de equipamentos para midia de igreja, com foco em rede, video, automacao, cenografia e CTA para lista afiliada do Mercado Livre.',
    },
    {
      '@type': 'ItemList',
      name: 'Equipamentos recomendados para midia de igreja',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: affiliateUrl,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      })),
    },
  ],
};
