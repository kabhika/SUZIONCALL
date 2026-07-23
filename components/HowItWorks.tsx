const steps = [
  {
    number: "01",
    title: "Request",
    description: "Call, WhatsApp, or book online. Tell us your location and what has failed.",
  },
  {
    number: "02",
    title: "Callback",
    description:
      "We call you back to confirm your location, vehicle or trailer type, and the cable or connector you need.",
  },
  {
    number: "03",
    title: "Dispatch",
    description:
      "The right cable is dispatched via the courier tier matched to your urgency. Install available via partner auto electricians.",
  },
  {
    number: "04",
    title: "Back on the Road",
    description: "Your vehicle or trailer is back to safe, working electrical connection.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 id="how-it-works-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
        How It Works
      </h2>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        From a dead cable to back on the road, four steps.
      </p>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.number}
            className="rounded-lg border border-border-subtle bg-surface p-6"
          >
            <span className="text-3xl font-bold text-accent">{step.number}</span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-foreground-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
