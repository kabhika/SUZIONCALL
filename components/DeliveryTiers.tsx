import { deliveryTiers } from "@/site.config";

export function DeliveryTiers() {
  return (
    <section aria-labelledby="delivery-tiers-heading" className="border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 id="delivery-tiers-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
          Delivery Tiers
        </h2>
        <p className="mt-2 max-w-2xl text-foreground-muted">
          We match the courier tier to how urgent your breakdown is. Exact timing depends on
          location and stock — call us and we will tell you what is realistic.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryTiers.map((tier) => (
            <div key={tier.slug} className="flex flex-col rounded-lg border border-border-subtle bg-surface-raised p-6">
              <h3 className="text-base font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{tier.description}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                {tier.typicalWindow}
              </p>
              <p className="mt-1 text-xs text-foreground-muted">{tier.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
