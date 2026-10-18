'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Check, Clock, MessageCircle, Tag, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useSyncExternalStore, type ReactNode } from 'react';

const WHATSAPP_GRUPO =
  'https://chat.whatsapp.com/HLgqPApdx3e6C9qtJPHBu4?s=cl&p=i&mlu=4&ilr=4';

const HOTMART_PACOTAO =
  'https://pay.hotmart.com/Q102640493L?bid=1761612398571';

/** Aquecimento no dia 25. A venda abre no dia 6 de novembro. */
const TEASER_START = '2026-10-25';
const SALE_START = '2026-11-06';

const FROM_CENTS = 37070;
const TO_CENTS = 9790;
const SAVINGS_CENTS = FROM_CENTS - TO_CENTS;

const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatBrl = (cents: number) => brl.format(cents / 100);

const INCLUDED = [
  'Dominando o Holyrics: Parte 1',
  'Dominando o Holyrics: Parte 2',
  'Curso de Capacitação de mídia e comunicação para igrejas',
  'Pack Fundos II (drive com mais de 150 backgrounds para projeção)',
  'Projeção Criativa (aula completa de como criar vídeos de fundos com letras personalizadas no Canva e como inserir no Holyrics)',
  'Identidade Visual Mensal (artes para rede social da igreja)',
  'Roteiro de Organização de culto e eventos (planilhas de escalas de equipes, planilha financeira pra eventos e mais)',
  'Fundos de Projeção (40 fundos para projeção)',
  'Materiais Criativos (arquivos digitais para mídia da igreja como modelo de crachá, PowerPoint, placa de recepção, vídeos de abertura...)',
  'Pacote Criativo (uma extensão dos Materiais Criativos com mais artes, vídeos e tutorial de como criar vídeos de abertura de culto, artes editáveis no Canva)',
] as const;

type Phase = 'off' | 'aviso' | 'venda';

function saoPauloDate(now: Date) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

function resolvePhase(now = new Date()): Phase {
  const day = saoPauloDate(now);
  if (day < TEASER_START) return 'off';
  if (day < SALE_START) return 'aviso';
  return 'venda';
}

function previewPhase(): Phase | null {
  if (process.env.NODE_ENV !== 'development') return null;
  const param = new URLSearchParams(window.location.search).get('campanha');
  if (param === 'aviso' || param === 'venda') return param;
  return null;
}

function subscribePreview() {
  return () => {};
}

const reais = Math.floor(TO_CENTS / 100).toString();
const cents = (TO_CENTS % 100).toString().padStart(2, '0');

function PriceAnchor() {
  return (
    <div className="space-y-3">
      <p className="text-lg text-mist">
        <span className="line-through decoration-mist">
          De {formatBrl(FROM_CENTS)}
        </span>
      </p>
      <p className="flex items-baseline gap-1 text-lamp tabular-nums">
        <span className="text-2xl font-semibold">R$</span>
        <span className="text-6xl leading-none font-semibold tracking-[-0.04em] sm:text-7xl">
          {reais}
        </span>
        <span className="text-2xl font-semibold">,{cents}</span>
      </p>
      <p className="font-mono text-xs tracking-[0.08em] text-paper uppercase">
        {formatBrl(SAVINGS_CENTS)} a menos
      </p>
      <span aria-hidden="true" className="mt-1 block h-px w-16 bg-lamp" />
    </div>
  );
}

function CampaignDialog({
  open,
  onOpenChange,
  widthClass,
  title,
  description,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  widthClass: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-ink/80" />
        <DialogPrimitive.Content
          className={`fixed top-[max(0.75rem,env(safe-area-inset-top))] left-1/2 z-50 max-h-[calc(100dvh-max(0.75rem,env(safe-area-inset-top))-max(0.75rem,env(safe-area-inset-bottom)))] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-card border border-seam bg-coal text-paper shadow-[0_24px_48px_-12px_rgb(0_0_0/0.55)] outline-none duration-200 [scrollbar-color:var(--color-seam)_transparent] [scrollbar-width:thin] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none ${widthClass}`}
        >
          <div className="pointer-events-none sticky top-0 z-10 h-0">
            <DialogPrimitive.Close className="pointer-events-auto absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-iron text-paper transition-[background-color,transform] duration-200 hover:bg-seam focus-visible:ring-2 focus-visible:ring-lamp focus-visible:ring-offset-2 focus-visible:ring-offset-coal focus-visible:outline-none active:scale-[0.98]">
              <X className="size-4" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Fechar</span>
            </DialogPrimitive.Close>
          </div>

          <div className="space-y-4 border-b border-seam p-6 pr-16 sm:p-10 sm:pr-20">
            <DialogPrimitive.Title className="max-w-[16ch] text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-paper sm:text-4xl lg:text-5xl">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="max-w-[46ch] text-base leading-relaxed text-mist">
              {description}
            </DialogPrimitive.Description>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

/**
 * Dois cards da mesma campanha.
 * Até 24/10 o modal fica fechado. De 25/10 a 05/11 ele só leva ao grupo.
 * A partir de 06/11 o card vende o pacotão no link direto.
 */
const BlackFridaySection = () => {
  const preview = useSyncExternalStore(
    subscribePreview,
    previewPhase,
    () => null,
  );
  const phase = preview ?? resolvePhase();
  const [open, setOpen] = useState(true);

  if (phase === 'off') return null;

  if (phase === 'aviso') {
    return (
      <CampaignDialog
        open={open}
        onOpenChange={setOpen}
        widthClass="w-[min(calc(100%-1.5rem),36rem)]"
        title="Não perca a Black"
        description="Ela chega dia 6 de novembro. Tudo por R$ 97,90. O link ainda não abre para todo mundo: entra no grupo para não ficar de fora."
      >
        <div className="flex flex-col gap-8 p-6 sm:p-10">
          <p className="font-mono text-xs tracking-[0.08em] text-lamp uppercase">
            6 de novembro
          </p>
          <PriceAnchor />
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link
                href={WHATSAPP_GRUPO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle strokeWidth={1.75} aria-hidden="true" />
                Entrar no grupo exclusivo
              </Link>
            </Button>
            <p className="text-sm leading-relaxed text-mist">
              No dia 6 o pacotão abre aqui no site.
            </p>
          </div>
        </div>
      </CampaignDialog>
    );
  }

  return (
    <CampaignDialog
      open={open}
      onOpenChange={setOpen}
      widthClass="w-[min(calc(100%-1.5rem),64rem)]"
      title="A maior e melhor BLACK para equipes de mídia e comunicação das igrejas do MUNDO!"
      description="Agora você pode ter acesso a todos os meus conteúdos em um só lugar, pagamento único e acesso vitalício, ou seja, sem fim."
    >
      <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="flex flex-col gap-8 border-b border-seam p-6 sm:p-10 lg:border-r lg:border-b-0">
          <PriceAnchor />
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-paper">
              Pagamento único. Acesso vitalício.
            </p>
            <p className="flex items-center gap-2 text-sm text-mist">
              <Clock
                className="size-4 shrink-0 text-lamp"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              Oferta por tempo limitado
            </p>
            <Button asChild size="lg" className="w-full">
              <Link
                href={HOTMART_PACOTAO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag strokeWidth={1.75} aria-hidden="true" />
                Garantir por {formatBrl(TO_CENTS)}
              </Link>
            </Button>
            <p className="text-sm leading-relaxed text-mist">
              Acesso imediato. Conteúdo vitalício. Atualizações sem custo
              adicional.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-10">
          <div className="space-y-3">
            <h3 className="text-2xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-paper">
              O que você vai receber nesse Pacotão? TUDO!
            </h3>
            <p className="max-w-[52ch] text-base leading-relaxed text-mist">
              Todos os cursos, packs e materiais em um só pacote.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-iron">
                  <Check
                    className="size-4 text-lamp"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm leading-relaxed text-paper">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CampaignDialog>
  );
};

export default BlackFridaySection;
