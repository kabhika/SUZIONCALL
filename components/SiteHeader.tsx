import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref, whatsappHref } from "@/lib/utils";

const navLinks = [
  { href: "/fleets", label: "Fleet & Commercial" },
  { href: "/caravan", label: "Caravan & RV" },
  { href: "/transition-adapters", label: "Transition Adapters" },
  { href: "/areas", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-foreground">
            {siteConfig.brand.name}
          </span>
          <span className="text-[10px] uppercase tracking-wide text-foreground-muted">
            {siteConfig.brand.parentLine}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={whatsappHref(
              siteConfig.contact.whatsappE164,
              siteConfig.whatsappMessageTemplate(siteConfig.brand.name)
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex items-center rounded-md border border-border-subtle px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent"
          >
            WhatsApp
          </a>
          <a
            href={telHref(siteConfig.contact.phoneE164)}
            className="tap-target flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong"
          >
            Call {siteConfig.contact.phoneDisplay}
          </a>
        </div>

        <a
          href={telHref(siteConfig.contact.phoneE164)}
          className="tap-target flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground sm:hidden"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
