import { cableCategories } from "@/site.config";

export function CableTypesGrid() {
  return (
    <section aria-labelledby="cable-types-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 id="cable-types-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
        What We Supply
      </h2>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        Trade-grade Suzi cables, coils, and connectors for commercial and recreational trailers.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cableCategories.map((cat) => (
          <div key={cat.slug} className="rounded-lg border border-border-subtle bg-surface p-6">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-foreground">{cat.name}</h3>
              {cat.standard && (
                <span className="shrink-0 rounded border border-border-subtle px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-foreground-muted">
                  {cat.standard}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-foreground-muted">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
