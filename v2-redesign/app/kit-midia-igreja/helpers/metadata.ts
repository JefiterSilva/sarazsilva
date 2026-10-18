import type { Metadata } from 'next';
import { products } from '../helpers/products';

export const affiliateUrl = 'https://meli.la/26jzdgw';
export const productUrl = products.map((product) => product.link);
export const pageUrl = 'https://sarazsilva.com/kit-midia-igreja';
export const pageName = 'Kit Mídia Igreja';

export const metadata: Metadata = {
  title: 'Kit Mídia Igreja | Equipamentos Recomendados por Sara Silva',
  description:
    'Descubra um setup completo para mídia de igreja com rede, vídeo, TV box, automação e iluminação. Curadoria pensada para aumentar estabilidade, impacto visual e velocidade na operação.',
  keywords: [
    'kit midia igreja',
    'equipamentos midia igreja',
    'setup projecao igreja',
    'equipamentos para igreja',
    'tv box retorno igreja',
    'switch gigabit igreja',
    'hdmi fibra 50m igreja',
    'rede para midia igreja',
  ],
  alternates: {
    canonical: '/kit-midia-igreja',
  },
  openGraph: {
    title: 'Kit Mídia Igreja | Curadoria de Equipamentos para Mídia e Projeção',
    description:
      'Uma página pensada para converter visitantes em compradores com uma curadoria real de equipamentos para rede, vídeo, automação e cenário.',
    url: pageUrl,
    siteName: 'Sara Silva - Especialista em Projeção',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/sara.jpg',
        width: 1200,
        height: 630,
        alt: 'Kit Mídia Igreja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Mídia Igreja | Equipamentos Recomendados por Sara Silva',
    description:
      'Curadoria de produtos para rede, vídeo, automação e cenografia na mídia da igreja.',
    images: ['/sara.jpg'],
  },
};
