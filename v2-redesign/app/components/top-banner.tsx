import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const TopBanner = () => {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 px-4 py-2 text-center font-bold tracking-wide text-white md:flex-row md:gap-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4" />
        <span className="text-sm sm:text-base">
          Assinatura mensal: Identidade Visual por{' '}
          <span className="whitespace-nowrap rounded-full bg-white/15 px-2 py-0.5 font-extrabold ring-1 ring-white/25">
            R$ 14,90/mês
          </span>
        </span>
      </div>

      <Link
        href="https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a"
        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-extrabold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Assinar agora
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default TopBanner;
