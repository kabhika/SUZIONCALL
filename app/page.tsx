import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";
import { HowItWorks } from "@/components/HowItWorks";
import { AudienceBands } from "@/components/AudienceBands";
import { CableTypesGrid } from "@/components/CableTypesGrid";
import { DeliveryTiers } from "@/components/DeliveryTiers";
import { ServiceCoverage } from "@/components/ServiceCoverage";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FleetCTA } from "@/components/FleetCTA";
import { BookingForm } from "@/components/BookingForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Emergency Suzi Cable Replacement Sydney",
  description:
    "Suzi cable and trailer electrical failure? We deliver the replacement to your breakdown location across Sydney. Call, WhatsApp, or book online now.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Emergency Suzi cable and trailer electrical delivery",
    provider: {
      "@type": "AutomotiveBusiness",
      name: siteConfig.brand.name,
      telephone: siteConfig.contact.phoneE164,
    },
    areaServed: siteConfig.hub.areaServed,
    description:
      "On-demand delivery of replacement Suzi cables, EBS coils, and trailer electrical connectors to breakdown locations and depots across Sydney.",
  };

  return (
    <div>
      <JsonLd data={serviceJsonLd} />

      <section className="relative overflow-hidden border-b border-border-subtle bg-gradient-to-b from-surface to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            {siteConfig.hub.displayLocation} · Sydney Metro & Beyond
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Suzi Cable Down? We Deliver the Fix to You.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground-muted">
            Grounded trailer, trailer lights out, or EBS coil fault. We dispatch the correct
            replacement Suzi cable or connector to your breakdown location or depot, with
            optional professional installation.
          </p>
          <EmergencyCTAGroup className="mt-8" />
          <p className="mt-4 text-xs text-foreground-muted">
            Fleet, caravan, camper trailer, and horse float electrical connections. Call or
            WhatsApp for the fastest response.
          </p>
        </div>
      </section>

      <HowItWorks />
      <AudienceBands />
      <CableTypesGrid />
      <DeliveryTiers />
      <TrustStrip />
      <ServiceCoverage />
      <FleetCTA />

      <section aria-labelledby="booking-heading" className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h2 id="booking-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
          Request a Callback
        </h2>
        <p className="mt-2 text-foreground-muted">
          Tell us where you are and what has failed. We call you back to confirm details and
          dispatch the right cable.
        </p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </section>

      <FAQAccordion />
    </div>
  );
}
