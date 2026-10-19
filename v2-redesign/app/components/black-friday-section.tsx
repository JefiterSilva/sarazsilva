'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Check, Clock, MessageCircle, Tag, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useSyncExternalStore, type ReactNode } from 'react';

const WHATSAPP_GRUPO =
  'https://chat.whatsapp.com/HLgqPApdx3e6C9qtJPHBu4?s=cl&p=i&mlu=4&ilr=4';

const HOTMART_PACOTAO = 'https://pay.hotmart.com/Q102640493L?bid=1761612398571';

/** Aquecimento no dia 19. A venda abre no dia 6 de novembro. */
const TEASER_START = '2026-10-19';
const SALE_START = '2026-11-06';

const FROM_CENTS = 37070;
const TO_CENTS = 9790;
const SAVINGS_CENTS = FROM_CENTS - TO_CENTS;
const DISCOUNT_PERCENT = Math.round((SAVINGS_CENTS / FROM_CENTS) * 100);

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
      {/* MELHORADO: Ancoragem de preço — o valor cheio aparece antes do preço final */}
      <p className="text-mist text-lg">
        <span className="decoration-mist line-through">
          De {formatBrl(FROM_CENTS)}
        </span>
        <span className="text-paper ml-2 font-mono text-xs uppercase tracking-[0.08em]">
          −{DISCOUNT_PERCENT}%
        </span>
      </p>
      <p className="text-lamp flex items-baseline gap-1 tabular-nums">
        <span className="text-2xl font-semibold">R$</span>
        <span className="text-6xl font-semibold leading-none tracking-[-0.04em] sm:text-7xl">
          {reais}
        </span>
        <span className="text-2xl font-semibold">,{cents}</span>
      </p>
      {/* MELHORADO: Ancoragem — a economia em reais reforça o percentual */}
      <p className="text-paper font-mono text-xs uppercase tracking-[0.08em]">
        {formatBrl(SAVINGS_CENTS)} a menos
      </p>
      <span aria-hidden="true" className="bg-lamp mt-1 block h-px w-16" />
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
          className={`rounded-card border-seam bg-coal text-paper data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-50 max-h-[calc(100dvh-max(0.75rem,env(safe-area-inset-top))-max(0.75rem,env(safe-area-inset-bottom)))] -translate-x-1/2 overflow-y-auto overscroll-contain border shadow-[0_24px_48px_-12px_rgb(0_0_0/0.55)] outline-none duration-200 [scrollbar-color:var(--color-seam)_transparent] [scrollbar-width:thin] motion-reduce:animate-none ${widthClass}`}
        >
          <div className="pointer-events-none sticky top-0 z-10 h-0">
            <DialogPrimitive.Close className="bg-iron text-paper hover:bg-seam focus-visible:ring-lamp focus-visible:ring-offset-coal pointer-events-auto absolute right-4 top-4 flex size-11 items-center justify-center rounded-full transition-[background-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]">
              <X className="size-4" strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Fechar</span>
            </DialogPrimitive.Close>
          </div>

          <div className="border-seam space-y-4 border-b p-6 pr-16 sm:p-10 sm:pr-20">
            <DialogPrimitive.Title className="text-paper max-w-[16ch] text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="text-mist max-w-[46ch] text-base leading-relaxed">
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
 * Até 18/10 o modal fica fechado. De 19/10 a 05/11 ele só leva ao grupo.
 * A partir de 06/11 o card vende o pacotão no link direto.
 */
const BlackFridaySection = () => {
  const preview = useSyncExternalStore(
    subscribePreview,
    previewPhase,
    () => null
  );
  const phase = preview ?? resolvePhase();
  const [open, setOpen] = useState(true);

  if (phase === 'off') return null;

  if (phase === 'aviso') {
    return (
      /* MELHORADO: FOMO na headline; reciprocidade e escassez na subheadline */
      <CampaignDialog
        open={open}
        onOpenChange={setOpen}
        widthClass="w-[min(calc(100%-1.5rem),36rem)]"
        title="Não fique de fora da Black"
        description="No dia 6 de novembro o pacotão abre por tempo limitado. Entre no grupo e receba o link antes de todo mundo."
      >
        <div className="flex flex-col gap-8 p-6 sm:p-10">
          {/* MELHORADO: Urgência — prazo visível da abertura */}
          <p className="text-lamp font-mono text-xs uppercase tracking-[0.08em]">
            Abre em 6 de novembro
          </p>
          {/* MELHORADO: Prova social + autoridade */}
          <p className="text-paper text-sm leading-relaxed">
            🔥 +2.100 alunos · nota 5,0
          </p>
          {/* SUGESTÃO: badge visual “Acesso antecipado” ao lado da prova social, para o grupo parecer um privilégio e não um anúncio. */}
          <PriceAnchor />
          <div className="space-y-4">
            {/* MELHORADO: Reciprocidade — três extras de quem entra agora */}
            <ul className="space-y-3">
              <li className="text-paper text-sm leading-relaxed">
                ✔️ Aviso no dia em que a oferta abrir
              </li>
              <li className="text-paper text-sm leading-relaxed">
                🎁 Link direto, antes da página pública
              </li>
              <li className="text-paper text-sm leading-relaxed">
                🚀 Pacotão completo por {formatBrl(TO_CENTS)}
              </li>
            </ul>
            <Button asChild size="lg" className="w-full">
              <Link
                href={WHATSAPP_GRUPO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle strokeWidth={1.75} aria-hidden="true" />
                {/* MELHORADO: CTA em primeira pessoa, verbo de ação */}
                Quero meu acesso antecipado
              </Link>
            </Button>
            {/* MELHORADO: Urgência — linha curta sob o CTA */}
            <p className="text-mist text-sm leading-relaxed">
              ⏳ O link ainda não abre para todo mundo
            </p>
            {/* SUGESTÃO: contador regressivo até 6 de novembro (America/Sao_Paulo), no lugar da data estática, para a espera ficar concreta. */}
          </div>
        </div>
      </CampaignDialog>
    );
  }

  return (
    /* MELHORADO: FOMO na headline; subheadline no benefício do pacote */
    <CampaignDialog
      open={open}
      onOpenChange={setOpen}
      widthClass="w-[min(calc(100%-1.5rem),64rem)]"
      title="Não deixe sua equipe de fora"
      description="Todo o método da Sara para a mídia da igreja, num pagamento único e com acesso vitalício."
    >
      <div className="grid lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="border-seam flex flex-col gap-8 border-b p-6 sm:p-10 lg:border-b-0 lg:border-r">
          {/* MELHORADO: Prova social + autoridade */}
          <p className="text-paper text-sm leading-relaxed">
            🔥 +2.100 alunos · nota 5,0
          </p>
          {/* SUGESTÃO: mini badge “🔥 +2.100 alunos já estudaram com a Sara” acima do preço, com a nota 5,0 como selo ao lado. */}
          <PriceAnchor />
          <div className="space-y-4">
            {/* MELHORADO: Benefícios curtos — resultado, bônus e uso imediato */}
            <ul className="space-y-3">
              <li className="text-paper text-sm leading-relaxed">
                ✔️ Treine a equipe no seu ritmo, com acesso vitalício
              </li>
              <li className="text-paper text-sm leading-relaxed">
                🎁 Fundos, artes e roteiros prontos de bônus
              </li>
              <li className="text-paper text-sm leading-relaxed">
                🚀 Aplique no próximo culto, com acesso na hora
              </li>
            </ul>
            <Button asChild size="lg" className="w-full">
              <Link
                href={HOTMART_PACOTAO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tag strokeWidth={1.75} aria-hidden="true" />
                {/* MELHORADO: CTA — verbo de ação em primeira pessoa */}
                Quero garantir agora
              </Link>
            </Button>
            {/* MELHORADO: Urgência — prazo da campanha, sem data inventada */}
            <p className="text-mist flex items-center gap-2 text-sm">
              <Clock
                className="text-lamp size-4 shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              ⏳ Oferta de Black Friday por tempo limitado
            </p>
            {/* SUGESTÃO: trocar esta linha por “Oferta encerra em 23h 59min” só quando a data final da campanha estiver no código. */}
            {/* MELHORADO: Segurança — risco percebido cai antes do clique */}
            <p className="text-mist text-sm leading-relaxed">
              Compra 100% segura · Garantia de 7 dias
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-10">
          <div className="space-y-3">
            {/* MELHORADO: Lista orientada ao que a equipe leva para o culto */}
            <h3 className="text-paper text-balance text-2xl font-semibold leading-[1.05] tracking-[-0.04em]">
              Tudo que a cabine precisa, num pacote
            </h3>
            <p className="text-mist max-w-[52ch] text-base leading-relaxed">
              Cursos, fundos e materiais prontos para a equipe usar no culto.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="bg-iron mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md">
                  <Check
                    className="text-lamp size-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-paper text-sm leading-relaxed">
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
