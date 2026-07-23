// GA4 event stubs. No-ops when NEXT_PUBLIC_GA4_ID is unset.

export type AnalyticsEvent =
  | "cta_call_click"
  | "cta_whatsapp_click"
  | "booking_form_start"
  | "booking_form_submit_success"
  | "booking_form_error";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", event, params ?? {});
}
