import Image from "next/image";
import { siteConfig } from "@/site.config";

const products = [
  { id: "stock-1", name: "Spring-Protected Electrical Suzi Coil", note: "Metal round-plug lead with anti-kink springs for trailer electrical connections.", vehicles: "Prime movers & commercial trailers with matching round sockets", kind: "AI-enhanced stock photo" },
  { id: "stock-2", name: "Locking-Plug Electrical Suzi Coil", note: "Coiled electrical lead with locking plug housings. We check the pin layout and voltage before matching.", vehicles: "Prime movers & heavy trailers with matching locking connectors", kind: "AI-enhanced stock photo" },
  { id: "stock-3", name: "Round Metal-Plug Electrical Suzi Coil", note: "Spiral electrical lead with metal plug bodies and extended tails.", vehicles: "Trucks & commercial trailers with matching round sockets", kind: "AI-enhanced stock photo" },
  { id: "stock-4", name: "Red & Blue Air-Brake Suzi Lines", note: "Paired coiled pneumatic hoses with threaded fittings and protective springs.", vehicles: "Air-braked prime movers, semi-trailers & heavy trailers", kind: "AI-enhanced stock photo" },
  { id: "flat", name: "7-Pin Flat Electrical Suzi Coil", note: "Flat-plug coiled lead for trailer lighting and compatible electrical connections.", vehicles: "Cars, utes & 4WDs towing box trailers, camper trailers or caravans", kind: "Illustrative image" },
  { id: "15-pin", name: "15-Pin Truck & Trailer Suzi Coil", note: "European-style electrical connection. Confirm the connector standard and vehicle voltage.", vehicles: "Prime movers & semi-trailers equipped with matching 15-pin sockets", kind: "Illustrative image" },
  { id: "adapter", name: "15-Pin to Twin 7-Pin Suzi Adapter", note: "Split-tail adapter for compatible truck and trailer electrical systems. Wiring functions must match.", vehicles: "Truck–trailer combinations using different compatible connector systems", kind: "Illustrative image" },
  { id: "12-pin", name: "12-Pin Flat Caravan Lead", note: "Flat-plug lead for lighting and auxiliary circuits, subject to the cable and circuit ratings.", vehicles: "4WDs & tow vehicles with compatible 12-pin caravans or camper trailers", kind: "Illustrative image" },
  { id: "camera", name: "Trailer Camera / AV Suzi Coil", note: "Coiled video connection. Camera-system plugs and wiring vary by manufacturer.", vehicles: "Camera-equipped trucks, caravans, horse floats & trailers", kind: "Illustrative image" },
  { id: "breakaway", name: "Mechanical Breakaway Safety Cable", note: "A mechanical brake-actuation tether, separate from electrical breakaway wiring. Availability on enquiry.", vehicles: "Caravans & trailers fitted with a compatible mechanical breakaway mechanism", kind: "Illustrative image" },
];

export function ProductGallery() {
  const message = encodeURIComponent("Hi SuziOnCall, please help me match a replacement cable. I can send photos of both connector ends, my vehicle details and location.");
  return (
    <section id="cable-gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 border-y border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Find your connection</p>
        <h2 id="gallery-heading" className="mt-3 text-2xl font-bold sm:text-3xl">A cable for the journey ahead.</h2>
        <p className="mt-3 max-w-2xl text-foreground-muted">From prime movers and semi-trailers to caravans, camper trailers and horse floats. Explore the connections below, then send us your plug photos for the right match.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-xl border border-border-subtle bg-background">
              <a href={`/products/${product.id}-large.webp`} target="_blank" rel="noopener noreferrer" aria-label={`${product.id.startsWith("stock-") ? "View original stock photo" : "View larger image"}: ${product.name}`} className="block bg-[#edf0f2] focus-visible:outline-2 focus-visible:outline-accent">
                <div className="relative aspect-[4/5]">
                  <Image src={`/products/${product.id}${product.id.startsWith("stock-") ? "-enhanced" : ""}.webp`} alt={product.name} fill sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw" className="object-contain p-3" />
                </div>
              </a>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-wide text-accent">{product.kind}</p>
                <h3 className="mt-2 text-base font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm text-foreground-muted">{product.note}</p>
                <div className="mt-4 border-t border-border-subtle pt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">Typical vehicle applications</p>
                  <p className="mt-1 text-sm text-foreground">{product.vehicles}</p>
                </div>
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
        <p className="mt-5 text-xs text-foreground-muted">Vehicle types are a guide, not a fitment guarantee. We confirm connector type, pin layout, voltage, length and availability before dispatch. Stock images are AI-enhanced; select one to view the original photo. Other images illustrate cable categories, not exact makes or models.</p>
      </div>
    </section>
  );
}
