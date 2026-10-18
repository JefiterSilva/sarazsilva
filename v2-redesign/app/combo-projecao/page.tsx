import ConversationalFaq from '@/app/components/conversational-faq';
import JsonLd from '@/app/components/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { courseParts } from '@/lib/geo/curriculum';
import { comboFaqs } from '@/lib/geo/faqs';
import { buildCourseSchema } from '@/lib/geo/schemas';
import { COMBO, PRODUCTS } from '@/lib/geo/site';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Reveal, RevealWords } from '../components/fx/reveal';
import Footer from '../components/footer';
import OfferTicket from '../components/offer-ticket';
import SiteNav from '../components/site-nav';

export const metadata: Metadata = {
  title: 'Combo da Projeção no Holyrics',
  description:
    `Curso completo de Holyrics para igrejas: ${COMBO.lessons} aulas práticas, TV de retorno via rede, vMix, automação com mesa digital e acesso vitalício por R$ 84,00.`,
  alternates: {
    canonical: '/combo-projecao',
  },
  openGraph: {
    title: 'Combo da Projeção no Holyrics | Sara Silva',
    description:
      'Aprenda Holyrics do zero ao avançado. Mais de 2.100 alunos, avaliação 5.0 e garantia de 7 dias.',
    url: PRODUCTS.combo.url,
    type: 'website',
  },
};

const cursos = courseParts;

const comboBenefits = [
  `Acesso a todas as ${COMBO.lessons} aulas práticas`,
  'Acesso vitalício e atualizações',
  'Suporte direto para tirar dúvidas',
  'Certificado de conclusão completo',
];

const ComboProjecaoPage = () => {
  return (
    <div className="min-h-dvh overflow-x-clip bg-ink font-sans text-paper selection:bg-lamp/30">
      <JsonLd
        id="course-schema"
        data={{
          '@context': 'https://schema.org',
          ...buildCourseSchema(),
        }}
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
              <p className="label-mono text-lamp">Grade curricular completa</p>
            </Reveal>
            <h1 className="max-w-4xl text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.04em] text-paper sm:text-6xl lg:text-7xl">
              <RevealWords
                onMount
                delay={0.1}
                text="Tudo o que você vai aprender"
              />
            </h1>
            <Reveal onMount delay={0.4} y={16}>
              <p className="max-w-[52ch] text-lg leading-relaxed text-mist">
                Conheça o conteúdo detalhado de cada módulo do curso e descubra
                como vamos transformar a projeção da sua igreja.
              </p>
            </Reveal>
          </div>
        </section>

        {cursos.map((curso) => (
          <section
            key={curso.titulo}
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 2xl:max-w-[1440px]"
          >
            <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal className="space-y-5 rounded-card border border-seam bg-coal p-6 sm:p-8 lg:sticky lg:top-28">
                <Badge variant="lamp">{curso.parte}</Badge>
                <div className="space-y-2">
                  <h2 className="text-3xl leading-[1.05] font-semibold tracking-[-0.03em] text-paper md:text-4xl">
                    {curso.titulo}
                  </h2>
                  <p className="text-sm text-mist">{curso.subtitulo}</p>
                </div>

                <div className="space-y-1 border-t border-seam pt-5">
                  <p className="text-sm font-medium text-paper">
                    Prefere comprar separado?
                  </p>
                  <p className="text-sm text-mist">{curso.nivel}</p>
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-paper">
                    {curso.preco}
                  </p>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <Link href={curso.href} target="_blank">
                    {curso.cta}
                  </Link>
                </Button>
              </Reveal>

              <ol className="grid gap-3 sm:grid-cols-2">
                {curso.aulas.map((aula, index) => (
                  <li key={aula.title}>
                    <Reveal
                      delay={(index % 2) * 0.05}
                      y={20}
                      className="h-full"
                    >
                      <div className="flex h-full gap-4 rounded-xl border border-seam bg-coal p-5 transition-colors duration-200 hover:border-mist hover:bg-iron">
                        <span className="font-mono text-2xl leading-none font-medium text-lamp">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm leading-relaxed text-paper">
                          {aula.title}
                        </span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        <OfferTicket
          id="combo"
          title="Combo completo Holyrics"
          badgeLabel="Melhor custo-benefício"
          ctaLabel="Quero o combo agora"
          showGradeLink={false}
          benefits={comboBenefits}
          description={
            <>
              Leve a{' '}
              <strong className="font-semibold text-paper">
                Parte 1 + Parte 2
              </strong>{' '}
              com um super desconto e domine a projeção do básico ao avançado.
            </>
          }
        />

        <ConversationalFaq
          heading="Perguntas que a equipe de mídia mais faz"
          intro="Respostas diretas sobre Holyrics, TV de retorno, preço do combo e o que cada parte do curso ensina."
          items={comboFaqs}
          pageUrl={PRODUCTS.combo.url}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ComboProjecaoPage;
