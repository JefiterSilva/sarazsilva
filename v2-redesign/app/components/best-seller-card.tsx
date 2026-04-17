import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, Check, Clock, Star, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const BestSellerCard = () => {
  return (
    <section className="relative w-full" id="combo-projecao">
      <div className="mx-auto max-w-5xl">
        <Card className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
          {/* Top glow */}
          <div className="absolute left-1/2 top-0 h-[2px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute left-1/2 top-0 h-[20px] w-[40%] -translate-x-1/2 bg-blue-500/20 blur-xl"></div>

          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-green-500/10 blur-[100px]"></div>

          <div className="relative z-10 grid gap-8 p-5 sm:p-7 md:grid-cols-2 md:p-12">
            {/* Left Col - Info */}
            <div className="space-y-6">
              <Badge
                variant="destructive"
                className="mb-4 border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-500"
              >
                <Star className="mr-1 h-4 w-4 fill-current" />
                CURSO MAIS VENDIDO
              </Badge>

              <div>
                <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-4xl">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    COMBO DA PROJEÇÃO
                  </span>
                  <br />
                  no Holyrics
                </h2>
                <p className="mt-4 text-center text-lg text-slate-400">
                  Domine o software da projeção da sua igreja desde o básico ao
                  avançado. Treine sua equipe e eleve seu nível de projeção com
                  o curso prático e completo.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  {
                    icon: Check,
                    text: 'Aulas práticas e gravadas',
                    color: 'text-green-400',
                    bg: 'bg-green-400/10',
                  },
                  {
                    icon: Award,
                    text: 'Certificado de conclusão',
                    color: 'text-blue-400',
                    bg: 'bg-blue-400/10',
                  },
                  {
                    icon: Users,
                    text: 'Suporte direto comigo',
                    color: 'text-purple-400',
                    bg: 'bg-purple-400/10',
                  },
                  {
                    icon: Zap,
                    text: 'Acesso vitalício',
                    color: 'text-orange-400',
                    bg: 'bg-orange-400/10',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${item.bg}`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <span className="text-lg font-medium text-slate-200">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col - Pricing */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-600/5 to-green-600/5"></div>
              <div className="relative flex h-full flex-col justify-center space-y-6 p-5 sm:p-7 md:p-8">
                <div className="flex items-center justify-center">
                  <Badge className="animate-pulse bg-red-500 px-4 py-1.5 text-sm text-white hover:bg-red-600">
                    <Clock className="mr-2 h-4 w-4" />
                    Oferta por tempo limitado
                  </Badge>
                </div>

                <div className="space-y-2">
                  <p className="text-center text-lg text-slate-400 line-through">
                    De R$ 197,00 por apenas
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-bold text-green-400 md:text-3xl">
                      R$
                    </span>
                    <span className="text-2xl font-black tracking-tighter text-green-400 sm:text-6xl md:text-4xl">
                      84
                    </span>
                    <span className="text-2xl font-bold text-green-400 md:text-3xl">
                      ,00
                    </span>
                  </div>
                  <p className="pt-2 text-center text-sm font-semibold text-green-500">
                    57% de desconto aplicado
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-16 w-full rounded-xl bg-green-500 px-4 text-base font-bold text-white shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-600 sm:text-xl"
                  >
                    <Link
                      href="https://pay.hotmart.com/S94768202Q?bid=1722861105152"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap className="mr-2 h-6 w-6" />
                      COMPRAR AGORA
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 w-full rounded-xl border-slate-700 bg-transparent text-lg font-bold text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-white"
                  >
                    <Link href="/combo-projecao">
                      <span className="flex items-center">
                        VER GRADE DO CURSO
                      </span>
                    </Link>
                  </Button>

                  <p className="flex items-center justify-center gap-2 pt-2 text-center text-sm text-slate-400">
                    <Check className="h-4 w-4 text-green-500" />
                    Compra 100% segura pela Hotmart
                  </p>
                </div>

                <div className="mt-2 border-t border-slate-800 pt-6 text-center">
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-white">
                      Garantia Incondicional de 7 dias
                    </span>{' '}
                    <br />
                    Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BestSellerCard;
