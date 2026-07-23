const points = [
  {
    title: "Correct Fitment",
    description: "We match the cable, pin count, and connector standard to your vehicle or trailer.",
  },
  {
    title: "Trade-Grade Stock",
    description: "Tinned copper conductors resist corrosion in Sydney's coastal humidity.",
  },
  {
    title: "Clear Callback Process",
    description: "We call you back to confirm details before anything is dispatched.",
  },
  {
    title: "Tiered Delivery",
    description: "The courier tier is matched to your urgency, priced by distance.",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Why choose us" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.title} className="border-l-2 border-accent pl-4">
            <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
            <p className="mt-1 text-sm text-foreground-muted">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
