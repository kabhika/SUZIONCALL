import Link from "next/link";
import { siteConfig, areaPages } from "@/site.config";

export function ServiceCoverage() {
  return (
    <section aria-labelledby="coverage-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 id="coverage-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
        Coverage
      </h2>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Based in {siteConfig.hub.displayLocation}. We deliver across Sydney metro and beyond.
        Outside the metro area? Call us. If we can get a cable to you, we will.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {areaPages.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="rounded-full border border-border-subtle px-4 py-2 text-sm text-foreground-muted transition hover:border-accent hover:text-foreground"
          >
            {area.name}
          </Link>
        ))}
        <Link
          href="/areas"
          className="rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent"
        >
          View All Areas
        </Link>
      </div>
    </section>
  );
}
