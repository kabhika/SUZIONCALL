"use client";

import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref, whatsappHref, cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Props = {
  className?: string;
  variant?: "default" | "compact";
  showBook?: boolean;
};

export function EmergencyCTAGroup({ className, variant = "default", showBook = true }: Props) {
  const isCompact = variant === "compact";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <a
        href={telHref(siteConfig.contact.phoneE164)}
        onClick={() => trackEvent("cta_call_click")}
        className={cn(
          "tap-target flex items-center justify-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-foreground transition hover:bg-accent-strong",
          isCompact ? "py-2.5 text-sm" : "py-3.5 text-base"
        )}
      >
        Call {siteConfig.contact.phoneDisplay}
      </a>
      <a
        href={whatsappHref(
          siteConfig.contact.whatsappE164,
          siteConfig.whatsappMessageTemplate(siteConfig.brand.name)
        )}
        onClick={() => trackEvent("cta_whatsapp_click")}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "tap-target flex items-center justify-center gap-2 rounded-md border border-border-subtle bg-surface-raised px-6 font-semibold text-foreground transition hover:border-accent",
          isCompact ? "py-2.5 text-sm" : "py-3.5 text-base"
        )}
      >
        WhatsApp Us
      </a>
      {showBook && (
        <Link
          href="/book"
          className={cn(
            "tap-target flex items-center justify-center gap-2 rounded-md border border-border-subtle px-6 font-semibold text-foreground-muted transition hover:border-accent hover:text-foreground",
            isCompact ? "py-2.5 text-sm" : "py-3.5 text-base"
          )}
        >
          Book Online
        </Link>
      )}
    </div>
  );
}
