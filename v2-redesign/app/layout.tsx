import type { Metadata } from 'next';

import { buildSiteGraph } from '@/lib/geo/schemas';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import GoogleAnalytics from './components/google-analytics';
import JsonLd from './components/json-ld';

import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sara Zandonai Silva - Especialista em Projeção e Holyrics',
    template: '%s | Sara Silva - Projeção',
  },
  description:
    'Transforme sua igreja com tecnologia de projeção! Cursos especializados em Holyrics, identidade visual, pack de fundos e capacitação para mídia e comunicação. Aprenda com a especialista Sara Silva.',
  keywords: [
    'projeção igreja',
    'holyrics curso',
    'mídia igreja',
    'comunicação igreja',
    'identidade visual igreja',
    'pack fundos projeção',
    'capacitação mídia',
    'tecnologia igreja',
    'projeção culto',
    'holyrics tutorial',
    'mídia e comunicação',
    'igreja digital',
    'projeção audiovisual',
    'cursos igreja',
    'sara silva projeção',
  ],
  authors: [{ name: 'Sara Zandonai Silva' }],
  creator: 'Sara Zandonai Silva',
  publisher: 'Sara Zandonai Silva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sarazsilva.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sarazsilva.com',
    siteName: 'Sara Silva - Especialista em Projeção',
    title: 'Sara Zandonai Silva - Especialista em Projeção e Holyrics',
    description:
      'Transforme sua igreja com tecnologia de projeção! Cursos especializados em Holyrics, identidade visual, pack de fundos e capacitação para mídia e comunicação.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sara Silva - Especialista em Projeção',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sara Zandonai Silva - Especialista em Projeção e Holyrics',
    description:
      'Transforme sua igreja com tecnologia de projeção! Cursos especializados em Holyrics.',
    images: ['/og-image.jpg'],
    creator: '@sarazsilva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'education',
  classification: 'Cursos e Treinamentos',
  other: {
    'theme-color': '#0a0a0b',
    'color-scheme': 'dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sara Silva',
    'application-name': 'Sara Silva - Projeção',
    'msapplication-TileColor': '#0a0a0b',
    'msapplication-config': '/browserconfig.xml',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={cn(
        'scroll-smooth',
        'font-sans',
        geist.variable,
        geistMono.variable
      )}
    >
      <head>
        {/* Meta tags adicionais para SEO */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Meta tags para redes sociais */}
        <meta
          property="og:site_name"
          content="Sara Silva - Especialista em Projeção"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />

        {/* Meta tags para WhatsApp */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Meta tags para Twitter */}
        <meta name="twitter:site" content="@sarazsilva" />
        <meta name="twitter:creator" content="@sarazsilva" />

        {/* Meta tags para mobile */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sara Silva" />

        {/* Meta tags para performance */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
      </head>
      <body className="bg-ink font-sans text-paper antialiased">
        <JsonLd id="site-graph" data={buildSiteGraph()} />
        <SpeedInsights />
        <Analytics />

        {children}

        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener('click',function(event){var details=document.querySelector('nav details');if(!details||!details.open)return;var target=event.target;if(!(target instanceof Element))return;if(details.contains(target)){if(target.closest('a'))details.open=false;return;}details.open=false;});document.addEventListener('keydown',function(event){if(event.key!=='Escape')return;var details=document.querySelector('nav details');if(!details||!details.open)return;details.open=false;var summary=details.querySelector('summary');if(summary)summary.focus();});`,
          }}
        />
      </body>
    </html>
  );
}
