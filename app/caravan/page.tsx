import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";
import { BookingForm } from "@/components/BookingForm";
import { cableCategories } from "@/site.config";

export const metadata: Metadata = {
  title: "Caravan & RV Suzi Cable Delivery Sydney",
  description:
    "7-pin cables, 12-pin upgrades, breakaway cables, and camera coils delivered to caravans, camper trailers, and horse floats across Sydney.",
  alternates: { canonical: "/caravan" },
};

const caravanCables = cableCategories.filter(
  (c) => c.segment === "recreational" || c.segment === "both"
);

export default function CaravanPage() {
  return (
    <SeoPageShell
      eyebrow="Caravan & RV"
      h1="Caravan & RV Suzi Cable Delivery"
      intro="Trailer lights out or a breakaway cable failed at the worst possible time? We deliver replacement Suzi cables, 12-pin upgrades, and camera coils to your caravan, camper trailer, or horse float — wherever you are."
      breadcrumbs={[{ label: "Caravan & RV", href: "/caravan" }]}
    >
      <div className="prose-invert space-y-10">
        <section>
          <h2 className="text-xl font-bold text-foreground">What We Stock for Caravans and Trailers</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {caravanCables.map((cat) => (
              <div key={cat.slug} className="rounded-lg border border-border-subtle bg-surface p-5">
                <h3 className="text-base font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Most Trailer Lighting Faults Trace to One Wire</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Flickering indicators, dim brake lights, or the classic &ldquo;disco light&rdquo;
            effect where lights cross-flash most commonly trace to a failed earth return — pin 3,
            the white wire. If your lights are misbehaving rather than fully dead, this is usually
            the first thing worth checking.{" "}
            <Link href="/guides/trailer-lights-not-working" className="text-accent hover:underline">
              Read our trailer lights troubleshooting guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Running a Fridge or High-Draw Accessories?</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Caravans running fridges, battery charging, and other high-draw auxiliaries often
            outgrow a standard 7-pin connection. A 12-pin flat upgrade separates these loads onto
            dedicated pins and reduces voltage drop, especially with 6mm² wiring over longer coil
            lengths.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Holiday Park & Deliver-and-Install</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            We deliver to holiday parks and caravan storage yards, not just roadside breakdowns.
            Deliver-and-install is available via partner mobile auto electricians — enquire below
            and we will confirm availability for your location.
          </p>
        </section>

        <section id="caravan-enquiry">
          <h2 className="text-xl font-bold text-foreground">Request a Callback</h2>
          <p className="mt-2 text-sm text-foreground-muted">
            Tell us your trailer type, what has failed, and where you are.
          </p>
          <div className="mt-6">
            <BookingForm />
          </div>
        </section>
      </div>
    </SeoPageShell>
  );
}
