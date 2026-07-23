import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref } from "@/lib/utils";

export function FleetCTA() {
  return (
    <section className="border-y border-border-subtle bg-surface-raised">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Run a Fleet? Set Up a Depot Account.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-foreground-muted">
            Fleet accounts get fast depot dispatch, wholesale restock orders, and invoicing.
            Enquire and we will set you up.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Link
            href="/fleets"
            className="tap-target flex items-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent-strong"
          >
            Fleet Enquiry
          </Link>
          <a
            href={telHref(siteConfig.contact.phoneE164)}
            className="tap-target flex items-center rounded-md border border-border-subtle px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
