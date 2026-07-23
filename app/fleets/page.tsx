import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";
import { BookingForm } from "@/components/BookingForm";
import { cableCategories } from "@/site.config";

export const metadata: Metadata = {
  title: "Fleet & Commercial Suzi Cable Delivery Sydney",
  description:
    "EBS coils, heavy-duty connectors, and transition adapters delivered to depots and roadside breakdowns across Sydney. Fleet accounts with invoicing.",
  alternates: { canonical: "/fleets" },
};

const fleetCables = cableCategories.filter(
  (c) => c.segment === "commercial" || c.segment === "both"
);

export default function FleetsPage() {
  return (
    <SeoPageShell
      eyebrow="Fleet & Commercial"
      h1="Fleet & Commercial Suzi Cable Delivery"
      intro="Prime movers, heavy trailers, and logistics depots depend on a working Suzi cable to stay on the road and compliant. We dispatch EBS coils, heavy-duty connectors, and transition adapters to roadside breakdowns and depots across Sydney."
      breadcrumbs={[{ label: "Fleet & Commercial", href: "/fleets" }]}
    >
      <div className="prose-invert space-y-10">
        <section>
          <h2 className="text-xl font-bold text-foreground">What We Stock for Commercial Operators</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {fleetCables.map((cat) => (
              <div key={cat.slug} className="rounded-lg border border-border-subtle bg-surface p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">{cat.name}</h3>
                  {cat.standard && (
                    <span className="shrink-0 rounded border border-border-subtle px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
                      {cat.standard}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-foreground-muted">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Old Prime Mover, New Trailer? We Stock the Adapter.</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            The regulatory shift toward newer heavy-duty connector standards means older prime
            movers often cannot plug straight into newly built trailers. Rather than parking a
            compliant trailer over a connector mismatch, a transition adapter bridges the two
            standards.{" "}
            <Link href="/transition-adapters" className="text-accent hover:underline">
              Read more about transition adapters
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Depot & Roadside Dispatch</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Grounded trailer costs money by the hour. We match dispatch speed to urgency: an
            emergency hotshot courier for a trailer stuck on route, or a standard wholesale
            restock order for depot stock. See our{" "}
            <Link href="/#delivery-tiers" className="text-accent hover:underline">
              delivery tiers
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Fleet Accounts</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Fleet accounts get consolidated invoicing and priority depot dispatch. Enquire below
            or call us to set one up.
          </p>
        </section>

        <section id="fleet-enquiry">
          <h2 className="text-xl font-bold text-foreground">Fleet Enquiry & Callback Request</h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Tell us about your fleet or current breakdown and we will call you back.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </section>
      </div>
    </SeoPageShell>
  );
}
