import { LLM_FULL_TXT } from '@/lib/geo/llm-full';

export function GET() {
  return new Response(LLM_FULL_TXT, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
