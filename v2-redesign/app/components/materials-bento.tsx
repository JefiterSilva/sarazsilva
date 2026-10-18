import { COMBO } from '@/lib/geo/site';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from './fx/reveal';

type Material = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  link: string;
  /** Posicao no bento (lg) */
  span: string;
  variant: 'feature' | 'wide' | 'tile';
};

const materials: Material[] = [
  {
    id: 1,
    title: 'IDENTIDADE VISUAL MENSAL',
    description:
      'A identidade visual é algo que fica muito mais harmonioso quando é bem planejada, e que tal uma ajuda com isso?',
    image: '/Identidade.png',
    price: 14.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a',
    span: 'md:col-span-2 lg:row-span-2',
    variant: 'feature',
  },
  {
    id: 2,
    title: 'PACK FUNDOS ||',
    description:
      'Um pacote de fundos específicos para utilizar na projeção da sua igreja.',
    image: '/PACKFUNDOS2.png',
    price: 39.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y',
    span: '',
    variant: 'tile',
  },
  {
    id: 3,
    title: 'FUNDOS PARA PROJEÇÃO',
    description:
      'Fundos de Projeção é a primeira versão de backgrounds. Contém 40 fundos estáticos e dinâmicos incluindo algumas frases de músicas.',
    image: '/fundos_pro.png',
    price: 25.0,
    link: 'https://pay.hotmart.com/R95452686V?bid=1728743323750',
    span: '',
    variant: 'tile',
  },
  {
    id: 4,
    title: 'PACOTE CRIATIVO',
    description:
      'Chegou a segunda edição dos Materiais Criativos e agora com mais artes para eventos e cultos especiais.',
    image: '/pacote-criativo.png',
    price: 25.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-pacote-criativo-wbsra/W96708239C',
    span: 'md:col-span-2',
    variant: 'wide',
  },
  {
    id: 5,
    title: 'CAPACITAÇÃO PARA MÍDIA E COMUNICAÇÃO',
    description:
      'Essa imersão contém aulas práticas com conteúdos exclusivos para equipe de mídia e comunicação das igrejas.',
    image: '/capacitacao.png',
    price: 109.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/capacitacao-imersao-midia-para-igrejas/P93420727E',
    span: '',
    variant: 'tile',
  },
  {
    id: 6,
    title: 'ROTEIRO E ORGANIZAÇÃO DE CULTO',
    description:
      'Ferramentas para ajudar na organização e planejamento de cultos e eventos da igreja.',
    image: '/Identidaderoteiro.png',
    price: 15.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/roteiro-de-organizacao-de-culto/S96063596M',
    span: '',
    variant: 'tile',
  },
  {
    id: 7,
    title: 'Materiais Criativos',
    description:
      'Materiais prontos para usar na sua igreja como artes, vídeos de abertura, vídeo de avisos, crachás de voluntários e mais.',
    image: '/criativo.jpg',
    price: 22.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/materiais-criativos/I94921264N',
    span: '',
    variant: 'tile',
  },
  {
    id: 8,
    title: 'PROJEÇÃO CRIATIVA no Canva',
    description:
      'Crie fundos com letras personalizadas no Canva para a projeção das músicas da sua igreja.',
    image: '/Canva.jpg',
    price: 19.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/projecao-criativa-aprendizado-na-pratica/C102196297Y',
    span: '',
    variant: 'tile',
  },
];

const formatPrice = (value: number) =>
  `R$ ${value.toFixed(2).replace('.', ',')}`;

const readyArt = materials.find((item) => item.id === 3);

if (!readyArt) {
  throw new Error('O caminho de arte pronta precisa do material de fundos.');
}

const paths = [
  {
    title: 'Arte pronta para o culto',
    detail: '40 fundos para a tela. Baixa e usa, sem abrir o Canva.',
    meta: formatPrice(readyArt.price),
    href: readyArt.link,
    external: true,
    action: 'Abrir os fundos',
  },
  {
    title: 'Aprender o Holyrics',
    detail: `${COMBO.lessons} aulas gravadas, do zero ao culto na tela.`,
    meta: formatPrice(COMBO.price),
    href: '#combo-projecao',
    external: false,
    action: 'Ver o combo',
  },
  {
    title: 'Equipar a cabine',
    detail: 'Igreja pequena começa no switch de 5 portas e na TV box.',
    meta: null,
    href: '/kit-midia-igreja',
    external: false,
    action: 'Ver o kit',
  },
] as const;

function MaterialTile({ item }: { item: Material }) {
  const feature = item.variant === 'feature';
  const wide = item.variant === 'wide';

  return (
    <Link
      href={item.link}
      className={cn(
        'group flex h-full overflow-hidden rounded-card border transition-[transform,border-color] duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-safe:hover:-translate-y-1',
        wide
          ? 'flex-col sm:flex-row'
          : feature
            ? 'flex-col md:flex-row lg:flex-col'
            : 'flex-col',
        feature
          ? 'border-lamp bg-lamp text-lamp-ink'
          : 'border-seam bg-coal hover:border-mist'
      )}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden',
          feature
            ? 'min-h-72 flex-1 bg-lamp-ink/10 md:w-1/2 md:flex-none lg:w-auto lg:flex-1'
            : wide
              ? 'aspect-[4/3] bg-iron sm:aspect-auto sm:w-2/5'
              : 'aspect-[4/3] bg-iron'
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={
            feature
              ? '(min-width: 1024px) 560px, 100vw'
              : '(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw'
          }
          className="object-contain p-5 transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
        />
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col gap-3 p-6',
          feature && 'flex-none md:flex-1 md:justify-center md:p-8 lg:flex-none'
        )}
      >
        <span
          className={cn(
            'w-fit rounded-full px-3 py-1 font-mono text-xs tracking-[0.04em]',
            feature ? 'bg-lamp-ink text-lamp' : 'bg-iron text-lamp'
          )}
        >
          {formatPrice(item.price)}
        </span>

        <h3
          className={cn(
            'font-semibold tracking-tight uppercase',
            feature ? 'text-2xl' : 'text-base',
            feature ? 'text-lamp-ink' : 'text-paper'
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            'line-clamp-3 text-sm leading-relaxed',
            feature ? 'text-lamp-ink/80' : 'text-mist'
          )}
        >
          {item.description}
        </p>

        <span
          className={cn(
            'mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold',
            feature ? 'text-lamp-ink' : 'text-paper'
          )}
        >
          Saber mais
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

const MaterialsBento = () => {
  return (
    <section
      id="materiais"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]"
    >
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-paper md:text-5xl">
          O que falta para o culto?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist">
          Escolha um. A prateleira inteira fica embaixo, para quem já sabe o que
          procura.
        </p>
        <ol className="mt-8 border-t border-seam">
          {paths.map((path, index) => (
            <li key={path.title}>
              <Link
                href={path.href}
                {...(path.external
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer sponsored',
                    }
                  : {})}
                className="group flex min-h-16 flex-col gap-3 border-b border-seam py-5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:flex-row sm:items-center sm:justify-between sm:gap-10"
              >
                <span className="flex gap-4">
                  <span className="pt-1 font-mono text-sm text-lamp">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block text-2xl font-semibold tracking-tight text-paper">
                      {path.title}
                    </span>
                    <span className="mt-1 block max-w-[46ch] text-sm leading-relaxed text-mist">
                      {path.detail}
                    </span>
                  </span>
                </span>
                <span className="grid grid-cols-[6.5rem_9.5rem_1rem] items-center gap-x-3 pl-9 font-mono text-sm sm:shrink-0 sm:pl-0">
                  <span className="text-right text-lamp">{path.meta}</span>
                  <span className="text-paper">{path.action}</span>
                  {path.external ? (
                    <ArrowUpRight
                      className="size-4 text-lamp transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowRight
                      className="size-4 text-lamp transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <p className="mb-8 text-xl font-semibold tracking-tight text-paper">
        Prateleira completa
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {materials.map((item, index) => (
          <Reveal
            key={item.id}
            delay={(index % 4) * 0.06}
            y={28}
            className={item.span}
          >
            <MaterialTile item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default MaterialsBento;
