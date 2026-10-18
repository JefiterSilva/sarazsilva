import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal, RevealWords } from './fx/reveal';
import { TiltFrame } from './fx/tilt-frame';

const Hero = () => {
  return (
    <section id="sobre" className="relative isolate overflow-hidden">
      {/* Feixe do projetor: camada decorativa dedicada */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-beam"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:min-h-[calc(100dvh-8.5rem)] lg:grid-cols-[1.35fr_0.65fr] lg:gap-14 lg:pt-12 lg:pb-16 2xl:max-w-[1440px]">
        <div className="space-y-8">
          <Reveal onMount y={12}>
            <p className="label-mono text-lamp">
              Aulas gravadas, acesso vitalício
            </p>
          </Reveal>

          <h1 className="text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.04em] text-paper sm:text-6xl lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem]">
            <RevealWords
              onMount
              delay={0.1}
              text="Aprenda projeção de igreja do zero ao profissional"
            />
          </h1>

          <Reveal onMount delay={0.5} y={16}>
            <p className="max-w-[46ch] text-lg leading-relaxed text-mist">
              Domine o Holyrics, crie artes incríveis e torne a comunicação da
              sua igreja mais relevante.
            </p>
          </Reveal>

          <Reveal onMount delay={0.65} y={16}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#combo-projecao">
                  Quero ser aluno
                  <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link href="/combo-projecao">Ver conteúdo completo</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal onMount delay={0.2} y={32} className="w-full">
          <TiltFrame>
            <figure className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-card border border-lamp/50"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-seam bg-coal sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src="/perfil2.jpg"
                  alt="Sara Silva"
                  fill
                  priority
                  sizes="(min-width: 1024px) 32vw, 92vw"
                  className="object-cover object-[50%_20%] lg:object-top"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="text-base font-semibold text-paper">
                  Sara Silva
                </span>
                <span className="text-sm text-mist">
                  Especialista em Projeção
                </span>
              </figcaption>
            </figure>
          </TiltFrame>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
