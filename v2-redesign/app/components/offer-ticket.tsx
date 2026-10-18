'use client';

import { useReducedMotionSafe } from './fx/use-reduced-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import {
  Award,
  Check,
  Clock,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import type { PointerEvent, ReactNode } from 'react';
import { Reveal } from './fx/reveal';

const HOTMART_COMBO = 'https://pay.hotmart.com/S94768202Q?bid=1722861105152';

const icons = [Check, Award, Users, Zap];

const defaultBenefits = [
  'Aulas práticas e gravadas',
  'Certificado de conclusão',
  'Suporte direto comigo',
  'Acesso vitalício',
];

type OfferTicketProps = {
  id?: string;
  title?: string;
  ctaLabel?: string;
  showGradeLink?: boolean;
  badgeLabel?: string;
  description?: ReactNode;
  benefits?: string[];
};

/**
 * Oferta em formato de ingresso: corpo + canhoto picotado.
 * O brilho ambar segue o cursor (feedback de hover), so em dispositivos com mouse.
 */
const OfferTicket = ({
  id = 'combo-projecao',
  title = 'Combo da Projeção no Holyrics',
  ctaLabel = 'Comprar agora',
  showGradeLink = true,
  badgeLabel = 'Curso mais vendido',
  description = 'Domine o software da projeção da sua igreja desde o básico ao avançado. Treine sua equipe e eleve seu nível de projeção com o curso prático e completo.',
  benefits = defaultBenefits,
}: OfferTicketProps) => {
  const reduce = useReducedMotionSafe();
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(460px circle at ${mx}px ${my}px, rgb(234 162 62 / 0.12), transparent 70%)`;

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]"
    >
      <Reveal y={36}>
        <div
          onPointerMove={onMove}
          className="group/ticket relative rounded-card border border-seam bg-coal"
        >
          <motion.div
            aria-hidden="true"
            style={{ background: spotlight }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/ticket:opacity-100"
          />

          <div className="relative grid lg:grid-cols-[1.35fr_1fr]">
            {/* Corpo */}
            <div className="space-y-8 p-6 sm:p-10 lg:p-14">
              <Badge variant="lamp">
                <Star strokeWidth={1.75} aria-hidden="true" />
                {badgeLabel}
              </Badge>

              <div className="space-y-4">
                <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-paper md:text-5xl">
                  {title}
                </h2>
                <p className="max-w-[52ch] text-base leading-relaxed text-mist">
                  {description}
                </p>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((text, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <li key={text} className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-iron">
                        <Icon
                          className="size-5 text-lamp"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-base text-paper">{text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Canhoto */}
            <div className="relative flex flex-col justify-center gap-6 border-t-2 border-dashed border-seam p-6 sm:p-10 md:grid md:grid-cols-2 md:items-center md:gap-x-10 lg:flex lg:flex-col lg:border-t-0 lg:border-l-2 lg:p-12">
              {/* Entalhes do ingresso */}
              <span
                aria-hidden="true"
                className="absolute top-[-1px] -left-[11px] hidden h-[13px] w-6 rounded-b-full border border-t-0 border-seam bg-ink lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] -left-[11px] hidden h-[13px] w-6 rounded-t-full border border-b-0 border-seam bg-ink lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[11px] left-[-1px] h-6 w-[13px] rounded-r-full border border-l-0 border-seam bg-ink lg:hidden"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[11px] right-[-1px] h-6 w-[13px] rounded-l-full border border-r-0 border-seam bg-ink lg:hidden"
              />

              <div className="space-y-6">
                <Badge variant="outline" className="w-fit">
                  <Clock strokeWidth={1.75} aria-hidden="true" />
                  Melhor condição disponível
                </Badge>

                <div className="space-y-2">
                  <p className="text-base text-mist">
                    <span className="line-through">De R$ 99,80</span> por apenas
                  </p>
                  <p className="flex items-baseline gap-1 text-paper">
                    <span className="text-2xl font-semibold">R$</span>
                    <span className="text-7xl leading-none font-semibold tracking-[-0.06em] sm:text-8xl">
                      84
                    </span>
                    <span className="text-2xl font-semibold">,00</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link
                      href={HOTMART_COMBO}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap strokeWidth={1.75} aria-hidden="true" />
                      {ctaLabel}
                    </Link>
                  </Button>

                  {showGradeLink ? (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full"
                    >
                      <Link href="/combo-projecao">Ver grade do curso</Link>
                    </Button>
                  ) : null}
                </div>

                <p className="flex items-center gap-2 text-sm text-mist">
                  <Check
                    className="size-4 text-lamp"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  Compra 100% segura pela Hotmart
                </p>

                <div className="flex gap-3">
                  <ShieldCheck
                    className="mt-0.5 size-5 shrink-0 text-lamp"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-paper">
                      Garantia incondicional de 7 dias
                    </p>
                    <p className="text-sm text-mist">
                      Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default OfferTicket;
