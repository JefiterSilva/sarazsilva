import SoftwareComparison from '@/app/components/software-comparison';
import {
  comparisonCanonical,
  holyricsVsPropresenter,
} from '@/lib/geo/comparisons';
import { ROUTES } from '@/lib/geo/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Holyrics vs ProPresenter',
  description: holyricsVsPropresenter.description,
  alternates: {
    canonical: holyricsVsPropresenter.slug,
  },
  openGraph: {
    title: 'Holyrics vs ProPresenter | Sara Silva',
    description: holyricsVsPropresenter.directAnswer,
    url: comparisonCanonical(holyricsVsPropresenter.slug),
    type: 'article',
  },
};

export default function HolyricsVsPropresenterPage() {
  return (
    <SoftwareComparison
      guide={holyricsVsPropresenter}
      relatedHref={ROUTES.compareEasyworship}
      relatedLabel="Ver Holyrics vs EasyWorship"
    />
  );
}
