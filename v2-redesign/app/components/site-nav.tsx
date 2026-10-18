'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const links = [
  { href: '/#combo-projecao', label: 'Cursos' },
  { href: '/kit-midia-igreja', label: 'Kit Mídia Igreja' },
  { href: '/#materiais', label: 'Materiais' },
];

const comparisons = [
  { href: '/holyrics-vs-easyworship', label: 'Holyrics vs EasyWorship' },
  { href: '/holyrics-vs-propresenter', label: 'Holyrics vs ProPresenter' },
];

type SiteNavProps = {
  /** Substitui o botao padrao (usado na pagina do Kit Mídia, com rastreio de afiliado) */
  cta?: ReactNode;
};

/**
 * Ilha de navegacao flutuante. O fundo ganha corpo conforme a pagina rola
 * (estado visual ligado ao scroll, sem useState). No celular os destinos
 * ficam num menu nativo; a partir de md os tres links principais voltam para a pilula.
 */
const SiteNav = ({ cta }: SiteNavProps) => {
  const { scrollY } = useScroll();
  const veil = useTransform(scrollY, [0, 96], [0.55, 0.92]);
  const pathname = usePathname();

  return (
    <header className="sticky top-[max(0.25rem,env(safe-area-inset-top))] z-40 px-3 pt-3 sm:px-6 [@media(max-height:480px)]:static">
      <motion.nav
        aria-label="Principal"
        className="relative mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-seam pr-1.5 pl-3 backdrop-blur-md sm:gap-4 sm:pr-2 sm:pl-5 2xl:max-w-6xl"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-coal"
          style={{ opacity: veil }}
        />
        <Link
          href="/"
          className="-mx-1 inline-flex min-h-11 items-center px-1 text-sm font-semibold tracking-tight whitespace-nowrap text-paper sm:-mx-2 sm:px-2"
        >
          Sara Silva
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-mist transition-colors duration-200 hover:bg-iron hover:text-paper focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <details className="group md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full text-paper transition-colors duration-200 group-open:bg-iron hover:bg-iron focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <Menu
                className="size-5 group-open:hidden"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <X
                className="hidden size-5 group-open:block"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="sr-only">Menu</span>
            </summary>
            <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-card border border-seam bg-coal p-2">
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={cn(
                        'flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-iron focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                        pathname === link.href && 'bg-iron'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-1 flex flex-col border-t border-seam pt-1">
                {comparisons.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      className={cn(
                        'flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200 hover:bg-iron focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                        pathname === link.href
                          ? 'bg-iron text-paper'
                          : 'text-mist'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {cta ?? (
            <Button asChild className="px-3 sm:px-6">
              <Link href="/#combo-projecao">Quero ser aluno</Link>
            </Button>
          )}
        </div>
      </motion.nav>
    </header>
  );
};

export default SiteNav;
