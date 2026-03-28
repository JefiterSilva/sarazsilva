import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
  };

  const textSizes = {
    sm: 'text-[10px]',
    md: 'text-[14px]',
    lg: 'text-[18px]',
  };

  const sparkleSizes = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div
        className={`relative flex ${sizeClasses[size]} items-center justify-center rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-xl`}
      >
        {/* Modern initials logo design */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <span
              className={`${textSizes[size]} font-bold tracking-widest text-white`}
            >
              S
            </span>
            <span
              className={`${textSizes[size]} font-light tracking-widest text-slate-300`}
            >
              Z
            </span>
            <span
              className={`${textSizes[size]} font-bold tracking-widest text-white`}
            >
              S
            </span>
          </div>

          {/* Modern accent elements */}
          <div className="absolute -right-1 -top-1">
            <Sparkles className={`${sparkleSizes[size]} text-amber-400`} />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <div
              className={`${sparkleSizes[size]} rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60`}
            ></div>
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5"></div>

        {/* Border accent */}
        <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
      </div>

      {showText && (
        <div className="space-y-1">
          <h3 className="text-xl font-light tracking-wide text-white">
            Sara <span className="font-semibold">Zandonai</span> Silva
          </h3>
          <p className="text-sm font-light tracking-wide text-slate-300">
            Especialista em Projeção
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
