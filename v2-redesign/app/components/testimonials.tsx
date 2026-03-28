import { Card } from '@/components/ui/card';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
            O que os alunos estão dizendo
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                <p className="italic text-gray-600">
                  "Curso incrível! Agora consigo operar o Holyrics com total
                  confiança. A didática da Sara é excepcional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-sm font-semibold">
                      Pastor João Silva
                    </div>
                    <div className="text-xs text-gray-500">
                      Igreja Batista Central
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                <p className="italic text-gray-600">
                  "Transformou completamente nossa apresentação nos cultos.
                  Recomendo para toda equipe de mídia!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-sm font-semibold">Maria Santos</div>
                    <div className="text-xs text-gray-500">Líder de Mídia</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
