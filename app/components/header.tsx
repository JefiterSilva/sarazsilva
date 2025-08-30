'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Award, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Logo from './logo';

const Header = () => {
  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-green-600/10"></div>
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="flex flex-col items-center space-y-6 text-center md:space-y-8">
            {/* Profile Image with enhanced styling */}
            <div className="group relative">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl transition-all duration-500 group-hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40">
                <Image
                  src="/perfil.jpg"
                  alt="Sara Silva - Especialista em Projeção"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
              {/* Logo indicator */}
              <div className="absolute -bottom-2 -right-2">
                <Logo size="sm" showText={false} />
              </div>
              {/* Floating elements */}
              <div className="absolute -left-4 -top-4 h-6 w-6 rounded-full bg-blue-500/30 blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 h-6 w-6 rounded-full bg-green-500/30 blur-sm"></div>
            </div>

            {/* Profile Info with enhanced typography */}
            <div className="space-y-3 px-4">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  @sarazsilva
                </h1>
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <span className="text-lg font-medium text-gray-300 md:text-xl">
                    Especialista em Projeção
                  </span>
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                </div>
              </div>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                <strong className="text-white">
                  Líder de Mídia e Comunicação
                </strong>{' '}
                - Ajudo ministérios da mídia e comunicação a se tornarem mais
                relevantes e impactantes, transformando ideias em ações que
                inspiram e alcançam vidas através da tecnologia de projeção.
              </p>
            </div>

            {/* Stats with modern design */}
            <div className="grid grid-cols-3 gap-3 py-4 md:gap-6 md:py-6">
              <div className="group space-y-2">
                <div className="flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 md:h-16 md:w-16">
                    <Users className="h-5 w-5 text-blue-400 md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="text-lg font-bold text-white md:text-2xl">
                  900+
                </div>
                <div className="text-xs text-gray-300 md:text-sm">
                  Igrejas antedidas com o Pack de Fundos
                </div>
              </div>
              <div className="group space-y-2">
                <div className="flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/20 md:h-16 md:w-16">
                    <Award className="h-5 w-5 text-green-400 md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="text-lg font-bold text-white md:text-2xl">
                  1000+
                </div>
                <div className="text-xs text-gray-300 md:text-sm">
                  alunos no curso da projeção{' '}
                </div>
              </div>
              <div className="group space-y-2">
                <div className="flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/20 md:h-16 md:w-16">
                    <Star className="h-5 w-5 text-purple-400 md:h-8 md:w-8" />
                  </div>
                </div>
                <div className="text-lg font-bold text-white md:text-2xl">
                  4 anos
                </div>
                <div className="text-xs text-gray-300 md:text-sm">
                  de Experiência na mídia e comunicação
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-2 pt-2 md:space-y-3 md:pt-4">
              <Button
                onClick={scrollToContent}
                className="group rounded-xl bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-green-500 md:px-8 md:py-4 md:text-lg"
              >
                <span className="mr-2">Conheça Meus Cursos</span>
                <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
              <p className="text-xs text-gray-400 md:text-sm">
                Descubra como dominar o Holyrics e transformar sua projeção
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
