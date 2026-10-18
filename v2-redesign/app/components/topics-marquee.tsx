const topics = [
  'Músicas e temas',
  'Fundos em movimento',
  'Vídeos e imagens',
  'PowerPoint e anúncios',
  'Culto organizado',
  'Fontes novas',
  'Contagem regressiva',
  'TV de retorno',
  'Bíblia bilíngue',
  'Letras automáticas',
  'Automação com gatilhos',
  'Mesa digital',
  'Live com vMix',
  'Iluminação com Lumikit',
  'Tarefas agendadas',
];

/**
 * Unico marquee da pagina. Motivo: mostrar o tamanho do conteudo do curso de relance.
 * Pausa no hover. Com prefers-reduced-motion vira uma lista estatica que quebra linha.
 */
const TopicsMarquee = () => {
  return (
    <section
      aria-label="Temas abordados nos cursos"
      className="group overflow-hidden border-y border-seam bg-coal py-6"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center motion-reduce:px-4">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className={`flex shrink-0 items-center gap-12 pr-12 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-8 motion-reduce:gap-y-3 motion-reduce:pr-0 ${copy === 1 ? 'motion-reduce:hidden' : ''}`}
          >
            {topics.map((topic) => (
              <li
                key={topic}
                className="text-2xl font-medium tracking-tight whitespace-nowrap text-mist"
              >
                {topic}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TopicsMarquee;
