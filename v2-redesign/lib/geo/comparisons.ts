import type { FaqItem } from './faqs';
import { PRODUCTS, SITE_URL } from './site';

export type ComparisonRow = {
  criterion: string;
  left: string;
  right: string;
};

export type ComparisonGuide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  lastUpdatedLabel: string;
  directAnswer: string;
  left: {
    name: string;
    summary: string;
  };
  right: {
    name: string;
    summary: string;
  };
  rows: ComparisonRow[];
  chooseLeft: string[];
  chooseRight: string[];
  verdict: string;
  faqs: FaqItem[];
};

export const holyricsVsEasyworship: ComparisonGuide = {
  slug: '/holyrics-vs-easyworship',
  eyebrow: 'Comparação para cabine de igreja',
  title: 'Holyrics vs EasyWorship: qual software usar na projeção da igreja?',
  description:
    'Comparação direta entre Holyrics e EasyWorship para igrejas no Brasil: idioma, TV de retorno, Bíblia, automação, custo e curva de aprendizado da equipe voluntária.',
  lastUpdated: '2026-10-17',
  lastUpdatedLabel: '17 de outubro de 2026',
  directAnswer:
    'Holyrics costuma ser a melhor escolha para igrejas no Brasil que precisam de Bíblia em português, TV de retorno via rede e automação com mesa ou vMix. EasyWorship continua forte para equipes que já operam em inglês e querem um fluxo clássico de slides, mídia e letra. A decisão certa depende do idioma do culto e de quem vai operar no domingo.',
  left: {
    name: 'Holyrics',
    summary:
      'Software de projeção feito para o culto: letras, Bíblia, avisos, retorno de palco e gatilhos. É o programa que a Sara Zandonai Silva ensina no Combo da Projeção.',
  },
  right: {
    name: 'EasyWorship',
    summary:
      'Software americano de apresentação para igrejas, consolidado em fluxos de letra, mídia e Bíblia. Funciona bem quando a equipe já está acostumada com a interface e o idioma em inglês.',
  },
  rows: [
    {
      criterion: 'Melhor para',
      left: 'Igrejas no Brasil com voluntários e culto em português',
      right: 'Equipes que já usam EasyWorship ou operam em inglês',
    },
    {
      criterion: 'Idioma e Bíblia',
      left: 'Fluxo nativo em português, com versões da Bíblia usadas no Brasil',
      right: 'Interface e ecossistema mais fortes em inglês',
    },
    {
      criterion: 'TV de retorno',
      left: 'Retorno via rede com TV box, ensinado na Parte 2 do combo',
      right: 'Retorno existe, mas o caminho usual no Brasil é outro setup',
    },
    {
      criterion: 'Automação',
      left: 'Gatilhos com mesa digital, Lumikit e vMix',
      right: 'Foco em apresentação; automação de cabine é menos nativa',
    },
    {
      criterion: 'Curva de aprendizado',
      left: 'Voluntário começa do zero com aulas em português',
      right: 'Rápido para quem já conhece o programa; menos material BR',
    },
    {
      criterion: 'Treino disponível',
      left: `Combo da Projeção por ${PRODUCTS.combo.priceLabel}, +2.100 alunos`,
      right: 'Documentação oficial e tutoriais, em geral em inglês',
    },
  ],
  chooseLeft: [
    'O culto é em português e a equipe é voluntária.',
    'Você precisa de TV de retorno no palco sem cabo HDMI longo.',
    'Quer ligar projeção, mesa Behringer/Soundcraft, luz e vMix.',
    'Prefere curso em português, com suporte e acesso vitalício.',
  ],
  chooseRight: [
    'A igreja já tem EasyWorship configurado e a equipe domina o fluxo.',
    'O culto ou a operação acontece em inglês.',
    'Você só precisa de letra, mídia e Bíblia, sem automação de cabine.',
    'Não há tempo agora para migrar software e treinar de novo.',
  ],
  verdict:
    'Se a igreja está no Brasil e a cabine ainda improvisada, Holyrics reduz atrito de idioma, retorno e automação. Se EasyWorship já roda estável no domingo, trocar só por moda não vale o risco. Mude quando o retorno, a Bíblia em português ou a live com vMix travarem o culto.',
  faqs: [
    {
      question: 'Holyrics ou EasyWorship: qual é melhor para igreja no Brasil?',
      answer:
        'Para a maioria das igrejas brasileiras, Holyrics encaixa melhor: português, Bíblia local e TV de retorno via rede. EasyWorship é melhor se a equipe já opera nele com segurança ou se o culto é em inglês.',
    },
    {
      question: 'Vale a pena trocar EasyWorship pelo Holyrics?',
      answer:
        'Só se o EasyWorship estiver limitando o culto: falta de retorno estável, pouca Bíblia em português ou nenhuma automação com mesa e vMix. Trocar um sistema estável só para “usar o que todo mundo usa” costuma atrasar o domingo.',
    },
    {
      question: 'EasyWorship tem TV de retorno via rede como o Holyrics?',
      answer:
        'O EasyWorship projeta em mais de uma tela, mas o caminho mais simples no Brasil para retorno de palco via rede é o Holyrics com TV box. Esse passo a passo está na Parte 2 do Combo da Projeção.',
    },
    {
      question: 'Qual software é mais fácil para voluntário iniciante?',
      answer:
        'Holyrics fica mais fácil quando a pessoa estuda em português, do zero. EasyWorship fica mais fácil para quem já usou o programa. A dificuldade real é treino, não o ícone da tela.',
    },
    {
      question: 'O curso da Sara Silva ensina EasyWorship?',
      answer:
        'Não. O Combo da Projeção ensina Holyrics: letras, culto, retorno, Bíblia, app, automação e vMix. Se a igreja usa EasyWorship, o curso não substitui o software; ele forma a equipe que escolheu Holyrics.',
    },
  ],
};

export const holyricsVsPropresenter: ComparisonGuide = {
  slug: '/holyrics-vs-propresenter',
  eyebrow: 'Comparação para cabine de igreja',
  title: 'Holyrics vs ProPresenter: qual cabe na igreja brasileira?',
  description:
    'Comparação direta entre Holyrics e ProPresenter: custo de operação, telas de palco, curva de aprendizado e quando cada um faz sentido para voluntários no Brasil.',
  lastUpdated: '2026-10-17',
  lastUpdatedLabel: '17 de outubro de 2026',
  directAnswer:
    'Holyrics é o caminho mais direto para igrejas brasileiras com equipe voluntária, culto em português e orçamento de cabine enxuto. ProPresenter brilha em igrejas com operador dedicado, looks avançados e várias telas de palco. A maioria das igrejas médias no Brasil ganha mais velocidade com Holyrics; o ProPresenter paga o preço quando o visual de palco é o centro da operação.',
  left: {
    name: 'Holyrics',
    summary:
      'Operação de culto em português, com retorno via rede e automação de mesa, luz e vMix. É o software do Combo da Projeção da Sara Silva.',
  },
  right: {
    name: 'ProPresenter',
    summary:
      'Software da Renewed Vision usado em muitas igrejas grandes. É forte em looks, telas de palco e vídeo, e pede mais tempo de setup e de operador.',
  },
  rows: [
    {
      criterion: 'Melhor para',
      left: 'Igreja média ou pequena com voluntários no Brasil',
      right: 'Igreja com operador dedicado e palco com várias telas',
    },
    {
      criterion: 'Visual de palco',
      left: 'Resolve letra, aviso, Bíblia e retorno com clareza',
      right: 'Looks, camadas e telas de palco mais avançados',
    },
    {
      criterion: 'Idioma',
      left: 'Fluxo e treino em português',
      right: 'Ecossistema e tutoriais concentrados em inglês',
    },
    {
      criterion: 'Custo de operação',
      left: 'Software acessível + curso de R$ 84,00',
      right: 'Licença e curva de treino mais altas',
    },
    {
      criterion: 'Automação de cabine',
      left: 'Gatilhos para mesa, Lumikit e vMix',
      right: 'Integrações fortes, com setup mais longo',
    },
    {
      criterion: 'Quando falha',
      left: 'Igreja que quer looks de festival em várias telas',
      right: 'Equipe que troca de voluntário todo mês',
    },
  ],
  chooseLeft: [
    'A cabine muda de voluntário com frequência.',
    'O culto precisa de letra, Bíblia e retorno estáveis, sem looks complexos.',
    'Você quer treinar a equipe em português nesta semana.',
    'Orçamento e tempo de setup são curtos.',
  ],
  chooseRight: [
    'Existe um operador fixo, não só voluntário de escala.',
    'O palco usa várias telas, looks e vídeo com camada.',
    'A igreja já pagou a licença e o fluxo está documentado.',
    'O culto depende de um visual de palco muito específico.',
  ],
  verdict:
    'Comece no Holyrics se a prioridade é o culto sair certo com gente nova na cabine. Vá para o ProPresenter se o palco já exige um operador que vive no software. Os dois projetam letra; o que muda é o custo de treinar a pessoa do domingo.',
  faqs: [
    {
      question:
        'Holyrics ou ProPresenter: o que uma igreja pequena deve escolher?',
      answer:
        'Igreja pequena no Brasil costuma ir melhor no Holyrics. O ProPresenter pede mais tempo, mais tela e mais gente estável na cabine do que a escala semanal costuma ter.',
    },
    {
      question: 'ProPresenter é melhor que Holyrics?',
      answer:
        'Não de forma absoluta. ProPresenter é mais forte em looks e telas de palco. Holyrics é mais forte para voluntário brasileiro operar letra, Bíblia, retorno e automação simples no domingo.',
    },
    {
      question: 'Consigo fazer live com vMix nos dois?',
      answer:
        'Sim. A diferença é o caminho. No Holyrics, a Parte 2 do combo ensina gatilho de live com vMix. No ProPresenter, a integração existe, mas o treino costuma ser em inglês e mais longo.',
    },
    {
      question: 'O curso da Sara cobre ProPresenter?',
      answer:
        'Não. O Combo da Projeção é um curso de Holyrics. Se a igreja usa ProPresenter, o curso não substitui essa operação.',
    },
  ],
};

export const comparisonGuides = [
  holyricsVsEasyworship,
  holyricsVsPropresenter,
] as const;

export function comparisonCanonical(slug: string): string {
  return `${SITE_URL}${slug}`;
}
