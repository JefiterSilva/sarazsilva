import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    link: 'https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a',
  },
  {
    id: 2,
    title: 'PACK FUNDOS ||',
    description:
      'Um pacote de fundos específicos para utilizar na projeção da sua igreja.',
    image: '/PACKFUNDOS2.png',
    color: 'bg-blue-400',
    popular: true,
    promotion: {
      originalPrice: 55.0,
      promotionalPrice: 24.9,
      endDate: 'Fim de mês',
    },
    link: 'https://hotmart.com/pt-br/marketplace/produtos/pack-fundos-ii/J98412461Y',
  },
  {
    id: 3,
    title: 'FUNDOS PARA PROJEÇÃO',
    description:
      'Fundos de Projeção é a primeira versão de backgrounds. Contém 40 fundos estaticos e dinamicos incluindo algumas frases de músicas como É ELE, Bondade de Deus e Santo pra Sempre.',
    image: '/fundos_pro.png',
    color: 'bg-purple-400',
    popular: false,
    promotion: {
      originalPrice: 55.0,
      promotionalPrice: 24.9,
      endDate: 'Fim de mês',
    },
    link: 'https://pay.hotmart.com/R95452686V?bid=1728743323750',
  },
  {
    id: 4,
    title: 'PACOTE CRIATIVO',
    description:
      'Chegou a segunda edição dos Materiais Criativos e agora com mais artes para eventos e cultos especiais.',
    image: '/pacote-criativo.png',
    color: 'bg-blue-300',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/hagsxd-pacote-criativo-wbsra/W96708239C',
  },
  {
    id: 5,
    title: 'CAPACITAÇÃO PARA MIDIA E COMUNICAÇÃO',
    description:
      'Essa imersão contém aulas práticas com conteúdos exclusivos para equipe de mídia e comunicação das igrejas.',
    image: '/capacitacao.png',
    color: 'bg-cyan-700',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/capacitacao-imersao-midia-para-igrejas/P93420727E',
  },
  {
    id: 6,
    title: 'ROTEIRO E ORGANIZAÇÃO DE CULTO',
    description:
      'Ferramentas para ajudar na organização e planejamento de cultos e eventos da igreja.',
    image: '/Identidaderoteiro.png',
    color: 'bg-gray-400',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/roteiro-de-organizacao-de-culto/S96063596M',
  },
  {
    id: 7,
    title: 'Materiais Criativos',
    description:
      'Materiais prontos para usar na sua igreja como artes, videos de abertura, vídeo de avisos, crachas de voluntários, placas de recepção entre outros.',
    image: '/criativo.jpg',
    color: 'bg-orange-500',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/materiais-criativos/I94921264N',
  },
];

const Main = () => {
  return (
    <main className="container mx-auto px-4 pb-12">
      <div className="mx-auto w-full max-w-4xl space-y-4">
        {services.map((service) => {
          const IconComponent = service.image;
          return (
            <Card
              key={service.id}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <Link href={service.link}>
                  <Button
                    variant="ghost"
                    className="relative h-auto w-full justify-start p-6 text-left hover:bg-gray-50"
                  >
                    {service.popular && (
                      <Badge
                        className={`absolute -right-2 -top-2 animate-pulse bg-gradient-to-r from-red-600 to-orange-500 shadow-lg hover:animate-none hover:from-orange-500 hover:to-red-600 ${service.promotion ? 'min-w-[180px] p-2 font-bold tracking-tight' : ''}`}
                      >
                        {service.promotion ? (
                          <div className="flex items-center justify-center gap-2 text-white">
                            <span className="text-xs uppercase">PROMOÇÃO:</span>
                            <span className="text-xs line-through opacity-80">
                              R$
                              {service.promotion.originalPrice
                                .toFixed(2)
                                .replace('.', ',')}
                            </span>
                            <span className="text-sm font-extrabold">
                              R$
                              {service.promotion.promotionalPrice
                                .toFixed(2)
                                .replace('.', ',')}
                              !
                            </span>
                          </div>
                        ) : (
                          'Popular'
                        )}
                      </Badge>
                    )}

                    <div className="flex w-full items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`${service.color} flex h-24 w-24 items-center justify-center rounded-xl p-0.5 text-white`}
                      >
                        <Image
                          src={service.image ?? '/placeholder.png'}
                          alt={service.title}
                          width={124}
                          height={124}
                          className="rounded-xl object-fill"
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-wrap font-semibold text-gray-900 md:text-lg">
                          {service.title}
                        </h3>
                        <p className="text-wrap text-sm text-gray-500">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="text-gray-400 transition-colors group-hover:text-gray-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
