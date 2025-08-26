import type { Metadata } from 'next';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Mulish } from 'next/font/google';
import GoogleAnalytics from './components/google-analytics';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
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
    'theme-color': '#3B82F6',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sara Silva',
    'application-name': 'Sara Silva - Projeção',
    'msapplication-TileColor': '#3B82F6',
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
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3B82F6' },
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
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Meta tags adicionais para SEO */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sara Zandonai Silva',
              jobTitle: 'Especialista em Projeção e Mídia',
              description:
                'Especialista em tecnologia de projeção para igrejas, cursos de Holyrics e mídia e comunicação',
              url: 'https://sarazsilva.com',
              image: 'https://sarazsilva.com/perfil.svg',
              sameAs: [
                'https://instagram.com/sarazsilva',
                'https://tiktok.com/@sarazsilva',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Sara Silva - Projeção',
              },
              knowsAbout: [
                'Projeção para Igrejas',
                'Holyrics',
                'Mídia e Comunicação',
                'Identidade Visual',
                'Tecnologia de Projeção',
              ],
            }),
          }}
        />

        {/* Schema.org para cursos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Dominando o Holyrics',
              description:
                'Curso completo para dominar o software Holyrics e transformar a projeção da sua igreja',
              provider: {
                '@type': 'Person',
                name: 'Sara Zandonai Silva',
              },
              courseMode: 'online',
              inLanguage: 'pt-BR',
              educationalLevel: 'intermediate',
              teaches: [
                'Projeção para Igrejas',
                'Software Holyrics',
                'Mídia e Comunicação',
              ],
            }),
          }}
        />

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
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
      <body className={`${mulish.className}`}>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        <SpeedInsights />
      </body>
    </html>
  );
}
