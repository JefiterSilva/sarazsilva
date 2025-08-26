'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp, Heart, Instagram } from 'lucide-react';
import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import Logo from './logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 1, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-green-600/10"></div>
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand section */}
            <div className="space-y-4">
              <Logo size="md" showText={true} />
              <p className="leading-relaxed text-gray-300">
                Transformando igrejas através da tecnologia de projeção. Cursos
                especializados para dominar o Holyrics.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/combo-projecao"
                    className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                  >
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                  >
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Conecte-se</h4>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="group h-12 w-12 rounded-xl bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/sarazsilva/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-6 w-6 text-gray-300 transition-colors group-hover:text-blue-400" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="group h-12 w-12 rounded-xl bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-red-500/20"
                  asChild
                >
                  <Link
                    href="https://www.tiktok.com/@sarazsilva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="h-6 w-6 text-gray-300 transition-colors group-hover:text-red-400" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 bg-black/20">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© 2025 Sara Silva. Todos os direitos reservados.</span>
                <Heart className="h-4 w-4 animate-pulse text-red-500" />
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="h-10 w-10 rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
