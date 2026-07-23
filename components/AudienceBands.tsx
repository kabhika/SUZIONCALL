import Link from "next/link";

export function AudienceBands() {
  return (
    <section aria-labelledby="audience-heading" className="border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 id="audience-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
          Built for Two Kinds of Breakdown
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-lg border border-border-subtle bg-surface-raised p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Fleet & Commercial
            </span>
            <h3 className="mt-2 text-xl font-bold text-foreground">
              Prime Movers, Heavy Trailers, Depots
            </h3>
            <p className="mt-3 text-sm text-foreground-muted">
              EBS coils, heavy-duty connectors, AS 2513 to heavy-duty transition adapters for
              older prime movers hauling newer trailers, fast depot and roadside dispatch, and
              fleet accounts with invoicing.
            </p>
            <Link
              href="/fleets"
              className="tap-target mt-6 inline-flex w-fit items-center rounded-md border border-border-subtle px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent"
            >
              Fleet & Commercial Services
            </Link>
          </div>

          <div className="flex flex-col rounded-lg border border-border-subtle bg-surface-raised p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Caravan & RV
            </span>
            <h3 className="mt-2 text-xl font-bold text-foreground">
              Caravans, Camper Trailers, Horse Floats
            </h3>
            <p className="mt-3 text-sm text-foreground-muted">
              Standard 7-pin cables, 12-pin flat upgrades, breakaway cable fixes, camera and AV
              coil cables, holiday-park delivery, and deliver-and-install.
            </p>
            <Link
              href="/caravan"
              className="tap-target mt-6 inline-flex w-fit items-center rounded-md border border-border-subtle px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent"
            >
              Caravan & RV Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
