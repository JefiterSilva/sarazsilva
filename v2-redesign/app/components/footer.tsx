'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp, Instagram } from 'lucide-react';
import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import Logo from './logo';

const quickLinks = [
  { href: '/', label: 'Início' },
  { href: '/#combo-projecao', label: 'Cursos' },
  { href: '/holyrics-vs-easyworship', label: 'Holyrics vs EasyWorship' },
  { href: '/holyrics-vs-propresenter', label: 'Holyrics vs ProPresenter' },
  { href: '/#sobre', label: 'Sobre' },
];

const Footer = () => {
  const scrollToTop = () => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-seam bg-coal text-paper">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 2xl:max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo size="md" showText={true} />
            <p className="max-w-[46ch] text-sm leading-relaxed text-mist">
              Transformando igrejas através da tecnologia de projeção. Cursos
              especializados para dominar o Holyrics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-paper">Links rápidos</h2>
            <ul className="-mt-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-mist transition-colors duration-200 hover:text-lamp"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-paper">Conecte-se</h2>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/sarazsilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Sara"
                >
                  <Instagram className="size-5" strokeWidth={1.5} />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.tiktok.com/@sarazsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok da Sara"
                >
                  <FaTiktok className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 pb-6 md:flex-row">
          <span className="text-sm text-mist">
            © {new Date().getFullYear()} Sara Silva. Todos os direitos reservados.
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="size-5" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* Marca em escala de cartaz, decorativa */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.16em] text-center text-[clamp(4rem,19vw,17rem)] leading-[0.85] font-semibold tracking-[-0.06em] whitespace-nowrap text-fog select-none"
      >
        Sara Silva
      </p>
    </footer>
  );
};

export default Footer;
