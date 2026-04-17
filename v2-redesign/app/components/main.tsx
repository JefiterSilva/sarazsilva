import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'IDENTIDADE VISUAL MENSAL',
    description:
      'A identidade visual é algo que fica muito mais harmonioso quando é bem planejada, e que tal uma ajuda com isso?',
    image: '/Identidade.png',
    color: 'bg-orange-500',
    price: 14.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a',
  },
  {
    id: 2,
    title: 'PACK FUNDOS ||',
    description:
      'Um pacote de fundos específicos para utilizar na projeção da sua igreja.',
    image: '/PACKFUNDOS2.png',
    color: 'bg-blue-400',
    price: 39.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y',
  },
  {
    id: 3,
    title: 'FUNDOS PARA PROJEÇÃO',
    description:
      'Fundos de Projeção é a primeira versão de backgrounds. Contém 40 fundos estáticos e dinâmicos incluindo algumas frases de músicas.',
    image: '/fundos_pro.png',
    color: 'bg-purple-400',
    price: 25.0,
    link: 'https://pay.hotmart.com/R95452686V?bid=1728743323750',
  },
  {
    id: 4,
    title: 'PACOTE CRIATIVO',
    description:
      'Chegou a segunda edição dos Materiais Criativos e agora com mais artes para eventos e cultos especiais.',
    image: '/pacote-criativo.png',
    color: 'bg-blue-300',
    price: 25.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-pacote-criativo-wbsra/W96708239C',
  },
  {
    id: 5,
    title: 'CAPACITAÇÃO PARA MIDIA E COMUNICAÇÃO',
    description:
      'Essa imersão contém aulas práticas com conteúdos exclusivos para equipe de mídia e comunicação das igrejas.',
    image: '/capacitacao.png',
    color: 'bg-cyan-700',
    price: 109.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/capacitacao-imersao-midia-para-igrejas/P93420727E',
  },
  {
    id: 6,
    title: 'ROTEIRO E ORGANIZAÇÃO DE CULTO',
    description:
      'Ferramentas para ajudar na organização e planejamento de cultos e eventos da igreja.',
    image: '/Identidaderoteiro.png',
    color: 'bg-gray-400',
    price: 15.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/roteiro-de-organizacao-de-culto/S96063596M',
  },
  {
    id: 7,
    title: 'Materiais Criativos',
    description:
      'Materiais prontos para usar na sua igreja como artes, videos de abertura, vídeo de avisos, crachás de voluntários e mais.',
    image: '/criativo.jpg',
    color: 'bg-orange-500',
    price: 22.0,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/materiais-criativos/I94921264N',
  },
  {
    id: 8,
    title: 'PROJEÇÃO CRIATIVA no Canva',
    description:
      'Crie fundos com letras personalizadas no Canva para a projeção das músicas da sua igreja.',
    image: '/Canva.jpg',
    color: 'bg-purple-300',
    price: 19.9,
    link: 'https://hotmart.com/pt-br/marketplace/produtos/projecao-criativa-aprendizado-na-pratica/C102196297Y',
  },
];

const Main = () => {
  return (
    <main className="w-full">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link href={service.link} key={service.id} className="group block">
            <Card className="relative h-full overflow-hidden border-slate-800 bg-slate-900/40 transition-all duration-300 hover:bg-slate-800/80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-transparent to-green-600/0 transition-colors group-hover:from-blue-600/5 group-hover:to-green-600/5"></div>

              <CardContent className="p-6">
                {typeof service.price === 'number' && (
                  <Badge className="absolute right-4 top-4 bg-slate-800/90 text-white shadow-[0_0_15px_-3px_rgba(59,130,246,0.25)] hover:bg-slate-800">
                    R$ {service.price.toFixed(2).replace('.', ',')}
                  </Badge>
                )}

                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <div
                    className={`h-24 w-24 shrink-0 rounded-2xl p-1 ${service.color} relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Image
                      src={service.image ?? '/placeholder.png'}
                      alt={service.title}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                      {service.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <div className="flex items-center pt-2 text-sm font-semibold text-blue-500 transition-colors group-hover:text-green-400">
                      Saber mais{' '}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Main;
