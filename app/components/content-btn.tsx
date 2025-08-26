import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import {
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';

const ContentBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border-white bg-transparent text-white hover:bg-white hover:text-blue-600"
        >
          Ver Conteúdo do Curso
        </Button>
      </DialogTrigger>
      <DialogContent className="container mx-auto w-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white">
        <DialogHeader>
          <DialogTitle>Conteúdo do Curso</DialogTitle>
          <DialogDescription className="p-8 md:p-12">
            {/* Adicione aqui os detalhes do curso, como lista de módulos, aulas, etc. */}
            - Módulo 1: Introdução ao Holyrics
            <br />
            - Módulo 2: Configurações avançadas
            <br />
            - Módulo 3: Dicas e práticas
            <br />
            {/* ... */}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContentBtn;
