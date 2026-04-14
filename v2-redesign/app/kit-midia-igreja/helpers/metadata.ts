import type { Metadata } from 'next';
import { products } from '../helpers/products';

export const affiliateUrl = 'https://meli.la/26jzdgw';
export const productUrl = products[0].link;
export const pageUrl = 'https://sarazsilva.com/kit-midia-igreja';
export const pageName = 'Kit Midia Igreja';

export const metadata: Metadata = {
  title: 'Kit Midia Igreja | Equipamentos Recomendados por Sara Silva',
  description:
    'Descubra um setup completo para midia de igreja com rede, video, TV box, automacao e iluminacao. Curadoria pensada para aumentar estabilidade, impacto visual e velocidade na operacao.',
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
    title: 'Kit Midia Igreja | Curadoria de Equipamentos para Midia e Projecao',
    description:
      'Uma pagina pensada para converter visitantes em compradores com uma curadoria real de equipamentos para rede, video, automacao e cenario.',
    url: pageUrl,
    siteName: 'Sara Silva - Especialista em Projecao',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/sara.jpg',
        width: 1200,
        height: 630,
        alt: 'Kit Midia Igreja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Midia Igreja | Equipamentos Recomendados por Sara Silva',
    description:
      'Curadoria de produtos para rede, video, automacao e cenografia na midia da igreja.',
    images: ['/sara.jpg'],
  },
};
