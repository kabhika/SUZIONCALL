import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.brand.name}, covering how we collect and use booking and contact information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-foreground-muted">
          TODO: This is a draft policy. Have it reviewed by a qualified professional before
          publishing.
        </p>

        <div className="mt-8 space-y-6 text-sm text-foreground-muted">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-2">
              When you request a callback through our website, call, or message us, we collect
              the information you provide: your name, phone number, location, vehicle or trailer
              details, and the nature of your electrical issue. If you use the &ldquo;use my
              location&rdquo; option, we collect your device&rsquo;s coordinates for that request
              only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">How We Use It</h2>
            <p className="mt-2">
              We use this information to call you back, confirm your location and requirements,
              and dispatch the correct cable or connector. We do not sell your information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Third-Party Services</h2>
            <p className="mt-2">
              Booking requests are stored in our database (Supabase) and may trigger an automated
              notification to our operations team. We may use analytics tools (such as Google
              Analytics) to understand site usage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Data Retention</h2>
            <p className="mt-2">
              We retain booking information for as long as reasonably necessary for business and
              legal purposes. Contact us if you would like your information deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to {siteConfig.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
