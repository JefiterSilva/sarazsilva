import Image from 'next/image';

import AffiliateLinkButton from '@/app/components/affiliate-link-button';
import { Badge } from '@/components/ui/badge';
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
    <div className="rounded-card border border-seam bg-coal p-5">
      <p className="label-mono">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-paper">
        {value}
      </p>
      {description ? (
        <p className="mt-1 text-sm text-mist">{description}</p>
      ) : null}
    </div>
  );
}

type ProductCardProps = {
  affiliateUrl: string;
  product: KitProduct;
  priority?: boolean;
};

export function ProductCard({
  affiliateUrl,
  product,
  priority = false,
}: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-seam bg-coal transition-[transform,border-color] duration-300 ease-out hover:border-mist motion-safe:hover:-translate-y-1">
      {/* Painel claro: excecao documentada, fotos de produto tem fundo branco */}
      <div className="relative h-60 shrink-0 overflow-hidden bg-paper sm:h-64">
        <Image
          src={product.image}
          alt={product.name}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          fill
          className="box-border object-contain p-6 transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="outline">{product.tag}</Badge>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-iron">
              <Icon
                className="size-5 text-lamp"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="space-y-1">
            <p className="label-mono">{product.category}</p>
            <h4 className="text-xl leading-snug font-semibold tracking-tight text-paper">
              {product.name}
            </h4>
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-mist">
          {product.summary}
        </p>

        {product.installment.includes('R$') ? (
          <p className="font-mono text-lg font-semibold tracking-tight text-lamp">
            {product.installment}
          </p>
        ) : (
          <div className="space-y-1">
            <p className="text-sm font-semibold text-paper">
              Preço na lista do Mercado Livre
            </p>
            <p className="label-mono">{product.installment}</p>
          </div>
        )}

        <AffiliateLinkButton
          href={affiliateUrl}
          label="product_cta"
          placement="product_card"
          productName={product.name}
          target="_blank"
          rel="noopener noreferrer sponsored"
          variant="outline"
          className="h-12 w-full"
        >
          Comprar agora
        </AffiliateLinkButton>
      </div>
    </article>
  );
}
