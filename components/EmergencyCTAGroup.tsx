"use client";

import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref, cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Props = {
  className?: string;
  variant?: "default" | "compact";
  showBook?: boolean;
};

export function EmergencyCTAGroup({ className, variant = "default", showBook = true }: Props) {
  const isCompact = variant === "compact";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <a
        href={telHref(siteConfig.contact.phoneE164)}
        onClick={() => trackEvent("cta_call_click")}
        className={cn(
          "tap-target flex items-center justify-center rounded-md bg-accent px-6 font-bold text-accent-foreground transition hover:bg-accent-strong",
          isCompact ? "py-2.5 text-sm" : "py-4 text-base"
        )}
      >
        <span
          className={cn(
            "whitespace-nowrap font-extrabold tracking-tight",
            isCompact ? "text-base" : "text-lg sm:text-xl"
          )}
        >
          {/* Prefix hidden below sm — the spaced numbers are too wide for small screens with it. */}
          <span className={isCompact ? "inline" : "hidden sm:inline"}>Call </span>
          {siteConfig.contact.phonesInlineDisplay}
        </span>
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
