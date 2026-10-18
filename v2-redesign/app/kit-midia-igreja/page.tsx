import AffiliateLinkButton from '@/app/components/affiliate-link-button';
import ConversationalFaq from '@/app/components/conversational-faq';
import Footer from '@/app/components/footer';
import { Reveal, RevealWords } from '@/app/components/fx/reveal';
import JsonLd from '@/app/components/json-ld';
import SiteNav from '@/app/components/site-nav';
import { kitFaqs } from '@/lib/geo/faqs';
import { PRODUCTS } from '@/lib/geo/site';
import { ArrowRight, Clock3 } from 'lucide-react';
import { ProductCard } from './components/cards';
import { affiliateUrl } from './helpers/metadata';
import { products, setupStages } from './helpers/products';
import { structuredData } from './helpers/structuredData';

export { metadata } from './helpers/metadata';

export default function KitMidiaIgrejaPage() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-ink font-sans text-paper selection:bg-lamp/30">
      <JsonLd id="kit-structured-data" data={structuredData} />

      <SiteNav
        cta={
          <AffiliateLinkButton
            href={affiliateUrl}
            label="header_cta"
            placement="header"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-3 sm:px-6"
          >
            <span className="sm:hidden">Ver lista</span>
            <span className="hidden sm:inline">Ver lista no Mercado Livre</span>
          </AffiliateLinkButton>
        }
      />

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-beam"
          />
          <div className="mx-auto max-w-7xl space-y-8 px-4 pt-16 pb-16 sm:px-6 md:pt-20 md:pb-24 2xl:max-w-[1440px]">
            <Reveal onMount y={12}>
              <p className="label-mono text-lamp">
                Equipamentos para a cabine da igreja
              </p>
            </Reveal>

            <h1 className="max-w-5xl text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.04em] text-balance text-paper sm:text-5xl lg:text-6xl">
              <RevealWords
                onMount
                delay={0.1}
                text="Kit Mídia Igreja: o atalho mais rápido para montar uma estrutura visual mais estável, bonita e profissional."
              />
            </h1>

            <Reveal onMount delay={0.5} y={16}>
              <p className="max-w-[52ch] text-lg leading-relaxed text-mist">
                Saia da improvisação e ganhe mais controle na operação. Rede,
                vídeo, telas de apoio, automação e ambientação em ordem de
                prioridade.
              </p>
            </Reveal>

            <Reveal onMount delay={0.65} y={16}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <AffiliateLinkButton
                  href={affiliateUrl}
                  label="hero_primary"
                  placement="hero"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ver lista no Mercado Livre
                  <ArrowRight strokeWidth={1.75} aria-hidden="true" />
                </AffiliateLinkButton>

                <a
                  href="#mapa-produtos"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-seam px-7 text-sm font-semibold text-paper transition-[background-color,border-color] duration-200 hover:border-mist hover:bg-iron focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none sm:w-auto"
                >
                  Ver mapa completo
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="mapa-produtos"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]"
        >
          <div className="mb-12 max-w-2xl space-y-5">
            <Reveal>
              <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-paper md:text-5xl">
                Mapa completo de produtos
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="flex items-center gap-2 text-sm text-mist">
                <Clock3
                  className="size-4 shrink-0 text-lamp"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Descontos e estoque podem mudar sem aviso.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <AffiliateLinkButton
                href={affiliateUrl}
                label="products_top"
                placement="product_grid_top"
                target="_blank"
                rel="noopener noreferrer sponsored"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Ver lista no Mercado Livre
              </AffiliateLinkButton>
            </Reveal>
          </div>

          <div className="space-y-16">
            {setupStages.map((stage) => {
              const stageProducts = products.filter(
                (product) => product.stage === stage.id,
              );

              return (
                <div key={stage.id}>
                  <h3 className="text-2xl font-semibold tracking-tight text-paper">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-mist">
                    {stage.description}
                  </p>
                  <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {stageProducts.map((product, index) => (
                      <Reveal
                        key={product.name}
                        delay={(index % 3) * 0.06}
                        y={28}
                        className="h-full"
                      >
                        <ProductCard
                          affiliateUrl={product.link}
                          product={product}
                          priority={stage.id === 'comecar'}
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <ConversationalFaq
          heading="Dúvidas antes de montar a cabine"
          intro="Respostas curtas sobre TV de retorno, switch, HDMI de fibra e o que uma igreja pequena precisa primeiro."
          items={kitFaqs}
          pageUrl={PRODUCTS.kit.url}
        />
      </main>

      <Footer />
    </div>
  );
}
