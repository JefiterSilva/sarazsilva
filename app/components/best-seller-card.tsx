import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award, Check, Clock, Star, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const BestSellerCard = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-16"
      id="main-content"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <Badge variant="destructive" className="mb-4 text-sm font-semibold">
            <Star className="mr-1 h-4 w-4" />
            CURSO MAIS VENDIDO
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl">
            COMBO DA PROJEÇÃO
          </h2>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            no Holyrics
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Domine o software da projeção da sua igreja desde o básico ao
            avançado. Treine sua equipe e eleve seu nível de projeção com o
            curso prático e completo.
          </p>
        </div>

        <Card className="relative overflow-hidden border-0 bg-white shadow-2xl">
          {/* Badge de oferta especial */}
          <div className="absolute right-4 top-4 z-10">
            <Badge className="border-0 bg-gradient-to-r from-red-500 to-pink-500 text-white">
              <Clock className="mr-1 h-3 w-3" />
              Oferta por tempo limitado
            </Badge>
          </div>

          <CardHeader className="pb-4 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Oferta especial:{' '}
                  <span className="text-3xl text-green-600">R$ 84,00</span>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  <span className="text-gray-400 line-through">
                    De R$ 197,00
                  </span>{' '}
                  •
                  <span className="ml-1 font-semibold text-green-600">
                    57% de desconto
                  </span>
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Benefícios */}
            <div className="grid gap-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Aulas práticas e gravadas
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Award className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Certificado de conclusão
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Suporte direto comigo
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <Zap className="h-4 w-4 text-orange-600" />
                </div>
                <span className="font-medium text-gray-700">
                  Acesso vitalício
                </span>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="https://pay.hotmart.com/S94768202Q?bid=1722861105152"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  ACESSAR AGORA
                </Button>
              </Link>

              <Link href="/combo-projecao">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-2 border-gray-300 py-3 text-lg font-semibold transition-all duration-300 hover:border-gray-400"
                >
                  VER CONTEÚDO DO CURSO
                </Button>
              </Link>
            </div>

            {/* Garantia */}
            <div className="border-t border-gray-100 pt-4 text-center">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-green-600">
                  ✓ Garantia de 7 dias
                </span>{' '}
                • Se não ficar satisfeito, devolvemos 100% do seu dinheiro
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BestSellerCard;
