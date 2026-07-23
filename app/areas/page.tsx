import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageShell } from "@/components/SeoPageShell";
import { areaPages, siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Sydney Service Area — Suzi Cable Delivery",
  description:
    "Suzi cable and trailer electrical delivery across Sydney metro, including the M4 and M5 corridors, Port Botany, and Western Sydney logistics precincts.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <SeoPageShell
      eyebrow="Coverage"
      h1="Sydney Service Area"
      intro={`Based in ${siteConfig.hub.displayLocation}. We deliver across Sydney metro and beyond. Outside the metro area? Call us. If we can get a cable to you, we will.`}
      breadcrumbs={[{ label: "Coverage", href: "/areas" }]}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {areaPages.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="rounded-lg border border-border-subtle bg-surface p-5 transition hover:border-accent"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {area.region}
            </span>
            <h2 className="mt-1 text-lg font-semibold text-foreground">{area.name}</h2>
            <p className="mt-2 text-sm text-foreground-muted">{area.intro}</p>
          </Link>
        ))}
      </div>
    </SeoPageShell>
  );
}
