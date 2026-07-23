import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";
import { BookingForm } from "@/components/BookingForm";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp, or book online for emergency Suzi cable delivery in Sydney. Fast callback for fleet, caravan, and commercial trailer breakdowns.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <header className="mx-auto max-w-2xl px-4 pt-8 pb-2 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-foreground-muted">
          Call or WhatsApp for the fastest response. Or book online below and we will call you
          back.
        </p>
        <EmergencyCTAGroup className="mt-6" showBook={false} />

        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-foreground">Phone</dt>
            <dd className="mt-1 text-foreground-muted">{siteConfig.contact.phoneDisplay}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Email</dt>
            <dd className="mt-1 text-foreground-muted">{siteConfig.contact.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Based In</dt>
            <dd className="mt-1 text-foreground-muted">{siteConfig.hub.displayLocation}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">ABN</dt>
            <dd className="mt-1 text-foreground-muted">{siteConfig.brand.abn}</dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <BookingForm />
      </div>
    </div>
  );
}
