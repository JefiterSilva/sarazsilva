import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type HomeEntryCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  actionLabel?: string;
};

export default function HomeEntryCard({
  title,
  description,
  href,
  icon: Icon,
  actionLabel = 'Acessar',
}: HomeEntryCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${actionLabel} ${title}`}
      className="via-white/3 group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.55)] outline-none transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30 focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] md:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-cyan-500/12 absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 md:h-96 md:w-96" />
        <div className="bg-violet-500/12 absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 md:h-96 md:w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(168,85,247,0.14),transparent_45%)] opacity-70" />
      </div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 shadow-[0_18px_35px_rgba(34,211,238,0.16)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-[1.04] md:h-14 md:w-14">
            <Icon className="h-6 w-6 md:h-7 md:w-7" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
              Novo
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start md:justify-end">
          <span className="inline-flex h-12 items-center justify-center rounded-2xl bg-cyan-400 px-6 text-base font-bold text-slate-950 shadow-[0_18px_35px_rgba(34,211,238,0.22)] transition-colors group-hover:bg-cyan-300">
            {actionLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
