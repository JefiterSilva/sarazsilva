'use client';

import { useReducedMotionSafe } from './fx/use-reduced-motion';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Reveal } from './fx/reveal';

const modules = [
  {
    title: 'Primeiros passos',
    description:
      'Criando novas músicas, inserindo novos temas, adicionando vídeos e imagens, utilizando Powerpoint e apresentação de anúncios.',
    topics: ['Músicas', 'Temas', 'Vídeos e imagens', 'Powerpoint', 'Anúncios'],
  },
  {
    title: 'Evoluindo',
    description:
      'Como inserir novas fontes, utilizar temas com letras personalizadas, criar cronograma do culto nas mídias e configurar tv de retorno via rede.',
    topics: ['Fontes', 'Letras personalizadas', 'Cronograma', 'TV de retorno'],
  },
  {
    title: 'Avançado',
    description:
      'Bíblia e letras no aplicativo, músicas bilíngue, automação com luz, live (vMix) e mesa digital (Behringer ou Soundcraft).',
    topics: [
      'Bíblia no app',
      'Bilíngue',
      'Automação',
      'Live com vMix',
      'Mesa digital',
    ],
  },
];

/**
 * Trilha do curso. A linha lateral se preenche conforme o leitor rola.
 * Motivo: storytelling, o progresso na pagina espelha o progresso do aluno.
 */
const CourseTrail = () => {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="trilha"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="label-mono text-lamp">Conteúdo do curso</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-paper md:text-5xl">
              O que você vai aprender no Combo da Projeção?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-[46ch] text-base leading-relaxed text-mist">
              Um método passo a passo, completo e prático para você dominar
              todas as funcionalidades do Holyrics e transformar a mídia da sua
              igreja.
            </p>
          </Reveal>
        </div>

        <ol ref={ref} className="relative space-y-14 pl-10 md:pl-14">
          {/* Trilho e preenchimento */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-seam"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-lamp"
          />

          {modules.map((module, index) => (
            <li key={module.title} className="relative">
              <motion.span
                aria-hidden="true"
                initial={reduce ? false : { scale: 0.6 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="absolute top-2 -left-10 size-4 rounded-full border-2 border-lamp bg-ink md:-left-14"
              />
              <Reveal y={28}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-5 md:gap-8">
                  <span
                    aria-hidden="true"
                    className="text-6xl leading-none font-semibold tracking-[-0.06em] text-seam tabular-nums md:text-8xl"
                  >
                    {index + 1}
                  </span>
                  <div className="space-y-4 pt-1">
                    <h3 className="text-2xl font-semibold tracking-tight text-paper md:text-3xl">
                      {module.title}
                    </h3>
                    <p className="text-base leading-relaxed text-mist">
                      {module.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="rounded-full border border-seam px-3 py-1 text-xs font-medium text-mist"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CourseTrail;
