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

  useEffect(() => {
    // Abre o drawer automaticamente após 1 segundo
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent 
        className="bg-gradient-to-br from-blue-500 to-blue-700 text-white"
        aria-label="Oferta especial - Pack Fundos II"
      >
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-bold text-white">
              OFERTA ESPECIAL!
            </DrawerTitle>
            <DrawerDescription className="text-white/90">
              Pack Fundos II - Um pacote de fundos específicos para sua igreja
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <div className="absolute right-2 top-2 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                -55% OFF
              </div>
              <Image
                src="/PACKFUNDOS2.png"
                alt="Pack Fundos II - Pacote de fundos para projeção"
                width={500}
                height={300}
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>

            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-lg font-medium text-white/80 line-through">R$55,00</span>
                <span className="text-xs text-white/70">Valor normal</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-white">R$24,90</span>
                <span className="text-xs font-medium text-white/90">Oferta especial</span>
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              <Link
                href="https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y"
                target="_blank"
                className="w-full"
                aria-label="Comprar Pack Fundos II por R$24,90"
              >
                <Button className="w-full transform animate-pulse rounded-full bg-orange-500 px-6 py-5 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:animate-none hover:bg-orange-600">
                  APROVEITAR AGORA
                </Button>
              </Link>
            </div>

            <div className="mb-6 rounded-lg bg-white/10 p-4">
              <h4 className="mb-2 font-semibold">O que você vai receber:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mais de 50 fundos em alta resolução</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compatível com qualquer software de projeção</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acesso imediato após a compra</span>
                </li>
              </ul>
            </div>
          </div>

          <DrawerFooter className="text-center">
            <p className="w-full text-center text-sm text-white/70">
              Promoção válida por tempo limitado
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}