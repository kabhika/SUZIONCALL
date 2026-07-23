// Single source of truth for brand, contact, and business data.
// Update phone/WhatsApp/hours/areas here — every page reads from this file.

export type CableCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  standard?: string;
  segment: "commercial" | "recreational" | "both";
};

export type DeliveryTier = {
  slug: string;
  name: string;
  description: string;
  typicalWindow: string;
  bestFor: string;
};

export type AreaPage = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  corridors?: string[];
  suburbs?: string[];
};

export const siteConfig = {
  brand: {
    name: "SuziOnCall",
    fullName: "SuziOnCall",
    parentLine: "A Coralstone Group Company",
    tagline: "Emergency Suzi Cable Replacement & Delivery",
    domain: "suzioncall.com.au",
    url: "https://suzioncall.com.au",
    abn: "51690335034",
    locale: "en-AU",
  },
  contact: {
    phoneDisplay: "0467 604 791",
    phoneE164: "+61467604791",
    whatsappE164: "61467604791",
    email: "info@suzioncall.com.au",
  },
  // TODO: confirm live hours before publishing — do not claim 24/7 unless true.
  hours: {
    display: "Call for current dispatch hours",
    note: "TODO: confirm phone line hours and dispatch hours with operator",
  },
  hub: {
    displayLocation: "Western Sydney",
    areaServed: ["Sydney", "Greater Sydney", "New South Wales"],
  },
  social: {
    // TODO: add Google Business Profile URL once created
    googleBusinessProfileUrl: "",
  },
  whatsappMessageTemplate: (brand: string) =>
    `Hi ${brand}, I need an emergency Suzi cable. Location: ___. Vehicle: ___. Issue: ___. Please call back.`,
};

export const deliveryTiers: DeliveryTier[] = [
  {
    slug: "emergency-hotshot",
    name: "Emergency Hotshot",
    description:
      "Direct point-to-point courier dispatched to your breakdown location. Our fastest option, priced by distance and urgency.",
    typicalWindow: "Typically fastest — priced by distance and urgency",
    bestFor: "Stranded now, blocking a route, or under time pressure",
  },
  {
    slug: "rapid-on-demand",
    name: "Rapid On-Demand",
    description:
      "Urgent but not roadside-critical. Dispatched same day within the metro radius.",
    typicalWindow: "Typically same day, metro radius",
    bestFor: "Down today but not stranded on the road",
  },
  {
    slug: "same-day-metro",
    name: "Same-Day Metro",
    description:
      "Booked earlier in the day for delivery by end of day across metro Sydney.",
    typicalWindow: "Typically same day if booked earlier",
    bestFor: "Planned repairs, depot pickups, workshop bookings",
  },
  {
    slug: "standard-wholesale",
    name: "Standard / Wholesale Restock",
    description:
      "For workshops, dealers, and fleet stock replenishment. Not urgent.",
    typicalWindow: "Typically 1-2 days",
    bestFor: "Workshops, dealers, and fleet stock orders",
  },
];

export const cableCategories: CableCategory[] = [
  {
    slug: "standard-7-pin",
    name: "Standard 7-Pin Suzi Cables",
    shortName: "7-Pin Standard",
    description:
      "Small round and flat 7-pin coiled cables (AS 2513 style) for light trailers, box trailers, and caravans.",
    standard: "AS 2513",
    segment: "recreational",
  },
  {
    slug: "heavy-duty-coils",
    name: "Heavy-Duty Coils",
    shortName: "Heavy-Duty Coil",
    description:
      "Larger-bodied coiled cables (AS 4735 style) built for heavy commercial trailers carrying higher continuous current.",
    standard: "AS 4735",
    segment: "commercial",
  },
  {
    slug: "ebs-abs-coils",
    name: "EBS / ABS Braking Coils",
    shortName: "EBS/ABS Coil",
    description:
      "ISO 7638 style braking coils in 12V and 24V variants for heavy vehicles running electronic braking systems.",
    standard: "ISO 7638",
    segment: "commercial",
  },
  {
    slug: "transition-adapters",
    name: "Transition Adapters",
    shortName: "Transition Adapter",
    description:
      "Adapters connecting older AS 2513-era prime movers to newer heavy-duty trailer sockets.",
    segment: "commercial",
  },
  {
    slug: "12-pin-flat-upgrades",
    name: "12-Pin Flat Upgrades",
    shortName: "12-Pin Upgrade",
    description:
      "Upgraded flat 12-pin cabling for caravans running fridges, battery charging, and high-draw auxiliaries.",
    segment: "recreational",
  },
  {
    slug: "camera-av-coils",
    name: "Camera / AV Coil Cables",
    shortName: "Camera/AV Coil",
    description:
      "Shielded spiral cables for reversing camera and AV feeds on caravans and horse floats.",
    segment: "recreational",
  },
  {
    slug: "breakaway-cables",
    name: "Breakaway System Cables",
    shortName: "Breakaway Cable",
    description:
      "Breakaway system cables and connectors for heavy trailers and braked caravans.",
    segment: "both",
  },
];

export const areaPages: AreaPage[] = [
  {
    slug: "western-sydney",
    name: "Western Sydney",
    region: "Home hub",
    intro:
      "Western Sydney is our home base. Depots, distribution centres, and logistics yards across Eastern Creek, Wetherill Park, and Prestons sit inside our fastest dispatch radius.",
    suburbs: ["Eastern Creek", "Wetherill Park", "Prestons", "Smithfield", "Blacktown"],
  },
  {
    slug: "m4-corridor",
    name: "M4 Corridor",
    region: "Motorway corridor",
    intro:
      "The M4 corridor carries heavy freight between Western Sydney and the CBD. We dispatch to breakdowns and depots along the M4 from Penrith through to Parramatta and beyond.",
    corridors: ["M4 Motorway", "Parramatta", "Penrith", "Silverwater"],
  },
  {
    slug: "m5-corridor",
    name: "M5 Corridor",
    region: "Motorway corridor",
    intro:
      "The M5 corridor is a key route for prime movers and heavy trailers moving through South West Sydney. We cover breakdowns and depot deliveries along the M5 from Liverpool through to Arncliffe.",
    corridors: ["M5 Motorway", "Liverpool", "Moorebank", "Arncliffe"],
  },
  {
    slug: "port-botany",
    name: "Port Botany",
    region: "Freight and container precinct",
    intro:
      "Port Botany's container and freight operations run on tight turnaround windows. A grounded trailer at the port costs real money by the hour, and we dispatch replacement Suzi cables and EBS coils to keep freight moving.",
    suburbs: ["Port Botany", "Banksmeadow", "Botany"],
  },
  {
    slug: "arndell-park",
    name: "Arndell Park",
    region: "Industrial and logistics precinct",
    intro:
      "Arndell Park's industrial estate is home to transport yards and distribution depots. We deliver replacement cables and adapters direct to depot gates in the area.",
    suburbs: ["Arndell Park", "Doonside", "Blacktown"],
  },
  {
    slug: "lidcombe",
    name: "Lidcombe",
    region: "Inner-west logistics precinct",
    intro:
      "Lidcombe sits at the crossroads of the M4 and Sydney's inner west freight network. We cover breakdowns and workshop deliveries in and around Lidcombe's transport and auto electrical trade.",
    suburbs: ["Lidcombe", "Auburn", "Berala"],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a Suzi cable?",
    answer:
      "A Suzi cable (also called a suzie coil or spiral trailer cable) is the coiled electrical cable that connects a towing vehicle to a trailer, caravan, or horse float. It carries power for marker lights, indicators, brake lights, and — on heavier trailers — electronic braking (EBS) and breakaway signals.",
  },
  {
    question: "How fast can you get a cable to me?",
    answer:
      "It depends on your location and which delivery tier you need. Call us with your location and we will tell you honestly what is achievable. We do not promise a fixed time before we know where you are.",
  },
  {
    question: "Do you cover areas outside Sydney metro?",
    answer:
      "Sydney metro is our home base and fastest coverage zone. Outside metro is accepted case by case and priced by distance — call us and if we can get a cable to you, we will.",
  },
  {
    question: "Can you install the cable, not just deliver it?",
    answer:
      "Deliver-and-install is available via partner mobile auto electricians. Enquire when you book and we will confirm availability for your location.",
  },
  {
    question: "I don't know what pin count or cable type I need. Can you help?",
    answer:
      "Yes. Tell us your trailer type (caravan, heavy trailer, horse float, etc.) and, if possible, a photo or description of your current plug. We will help you identify the right cable when we call you back.",
  },
  {
    question: "Do you supply workshops, dealers, and fleets, not just emergencies?",
    answer:
      "Yes. We supply standard and wholesale restock orders for workshops, dealers, and fleet accounts, in addition to emergency roadside delivery.",
  },
];
