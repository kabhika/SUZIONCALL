import { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";

type Props = {
  eyebrow?: string;
  h1: string;
  intro: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
};

export function SeoPageShell({ eyebrow, h1, intro, breadcrumbs, children }: Props) {
  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />

      <header className="mx-auto max-w-4xl px-4 pt-8 pb-4 sm:px-6">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">{h1}</h1>
        <p className="mt-4 text-lg text-foreground-muted">{intro}</p>
        <EmergencyCTAGroup className="mt-6" />
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">{children}</div>
    </div>
  );
}
