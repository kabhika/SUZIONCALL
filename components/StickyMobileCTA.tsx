"use client";

import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref, whatsappHref } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCTA() {
  return (
    <nav
      aria-label="Emergency contact"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border-subtle bg-surface/95 backdrop-blur sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref(siteConfig.contact.phoneE164)}
        onClick={() => trackEvent("cta_call_click")}
        className="tap-target flex flex-1 flex-col items-center justify-center gap-0.5 bg-accent py-2.5 text-xs font-semibold text-accent-foreground"
      >
        Call
      </a>
      <a
        href={whatsappHref(
          siteConfig.contact.whatsappE164,
          siteConfig.whatsappMessageTemplate(siteConfig.brand.name)
        )}
        onClick={() => trackEvent("cta_whatsapp_click")}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-target flex flex-1 flex-col items-center justify-center gap-0.5 border-x border-border-subtle bg-surface-raised py-2.5 text-xs font-semibold text-foreground"
      >
        WhatsApp
      </a>
      <Link
        href="/book"
        className="tap-target flex flex-1 flex-col items-center justify-center gap-0.5 bg-surface-raised py-2.5 text-xs font-semibold text-foreground-muted"
      >
        Book
      </Link>
    </nav>
  );
}
