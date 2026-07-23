import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";

export const metadata: Metadata = {
  title: "FAQ — Suzi Cable Delivery",
  description:
    "Common questions about emergency Suzi cable delivery, coverage, delivery tiers, and installation across Sydney.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <header className="mx-auto max-w-2xl px-4 pt-8 pb-2 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-foreground-muted">
          Still have a question? Call or WhatsApp us directly.
        </p>
        <EmergencyCTAGroup className="mt-6" showBook={false} />
      </header>

      <div className="-mx-4 mt-8 sm:-mx-6">
        <FAQAccordion />
      </div>
    </div>
  );
}
