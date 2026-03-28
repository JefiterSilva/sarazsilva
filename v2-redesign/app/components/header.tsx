'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative flex w-full items-center justify-center overflow-hidden bg-[#09090b] pb-32 pt-20 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#09090b] to-[#09090b]"></div>
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Vagas Abertas para a Nova Turma
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Aprenda Projeção de Igreja <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              DO ZERO AO PROFISSIONAL!
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl lg:mx-0">
            Domine o Holyrics, crie artes incríveis e torne a comunicação da sua
            igreja mais relevante, transformando ideias em ações que inspiram
            vidas.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
            <Button
              onClick={scrollToContent}
              size="lg"
              className="h-14 w-full rounded-xl bg-green-500 px-8 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] transition-all duration-300 hover:scale-105 hover:bg-green-600 sm:w-auto"
            >
              QUERO GARANTIR MINHA VAGA
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 w-full rounded-xl border-slate-700 bg-transparent px-8 text-slate-300 hover:bg-slate-800 hover:text-white sm:w-auto"
            >
              <Link href="/combo-projecao">
                <span className="flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Ver Conteúdo Completo
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm font-medium text-slate-400 lg:justify-start">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Acesso Vitalício
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Certificado Incluso
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              +2100 Alunos
            </div>
          </div>
        </div>

        {/* Right Content / Profile */}
        <div className="relative w-full max-w-md flex-1 lg:max-w-none">
          <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl md:aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
            <Image
              src="/perfil2.jpeg"
              alt="Sara Silva"
              fill
              className="object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xl font-bold shadow-lg">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sara Silva</h3>
                  <p className="text-sm font-medium text-blue-400">
                    Especialista em Projeção
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -right-6 top-12 z-20 hidden animate-bounce rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <div className="text-yellow-400">★ ★ ★ ★ ★</div>
              <span className="font-bold text-white">5.0</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">Avaliação dos alunos</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
