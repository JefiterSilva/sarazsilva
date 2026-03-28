import { Clock } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center gap-2 bg-red-600 px-4 py-2 text-center font-bold tracking-wide text-white md:flex-row md:gap-4">
      <span className="animate-pulse">
        🔥 Últimas horas promoção turma exclusiva!
      </span>
      <div className="flex items-center gap-2 rounded-md bg-black/20 px-3 py-1 text-sm">
        <Clock className="h-4 w-4" />
        <div className="flex gap-1">
          <span>-8Dias</span>
          <span>-13Horas</span>
          <span>-3Minutos</span>
          <span>-26Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
