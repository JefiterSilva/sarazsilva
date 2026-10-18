import ConversationalFaq from '@/app/components/conversational-faq';
import { Reveal, RevealWords } from '@/app/components/fx/reveal';
import JsonLd from '@/app/components/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ComparisonGuide } from '@/lib/geo/comparisons';
import { comparisonCanonical } from '@/lib/geo/comparisons';
import { buildComparisonSchema } from '@/lib/geo/schemas';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Footer from './footer';
import OfferTicket from './offer-ticket';
import SiteNav from './site-nav';

type SoftwareComparisonProps = {
  guide: ComparisonGuide;
  relatedHref: string;
  relatedLabel: string;
};

export default function SoftwareComparison({
  guide,
  relatedHref,
  relatedLabel,
}: SoftwareComparisonProps) {
  const pageUrl = comparisonCanonical(guide.slug);

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink font-sans text-paper selection:bg-lamp/30">
      <JsonLd
        id="comparison-schema"
        data={buildComparisonSchema({
          title: guide.title,
          description: guide.description,
          url: pageUrl,
          dateModified: guide.lastUpdated,
          leftName: guide.left.name,
          rightName: guide.right.name,
          rows: guide.rows,
        })}
      />
      <SiteNav />

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-beam"
          />
          <div className="mx-auto max-w-7xl space-y-6 px-4 pt-16 pb-12 sm:px-6 md:pt-20 md:pb-16 2xl:max-w-[1440px]">
            <Reveal onMount y={12}>
              <p className="label-mono text-lamp">{guide.eyebrow}</p>
            </Reveal>
            <h1 className="max-w-5xl text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.04em] text-paper sm:text-5xl lg:text-6xl">
              <RevealWords onMount delay={0.1} text={guide.title} />
            </h1>
            <Reveal onMount delay={0.4} y={16}>
              <p className="max-w-[58ch] text-lg leading-relaxed text-mist">
                {guide.directAnswer}
              </p>
            </Reveal>
            <Reveal onMount delay={0.5} y={12}>
              <p className="text-sm text-mist">
                Atualizado em {guide.lastUpdatedLabel}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 2xl:max-w-[1440px]">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-card border border-lamp bg-coal p-6 sm:p-8">
              <Badge variant="lamp">{guide.left.name}</Badge>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-paper md:text-3xl">
                O que é {guide.left.name}?
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mist">
                {guide.left.summary}
              </p>
            </Reveal>
            <Reveal
              delay={0.08}
              className="rounded-card border border-seam bg-coal p-6 sm:p-8"
            >
              <Badge variant="outline">{guide.right.name}</Badge>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-paper md:text-3xl">
                O que é {guide.right.name}?
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mist">
                {guide.right.summary}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 2xl:max-w-[1440px]">
          <Reveal>
            <h2 className="mb-8 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-paper md:text-5xl">
              {guide.left.name} vs {guide.right.name} lado a lado
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="divide-y divide-seam rounded-card border border-seam bg-coal md:hidden">
              {guide.rows.map((row) => (
                <div key={row.criterion} className="space-y-4 px-4 py-5">
                  <h3 className="text-base font-semibold text-paper">
                    {row.criterion}
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-mono text-xs tracking-[0.08em] text-lamp uppercase">
                        {guide.left.name}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-mist">
                        {row.left}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs tracking-[0.08em] text-mist uppercase">
                        {guide.right.name}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-mist">
                        {row.right}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <div className="hidden rounded-card border border-seam bg-coal md:block">
              <Table>
                <TableHeader>
                  <TableRow className="border-seam hover:bg-transparent">
                    <TableHead className="text-mist">Critério</TableHead>
                    <TableHead className="text-lamp">
                      {guide.left.name}
                    </TableHead>
                    <TableHead className="text-paper">
                      {guide.right.name}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {guide.rows.map((row) => (
                    <TableRow key={row.criterion} className="border-seam">
                      <TableCell className="font-semibold text-paper">
                        {row.criterion}
                      </TableCell>
                      <TableCell className="text-mist">{row.left}</TableCell>
                      <TableCell className="text-mist">{row.right}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 2xl:max-w-[1440px]">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-card border border-seam bg-coal p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-paper md:text-3xl">
                Escolha {guide.left.name} se
              </h2>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-mist">
                {guide.chooseLeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={0.08}
              className="rounded-card border border-seam bg-coal p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-paper md:text-3xl">
                Fique no {guide.right.name} se
              </h2>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-mist">
                {guide.chooseRight.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-paper">
              {guide.verdict}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Button asChild variant="outline" className="mt-6">
              <Link href={relatedHref}>
                {relatedLabel}
                <ArrowRight strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </section>

        <OfferTicket
          title="Aprenda Holyrics do zero ao culto de domingo"
          badgeLabel="Se a escolha for Holyrics"
          ctaLabel="Quero o combo agora"
          description="O Combo da Projeção ensina o software que a maior parte das igrejas brasileiras consegue operar com voluntários: letra, Bíblia, retorno, automação e vMix."
        />

        <ConversationalFaq
          heading={`Perguntas sobre ${guide.left.name} e ${guide.right.name}`}
          intro="Respostas curtas para a equipe decidir sem jargão de fabricante."
          items={guide.faqs}
          pageUrl={pageUrl}
        />
      </main>

      <Footer />
    </div>
  );
}
