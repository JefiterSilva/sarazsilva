import { serializeJsonLd } from '@/lib/geo/schemas';

type JsonLdProps = {
  data: unknown;
  id?: string;
};

/**
 * JSON-LD para Server Components.
 * Usa <script> nativo (não next/script) para o HTML ser idêntico no SSR
 * e na hidratação. Nunca coloque Date.now() ou valores aleatórios em `data`.
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
