export const SITE_URL = 'https://sarazsilva.com';
export const SITE_NAME = 'Sara Silva - Projeção';
export const PERSON_NAME = 'Sara Zandonai Silva';
export const PERSON_JOB_TITLE = 'Especialista em Projeção e Holyrics';
export const PERSON_IMAGE = `${SITE_URL}/perfil.svg`;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/sarazsilva/',
  tiktok: 'https://www.tiktok.com/@sarazsilva',
} as const;

export const ROUTES = {
  home: '/',
  combo: '/combo-projecao',
  kit: '/kit-midia-igreja',
  compareEasyworship: '/holyrics-vs-easyworship',
  comparePropresenter: '/holyrics-vs-propresenter',
  llm: '/llm.txt',
  llms: '/llms.txt',
  llmsFull: '/llms-full.txt',
  pricing: '/pricing.md',
} as const;

export const HOTMART = {
  combo: 'https://pay.hotmart.com/S94768202Q?bid=1722861105152',
  holyricsParte1:
    'https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I',
  holyricsParte2:
    'https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-2/A94024412O',
  identidadeVisual:
    'https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a',
} as const;

export const COMBO = {
  name: 'Combo da Projeção no Holyrics',
  price: 84,
  priceFrom: 99.8,
  currency: 'BRL',
  ratingValue: 5,
  students: 2100,
  lessons: 20,
  guaranteeDays: 7,
} as const;

export const PRODUCTS = {
  combo: {
    name: COMBO.name,
    priceLabel: 'R$ 84,00',
    url: `${SITE_URL}${ROUTES.combo}`,
    checkout: HOTMART.combo,
    summary:
      `Curso prático de Holyrics do básico ao avançado, com ${COMBO.lessons} aulas, acesso vitalício e suporte.`,
  },
  kit: {
    name: 'Kit Mídia Igreja',
    url: `${SITE_URL}${ROUTES.kit}`,
    summary:
      'Curadoria de equipamentos para rede, vídeo, TV de retorno, automação e cenário da igreja.',
  },
  identidade: {
    name: 'Identidade Visual Mensal',
    priceLabel: 'R$ 14,90',
    url: HOTMART.identidadeVisual,
    summary:
      'Artes mensais para manter a comunicação visual da igreja consistente em todos os cultos.',
  },
} as const;

export const ENTITIES = [
  {
    name: 'Holyrics',
    type: 'SoftwareApplication',
    description:
      'Software de projeção usado por igrejas para letras, Bíblia, avisos e telas de culto.',
  },
  {
    name: 'Projeção de Igreja',
    type: 'Thing',
    description:
      'Operação das telas do culto: letras, Bíblia, avisos, retorno de palco e identidade visual.',
  },
  {
    name: 'vMix',
    type: 'SoftwareApplication',
    description:
      'Programa de live e mixagem de vídeo usado em transmissões de igreja.',
  },
  {
    name: 'Behringer',
    type: 'Brand',
    description:
      'Mesas digitais usadas em cabines de áudio e automação de culto.',
  },
  {
    name: 'Soundcraft',
    type: 'Brand',
    description:
      'Mesas digitais usadas em sonorização e integração com projeção.',
  },
  {
    name: 'EasyWorship',
    type: 'SoftwareApplication',
    description:
      'Software de apresentação para igrejas, comum em equipes que já usam fluxo em inglês.',
  },
  {
    name: 'ProPresenter',
    type: 'SoftwareApplication',
    description:
      'Software de projeção para igrejas com telas de palco avançadas e operação mais complexa.',
  },
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
