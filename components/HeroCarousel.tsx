"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/lib/product-catalog";

const slides = [
  { src: "/products/hero.webp", name: "Connections for the road ahead", detail: "Electrical · Braking · Air lines · Adapters", kind: "Illustrative range" },
  ...products.map((product) => ({
    src: `/products/${product.id}${product.id.startsWith("stock-") ? "-enhanced" : ""}.webp`,
    name: product.name,
    detail: product.vehicles,
    kind: product.id.startsWith("stock-") ? "Enhanced product photo" : product.kind,
  })),
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearTimeout(timer);
  }, [paused, active]);

  const changeSlide = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section
      aria-label="Our cable range"
      aria-roledescription="carousel"
      className="min-w-0 overflow-hidden rounded-2xl border border-border-subtle bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#edf0f2]">
        {slides.map((item, index) => (
          <div
            key={item.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${item.name}`}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image src={item.src} alt={item.name} fill priority={index === 0} sizes="(min-width: 1024px) 500px, 95vw" className="object-contain p-3" />
          </div>
        ))}
      </div>
      <div className="px-5 pt-5" aria-live={paused ? "polite" : "off"} aria-atomic="true">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-foreground-muted">{slide.kind}</p>
          <span className="shrink-0 text-xs tabular-nums text-foreground-muted">{active + 1} / {slides.length}</span>
        </div>
        <h2 className="mt-2 min-h-12 text-base font-semibold leading-6">{slide.name}</h2>
        <p className="mt-1 min-h-16 text-sm leading-5 text-foreground-muted">{slide.detail}</p>
      </div>
      <div className="flex items-center justify-between gap-3 px-5">
        <button type="button" onClick={() => changeSlide(-1)} aria-label="Previous cable image" className="tap-target rounded-md border border-border-subtle px-4 text-lg hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">←</button>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"} title={paused ? "Play slideshow" : "Pause slideshow"} className="tap-target rounded-md text-sm text-foreground-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span></button>
        <button type="button" onClick={() => changeSlide(1)} aria-label="Next cable image" className="tap-target rounded-md border border-border-subtle px-4 text-lg hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">→</button>
      </div>
      <div className="flex flex-wrap justify-center px-3 py-1" aria-label="Choose a cable image">
        {slides.map((item, index) => (
          <button key={item.src} type="button" aria-label={`Show image ${index + 1}: ${item.name}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} className="flex h-11 w-7 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-accent">
            <span className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${index === active ? "w-5 bg-accent" : "w-1.5 bg-foreground-muted/40"}`} />
          </button>
        ))}
      </div>
      <p className="border-t border-border-subtle px-5 py-3 text-[11px] leading-4 text-foreground-muted">Product examples. Exact connection and fit confirmed before dispatch.</p>
    </section>
  );
}
