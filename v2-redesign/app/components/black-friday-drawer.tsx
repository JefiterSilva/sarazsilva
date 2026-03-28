'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Clock, Gift, Tag } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function BlackFridayDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        className="max-h-[90vh] overflow-y-auto bg-gradient-to-br from-amber-500 via-amber-600 to-orange-700 text-white sm:max-h-[85vh] md:max-h-[90vh]"
        aria-label="Black Friday - Pacotão com todos os cursos e materiais"
      >
        <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <DrawerHeader className="px-4 text-center sm:px-6">
            <DrawerTitle className="flex items-center justify-center gap-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
              <Gift className="h-5 w-5" />
              Black Friday: Pacotão Completo
            </DrawerTitle>
            <DrawerDescription className="text-sm text-white/90 sm:text-base">
              Pagamento único • Acesso vitalício • Conteúdo atualizado
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-3 sm:px-4 md:px-6">
            {/* Imagem do combo/black friday */}
            <div className="mb-4 sm:mb-6">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/card_cursos.jpg"
                  alt="Black Friday Combo — Pacotão completo"
                  width={800}
                  height={400}
                  priority
                  className="h-128 w-full object-contain sm:h-80 md:h-96 lg:h-[26rem]"
                />
              </div>
            </div>
            {/* Selo e preços */}
            <div className="mb-4 flex items-center justify-center gap-3 sm:mb-6">
              <Badge className="bg-black text-white">
                <Clock className="mr-1 h-3 w-3" />
                Oferta por tempo limitado
              </Badge>
            </div>

            <div className="mb-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm sm:mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-white/80">De</p>
                  <p className="text-lg font-bold text-white/70 line-through">
                    R$ 370,70
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-white/80">Por</p>
                  <p className="text-2xl font-extrabold text-white">R$ 97,90</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-white/80">
                Todos os cursos, packs e materiais em um só pacote.
              </p>
            </div>

            {/* CTA: rolar para a section */}
            <div className="mb-3 flex justify-center">
              {/* Substitui Link externo por Button asChild com âncora */}
              <Button
                asChild
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-700 sm:text-base"
              >
                <a
                  href="#black-friday"
                  aria-label="Ver oferta completa da Black Friday"
                >
                  <Tag className="h-4 w-4" />
                  Ver oferta
                </a>
              </Button>
            </div>
          </div>

          <DrawerFooter className="px-3 text-center sm:px-4 md:px-6">
            <p className="w-full text-center text-xs text-white/80 sm:text-sm">
              Promoção válida por tempo limitado
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
