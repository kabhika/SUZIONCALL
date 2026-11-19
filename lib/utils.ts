import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function telHref(phoneE164: string) {
  return `tel:${phoneE164}`;
}
