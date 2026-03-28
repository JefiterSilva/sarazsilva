import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Check, Clock, Star, Zap } from 'lucide-react';
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
        duracao: '09:46',
        concluida: false,
        descricao: 'COMO ADICIONAR MÚSICA, EDITAR TEMAS, FUNDO EM',
      },
      {
        id: 2,
        titulo:
          'Aula 2 - Inserir vídeos, imagens, áudios / Power Point e Anúncios',
        duracao: null,
        concluida: true,
        descricao: 'INSERIR VÍDEOS, IMAGENS, ÁUDIOS, POWERPOINT E ANÚNCIOS',
      },
      {
        id: 3,
        titulo: 'Planejamento de culto (planilha)',
        duracao: null,
        concluida: false,
        descricao: 'HTML',
        tipo: 'planilha',
      },
      {
        id: 4,
        titulo:
          'Aula 3 - Como colocar vários temas na mesma música e como deixar um tema padrão?',
        duracao: '06:48',
        concluida: false,
        descricao:
          'COMO COLOCAR VÁRIOS TEMAS DIFERENTES NUMA MÚSICA E COMO DEIXAR UM TEMA TODAS AS',
      },
      {
        id: 5,
        titulo:
          'Aula 4 - Como colocar fundo com letras personalizadas e configurar a letra como comentário?',
        duracao: '11:35',
        concluida: false,
        descricao:
          'FUNDO DE LETRA PERSONALIZADA E CONFIGURAÇÃO DA COMENTÁRIO NA T',
      },
      {
        id: 6,
        titulo: 'Aula 5 - Como organizar o culto dentro do Holyrics',
        duracao: null,
        concluida: true,
        descricao: 'COMO ORGANIZAR O CULTO DENTRO DO HOLYRICS (MÍDIA)',
      },
      {
        id: 7,
        titulo: 'Aula 6 - Como inserir novas fontes no Holyrics',
        duracao: '05:00',
        concluida: false,
        descricao: 'COMO COLOCAR F',
      },
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
        duracao: null,
        concluida: true,
        descricao: 'COMO CONFIGURAR TELA DE RETORNO DE PALCO COM TV P',
      },
      {
        id: 2,
        titulo: 'Aula 2 - Bíblia',
        duracao: null,
        concluida: true,
        descricao: 'BIBLIA VERSÕES, FUNDOS E LETRA',
      },
      {
        id: 3,
        titulo: 'Aula 3 - Utilizando o Aplicativo do Holyrics',
        duracao: null,
        concluida: true,
        descricao: 'UTILIZANDO O APLICATIVO NA PROJEÇÃO',
      },
      {
        id: 4,
        titulo: 'Aula 4 - Configurando a Bíblia e Música BILÍNGUE',
        duracao: null,
        concluida: true,
        descricao: 'CONFIGURAR A BIBLIA E MUSICA BILINGUE',
      },
      {
        id: 5,
        titulo: 'Aula 5 - Letra Automática com mp3',
        duracao: '08:25',
        concluida: false,
        descricao: 'LETRA AUTOMAT',
      },
      {
        id: 6,
        titulo: 'Aula 6 - Automação do Holyrics com som, luz e live (GATILHOS)',
        duracao: null,
        concluida: false,
        descricao: 'AUTOMAÇÃO NO HOLYRICS COM GATILHOS PARA SIM BUMNACAD',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950 px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Conteúdo dos Cursos</h1>
              <p className="text-sm text-gray-400">
                Combo da Projeção no Holyrics
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Segunda versão dos cards dos cursos */}
        <div className="mb-12 space-y-12">
          {/* Card do Curso Parte 1 - Versão Persuasiva */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-400/10"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl"></div>

            <CardHeader className="relative pb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-white">
                        {cursoParte1.titulo}
                      </h2>
                      <p className="text-lg text-blue-100">
                        Do Zero ao Intermediário • 8 Aulas Práticas
                      </p>
                    </div>
                  </div>

                  {/* Call-to-action destacado */}
                  <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-200">
                          PREÇO ESPECIAL
                        </p>
                        <p className="text-2xl font-bold text-white">
                          R$ 42,00
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-blue-200 line-through">
                          R$ 97,00
                        </p>
                        <p className="text-sm font-bold text-green-400">
                          57% OFF
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-6">
              {/* Benefícios principais */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    🎯 O que você vai aprender:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        Adicionar músicas e editar temas
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        Inserir vídeos, imagens e áudios
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        Adicionando novas fontes no programa
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        Organizar cultos completos
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    💎 Incluído no curso:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-blue-100">Acesso vitalício</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-blue-100">
                        Suporte direto com a Sara
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-blue-100">
                        Materiais complementares
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-blue-100">
                        Certificado de conclusão
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Urgência e escassez */}
              <div className="rounded-xl border border-red-400/30 bg-red-500/20 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      OFERTA POR TEMPO LIMITADO
                    </p>
                    <p className="text-sm text-red-200">
                      Preço especial válido apenas hoje!
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA principal */}
              <div className="text-center">
                <Link
                  href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-400 hover:shadow-blue-500/50">
                    <span className="relative z-10">QUERO COMEÇAR AGORA</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </Button>
                </Link>
                <p className="mt-2 text-sm text-blue-200">
                  ✅ Garantia de 7 dias ou seu dinheiro de volta
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card do Curso Parte 2 - Versão Persuasiva */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-green-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-green-400/10"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-400/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-green-300/10 blur-3xl"></div>

            <CardHeader className="relative pb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-white">
                        {cursoParte2.titulo}
                      </h2>
                      <p className="text-lg text-green-100">
                        Intermediário ao Avançado • 8 Aulas Praticas
                      </p>
                    </div>
                  </div>

                  {/* Call-to-action destacado */}
                  <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-200">
                          PREÇO ESPECIAL
                        </p>
                        <p className="text-2xl font-bold text-white">
                          R$ 42,00
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-green-200 line-through">
                          R$ 97,00
                        </p>
                        <p className="text-sm font-bold text-yellow-400">
                          57% OFF
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-6">
              {/* Benefícios principais */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    🚀 Técnicas Avançadas:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        Configurar TV de retorno com TV Box
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        Bíblia bilíngue e versões
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        Utilizando o aplicativo no celular
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        Automação com mesa digital Behringer x32
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    🎁 Bônus Exclusivos:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-green-100">Acesso vitalício</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-green-100">Suporte direto</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-green-100">
                        Certificado de conclusão
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA principal */}
              <div className="text-center">
                <Link
                  href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-2/A94024412O?sck=HOTMART_SITE&search=2042cdc2-7353-42c4-b28c-55373570108e&hotfeature=33"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group relative h-14 w-full overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-8 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-green-400 hover:shadow-green-500/50">
                    <span className="relative z-10">
                      QUERO DOMINAR O HOLYRICS
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </Button>
                </Link>
                <p className="mt-2 text-sm text-green-200">
                  ✅ Garantia de 7 dias ou seu dinheiro de volta
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          {/* Card do COMBO - Versão Persuasiva */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/25 hover:shadow-green-500/25">
            {/* Elementos visuais de destaque */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-green-400/10"></div>
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-green-300/10 blur-3xl"></div>

            {/* Badge "MAIS VENDIDO" */}
            <div className="absolute -right-0 -top-0 z-10 -translate-x-1/2 transform">
              <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 shadow-lg">
                <Star className="h-4 w-4 text-white" />
                <span className="text-sm font-bold text-white">
                  MAIS VENDIDO
                </span>
              </div>
            </div>

            <CardHeader className="relative pb-6 pt-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-white">
                        COMBO COMPLETO HOLYRICS
                      </h2>
                      <p className="text-lg text-blue-100">
                        Parte 1 + Parte 2 • Do Zero ao Avançado • 16 Aulas
                      </p>
                    </div>
                  </div>

                  {/* Call-to-action destacado */}
                  <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-200">
                          ECONOMIA MÁXIMA
                        </p>
                        <p className="text-3xl font-bold text-white">
                          R$ 84,00
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-blue-200 line-through">
                          R$ 194,00
                        </p>
                        <p className="text-sm font-bold text-green-400">
                          ECONOMIA DE R$ 110,00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-6">
              {/* Benefícios principais */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    🚀 O que está incluído:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        <strong>Parte 1:</strong> Básico ao Intermediário (8
                        aulas)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        <strong>Parte 2:</strong> Intermediário ao Avançado (8
                        aulas)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-blue-100">
                        Acesso vitalício aos dois cursos
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                      <span className="text-green-100">
                        Certificado completo
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="mb-4 text-xl font-bold text-white">
                    🎁 Exclusivos do Combo:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-blue-100">Suporte direto.</span>
                    </li>

                    <li className="flex items-start space-x-3">
                      <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                      <span className="text-green-100">
                        Atualizações gratuitas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comparação de preços */}
              <div className="rounded-xl border border-yellow-400/30 bg-yellow-500/20 p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      COMPRE SEPARADO: R$ 84,00 + R$ 84,00 = R$ 168,00
                    </p>
                    <p className="text-sm text-yellow-200">
                      COMPRE O COMBO: R$ 84,00 (Economia de R$ 84,00!)
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA principal */}
              <div className="text-center">
                <Link
                  href="https://pay.hotmart.com/S94768202Q?bid=1722861105152"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="group relative h-16 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-green-500 px-8 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-green-400 hover:shadow-blue-500/50 hover:shadow-green-500/50">
                    <span className="relative z-10">
                      QUERO O COMBO COMPLETO
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </Button>
                </Link>
                <p className="mt-2 text-sm text-blue-200">
                  ✅ Garantia de 7 dias ou seu dinheiro de volta • Acesso
                  imediato
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Opções de Compra */}
        <div className="mt-12 space-y-6">
          <h3 className="text-center text-2xl font-bold">Escolha sua opção</h3>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Curso Parte 1 */}
            <Card className="border-gray-600 bg-gray-800 transition-colors hover:border-blue-500">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <span className="font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold text-blue-400">Parte 1</h4>
                <p className="text-gray-400">Básico ao Intermediário</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="text-3xl font-bold text-white">R$ 42,00</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 7 aulas práticas</li>
                  <li>• Acesso vitalício</li>
                  <li>• Suporte direto</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 font-bold hover:bg-blue-700">
                      Comprar Parte 1
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Combo Completo */}

            <Card className="relative border-0 bg-gradient-to-br from-blue-600 to-green-600">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                <Badge className="bg-yellow-500 font-bold text-black">
                  <Star className="mr-1 h-3 w-3" />
                  MAIS VENDIDO
                </Badge>
              </div>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <span className="font-bold text-blue-600">1+2</span>
                </div>
                <h4 className="text-xl font-bold text-white">Combo Completo</h4>
                <p className="text-blue-100">Básico ao Avançado</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="text-3xl font-bold text-white">R$ 84,00</div>

                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• 16 aulas práticas</li>
                  <li>• Acesso vitalício</li>
                  <li>• Suporte direto</li>
                  <li>• Certificado completo</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://pay.hotmart.com/S94768202Q?bid=1722861105152"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-white font-bold text-blue-600 hover:bg-gray-100">
                      <Zap className="mr-2 h-4 w-4" />
                      COMPRAR COMBO
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Curso Parte 2 */}
            <Card className="border-gray-600 bg-gray-800 transition-colors hover:border-green-500">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                  <span className="font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold text-green-400">Parte 2</h4>
                <p className="text-gray-400">Intermediário ao Avançado</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="text-3xl font-bold text-white">R$ 42,00</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 6 aulas práticas</li>
                  <li>• Acesso vitalício</li>
                  <li>• Suporte direto</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-2/A94024412O?sck=HOTMART_SITE&search=2042cdc2-7353-42c4-b28c-55373570108e&hotfeature=33"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 font-bold hover:bg-green-700">
                      Comprar Parte 2
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboProjecaoPage;
