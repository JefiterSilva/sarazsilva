'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { PlayCircle, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HolyricsUpdatesDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Abre o drawer automaticamente após 2 segundos (para não conflitar com outros modais)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Não renderiza nada até o componente estar montado
  if (!isMounted) {
    return null;
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent
        className="max-h-[90vh] bg-gradient-to-br from-purple-600 to-blue-600 text-white sm:max-h-[85vh] md:max-h-[80vh]"
        aria-label="Novas aulas adicionadas aos cursos Holyrics"
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
              🎉 NOVIDADES!
            </DrawerTitle>
            <DrawerDescription className="text-sm text-white/90 sm:text-base">
              Novas aulas foram adicionadas aos seus cursos Holyrics
            </DrawerDescription>
          </DrawerHeader>

          <div className="scrollbar-hide max-h-[60vh] overflow-y-auto px-3 sm:px-4 md:px-6">
            {/* Holyrics Parte 1 */}
            <div className="mb-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500 p-2 text-white">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Holyrics Parte 1
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-green-400 text-xs text-green-900"
                  >
                    2 Novas Aulas
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 rounded-lg bg-white/10 p-2">
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300" />
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Aula 7 - Telas públicas e retorno no preview
                    </h4>
                    <p className="mt-1 text-xs text-white/80">
                      Configure telas públicas e visualize o retorno no preview
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-white/10 p-2">
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300" />
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Aula 8 - Configuração no painel de comunicação
                    </h4>
                    <p className="mt-1 text-xs text-white/80">
                      Domine as configurações avançadas do painel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holyrics Parte 2 */}
            <div className="mb-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500 p-2 text-white">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Holyrics Parte 2
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-green-400 text-xs text-green-900"
                  >
                    2 Novas Aulas
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 rounded-lg bg-white/10 p-2">
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300" />
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Aula 7 - Atualização para fundos com letras personalizadas
                    </h4>
                    <p className="mt-1 text-xs text-white/80">
                      Crie fundos únicos com letras personalizadas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-lg bg-white/10 p-2">
                  <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300" />
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      Aula 8 - Criando contagem regressiva com próxima
                      apresentação
                    </h4>
                    <p className="mt-1 text-xs text-white/80">
                      Configure contagens regressivas dinâmicas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2 text-center">
              <p className="mb-3 text-sm text-white/90">
                Acesse agora mesmo o conteúdo atualizado!
              </p>
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                <Button
                  className="rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-600"
                  onClick={() =>
                    window.open(
                      'https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-1/Q93610850I',
                      '_blank'
                    )
                  }
                >
                  Acessar Holyrics Parte 1
                </Button>
                <Button
                  className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                  onClick={() =>
                    window.open(
                      'https://hotmart.com/pt-br/marketplace/produtos/dominando-o-holyrics-parte-2/A94024412O?sck=HOTMART_SITE&search=2042cdc2-7353-42c4-b28c-55373570108e&hotfeature=33',
                      '_blank'
                    )
                  }
                >
                  Acessar Holyrics Parte 2
                </Button>
              </div>
            </div>
          </div>

          <DrawerFooter className="px-3 text-center sm:px-4 md:px-6">
            <p className="w-full text-center text-xs text-white/70 sm:text-sm">
              Conteúdo exclusivo para alunos matriculados
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
