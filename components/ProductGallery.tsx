import Image from "next/image";
import { siteConfig } from "@/site.config";

const products = [
  { id: "stock-1", name: "Metal-plug coil with support springs", note: "Black coiled lead with metal connector housings and spring protection.", kind: "Stock photo" },
  { id: "stock-2", name: "Locking-plug electrical coil", note: "Black coiled lead with locking connector housings. Send us your plug photo to match it.", kind: "Stock photo" },
  { id: "stock-3", name: "Metal-plug electrical coil", note: "Black spiral lead with metal connector housings and extended tails.", kind: "Stock photo" },
  { id: "stock-4", name: "Red & blue air-line pair", note: "Coiled pneumatic lines with threaded fittings and protective springs.", kind: "Stock photo" },
  { id: "flat", name: "Flat-plug trailer coils", note: "Ask about flat-plug configurations for light trailers and caravans.", kind: "Illustrative image" },
  { id: "15-pin", name: "15-pin electrical coils", note: "Ask about European-style truck and trailer electrical connections.", kind: "Illustrative image" },
  { id: "adapter", name: "Split-tail adapter coils", note: "Ask about 15-pin to twin 7-pin configurations and other transitions.", kind: "Illustrative image" },
  { id: "12-pin", name: "12-pin caravan leads", note: "Ask about flat-plug leads for caravan auxiliary connections.", kind: "Illustrative image" },
  { id: "camera", name: "Camera / AV coils", note: "Camera connectors vary. Send your connector details so we can check the right lead.", kind: "Illustrative image" },
  { id: "breakaway", name: "Mechanical breakaway lanyards", note: "A mechanical safety tether. Ask about availability separately from electrical breakaway system leads.", kind: "Illustrative image" },
];

export function ProductGallery() {
  const message = encodeURIComponent("Hi SuziOnCall, please help me match a replacement cable. I can send photos of both connector ends, my vehicle details and location.");
  return (
    <section id="cable-gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Find your connection</p>
        <h2 id="gallery-heading" className="mt-3 text-2xl font-bold sm:text-3xl">A cable for the journey ahead.</h2>
        <p className="mt-3 max-w-2xl text-foreground-muted">Electrical coils, braking connections, air lines and adapters. These are examples of the range we can source. We confirm the exact fit and availability before dispatch.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-border-subtle bg-background">
              <a href={`/products/${product.id}-large.webp`} target="_blank" rel="noopener noreferrer" aria-label={`View larger image: ${product.name}`} className="block bg-[#edf0f2] focus-visible:outline-2 focus-visible:outline-accent">
                <div className="relative aspect-[4/5]">
                  <Image src={`/products/${product.id}.webp`} alt={product.name} fill sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw" className="object-contain p-3" />
                </div>
              </a>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-wide text-accent">{product.kind}</p>
                <h3 className="mt-2 text-base font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{product.note}</p>
              </div>
            </article>
          ))}
          <div className="flex flex-col justify-center rounded-xl border border-accent/30 bg-surface-raised p-6">
            <p className="text-xs uppercase tracking-widest text-accent">Unsure which one?</p>
            <h3 className="mt-3 text-xl font-semibold">Send a photo. We’ll help match it.</h3>
            <p className="mt-3 text-sm text-foreground-muted">Show both connector ends and tell us your truck or trailer details. We’ll check the connection, voltage and length with you.</p>
            <a href={`https://wa.me/${siteConfig.contact.whatsappE164}?text=${message}`} target="_blank" rel="noopener noreferrer" className="tap-target mt-6 inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">Match my cable on WhatsApp</a>
          </div>
        </div>
        <p className="mt-5 text-xs text-foreground-muted">Stock photos show supplied product examples. Illustrative images are AI-generated category visuals, not exact makes or models. Connector appearance alone does not confirm compatibility.</p>
      </div>
    </section>
  );
}
