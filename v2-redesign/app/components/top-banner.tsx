import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TopBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-lamp px-4 py-2 text-center text-lamp-ink sm:flex-row sm:gap-4">
      <p className="text-sm font-medium">
        Assinatura mensal: Identidade Visual por{' '}
        <span className="font-mono font-semibold whitespace-nowrap">
          R$ 14,90/mês
        </span>
      </p>

      <Link
        href="https://hotmart.com/pt-br/marketplace/produtos/identidade-visual-mensal/T100074281B?off=4xkb796a"
        className="group inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-semibold underline decoration-lamp-ink/40 underline-offset-4 transition-colors duration-200 hover:decoration-lamp-ink focus-visible:ring-2 focus-visible:ring-lamp-ink focus-visible:outline-none"
      >
        Assinar agora
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
};

export default TopBanner;
