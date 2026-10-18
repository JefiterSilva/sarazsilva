import { PRICING_MD } from '@/lib/geo/llm-content';

export function GET() {
  return new Response(PRICING_MD, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
