'use client';

// Este é um arquivo de exemplo que mostra como usar os dois tipos de modais
// Você pode escolher qual implementação prefere e importar no seu page.tsx

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PromoModal from './promo-modal'; // Versão com Sheet
import PromoDrawerModal from './promo-drawer-modal'; // Versão com Drawer

export default function PromoModalExample() {
  const [modalType, setModalType] = useState<'sheet' | 'drawer' | null>(null);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button 
        onClick={() => setModalType('sheet')} 
        className="bg-blue-600 hover:bg-blue-700"
      >
        Abrir Modal Sheet
      </Button>
      
      <Button 
        onClick={() => setModalType('drawer')} 
        className="bg-purple-600 hover:bg-purple-700"
      >
        Abrir Modal Drawer
      </Button>
      
      {modalType === 'sheet' && <PromoModal />}
      {modalType === 'drawer' && <PromoDrawerModal />}
      
      <div className="mt-4 rounded-lg bg-white/10 p-3 text-sm text-white">
        <p>Escolha qual implementação você prefere:</p>
        <ul className="mt-2 list-disc pl-5">
          <li>Sheet: desliza de baixo para cima</li>
          <li>Drawer: desliza de baixo com alça de arrasto</li>
        </ul>
      </div>
    </div>
  );
}