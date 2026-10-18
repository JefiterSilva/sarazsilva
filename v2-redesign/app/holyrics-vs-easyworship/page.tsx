import SoftwareComparison from '@/app/components/software-comparison';
import {
  comparisonCanonical,
  holyricsVsEasyworship,
} from '@/lib/geo/comparisons';
import { ROUTES } from '@/lib/geo/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Holyrics vs EasyWorship',
  description: holyricsVsEasyworship.description,
  alternates: {
    canonical: holyricsVsEasyworship.slug,
  },
  openGraph: {
    title: 'Holyrics vs EasyWorship | Sara Silva',
    description: holyricsVsEasyworship.directAnswer,
    url: comparisonCanonical(holyricsVsEasyworship.slug),
    type: 'article',
  },
};

export default function HolyricsVsEasyworshipPage() {
  return (
    <SoftwareComparison
      guide={holyricsVsEasyworship}
      relatedHref={ROUTES.comparePropresenter}
      relatedLabel="Ver Holyrics vs ProPresenter"
    />
  );
}
