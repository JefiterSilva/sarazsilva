import { affiliateUrl, pageName, pageUrl } from './metadata';
import { products, setupStages } from './products';

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: pageName,
      url: pageUrl,
      description:
        'Página com curadoria de equipamentos para mídia de igreja, com foco em rede, vídeo, automação, cenografia e CTA para lista afiliada do Mercado Livre.',
    },
    {
      '@type': 'ItemList',
      name: 'Equipamentos recomendados para mídia de igreja',
      itemListElement: setupStages
        .flatMap((stage) =>
          products.filter((product) => product.stage === stage.id),
        )
        .map((product, index) => ({
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
