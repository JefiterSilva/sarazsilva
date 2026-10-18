import { COMBO, HOTMART } from './site';

export type Lesson = {
  title: string;
  takeaway: string;
};

export type CoursePart = {
  parte: string;
  titulo: string;
  subtitulo: string;
  nivel: string;
  preco: string;
  href: string;
  cta: string;
  aulas: Lesson[];
};

export const courseParts: CoursePart[] = [
  {
    parte: 'Parte 1',
    titulo: 'Dominando o Holyrics 1',
    subtitulo: 'Do zero ao intermediário - 8 aulas práticas',
    nivel: 'Básico ao Intermediário',
    preco: 'R$ 49,90',
    href: HOTMART.holyricsParte1,
    cta: 'Comprar Parte 1',
    aulas: [
      {
        title:
          'Como adicionar música, editar temas e colocar fundos em movimento.',
        takeaway:
          'Monta a base do culto: cadastra a música, aplica o tema e coloca o fundo em movimento sem travar a letra.',
      },
      {
        title: 'Inserir vídeos, imagens, áudios / Power Point e Anúncios.',
        takeaway:
          'Encaixa mídia extra no fluxo: vídeo, imagem, áudio, slides e avisos na ordem certa.',
      },
      {
        title:
          'Como colocar vários temas na mesma música e como deixar um tema padrão.',
        takeaway:
          'Troca o visual no meio da música e define um tema padrão para não configurar tudo de novo.',
      },
      {
        title:
          'Como colocar fundo com letras personalizadas e configurar a letra como comentário.',
        takeaway:
          'Cria fundo com letra desenhada e usa comentário para nota de palco que o público não lê.',
      },
      {
        title: 'Como organizar o culto dentro do Holyrics.',
        takeaway:
          'Monta a ordem do culto no software: música, Bíblia, aviso e vídeo numa sequência só.',
      },
      {
        title: 'Como inserir novas fontes no Holyrics.',
        takeaway:
          'Instala a fonte da identidade visual para a letra ficar igual à arte da igreja.',
      },
      {
        title: 'Nova atualização para fundos de letras personalizadas.',
        takeaway:
          'Usa o recurso atualizado de fundo com letra personalizada, sem o fluxo antigo.',
      },
      {
        title: 'Criando uma contagem regressiva com próxima apresentação.',
        takeaway:
          'Coloca cronômetro antes do culto e mostra o que vem a seguir na tela.',
      },
    ],
  },
  {
    parte: 'Parte 2',
    titulo: 'Dominando o Holyrics 2',
    subtitulo: 'Do zero ao avançado - 12 aulas práticas',
    nivel: 'Intermediário ao Avançado',
    preco: 'R$ 59,90',
    href: `${HOTMART.holyricsParte2}?sck=HOTMART_SITE&search=2042cdc2-7353-42c4-b28c-55373570108e&hotfeature=33`,
    cta: 'Comprar Parte 2',
    aulas: [
      {
        title: 'Como configurar a TV de retorno utilizando TV BOX.',
        takeaway:
          'Leva letra e cronômetro ao palco pela rede, com TV box, sem HDMI longo.',
      },
      {
        title:
          'Bíblia: ativando novas versões, editando letras e fundos, e outras configurações.',
        takeaway:
          'Ativa versões da Bíblia e ajusta letra e fundo para a leitura no culto.',
      },
      {
        title: 'Utilizando o aplicativo do Holyrics para a projeção.',
        takeaway:
          'Opera músicas e Bíblia pelo celular quando o operador não está só no computador.',
      },
      {
        title: 'Configurando a Bíblia e Música BILÍNGUE.',
        takeaway: 'Mostra dois idiomas na mesma tela para culto com tradução.',
      },
      {
        title: 'Letras Automáticas com mp3.',
        takeaway:
          'Sincroniza a letra com o áudio para a troca de slide acompanhar a música.',
      },
      {
        title:
          'Automação de gatilhos pelo Holyrics com mesa digital, iluminação digital e Live pelo programa VMIX.',
        takeaway:
          'Um clique na projeção dispara mesa, luz e cena do vMix no mesmo tempo.',
      },
      {
        title:
          'Configurando telas pública e retorno no preview do seu programa.',
        takeaway:
          'Separa o que o público vê do que o operador e o palco acompanham.',
      },
      {
        title:
          'PAINEL DE COMUNICAÇÃO: editando tema, tamanho de fonte, cor do relogio, cronometro.',
        takeaway:
          'Ajusta o painel de comunicação: fonte, relógio e cronômetro visíveis no palco.',
      },
      {
        title: 'Criando gatilhos de automação com o Holyrics Action.',
        takeaway:
          'Cria ações no Holyrics Action para repetir a mesma rotina em todo culto.',
      },
      {
        title:
          'Automação do Holyrics com o Lumikit para troca de iluminação através da projeção.',
        takeaway:
          'A troca de slide muda a luz do palco pelo Lumikit, sem um operador extra.',
      },
      {
        title: 'Apresentações rápidas e atalho da bíblia.',
        takeaway:
          'Abre aviso ou versículo no atalho, sem desmontar a ordem do culto.',
      },
      {
        title:
          'Tarefas agendadas para criar rotina de projeção com dia e horario.',
        takeaway:
          'Agenda tarefas por dia e hora para a cabine repetir a rotina da semana.',
      },
    ],
  },
];

export const allLessons = courseParts.flatMap((part) => part.aulas);
export const publishedLessonCount = allLessons.length;

if (publishedLessonCount !== COMBO.lessons) {
  throw new Error(
    `A grade tem ${publishedLessonCount} aulas e o combo anuncia ${COMBO.lessons}.`,
  );
}
