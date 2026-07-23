# SuziOnCall

Emergency Suzi cable and trailer electrical delivery — Sydney. Next.js (App Router) + TypeScript
+ Tailwind CSS. See [site.config.ts](site.config.ts) for brand, contact, delivery tier, catalog,
and service area data — it is the single source of truth the whole site reads from.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site runs and renders fully without any env vars set — Supabase
and n8n calls are skipped with a console warning when their env vars are missing (see
[app/book/actions.ts](app/book/actions.ts)).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have:

| Variable | Required for | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Booking persistence | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Booking persistence | Anon/public key — insert-only via RLS |
| `N8N_BOOKING_WEBHOOK_URL` | Operator WhatsApp notification | Server-only, never exposed to the client |
| `NEXT_PUBLIC_GA4_ID` | Analytics | GA4 measurement ID, e.g. `G-XXXXXXXXXX` |

Without Supabase configured, bookings are logged to the server console instead of persisted —
useful for local development, not for production.

## Supabase setup

1. Create a Supabase project.
2. Run the migration in [supabase/migrations/0001_create_bookings.sql](supabase/migrations/0001_create_bookings.sql)
   via the SQL editor or `supabase db push`. It creates the `bookings` table with row level
   security enabled and a single policy: the `anon` role may `insert` only — no select, update,
   or delete from the client.
3. Copy the project URL and anon key into `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

## n8n webhook contract

On successful validation (and Supabase insert, when configured), the server posts a JSON payload
to `N8N_BOOKING_WEBHOOK_URL`:

```json
{
  "source": "suzioncall-website",
  "submittedAt": "2026-07-23T10:15:00.000Z",
  "name": "Jane Smith",
  "phone": "0400 000 000",
  "location": "M4 Motorway near Parramatta",
  "lat": -33.8,
  "lng": 150.9,
  "vehicleType": "caravan",
  "issue": "lights_out",
  "cableType": "standard-7-pin",
  "urgency": "today",
  "preferredContact": "call"
}
```

`lat`/`lng` are omitted (`undefined`) unless the visitor used "Use my location". Build the n8n
workflow to parse this payload and send a WhatsApp message to the operator. Webhook failures are
logged server-side and do not fail the visitor's booking submission — the booking is already
saved (or logged) by that point.

## Adding a new area page

Area pages live at `/areas/[slug]` ([app/areas/[slug]/page.tsx](app/areas/[slug]/page.tsx)) and
are generated from the `areaPages` array in `site.config.ts`. To add one:

1. Add an entry to `areaPages` in `site.config.ts` with a unique `slug`, `name`, `region`,
   `intro` (write real local copy, not spun text), and either `corridors` or `suburbs`.
2. That's it — the route, sitemap entry, footer link, and coverage page card are all generated
   from that array automatically.

## Changing phone, WhatsApp, or hours

All in `site.config.ts`:

- `siteConfig.contact.phoneDisplay` / `phoneE164` — update both together, kept in sync.
- `siteConfig.contact.whatsappE164` — digits only, no `+`.
- `siteConfig.hours` — currently a placeholder; do not claim 24/7 or specific hours until
  confirmed.
- `siteConfig.whatsappMessageTemplate` — the pre-filled WhatsApp message text.

## What the operator must still supply before launch

- **Confirmed phone/WhatsApp hours** — `siteConfig.hours` is a TODO placeholder.
- **Real photography** — hero and section imagery is not included in this build; add via
  `next/image` with descriptive alt text when available.
- **Google Business Profile** — see checklist below. Add the URL to
  `siteConfig.social.googleBusinessProfileUrl` once created.
- **Legal review** of [/privacy](app/privacy/page.tsx) and [/terms](app/terms/page.tsx) — both
  are marked as drafts in-page.
- **Supabase project + credentials**, and the **n8n workflow** that consumes the webhook payload
  above and sends the WhatsApp notification.
- **Pricing confirmation process** — the site intentionally does not publish fixed prices;
  confirm your quote-on-callback process matches the copy.
- Any real metrics or testimonials, if you want them added — none are fabricated in this build.

## Post-launch SEO checklist

- [ ] Verify domain ownership in Google Search Console
- [ ] Submit `/sitemap.xml` in Search Console
- [ ] Create a Google Business Profile as a **service-area business** (no public street address)
      — match NAP exactly against the footer and JSON-LD
- [ ] Confirm `NEXT_PUBLIC_GA4_ID` is set and GA4 events are firing (`cta_call_click`,
      `cta_whatsapp_click`, `booking_form_start`, `booking_form_submit_success`,
      `booking_form_error`)
- [ ] Spot-check JSON-LD (`AutomotiveBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) with
      Google's Rich Results Test
- [ ] Confirm `tel:` and WhatsApp deep links dial/open correctly on a real mobile device
- [ ] Re-run `npm run build` and `npm run lint` clean before each deploy

## Project structure

- `site.config.ts` — brand, contact, delivery tiers, cable catalog, area list, FAQs
- `app/` — routes (App Router). `app/book/actions.ts` is the booking server action.
- `components/` — shared UI: header/footer, CTA groups, sticky mobile bar, form, SEO shell, JSON-LD
- `lib/` — validation schema (Zod), Supabase client, analytics stub, small utilities
- `supabase/migrations/` — SQL migration for the `bookings` table

## Deploy

Built for Vercel. Set the environment variables above in the Vercel project settings for each
environment (Preview/Production), then deploy as a standard Next.js app.
