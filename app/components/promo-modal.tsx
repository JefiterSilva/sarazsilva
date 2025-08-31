'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre o sheet automaticamente após 1 segundo
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side="bottom" 
        className="h-[85vh] rounded-t-3xl border-0 bg-gradient-to-br from-blue-500 to-blue-700 p-0 text-white shadow-2xl"
      >
        <SheetHeader className="relative mb-4 mt-2 px-6 pt-4 text-center">
          <SheetTitle className="text-2xl font-bold text-white">
            OFERTA ESPECIAL!
          </SheetTitle>
          <SheetDescription className="text-white/90">
            Pack Fundos II - Um pacote de fundos específicos para sua igreja
          </SheetDescription>
        </SheetHeader>
        
        <div className="relative mx-auto mb-6 w-full max-w-md overflow-hidden rounded-xl px-6">
          <Image
            src="/PACKFUNDOS2.png"
            alt="Pack Fundos II"
            width={500}
            height={300}
            className="w-full rounded-xl object-cover shadow-lg"
          />
          <div className="absolute left-0 top-0 w-full bg-gradient-to-b from-black/50 to-transparent p-4">
            <div className="inline-block rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-md">
              PROMOÇÃO
            </div>
          </div>
        </div>
        
        <div className="px-6 text-white">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium text-white/80 line-through">R$55,00</span>
              <span className="text-sm text-white/70">Valor normal</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-white">R$24,90</span>
              <span className="text-sm font-medium text-white/90">Oferta especial</span>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <Link
              href="https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y"
              target="_blank"
              className="w-full"
            >
              <Button className="w-full transform animate-pulse rounded-full bg-orange-500 px-6 py-6 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:animate-none hover:bg-orange-600">
                APROVEITAR AGORA
              </Button>
            </Link>
          </div>

          <ul className="mb-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Mais de 50 fundos em alta resolução</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Compatível com qualquer software de projeção</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Acesso imediato após a compra</span>
            </li>
          </ul>
        </div>
        
        <SheetFooter className="px-6 pb-8 pt-4 text-center">
          <p className="w-full text-center text-sm text-white/70">
            Promoção válida por tempo limitado
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
