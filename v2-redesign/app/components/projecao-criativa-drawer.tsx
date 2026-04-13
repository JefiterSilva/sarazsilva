'use client';

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { PlayCircle, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Drawer para divulgar o curso Projeção Criativa no Canva
export default function ProjecaoCriativaDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Abre após 4s para não conflitar com outros modais/drawers
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Assim que o drawer abrir, tenta iniciar o vídeo
  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Alguns navegadores exigem muted para autoplay
      try {
        const v = videoRef.current;
        v.muted = true;
        const playPromise = v.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise.catch(() => {
            // Se não conseguir, mantém controles visíveis para o usuário iniciar
          });
        }
      } catch (_) {
        // Ignora erros de autoplay e mantém controles
      }
    }
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        className="max-h-[90vh] bg-gradient-to-br from-[#5A2CCB] via-[#6F2EDB] to-[#7B2CE2] text-white sm:max-h-[85vh] md:max-h-[80vh]"
        aria-label="Novo curso: Projeção Criativa no Canva"
      >
        <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <DrawerHeader className="relative px-4 text-center sm:px-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <DrawerTitle className="flex items-center justify-center gap-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
              ✨ Projeção Criativa no Canva
            </DrawerTitle>
            <DrawerDescription className="text-sm text-white/90 sm:text-base">
              Aprenda na prática a criar fundos com letras personalizadas,
              movimentos e importar no Holyrics.
            </DrawerDescription>
          </DrawerHeader>

          <div className="scrollbar-hide max-h-[60vh] overflow-y-auto px-3 sm:px-4 md:px-6">
            {/* Vídeo demonstrativo */}
            <div className="mb-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm sm:p-4">
              <div className="mb-2 flex items-center gap-2 text-white">
                <PlayCircle className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Veja um trecho do curso
                </span>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/20">
                <video
                  ref={videoRef}
                  src="/IMG_5101.MOV"
                  autoPlay
                  muted
                  playsInline
                  controls
                  className="h-full w-full"
                  preload="metadata"
                />
              </div>
            </div>

            {/* Descrição detalhada */}
            <div className="mb-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-white/90">
                Aqui você vai aprender de forma didática e na prática como
                selecionar o fundo, criar a frase com letras personalizadas,
                colocar o movimento, salvar e importar no programa. Tudo isso
                utilizando o CANVA e o programa do Holyrics para projeção.
                Conteúdo compatível com Canva gratuito e Pro.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-2 text-center">
              <p className="mb-3 text-sm text-white/90">
                Acesse o curso completo no Hotmart:
              </p>
              <div className="mb-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FF8C1A] to-[#FFB770] px-4 py-2 text-base font-extrabold text-white shadow-lg ring-2 ring-white/30">
                  🔥 Preço promocional: R$ 19,90
                </span>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                <a
                  href="https://hotmart.com/pt-br/marketplace/produtos/projecao-criativa-aprendizado-na-pratica/C102196297Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#FF7A00] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF8C1A]"
                >
                  Acessar curso
                </a>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
