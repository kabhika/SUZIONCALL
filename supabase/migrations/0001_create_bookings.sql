-- Bookings table for SuziOnCall callback/booking requests.
-- Insert-only from the public anon key: no select/update/delete for anon.

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  location text not null,
  lat double precision,
  lng double precision,
  vehicle_type text not null check (
    vehicle_type in ('prime_mover', 'heavy_trailer', 'caravan', 'horse_float', 'other')
  ),
  issue text not null check (
    issue in ('cable_damaged', 'lights_out', 'ebs_fault', 'connector_broken', 'breakaway', 'unsure')
  ),
  cable_type text not null,
  urgency text not null check (
    urgency in ('stranded_now', 'today', 'this_week')
  ),
  preferred_contact text not null check (
    preferred_contact in ('call', 'whatsapp')
  )
);

alter table public.bookings enable row level security;

-- Anon key may only insert new rows; no read/update/delete from the client.
create policy "Allow anonymous booking inserts"
  on public.bookings
  for insert
  to anon
  with check (true);
