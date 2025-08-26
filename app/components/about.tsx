import { Card } from '@/components/ui/card';
import { BookMarked, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            O que você vai aprender nos cursos adquirindo o <br />
            <span className="text-blue-600">COMBO DA PROJEÇÃO?</span>
          </h3>
          <p className="text-lg text-gray-600">
            Um curso completo e prático para você dominar todas as
            funcionalidades do Holyrics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 transition-shadow hover:shadow-lg">
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <BookMarked className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">
                1 Primeiros passos:
              </h4>
              <p className="text-sm text-gray-600">
                criando novas músicas, inserindo novos temas, adicionando vídeos
                e imagens, utilizando Powerpoint e apresentação de anúncios.
              </p>
            </div>
          </Card>

          <Card className="p-6 transition-shadow hover:shadow-lg">
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">2 Evoluindo:</h4>
              <p className="text-sm font-semibold text-gray-600">
                Como inserir novas fontes, utilizando temas com letras
                personalizadas, criar um cronograma do culto nas mídias, como
                configurar uma tv de retorno via rede.
              </p>
            </div>
          </Card>

          <Card className="p-6 transition-shadow hover:shadow-lg">
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Rocket className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">3 Avançado:</h4>
              <p className="text-sm text-gray-600">
                Utilizar a bíblia e letras no aplicativo do Holyrics para
                celular, Bíblia e músicas bilíngue, criando automação da
                projeção com a luz, live (vmix) e mesa digital (behringer ou
                soundcraft)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
