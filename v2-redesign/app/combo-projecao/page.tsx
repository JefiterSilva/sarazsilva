import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ArrowLeft,
  BookOpen,
  Check,
  Clock,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const ComboProjecaoPage = () => {
  const cursoParte1 = {
    titulo: 'Dominando o Holyrics parte 1',
    progresso: '2/8 aulas concluídas',
    cor: 'blue',
    aulas: [
      {
        id: 1,
        titulo:
          'Aula 1 - Como adicionar música, editar temas e colocar fundos em movimento?',
      },
      {
        id: 2,
        titulo:
          'Aula 2 - Inserir vídeos, imagens, áudios / Power Point e Anúncios',
      },
      { id: 3, titulo: 'Planejamento de culto (planilha)' },
      {
        id: 4,
        titulo:
          'Aula 3 - Como colocar vários temas na mesma música e como deixar um tema padrão?',
      },
      {
        id: 5,
        titulo:
          'Aula 4 - Como colocar fundo com letras personalizadas e configurar a letra como comentário?',
      },
      { id: 6, titulo: 'Aula 5 - Como organizar o culto dentro do Holyrics' },
      { id: 7, titulo: 'Aula 6 - Como inserir novas fontes no Holyrics' },
    ],
  };

  const cursoParte2 = {
    titulo: 'Dominando o Holyrics parte 2',
    progresso: '5/6 aulas concluídas',
    cor: 'green',
    aulas: [
      {
        id: 1,
        titulo: 'Aula 1 - Como configurar a tv de retorno utilizando TV BOX',
      },
      { id: 2, titulo: 'Aula 2 - Bíblia' },
      { id: 3, titulo: 'Aula 3 - Utilizando o Aplicativo do Holyrics' },
      { id: 4, titulo: 'Aula 4 - Configurando a Bíblia e Música BILÍNGUE' },
      { id: 5, titulo: 'Aula 5 - Letra Automática com mp3' },
      {
        id: 6,
        titulo: 'Aula 6 - Automação do Holyrics com som, luz e live (GATILHOS)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#09090b] font-sans text-slate-50 selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#09090b]/80 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar
              </Button>
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">
                Conteúdo dos Cursos
              </h1>
              <p className="text-sm text-slate-400">
                Combo da Projeção no Holyrics
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl gap-12 px-4 py-12">
        {/* Header Title */}
        <div className="mb-16 space-y-4 text-center">
          <Badge className="border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm uppercase tracking-wider text-blue-400">
            Grade Curricular Completa
          </Badge>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Tudo o que você vai{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              aprender
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Conheça o conteúdo detalhado de cada módulo do curso e descubra como
            vamos transformar a projeção da sua igreja.
          </p>
        </div>

        {/* Cursos em Destaque (Parte 1 e 2) */}
        <div className="mb-24 grid gap-8 md:grid-cols-2">
          {/* Card do Curso Parte 1 */}
          <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:bg-slate-800/50">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

            <CardHeader className="relative border-b border-slate-800/50 pb-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <BookOpen className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {cursoParte1.titulo}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    Do Zero ao Intermediário • 8 Aulas Práticas
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative pt-6">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  Grade de Aulas:
                </h4>
                <ul className="space-y-3">
                  {cursoParte1.aulas.map((aula, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-slate-300"
                    >
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-[10px] font-bold text-slate-400">
                        {idx + 1}
                      </div>
                      <span className="text-sm leading-relaxed">
                        {aula.titulo}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Card do Curso Parte 2 */}
          <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:bg-slate-800/50">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-green-600 to-green-400"></div>
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl"></div>

            <CardHeader className="relative border-b border-slate-800/50 pb-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                  <Zap className="h-7 w-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {cursoParte2.titulo}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green-400">
                    Intermediário ao Avançado • 8 Aulas Práticas
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative pt-6">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                  Grade de Aulas:
                </h4>
                <ul className="space-y-3">
                  {cursoParte2.aulas.map((aula, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-slate-300"
                    >
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-[10px] font-bold text-slate-400">
                        {idx + 1}
                      </div>
                      <span className="text-sm leading-relaxed">
                        {aula.titulo}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MAIN OFFER - COMBO */}
        <div className="relative mb-24 mt-24 md:mt-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-green-600/20 blur-3xl"></div>

          <Card className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
            <div className="absolute left-1/2 top-0 h-[2px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

            <div className="absolute right-0 top-0 z-20">
              <div className="flex items-center gap-1 rounded-bl-xl bg-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
                <Clock className="h-3 w-3" /> OFERTA POR TEMPO LIMITADO
              </div>
            </div>

            <div className="mt-10 grid gap-0 md:grid-cols-5">
              {/* Info Area */}
              <div className="border-b border-slate-800 p-8 md:col-span-3 md:border-b-0 md:border-r md:p-10">
                <Badge className="mb-4 border border-green-500/20 bg-green-500/10 text-green-400">
                  <Star className="mr-1 h-3 w-3 fill-current" /> MELHOR
                  CUSTO-BENEFÍCIO
                </Badge>

                <h3 className="mb-2 text-3xl font-black text-white md:text-4xl">
                  COMBO COMPLETO HOLYRICS
                </h3>
                <p className="mb-8 text-lg text-slate-400">
                  Leve a <strong>Parte 1 + Parte 2</strong> com um super
                  desconto e domine a projeção do básico ao avançado.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Check,
                      text: 'Acesso a todas as 16 aulas práticas',
                    },
                    {
                      icon: ShieldCheck,
                      text: 'Acesso vitalício e atualizações',
                    },
                    { icon: Star, text: 'Suporte direto para tirar dúvidas' },
                    { icon: Zap, text: 'Certificado de conclusão completo' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-slate-200"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                        <item.icon className="h-4 w-4 text-green-400" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Area */}
              <div className="flex flex-col items-center justify-center bg-slate-950/50 p-8 text-center md:col-span-2 md:p-10">
                <p className="mb-2 text-white line-through">
                  De R$ 194,00 por apenas
                </p>
                <div className="mb-2 flex items-start justify-center gap-1">
                  <span className="mt-2 text-2xl font-bold text-green-400">
                    R$
                  </span>
                  <span className="text-6xl font-black tracking-tighter text-green-400">
                    84
                  </span>
                  <span className="mt-2 text-2xl font-bold text-green-400">
                    ,00
                  </span>
                </div>
                <Badge className="mb-8 border-0 bg-green-500/20 text-green-400 hover:bg-green-500/20">
                  Economia de R$ 110,00!
                </Badge>

                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full rounded-xl bg-green-500 text-lg font-bold text-white shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] transition-all hover:scale-105 hover:bg-green-600"
                >
                  <Link
                    href="https://pay.hotmart.com/S94768202Q?bid=1722861105152"
                    target="_blank"
                  >
                    QUERO O COMBO AGORA
                  </Link>
                </Button>
                <p className="mt-4 flex items-center justify-center gap-1 text-xs text-white">
                  <ShieldCheck className="h-3 w-3" /> Garantia incondicional de
                  7 dias
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Comprar Separado */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-white">
            Prefere comprar separado?
          </h3>
          <p className="text-slate-400">
            Você também pode adquirir os módulos individualmente.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Option 1 */}
          <Card className="flex flex-col justify-between border border-slate-800 bg-slate-900/30 p-6 transition-colors hover:border-blue-500/50">
            <div>
              <h4 className="mb-1 text-xl font-bold text-white">
                Apenas Parte 1
              </h4>
              <p className="mb-4 text-sm text-white">Básico ao Intermediário</p>
              <p className="mb-6 text-3xl font-bold text-blue-400">R$ 42,00</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-full border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <Link
                href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I"
                target="_blank"
              >
                Comprar Parte 1
              </Link>
            </Button>
          </Card>

          {/* Option 2 */}
          <Card className="flex flex-col justify-between border border-slate-800 bg-slate-900/30 p-6 transition-colors hover:border-green-500/50">
            <div>
              <h4 className="mb-1 text-xl font-bold text-white">
                Apenas Parte 2
              </h4>
              <p className="mb-4 text-sm text-white">
                Intermediário ao Avançado
              </p>
              <p className="mb-6 text-3xl font-bold text-green-400">R$ 42,00</p>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-full border-slate-700 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
            >
              <Link
                href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-2/A94024412O?sck=HOTMART_SITE&search=2042cdc2-7353-42c4-b28c-55373570108e&hotfeature=33"
                target="_blank"
              >
                Comprar Parte 2
              </Link>
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ComboProjecaoPage;
