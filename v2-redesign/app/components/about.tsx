import { Card } from '@/components/ui/card';
import { BookMarked, Rocket, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="relative w-full py-16">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-12 text-center">
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-500">
            Conteúdo do Curso
          </h2>
          <h3 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            O que você vai aprender no <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              COMBO DA PROJEÇÃO?
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Um método passo a passo, completo e prático para você dominar todas
            as funcionalidades do Holyrics e transformar a mídia da sua igreja.
          </p>
        </div>

        <div className="grid gap-6 text-left md:grid-cols-3">
          <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/50">
            <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transform bg-blue-500/50 transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                <BookMarked className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-white">
                  1. Primeiros passos
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Criando novas músicas, inserindo novos temas, adicionando
                  vídeos e imagens, utilizando Powerpoint e apresentação de
                  anúncios.
                </p>
              </div>
            </div>
          </Card>

          <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/50">
            <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transform bg-purple-500/50 transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 transition-colors group-hover:bg-purple-500/20">
                <Sparkles className="h-7 w-7 text-purple-400" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-white">
                  2. Evoluindo
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Como inserir novas fontes, utilizar temas com letras
                  personalizadas, criar cronograma do culto nas mídias e
                  configurar tv de retorno via rede.
                </p>
              </div>
            </div>
          </Card>

          <Card className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/50">
            <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transform bg-green-500/50 transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="space-y-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 transition-colors group-hover:bg-green-500/20">
                <Rocket className="h-7 w-7 text-green-400" />
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-white">
                  3. Avançado
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Bíblia e letras no aplicativo, músicas bilíngue, automação com
                  luz, live (vMix) e mesa digital (Behringer ou Soundcraft).
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
