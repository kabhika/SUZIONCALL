import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";

export const metadata: Metadata = {
  title: "What Is a Suzi Cable? Suzi Coil Explained",
  description:
    "What a Suzi cable (suzie coil) does, the different pin and connector types, and how to tell when yours needs replacing. Sydney delivery available.",
  alternates: { canonical: "/guides/suzi-cable" },
};

export default function SuziCableGuidePage() {
  return (
    <SeoPageShell
      eyebrow="Guide"
      h1="What Is a Suzi Cable?"
      intro="A Suzi cable, also called a suzie coil or spiral trailer cable, is the coiled electrical connection between a towing vehicle and a trailer, caravan, or horse float. Here is what it does and why it matters when it fails."
      breadcrumbs={[{ label: "Guides", href: "/guides/suzi-cable" }, { label: "What Is a Suzi Cable", href: "/guides/suzi-cable" }]}
    >
      <div className="space-y-8 text-sm text-foreground-muted">
        <section>
          <h2 className="text-xl font-bold text-foreground">What It Does</h2>
          <p className="mt-3">
            The Suzi cable carries every electrical signal from your tow vehicle to the trailer:
            marker lights, indicators, brake lights, reverse lights, and — on trailers with
            electronic braking — the EBS or breakaway signal and, on some setups, a camera feed.
            Without it, the trailer cannot legally or safely operate on the road.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Common Pin Counts and Connector Types</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">7-pin round or flat (AS 2513 style):</strong>{" "}
              the standard for light trailers, box trailers, and most caravans.
            </li>
            <li>
              <strong className="text-foreground">12-pin flat:</strong> an upgrade for caravans
              running fridges, battery charging, and other high-draw auxiliaries.
            </li>
            <li>
              <strong className="text-foreground">Heavy-duty coils (AS 4735 style):</strong>{" "}
              larger-bodied connectors built for heavy commercial trailers.
            </li>
            <li>
              <strong className="text-foreground">EBS/ABS coils (ISO 7638 style):</strong>{" "}
              12V and 24V braking coils for trailers with electronic braking systems.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Why Cable Quality Matters</h2>
          <p className="mt-3">
            Sydney&rsquo;s coastal humidity is hard on cheap connectors. Tinned copper conductors
            resist corrosion far better than bare copper, which matters most inside a spiral
            cable that flexes and stretches every time you connect and disconnect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Signs Yours Needs Replacing</h2>
          <p className="mt-3">
            Flickering or dim lights, lights that cross-flash between sides (often called the
            &ldquo;disco light&rdquo; effect), a plug that will not seat firmly, or visible
          cracking in the coil jacket are all common signs. See our{" "}
            <Link href="/guides/trailer-lights-not-working" className="text-accent hover:underline">
              trailer lights not working guide
            </Link>{" "}
            for troubleshooting steps.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Get the Right Cable Delivered</h2>
          <p className="mt-3">
            Not sure which pin count or connector you need? Call or WhatsApp us — describe your
            trailer type and current plug and we will help you identify the right cable, then
            dispatch it to you. Or{" "}
            <Link href="/book" className="text-accent hover:underline">
              book a callback online
            </Link>
            .
          </p>
        </section>
      </div>
    </SeoPageShell>
  );
}
