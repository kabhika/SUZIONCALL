import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.brand.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={breadcrumbJsonLd} />
      <ol className="flex flex-wrap items-center gap-1 text-xs text-foreground-muted">
        {all.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === all.length - 1 ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
