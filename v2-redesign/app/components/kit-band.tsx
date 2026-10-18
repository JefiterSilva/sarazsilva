'use client';

import { useReducedMotionSafe } from './fx/use-reduced-motion';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Reveal } from './fx/reveal';

const items = [
  {
    src: '/kit-midia-produtos/switch-24.png',
    alt: 'Switch de rede para a estrutura de mídia',
    className: 'left-[2%] top-[14%] w-[44%] rotate-[-7deg]',
    range: [36, -36] as const,
  },
  {
    src: '/kit-midia-produtos/deco-m4.png',
    alt: 'Decodificador de vídeo para telas de apoio',
    className: 'left-[30%] top-[2%] w-[46%] rotate-[3deg]',
    range: [-10, 10] as const,
  },
  {
    src: '/kit-midia-produtos/tv-box.png',
    alt: 'TV Box para TV de retorno',
    className: 'right-[2%] top-[34%] w-[42%] rotate-[8deg]',
    range: [48, -48] as const,
  },
];

function FloatingProduct({
  item,
  progress,
}: {
  item: (typeof items)[number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const reduce = useReducedMotionSafe();
  const y = useTransform(progress, [0, 1], [item.range[0], item.range[1]]);

  return (
    <motion.div
      style={{ y: reduce ? 0 : y }}
      className={`absolute aspect-square ${item.className}`}
    >
      <div className="relative size-full overflow-hidden rounded-xl border border-seam bg-paper">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 240px, 40vw"
          className="object-contain p-3"
        />
      </div>
    </motion.div>
  );
}

/**
 * Faixa do Kit Mídia Igreja. Os tres produtos se movem em velocidades diferentes.
 * Motivo: profundidade, indica que ha varios itens por tras do link.
 */
const KitBand = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]">
      <Reveal y={36}>
        <div
          ref={ref}
          className="grid overflow-hidden rounded-card border border-seam bg-iron lg:grid-cols-[1fr_1.1fr]"
        >
          <div className="flex flex-col justify-center gap-6 p-6 sm:p-10 lg:p-14">
            <p className="label-mono text-lamp">Novo</p>
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-paper md:text-5xl">
              Kit Mídia Igreja
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-mist">
              Curadoria de equipamentos reais para rede, vídeo, retorno,
              automação e cenografia, organizada por prioridade para comprar sem
              errar a ordem.
            </p>
            <div>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href="/kit-midia-igreja"
                  aria-label="Acessar Kit Mídia Igreja"
                >
                  Acessar
                  <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden bg-coal sm:min-h-96">
            {items.map((item) => (
              <FloatingProduct
                key={item.src}
                item={item}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default KitBand;
