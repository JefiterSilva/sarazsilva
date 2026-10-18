import { COMBO } from './site';

export type FaqItem = {
  question: string;
  answer: string;
  steps?: string[];
};

export const comboFaqs: FaqItem[] = [
  {
    question: 'Como configurar a TV de retorno via rede no Holyrics?',
    answer:
      'Ligue a TV box na mesma rede do computador da projeção, abra o aplicativo do Holyrics na TV e selecione o computador da cabine. O palco vê o retorno sem cabo HDMI longo. O passo a passo completo está na Parte 2 do Combo da Projeção.',
    steps: [
      'Conecte a TV box na mesma rede cabeada ou Wi-Fi do computador do Holyrics.',
      'Abra o aplicativo do Holyrics na TV e escolha o computador da cabine.',
      'Confira no palco se a tela de retorno mostra letra, cronômetro e avisos.',
    ],
  },
  {
    question: 'O que é o Combo da Projeção no Holyrics?',
    answer:
      `É o curso completo da Sara Zandonai Silva para operar a projeção da igreja do básico ao avançado. São ${COMBO.lessons} aulas práticas, acesso vitalício e suporte. O combo junta a Parte 1 e a Parte 2 por R$ 84,00.`,
  },
  {
    question: 'Quanto custa o curso de Holyrics da Sara Silva?',
    answer:
      'O Combo da Projeção no Holyrics custa R$ 84,00. Nas partes avulsas, a Parte 1 sai por R$ 49,90 e a Parte 2 por R$ 59,90, totalizando R$ 99,80. O combo inclui certificado e garantia de 7 dias.',
  },
  {
    question: 'O Combo da Projeção serve para quem nunca usou Holyrics?',
    answer:
      'Sim. A Parte 1 começa do zero: músicas, fundos, vídeos e organização do culto. A Parte 2 avança para TV de retorno, Bíblia, automação e vMix. Mais de 2.100 alunos já estudaram com a Sara, inclusive voluntários sem experiência técnica.',
  },
  {
    question: 'Como o Holyrics se conecta com vMix e mesa digital?',
    answer:
      'O Holyrics dispara gatilhos para a mesa digital, a iluminação e o vMix na hora da música ou do aviso. Você cria as ações no Holyrics Action e o programa envia o comando. A Parte 2 ensina essa automação com mesas Behringer e Soundcraft.',
  },
  {
    question:
      'Qual a diferença entre a Parte 1 e a Parte 2 do curso de Holyrics?',
    answer:
      'A Parte 1 ensina o uso diário: letras, temas, fundos, vídeos e culto organizado. A Parte 2 cobre retorno em rede, Bíblia bilíngue, app no celular, automação com mesa, Lumikit e vMix. O combo reúne as duas partes.',
  },
  {
    question: 'A Identidade Visual Mensal substitui o Combo da Projeção?',
    answer:
      'Não. A Identidade Visual Mensal entrega artes prontas do mês. O Combo da Projeção ensina a operar o Holyrics e a cabine. Uma complementa a outra: o curso mostra como projetar; a identidade deixa o visual do culto consistente.',
  },
  {
    question: 'Preciso de equipamento caro para aplicar o que o curso ensina?',
    answer:
      'Não. Você começa com um computador e o Holyrics. Depois pode somar TV box para retorno, switch de rede e, se quiser, mesa Behringer ou Soundcraft e vMix. O Kit Mídia Igreja lista o essencial em ordem de prioridade.',
  },
  {
    question: 'Holyrics ou EasyWorship: qual usar na igreja?',
    answer:
      'Holyrics costuma ser melhor para igrejas no Brasil, com Bíblia em português e TV de retorno via rede. EasyWorship faz sentido se a equipe já opera nele ou se o culto é em inglês. A comparação completa está em /holyrics-vs-easyworship.',
  },
];

export const kitFaqs: FaqItem[] = [
  {
    question: 'O que é o Kit Mídia Igreja da Sara Silva?',
    answer:
      'É uma curadoria de equipamentos para a cabine da igreja: rede, vídeo, TV de retorno, automação e cenário. A lista está em ordem de prioridade para sair da improvisação sem comprar tudo de uma vez.',
  },
  {
    question: 'Como configurar a TV de retorno via rede no Holyrics?',
    answer:
      'Use uma TV box na mesma rede do computador da projeção e abra o Holyrics na TV. Assim o palco recebe letra e avisos sem HDMI longo. O Combo da Projeção ensina a configuração; o Kit indica a TV box e o switch.',
  },
  {
    question: 'Qual switch usar na cabine de mídia da igreja?',
    answer:
      'Para uma cabine que vai crescer, o switch gigabit de 24 portas centraliza computadores, transmissores e TV box. Em uma mesa pequena, o switch de 5 portas já segura notebook, operador e retorno sem adaptador improvisado.',
  },
  {
    question: 'Preciso de cabo HDMI de fibra para projetar na igreja?',
    answer:
      'Só quando a cabine fica longe da tela. O HDMI de fibra de 50 metros leva 4K sem perda comum de cabo comum. Se a TV de retorno for via rede, a TV box resolve o palco e o HDMI de fibra fica para o projetor principal.',
  },
  {
    question: 'O Kit Mídia Igreja serve para igrejas pequenas?',
    answer:
      'Sim. A lista começa pelo que estabiliza a operação: rede e retorno. Igreja pequena pode começar com switch de 5 portas e TV box. Igreja maior soma switch de 24 portas, mesh e HDMI de fibra conforme a distância da cabine.',
  },
];
