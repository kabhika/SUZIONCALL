import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function telHref(phoneE164: string) {
  return `tel:${phoneE164}`;
}

export function whatsappHref(whatsappE164: string, message: string) {
  const digits = whatsappE164.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
