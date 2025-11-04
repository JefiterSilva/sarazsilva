import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Clock, Gift, Star, Tag, Zap } from 'lucide-react';
import Link from 'next/link';

const BlackFridaySection = () => {
  return (
    <section
      id="black-friday"
      className="w-full bg-gradient-to-br from-gray-900 via-[#1e293b] to-gray-800 px-4 py-16"
    >
      {/* Card principal */}
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Badge className="mb-4 bg-black text-white">
            <Gift className="mr-1 h-3 w-3" /> BLACK FRIDAY COMBO
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            A maior e melhor BLACK para equipes de mídia e comunicação das
            igrejas do MUNDO!
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Agora você pode ter acesso a todos os meus conteúdos em um só lugar,
            pagamento único e acesso vitalício — ou seja, sem fim.
          </p>
        </div>

        {/* Card principal */}
        <Card className="relative overflow-hidden border-0 bg-white shadow-2xl">
          {/* Selo de tempo limitado */}
          <div className="absolute right-4 top-4 z-10">
            <Badge className="border-0 bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <Clock className="mr-1 h-3 w-3" /> Oferta por tempo limitado
            </Badge>
          </div>

          <CardHeader className="space-y-4 pb-4 pt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Pacotão Completo: TODOS os cursos e materiais
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600">
                Pagamento único • Acesso vitalício • Conteúdo atualizado
              </p>
            </div>

            {/* Comparativo de preço */}
            <div className="mx-auto w-full max-w-md rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">De</p>
                  <p className="text-xl font-bold text-gray-400 line-through">
                    R$ 370,70
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500">Por</p>
                  <p className="text-3xl font-extrabold text-green-600">
                    R$ 97,90
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 text-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                  <Star className="h-3 w-3 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Acesso vitalício
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                  <Zap className="h-3 w-3 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Pagamento único
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Introdução */}
            <div className="text-center">
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                O que você vai receber nesse Pacotão? TUDO!
              </h4>
              <p className="text-gray-600">
                Todos os cursos, packs e materiais em um só pacote.
              </p>
            </div>

            {/* Lista de conteúdos incluídos */}
            <ul className="grid gap-3 md:grid-cols-2">
              {/* Dominando o Holyrics 1 */}
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Dominando o Holyrics — Parte 1
                </span>
              </li>
              {/* Dominando o Holyrics 2 */}
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Dominando o Holyrics — Parte 2
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Curso de Capacitação de mídia e comunicação para igrejas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Pack Fundos II (drive com mais de 150 backgrounds para
                  projeção)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Projeção Criativa (aula completa de como criar vídeos de
                  fundos com letras personalizadas no Canva e como inserir no
                  Holyrics)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100">
                  <Check className="h-4 w-4 text-cyan-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Identidade Visual Mensal (artes para rede social da igreja)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                  <Check className="h-4 w-4 text-rose-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Roteiro de Organização de culto e eventos (planilhas de
                  escalas de equipes, planilha financeira pra eventos e mais)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100">
                  <Check className="h-4 w-4 text-yellow-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Fundos de Projeção (40 fundos para projeção)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Materiais Criativos (arquivos digitais para mídia da igreja
                  como modelo de crachá, PowerPoint, placa de recepção, vídeos
                  de abertura...)
                </span>
              </li>
              <li className="flex items-start gap-3 md:col-span-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Check className="h-4 w-4 text-indigo-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Pacote Criativo (uma extensão dos Materiais Criativos com mais
                  artes, vídeos e tutorial de como criar vídeos de abertura de
                  culto, artes editáveis no Canva)
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link href="https://pay.hotmart.com/Q102640493L?bid=1761612398571">
                <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:from-green-600 hover:to-green-700">
                  <Tag className="mr-2 h-5 w-5" /> Garantir por R$ 97,90
                </Button>
              </Link>
            </div>

            {/* Garantia/observação */}
            <div className="border-t border-gray-100 pt-4 text-center">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-green-600">
                  ✓ Acesso imediato
                </span>{' '}
                • Conteúdo vitalício • Atualizações sem custo adicional
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BlackFridaySection;
