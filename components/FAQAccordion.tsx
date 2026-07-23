import { faqs } from "@/site.config";
import { JsonLd } from "@/components/JsonLd";

export function FAQAccordion({ items = faqs }: { items?: typeof faqs }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <JsonLd data={faqJsonLd} />
        <h2 id="faq-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <dl className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.question} className="rounded-lg border border-border-subtle bg-surface-raised p-6">
              <dt className="text-base font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-2 text-sm text-foreground-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
