'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Clock,
  FileText,
  Film,
  Image as ImageIcon,
  Palette,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tag,
} from 'lucide-react';
import Link from 'next/link';

export default function SpecialPackSection() {
  const purchaseUrl =
    'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-pack-especial-fim-de-ano-38w39/F103159984T';

  return (
    <section
      id="pack-fim-de-ano"
      className="relative w-full overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 px-4 py-16"
      aria-label="Pack Especial de Fim de Ano"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-0 right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />
      </div>

      <div className="mx-auto max-w-4xl">
        <Card className="relative overflow-hidden border-0 bg-white/5 text-white shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]" />

          <div className="absolute right-4 top-4 z-10 rotate-3">
            <div className="rounded-md bg-yellow-400 px-3 py-1 text-sm font-extrabold text-black shadow-md">
              R$ 9,90
            </div>
          </div>

          <CardHeader className="relative space-y-4 pb-0 pt-10">
            <div className="text-center">
              <Badge className="mx-auto mb-4 bg-red-600 text-white">
                Oferta exclusiva de fim de ano
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                PACK ESPECIAL FIM DE ANO
              </h2>
              <p className="mt-3 text-base text-red-100 md:text-lg">
                Conteúdos selecionados para elevar suas projeções nas festas.
                Pagamento único e acesso imediato.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md rounded-xl bg-white/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-100">De</p>
                  <p className="text-xl font-bold text-red-200 line-through">
                    R$ 29,90
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-100">Por</p>
                  <p className="text-3xl font-extrabold text-green-300">
                    R$ 9,90
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 text-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100/20">
                  <Sparkles className="h-3 w-3 text-green-300" />
                </div>
                <span className="font-medium text-red-100">
                  Acesso imediato
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100/20">
                  <Clock className="h-3 w-3 text-blue-300" />
                </div>
                <span className="font-medium text-red-100">
                  Oferta por tempo limitado
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-6 pb-8">
            <ul className="grid gap-3 text-sm md:grid-cols-2">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-400/20">
                  <Film className="h-4 w-4 text-green-300" />
                </div>
                <span className="text-red-100">
                  Fundos de projeção em movimento (MP4)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                  <ImageIcon className="h-4 w-4 text-blue-300" />
                </div>
                <span className="text-red-100">
                  Fundos de projeção estáticos (PNG)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-400/20">
                  <Palette className="h-4 w-4 text-red-300" />
                </div>
                <span className="text-red-100">
                  Artes para projeção (Natal e Ano Novo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-400/20">
                  <Smartphone className="h-4 w-4 text-purple-300" />
                </div>
                <span className="text-red-100">
                  Artes e fundos no formato Stories (9:16)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                  <Play className="h-4 w-4 text-yellow-300" />
                </div>
                <span className="text-red-100">
                  Vídeos rápidos para a virada do ano
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span className="text-red-100">
                  Links no PDF para edição no Canva
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-400/20">
                  <ShieldCheck className="h-4 w-4 text-teal-300" />
                </div>
                <span className="text-red-100">Garantia de 7 dias</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20">
                  <Tag className="h-4 w-4 text-amber-300" />
                </div>
                <span className="text-red-100">
                  Preço promocional exclusivo
                </span>
              </li>
            </ul>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:from-green-600 hover:to-green-700"
              >
                <Link
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tag className="mr-2 h-5 w-5" /> Comprar agora por R$ 9,90
                </Link>
              </Button>
            </div>

            <div className="border-t border-white/10 pt-4 text-center">
              <p className="text-sm text-red-100">
                ✓ Pagamento seguro • Acesso imediato • Sem mensalidade
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
