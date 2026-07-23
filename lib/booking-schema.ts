import { z } from "zod";

export const vehicleTypes = [
  "prime_mover",
  "heavy_trailer",
  "caravan",
  "horse_float",
  "other",
] as const;

export const issueTypes = [
  "cable_damaged",
  "lights_out",
  "ebs_fault",
  "connector_broken",
  "breakaway",
  "unsure",
] as const;

export const cableTypeOptions = [
  "standard-7-pin",
  "heavy-duty-coils",
  "ebs-abs-coils",
  "transition-adapters",
  "12-pin-flat-upgrades",
  "camera-av-coils",
  "breakaway-cables",
  "not_sure",
] as const;

export const urgencyOptions = ["stranded_now", "today", "this_week"] as const;

export const preferredContactOptions = ["call", "whatsapp"] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Enter a valid phone number"),
  location: z.string().trim().min(1, "Location is required").max(300),
  lat: z.number().optional(),
  lng: z.number().optional(),
  vehicleType: z.enum(vehicleTypes),
  issue: z.enum(issueTypes),
  cableType: z.enum(cableTypeOptions),
  urgency: z.enum(urgencyOptions),
  preferredContact: z.enum(preferredContactOptions),
  consent: z.literal(true, {
    message: "Consent is required so we can call you back",
  }),
  // honeypot — must stay empty
  company: z.string().max(0).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
