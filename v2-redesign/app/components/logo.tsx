interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'size-10 text-xs',
    md: 'size-14 text-base',
    lg: 'size-20 text-2xl',
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        aria-hidden="true"
        className={`flex ${sizeClasses[size]} items-center justify-center rounded-full bg-lamp font-semibold tracking-tight text-lamp-ink`}
      >
        SZS
      </div>

      {showText && (
        <div className="space-y-1">
          <p className="text-xl font-semibold tracking-tight text-paper">
            Sara Zandonai Silva
          </p>
          <p className="text-sm text-mist">Especialista em Projeção</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
