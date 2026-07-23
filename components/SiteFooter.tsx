import Link from "next/link";
import { siteConfig, cableCategories, areaPages } from "@/site.config";
import { telHref } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-foreground">{siteConfig.brand.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-foreground-muted">
              {siteConfig.brand.parentLine}
            </p>
            <p className="mt-4 text-sm text-foreground-muted">
              Emergency Suzi cable and trailer electrical delivery. Based in{" "}
              {siteConfig.hub.displayLocation}. We deliver across Sydney metro and beyond.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <a href={telHref(siteConfig.contact.phoneE164)} className="font-semibold text-accent">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-foreground-muted">{siteConfig.contact.email}</p>
              <p className="text-foreground-muted">ABN {siteConfig.brand.abn}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">What We Supply</p>
            <ul className="mt-3 space-y-2">
              {cableCategories.map((cat) => (
                <li key={cat.slug}>
                  <span className="text-sm text-foreground-muted">{cat.shortName}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Service Areas</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/areas" className="text-sm text-foreground-muted hover:text-accent">
                  All Sydney Coverage
                </Link>
              </li>
              {areaPages.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-foreground-muted hover:text-accent"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/fleets" className="text-sm text-foreground-muted hover:text-accent">
                  Fleet & Commercial
                </Link>
              </li>
              <li>
                <Link href="/caravan" className="text-sm text-foreground-muted hover:text-accent">
                  Caravan & RV
                </Link>
              </li>
              <li>
                <Link href="/guides/suzi-cable" className="text-sm text-foreground-muted hover:text-accent">
                  What Is a Suzi Cable
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-foreground-muted hover:text-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground-muted hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-foreground-muted hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground-muted hover:text-accent">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border-subtle pt-6 text-xs text-foreground-muted">
          <p>
            &copy; {year} {siteConfig.brand.name}. {siteConfig.brand.parentLine}. ABN{" "}
            {siteConfig.brand.abn}.
          </p>
          <p className="mt-2 max-w-3xl">
            Trailer lighting and braking connections are safety-critical and regulated. If your
            lights or EBS connection are down, do not continue driving until fixed. Check your
            obligations with your operator or local regulations. We supply trade-grade hardware;
            we do not certify vehicles.
          </p>
        </div>
      </div>
    </footer>
  );
}
