import Image from 'next/image';

import AffiliateLinkButton from '@/app/components/affiliate-link-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

export type KitProduct = {
  name: string;
  image: string;
  category: string;
  link: string;
  installment: string;
  summary: string;
  highlight: string;
  icon: LucideIcon;
  accent: string;
  tag: string;
};

export type SetupStage = {
  title: string;
  description: string;
};

type HeroStatCardProps = {
  label: string;
  value: string;
  description?: string;
};

export function HeroStatCard({ label, value, description }: HeroStatCardProps) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur">
      <CardContent className="p-5">
        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
          {label}
        </p>
        <p className="mt-3 text-2xl font-black text-white">{value}</p>
        {description ? (
          <p className="mt-1 text-sm text-slate-300">{description}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

type ProductCardProps = {
  affiliateUrl: string;
  product: KitProduct;
};

export function ProductCard({ affiliateUrl, product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#081023] transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div
        className={`relative flex flex-col overflow-hidden border-b border-white/10 bg-gradient-to-br ${product.accent} p-6`}
      >
        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 p-3 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <Badge className="w-fit border border-white/15 bg-white/10 text-slate-100">
            {product.tag}
          </Badge>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              {product.category}
            </p>
            <h3 className="mt-2 max-w-[16rem] text-2xl font-black text-white">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="relative mt-5 h-64 overflow-hidden rounded-md border border-white/10 bg-white shadow-[0_20px_45px_rgba(2,12,32,0.28)] sm:h-72">
          <div className="absolute inset-0 z-0 bg-slate-100/50" />
          <div className="relative z-10 h-full w-full p-2">
            <Image
              src={product.image}
              alt={product.name}
              loading="lazy"
              fill
              quality={90}
              className="box-border object-contain p-2"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>

        <p className="mt-4 max-w-[18rem] text-sm text-slate-200">
          Captura manual da lista real para reforcar prova visual do produto
          recomendado.
        </p>
      </div>

      <CardContent className="flex flex-1 flex-col gap-5 p-6">
        <p className="flex-1 text-sm leading-7 text-slate-300">
          {product.summary}
        </p>

        <AffiliateLinkButton
          href={affiliateUrl}
          label="product_cta"
          placement="product_card"
          productName={product.name}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="h-12 w-full rounded-2xl bg-cyan-400 text-base font-bold text-slate-950 hover:bg-cyan-300"
        >
          Ver este item na lista afiliada
        </AffiliateLinkButton>
      </CardContent>
    </Card>
  );
}
