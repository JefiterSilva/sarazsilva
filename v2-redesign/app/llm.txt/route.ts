import { LLM_TXT } from '@/lib/geo/llm-content';

export function GET() {
  return new Response(LLM_TXT, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
