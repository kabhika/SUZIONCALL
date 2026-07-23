import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AS 2513 to Heavy-Duty Trailer Adapter Sydney",
  description:
    "Older prime mover, newer heavy-duty trailer? We supply and deliver AS 2513 to heavy-duty transition adapters across Sydney. Call for same-day dispatch.",
  alternates: { canonical: "/transition-adapters" },
};

const adapterFaqs = [
  {
    question: "Why can't my prime mover plug into a new trailer?",
    answer:
      "Newer heavy-duty trailers are increasingly built to the larger AS 4735 connector standard, while many older prime movers still run the smaller AS 2513 plug. The two are physically different, so without an adapter the plug simply will not seat.",
  },
  {
    question: "Is a transition adapter a permanent fix?",
    answer:
      "It is a practical bridge between two connector generations while your fleet transitions, not a certification or compliance statement. We supply compliant-grade hardware; we do not certify vehicles.",
  },
  {
    question: "Do you carry adapters for EBS-equipped trailers too?",
    answer:
      "Yes. If your trailer runs electronic braking (EBS/ABS) via an ISO 7638 coil in addition to the lighting connector, tell us when you book and we will bring both.",
  },
];

export default function TransitionAdaptersPage() {
  return (
    <SeoPageShell
      eyebrow="Fleet & Commercial"
      h1="AS 2513 to Heavy-Duty Transition Adapters"
      intro="Older prime mover, newer heavy-duty trailer, and the plugs don't match. We supply and deliver transition adapters that bridge AS 2513 and heavy-duty AS 4735 style connectors across Sydney."
      breadcrumbs={[{ label: "Transition Adapters", href: "/transition-adapters" }]}
    >
      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-foreground">A Connector Mismatch That Is Getting More Common</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Trailer manufacturers have been shifting toward larger, higher-current connector
            standards (commonly referenced against AS 4735) for heavy-duty trailers, while a
            significant share of the prime mover fleet on the road still runs older AS 2513 style
            plugs. The result: a compliant, newly built trailer that physically cannot connect to
            an older truck without a transition adapter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">What We Supply</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground-muted">
            <li>AS 2513 to heavy-duty (AS 4735 style) lighting connector adapters</li>
            <li>ISO 7638 style EBS/ABS coil adapters for 12V and 24V systems</li>
            <li>Combination sets for trailers running both lighting and EBS on separate coils</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Standards Referenced</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            We reference Australian Design Rules (e.g. ADR 42/05, ADR 38 series), AS 2513, AS
            4735, and ISO 7638 as context for why connector types differ between older and newer
            fleet. This is educational context, not a legal determination for your vehicle.
            Trailer lighting and braking connections are safety-critical and regulated. If your
            lights or EBS connection are down, do not continue driving until fixed. Check your
            obligations with your operator or local regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Get an Adapter Delivered</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Call or WhatsApp with your prime mover and trailer connector types (or a photo of
            each plug) and we will confirm the right adapter and dispatch it. See our{" "}
            <Link href="/fleets" className="text-accent hover:underline">
              full fleet and commercial services
            </Link>{" "}
            or{" "}
            <Link href="/book" className="text-accent hover:underline">
              book a callback
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="-mx-4 mt-12 sm:-mx-6">
        <FAQAccordion items={adapterFaqs} />
      </div>
    </SeoPageShell>
  );
}
