import { Reveal } from '@/app/components/fx/reveal';
import JsonLd from '@/app/components/json-ld';
import type { FaqItem } from '@/lib/geo/faqs';
import { buildFaqPageSchema } from '@/lib/geo/schemas';

type ConversationalFaqProps = {
  heading: string;
  intro: string;
  items: readonly FaqItem[];
  pageUrl: string;
};

export default function ConversationalFaq({
  heading,
  intro,
  items,
  pageUrl,
}: ConversationalFaqProps) {
  return (
    <section
      id="perguntas"
      aria-labelledby="faq-heading"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 2xl:max-w-[1440px]"
    >
      <JsonLd id="faq-schema" data={buildFaqPageSchema(items, pageUrl)} />

      <div className="mb-12 max-w-2xl space-y-4">
        <Reveal>
          <h2
            id="faq-heading"
            className="text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-paper md:text-5xl"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-[52ch] text-base leading-relaxed text-mist">
            {intro}
          </p>
        </Reveal>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={(index % 2) * 0.05} y={20}>
            <article className="h-full rounded-card border border-seam bg-coal p-6 sm:p-8">
              <h3 className="text-xl leading-snug font-semibold tracking-[-0.03em] text-paper md:text-2xl">
                {item.question}
              </h3>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mist">
                {item.answer}
              </p>
              {item.steps ? (
                <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-paper">
                  {item.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
