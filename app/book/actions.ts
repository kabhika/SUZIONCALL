"use server";

import { bookingSchema } from "@/lib/booking-schema";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export type BookingActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitBooking(
  _prevState: BookingActionState,
  formData: FormData
): Promise<BookingActionState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    lat: formData.get("lat") ? Number(formData.get("lat")) : undefined,
    lng: formData.get("lng") ? Number(formData.get("lng")) : undefined,
    vehicleType: formData.get("vehicleType"),
    issue: formData.get("issue"),
    cableType: formData.get("cableType"),
    urgency: formData.get("urgency"),
    preferredContact: formData.get("preferredContact"),
    consent: formData.get("consent") === "on",
    company: formData.get("company") ?? "",
  };

  const parsed = bookingSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot tripped — silently accept without processing.
  if (raw.company) {
    return { status: "success" };
  }

  const booking = parsed.data;

  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("bookings").insert({
      name: booking.name,
      phone: booking.phone,
      location: booking.location,
      lat: booking.lat ?? null,
      lng: booking.lng ?? null,
      vehicle_type: booking.vehicleType,
      issue: booking.issue,
      cable_type: booking.cableType,
      urgency: booking.urgency,
      preferred_contact: booking.preferredContact,
    });

    if (error) {
      console.error("Supabase booking insert failed:", error.message);
      return {
        status: "error",
        message: "We could not save your request. Please call or WhatsApp us directly.",
      };
    }
  } else {
    console.warn(
      "Supabase not configured (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY missing). Booking not persisted:",
      booking
    );
  }

  const webhookUrl = process.env.N8N_BOOKING_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "suzioncall-website",
          submittedAt: new Date().toISOString(),
          ...booking,
        }),
      });
    } catch (err) {
      console.error("n8n webhook POST failed:", err);
      // Booking is already saved (or logged); do not fail the user's submission over this.
    }
  } else {
    console.warn("N8N_BOOKING_WEBHOOK_URL not set — skipping operator notification webhook.");
  }

  return { status: "success" };
}
