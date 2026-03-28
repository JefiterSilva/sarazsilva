'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="mx-auto max-w-4xl">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <Badge className="select-none bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                  🔥 Curso Mais Vendido
                </Badge>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Combo Holyrics
                </h2>
                <p className="text-lg text-blue-100">
                  Aprenda a usar o software de apresentação mais poderoso para
                  igrejas. Do básico ao avançado em um curso prático e completo.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <span>Mais de 50 aulas práticas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <span>Certificado de conclusão</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <span>Suporte direto comigo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <span>Acesso vitalício</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-yellow-400 font-semibold text-yellow-900 hover:bg-yellow-300"
                    >
                      Acessar agora
                    </Button>
                  </a>
                  <a href="/combo-projecao">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
                    >
                      Ver Conteúdo do Curso
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">Preço normal:</span>
                    <span className="text-lg text-blue-200 line-through">
                      R$ 497
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      Oferta especial:
                    </span>
                    <span className="text-3xl font-bold text-yellow-400">
                      R$ 297
                    </span>
                  </div>
                  <div className="text-center">
                    <Badge className="animate-pulse bg-red-500 hover:bg-red-600">
                      ⏰ Oferta por tempo limitado
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
