import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";
import { areaPages, siteConfig } from "@/site.config";

type Params = { slug: string };

export function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areaPages.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `Suzi Cable Delivery ${area.name} | Sydney`,
    description: `Emergency Suzi cable and trailer electrical delivery to ${area.name}. ${area.intro.slice(0, 100)}`,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = areaPages.find((a) => a.slug === slug);
  if (!area) notFound();

  const locations = area.corridors ?? area.suburbs ?? [];

  return (
    <SeoPageShell
      eyebrow={area.region}
      h1={`Suzi Cable Delivery — ${area.name}`}
      intro={area.intro}
      breadcrumbs={[
        { label: "Coverage", href: "/areas" },
        { label: area.name, href: `/areas/${area.slug}` },
      ]}
    >
      <div className="space-y-8">
        {locations.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-foreground">Covering</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-border-subtle px-3 py-1 text-xs text-foreground-muted"
                >
                  {loc}
                </span>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-xl font-bold text-foreground">What We Deliver Here</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Standard 7-pin cables, heavy-duty coils, EBS/ABS braking coils, transition adapters,
            12-pin upgrades, camera cables, and breakaway system cables — dispatched to your
            breakdown location or depot in {area.name}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Outside {area.name}?</h2>
          <p className="mt-3 text-sm text-foreground-muted">
            Based in {siteConfig.hub.displayLocation}. We deliver across Sydney metro and beyond.
            Call us — if we can get a cable to you, we will. See{" "}
            <Link href="/areas" className="text-accent hover:underline">
              all coverage areas
            </Link>
            .
          </p>
        </section>
      </div>
    </SeoPageShell>
  );
}
