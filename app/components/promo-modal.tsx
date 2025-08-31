'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Clock, Gift, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Abre o modal automaticamente após 1 segundo
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md border-0 bg-white p-0 shadow-2xl">
        {/* Header com close button personalizado */}
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full bg-black/20 p-0 text-white hover:bg-black/40"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

          <div className="relative px-6 pb-8 pt-12">
            <div className="mb-4 flex items-center justify-center">
              <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg">
                <Gift className="mr-1 h-3 w-3" />
                OFERTA LIMITADA
              </Badge>
            </div>

            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold text-white">
                Pack Fundos II
              </DialogTitle>
              <DialogDescription className="text-white/90">
                Fundos exclusivos para sua igreja
              </DialogDescription>
            </DialogHeader>

            {/* Countdown Timer */}
            <div className="mt-4 flex items-center justify-center gap-2 text-white/90">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">
                Oferta expira em breve!
              </span>
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative -mt-6 px-6">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <Image
                src="/PACKFUNDOS2.png"
                alt="Pack Fundos II"
                width={400}
                height={240}
                className="h-48 w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Pricing */}
          <div className="mb-6 text-center">
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="text-lg text-gray-500 line-through">
                R$55,00
              </span>
              <Badge variant="destructive" className="text-xs">
                55% OFF
              </Badge>
            </div>
            <div className="text-3xl font-bold text-gray-900">R$24,90</div>
            <p className="text-sm text-gray-600">Pagamento único</p>
          </div>

          {/* Features */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <Star className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">
                Mais de 50 fundos em alta resolução
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <Star className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">
                Compatível com qualquer software
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <Star className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">
                Acesso imediato após a compra
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y"
            target="_blank"
            className="block"
          >
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-6 text-lg font-bold shadow-lg transition-all hover:from-orange-600 hover:to-red-600 hover:shadow-xl">
              GARANTIR MINHA OFERTA
            </Button>
          </Link>

          <p className="mt-3 text-center text-xs text-gray-500">
            🔒 Compra 100% segura • Garantia de 7 dias
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
