import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.brand.name} bookings and delivery.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Terms", href: "/terms" }]} />

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-foreground-muted">
          TODO: This is a draft. Have it reviewed by a qualified professional before publishing.
        </p>

        <div className="mt-8 space-y-6 text-sm text-foreground-muted">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Our Service</h2>
            <p className="mt-2">
              {siteConfig.brand.name} ({siteConfig.brand.parentLine}, ABN {siteConfig.brand.abn})
              supplies and delivers trailer electrical cables, coils, and connectors. A booking
              request or call is a request for a callback and quote, not a confirmed order until
              we confirm pricing, availability, and delivery details with you directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Pricing</h2>
            <p className="mt-2">
              Pricing is confirmed on callback based on the cable or part required, your
              location, and the delivery tier selected. We do not publish fixed prices online in
              this version of the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">No Compliance Guarantee</h2>
            <p className="mt-2">
              We supply trade-grade hardware referenced against relevant standards. We do not
              certify vehicles or guarantee regulatory compliance for your specific vehicle or
              operation. Trailer lighting and braking connections are safety-critical and
              regulated — check your obligations with your operator or local regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Installation</h2>
            <p className="mt-2">
              Where deliver-and-install is arranged, installation is carried out by an
              independent partner mobile auto electrician, not directly by{" "}
              {siteConfig.brand.name}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to {siteConfig.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
