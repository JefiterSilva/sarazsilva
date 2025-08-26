'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'course';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export default function SEOHead({
  title = 'Sara Zandonai Silva - Especialista em Projeção e Holyrics',
  description = 'Transforme sua igreja com tecnologia de projeção! Cursos especializados em Holyrics, identidade visual, pack de fundos e capacitação para mídia e comunicação.',
  keywords = [
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
  image = '/og-image.jpg',
  url = 'https://sarazsilva.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Sara Zandonai Silva',
}: SEOHeadProps) {
  const fullUrl = url.startsWith('http') ? url : `https://sarazsilva.com${url}`;
  const fullImageUrl = image.startsWith('http')
    ? image
    : `https://sarazsilva.com${image}`;

  return (
    <Head>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta
        property="og:site_name"
        content="Sara Silva - Especialista em Projeção"
      />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@sarazsilva" />
      <meta name="twitter:creator" content="@sarazsilva" />

      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Course specific meta tags */}
      {type === 'course' && (
        <>
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}

      {/* Additional SEO meta tags */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Language and region */}
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* Structured Data for Article */}
      {type === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: description,
              image: fullImageUrl,
              author: {
                '@type': 'Person',
                name: author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Sara Silva - Projeção',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://sarazsilva.com/logo.png',
                },
              },
              datePublished: publishedTime,
              dateModified: modifiedTime || publishedTime,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': fullUrl,
              },
            }),
          }}
        />
      )}

      {/* Structured Data for Course */}
      {type === 'course' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: title,
              description: description,
              provider: {
                '@type': 'Person',
                name: author,
              },
              courseMode: 'online',
              inLanguage: 'pt-BR',
              educationalLevel: 'intermediate',
              url: fullUrl,
            }),
          }}
        />
      )}
    </Head>
  );
}
