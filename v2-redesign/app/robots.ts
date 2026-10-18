import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/geo/site';

const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'Google-Extended',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-User',
  'Claude-SearchBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/' as const,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
