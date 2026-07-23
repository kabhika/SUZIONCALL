import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "Trailer Lights Not Working? Common Causes",
  description:
    "Trailer or truck lights out, flickering, or cross-flashing? Common causes, the earth-fault check, and how to get a replacement Suzi cable delivered in Sydney.",
  alternates: { canonical: "/guides/trailer-lights-not-working" },
};

export default function TrailerLightsGuidePage() {
  return (
    <SeoPageShell
      eyebrow="Guide"
      h1="Trailer Lights Not Working: Common Causes"
      intro="Dead lights, flickering indicators, or lights that cross-flash between the left and right side. Here are the most common causes, starting with the one that catches most people out."
      breadcrumbs={[
        { label: "Guides", href: "/guides/trailer-lights-not-working" },
        { label: "Trailer Lights Not Working", href: "/guides/trailer-lights-not-working" },
      ]}
    >
      <div className="space-y-8 text-sm text-foreground-muted">
        <section className="rounded-lg border border-danger/40 bg-danger/10 p-5">
          <p className="text-foreground">
            Trailer lighting and braking connections are safety-critical and regulated. If your
            lights or EBS connection are down, do not continue driving until fixed. Check your
            obligations with your operator or local regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">The Most Common Cause: A Failed Earth Return</h2>
          <p className="mt-3">
            Most trailer lighting failures trace back to a failed earth return on pin 3, the
            white wire, most commonly at the plug or a corroded connector. Symptoms include dim
            or flickering lights, or the classic &ldquo;disco light&rdquo; effect where the left
            and right indicators cross-flash into each other. If your lights are misbehaving
            rather than completely dead, this is the first thing worth checking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Other Common Causes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Corroded or bent pins inside the plug or socket</li>
            <li>A cracked coil jacket letting moisture into the conductors</li>
            <li>A blown fuse or relay on the tow vehicle side</li>
            <li>A physically damaged cable — cut, crushed, or stretched beyond its coil limit</li>
            <li>For trailers with EBS: a fault in the ISO 7638 coil rather than the lighting cable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Voltage Drop and Wire Gauge</h2>
          <p className="mt-3">
            On longer cable runs, or caravans running fridges and other high-draw accessories,
            wire gauge matters. A standard 4mm² conductor can show noticeable voltage drop under
            heavier loads; upgrading to 6mm² or moving to a 12-pin flat setup that separates
            high-draw circuits reduces this.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">If It Is the Cable, We Can Deliver a Replacement</h2>
          <p className="mt-3">
            If you have checked the obvious and the cable itself looks damaged, we deliver
            replacement Suzi cables, EBS coils, and connectors to your location.{" "}
            <Link href="/guides/suzi-cable" className="text-accent hover:underline">
              Learn more about Suzi cables
            </Link>{" "}
            or{" "}
            <Link href="/book" className="text-accent hover:underline">
              book a callback
            </Link>{" "}
            now.
          </p>
        </section>
      </div>
    </SeoPageShell>
  );
}
