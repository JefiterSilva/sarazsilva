'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PromoDrawerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Abre o drawer automaticamente após 1 segundo
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Não renderiza nada até o componente estar montado
  if (!isMounted) {
    return null;
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        className="max-h-[90vh] bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:max-h-[85vh] md:max-h-[80vh]"
        aria-label="Oferta especial - Pack Fundos II"
      >
        <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <DrawerHeader className="px-4 text-center sm:px-6">
            <DrawerTitle className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
              OFERTA ESPECIAL!
            </DrawerTitle>
            <DrawerDescription className="text-sm text-white/90 sm:text-base">
              Pack Fundos II - Um pacote de fundos específicos para sua igreja
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-3 sm:px-4 md:px-6">
            <div className="relative mb-4 overflow-hidden rounded-xl sm:mb-6">
              <div className="absolute right-2 top-2 z-10 rounded-full bg-orange-500 px-2 py-1 text-xs font-bold text-white shadow-md sm:px-3">
                -55% OFF
              </div>
              <Image
                src="/PACKFUNDOS2.png"
                alt="Pack Fundos II - Pacote de fundos para projeção"
                width={500}
                height={300}
                className="h-32 w-full rounded-xl object-cover shadow-lg sm:h-40 md:h-48 lg:h-56"
              />
            </div>

            <div className="mb-4 flex items-center justify-center gap-2 sm:mb-6 sm:gap-4">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-white/80 line-through sm:text-lg">
                  R$55,00
                </span>
                <span className="text-xs text-white/70">Valor normal</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                  R$24,90
                </span>
                <span className="text-xs font-medium text-white/90">
                  Oferta especial
                </span>
              </div>
            </div>

            <div className="mb-4 flex justify-center sm:mb-6">
              <Link
                href="https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y"
                target="_blank"
                className="w-full"
                aria-label="Comprar Pack Fundos II por R$24,90"
              >
                <Button className="w-full transform animate-pulse rounded-full bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:animate-none hover:bg-orange-600 sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-lg">
                  APROVEITAR AGORA
                </Button>
              </Link>
            </div>

            <div className="mb-4 rounded-lg bg-white/10 p-3 sm:mb-6 sm:p-4">
              <h4 className="mb-2 text-sm font-semibold sm:text-base">
                O que você vai receber:
              </h4>
              <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-300 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="leading-tight">
                    Mais de 150 fundos em alta resolução
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-300 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="leading-tight">
                    Compatível com qualquer software de projeção
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-300 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="leading-tight">
                    Acesso imediato após a compra
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <DrawerFooter className="px-3 text-center sm:px-4 md:px-6">
            <p className="w-full text-center text-xs text-white/70 sm:text-sm">
              Promoção válida por tempo limitado
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
