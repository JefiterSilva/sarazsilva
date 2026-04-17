import Link from 'next/link';

import AffiliateLinkButton from '@/app/components/affiliate-link-button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3 } from 'lucide-react';
import { ProductCard } from './components/cards';
import { affiliateUrl, pageName, productUrl } from './helpers/metadata';
import { products } from './helpers/products';
import { structuredData } from './helpers/structuredData';

export { metadata } from './helpers/metadata';

export default function KitMidiaIgrejaPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-slate-50 selection:bg-cyan-400/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site
          </Link>
          <AffiliateLinkButton
            href={affiliateUrl}
            label="header_cta"
            placement="header"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="ml-auto rounded-full bg-cyan-400 px-4 text-sm text-slate-950 hover:bg-cyan-300 sm:px-5 sm:text-base"
          >
            Abrir lista completa
          </AffiliateLinkButton>
        </div>
      </header>

      <main>
        <section className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.16),_transparent_28%),linear-gradient(180deg,_rgba(5,8,22,1),_rgba(9,14,35,1))]" />
          <div className="relative mx-auto min-h-[70svh] max-w-7xl items-center gap-10 px-4 py-16 max-[390px]:px-3 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-8">
              <Badge className="max-w-full whitespace-normal border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-center text-xs uppercase leading-relaxed tracking-[0.18em] text-cyan-200 max-[390px]:tracking-[0.12em]">
                Curadoria de alta conversao para midia de igreja
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
                  {pageName}: o atalho mais rápido para montar uma estrutura
                  visual mais estável, bonita e profissional.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Se voce precisa sair da improvisação e ganhar mais controle na
                  operação, esta pagina organiza os produtos em uma jornada
                  clara: rede, distribuição de video, telas de apoio, automação
                  e ambientação.
                </p>
              </div>

              <div className="flex w-full max-w-2xl flex-wrap items-center gap-3 md:items-start md:justify-start">
                <AffiliateLinkButton
                  href={affiliateUrl}
                  label="hero_primary"
                  placement="hero"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  size="lg"
                  className="h-14 w-full justify-center rounded-full bg-cyan-400 px-8 text-base font-bold text-slate-950 hover:bg-cyan-300 max-[390px]:px-4 max-[390px]:text-sm sm:w-auto"
                >
                  Quero ver os produtos no Mercado Livre
                  <ArrowRight className="h-4 w-4" />
                </AffiliateLinkButton>

                <a
                  href="#mapa-produtos"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/15 px-8 text-base font-semibold text-white transition-colors hover:border-cyan-400/40 hover:bg-white/5 max-[390px]:px-4 max-[390px]:text-sm sm:w-auto"
                >
                  Ver mapa completo
                </a>
              </div>

              <div className="flex max-w-2xl flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 md:w-auto">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Produtos organizados por prioridade de compra
                </span>
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 md:w-auto">
                  <Clock3 className="h-4 w-4 text-amber-300" />
                  Descontos e estoque podem mudar sem aviso
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="mapa-produtos"
          className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <AffiliateLinkButton
              href={affiliateUrl}
              label="products_top"
              placement="product_grid_top"
              target="_blank noreferrer"
              rel="noopener noreferrer sponsored"
              className="rounded-full bg-white text-slate-950 hover:bg-slate-100"
            >
              Ver lista no Mercado Livre
            </AffiliateLinkButton>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                affiliateUrl={productUrl}
                product={product}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
