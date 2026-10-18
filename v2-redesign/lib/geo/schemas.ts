import type { FaqItem } from './faqs';
import {
  COMBO,
  ENTITIES,
  HOTMART,
  PERSON_IMAGE,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  PRODUCTS,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from './site';

export type JsonLdNode = Record<string, unknown>;

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

const personId = `${SITE_URL}/#person`;
const organizationId = `${SITE_URL}/#organization`;
const courseId = `${SITE_URL}/combo-projecao#course`;

export function buildPersonSchema(): JsonLdNode {
  return {
    '@type': 'Person',
    '@id': personId,
    name: PERSON_NAME,
    jobTitle: PERSON_JOB_TITLE,
    url: SITE_URL,
    image: PERSON_IMAGE,
    sameAs: [SOCIAL.instagram, SOCIAL.tiktok],
    worksFor: { '@id': organizationId },
    knowsAbout: ENTITIES.map((entity) => entity.name),
  };
}

export function buildOrganizationSchema(): JsonLdNode {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: PERSON_IMAGE,
    founder: { '@id': personId },
    sameAs: [SOCIAL.instagram, SOCIAL.tiktok],
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    knowsAbout: ENTITIES.map((entity) => ({
      '@type': entity.type,
      name: entity.name,
      description: entity.description,
    })),
    makesOffer: [
      {
        '@type': 'Offer',
        name: PRODUCTS.combo.name,
        url: PRODUCTS.combo.url,
        price: COMBO.price.toFixed(2),
        priceCurrency: COMBO.currency,
      },
      {
        '@type': 'Offer',
        name: PRODUCTS.kit.name,
        url: PRODUCTS.kit.url,
      },
      {
        '@type': 'Offer',
        name: PRODUCTS.identidade.name,
        url: PRODUCTS.identidade.url,
        price: '14.90',
        priceCurrency: COMBO.currency,
      },
    ],
  };
}

export function buildCourseSchema(): JsonLdNode {
  return {
    '@type': 'Course',
    '@id': courseId,
    name: COMBO.name,
    description: PRODUCTS.combo.summary,
    url: PRODUCTS.combo.url,
    inLanguage: 'pt-BR',
    isAccessibleForFree: false,
    educationalLevel: 'beginner to advanced',
    teaches: [
      'Holyrics',
      'Projeção de Igreja',
      'TV de retorno via rede',
      'vMix',
      'Automação com mesa digital',
    ],
    about: ENTITIES.map((entity) => ({
      '@type': entity.type,
      name: entity.name,
    })),
    provider: {
      '@type': 'Organization',
      '@id': organizationId,
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    instructor: {
      '@type': 'Person',
      '@id': personId,
      name: PERSON_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: HOTMART.combo,
      price: COMBO.price.toFixed(2),
      priceCurrency: COMBO.currency,
      availability: 'https://schema.org/InStock',
      category: 'Paid',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMBO.ratingValue.toFixed(1),
      bestRating: '5',
      worstRating: '1',
      ratingCount: String(COMBO.students),
    },
    totalHistoricalEnrollment: COMBO.students,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `PT${COMBO.lessons}H`,
      inLanguage: 'pt-BR',
    },
  };
}

export function buildSiteGraph(): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationSchema(), buildPersonSchema()],
  };
}

export function buildComparisonSchema(input: {
  title: string;
  description: string;
  url: string;
  dateModified: string;
  leftName: string;
  rightName: string;
  rows: readonly { criterion: string; left: string; right: string }[];
}): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${input.url}#webpage`,
        url: input.url,
        name: input.title,
        description: input.description,
        dateModified: input.dateModified,
        inLanguage: 'pt-BR',
        author: { '@id': personId },
        publisher: { '@id': organizationId },
        about: [
          { '@type': 'SoftwareApplication', name: input.leftName },
          { '@type': 'SoftwareApplication', name: input.rightName },
        ],
      },
      {
        '@type': 'ItemList',
        name: `${input.leftName} vs ${input.rightName}`,
        itemListElement: input.rows.map((row, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: row.criterion,
          description: `${input.leftName}: ${row.left}. ${input.rightName}: ${row.right}.`,
        })),
      },
    ],
  };
}

export function buildFaqPageSchema(
  items: readonly FaqItem[],
  pageUrl: string
): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: pageUrl,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: [item.answer, ...(item.steps ?? [])].join(' '),
      },
    })),
  };
}
