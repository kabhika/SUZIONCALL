"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { submitBooking, type BookingActionState } from "@/app/book/actions";
import { cableCategories, siteConfig } from "@/site.config";
import { telHref, whatsappHref } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const initialState: BookingActionState = { status: "idle" };

const vehicleTypeLabels: Record<string, string> = {
  prime_mover: "Prime mover",
  heavy_trailer: "Heavy trailer",
  caravan: "Caravan",
  horse_float: "Horse float",
  other: "Other",
};

const issueLabels: Record<string, string> = {
  cable_damaged: "Cable damaged",
  lights_out: "Lights out",
  ebs_fault: "EBS fault",
  connector_broken: "Connector broken",
  breakaway: "Breakaway system",
  unsure: "Not sure",
};

const urgencyLabels: Record<string, string> = {
  stranded_now: "Stranded now",
  today: "Today",
  this_week: "This week",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="tap-target flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending..." : "Request Callback"}
    </button>
  );
}

export function BookingForm() {
  const [state, formAction] = useActionState(submitBooking, initialState);
  const [hasStarted, setHasStarted] = useState(false);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      trackEvent("booking_form_submit_success");
      formRef.current?.reset();
    } else if (state.status === "error") {
      trackEvent("booking_form_error", { message: state.message });
    }
  }, [state]);

  function handleStart() {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("booking_form_start");
    }
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setGeoStatus("error");
      return;
    }
    setGeoStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGeoStatus("done");
      },
      () => setGeoStatus("error"),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-border-subtle bg-surface p-8 text-center">
        <h3 className="text-xl font-bold text-foreground">Request Received</h3>
        <p className="mt-2 text-foreground-muted">We will call you shortly.</p>
        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row">
          <a
            href={telHref(siteConfig.contact.phoneE164)}
            className="tap-target flex flex-1 items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
          >
            Call {siteConfig.contact.phoneDisplay}
          </a>
          <a
            href={whatsappHref(
              siteConfig.contact.whatsappE164,
              siteConfig.whatsappMessageTemplate(siteConfig.brand.name)
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex flex-1 items-center justify-center rounded-md border border-border-subtle px-5 py-3 text-sm font-semibold text-foreground"
          >
            WhatsApp Us
          </a>
        </div>
        <div className="mx-auto mt-8 max-w-sm text-left text-sm text-foreground-muted">
          <p className="font-semibold text-foreground">Have ready for the callback:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Pin count on your current plug, if known</li>
            <li>Trailer type (caravan, heavy trailer, horse float, etc.)</li>
            <li>Exact location or nearest landmark</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} onFocus={handleStart} className="relative space-y-5">
      {/* Honeypot — leave empty. Off-screen (not display:none) so bots still fill it; aria-hidden keeps screen readers from announcing it. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message && (
        <div role="alert" className="rounded-md border border-danger bg-danger/10 px-4 py-3 text-sm text-foreground">
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none"
          />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-xs text-danger">{state.fieldErrors.name[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none"
          />
          {state.fieldErrors?.phone && (
            <p className="mt-1 text-xs text-danger">{state.fieldErrors.phone[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-foreground">
          Current location
        </label>
        <div className="mt-1.5 flex gap-2">
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="Address, highway + direction, landmark, or depot name"
            className="tap-target w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none"
          />
          <button
            type="button"
            onClick={useMyLocation}
            className="tap-target shrink-0 whitespace-nowrap rounded-md border border-border-subtle px-3 text-sm font-medium text-foreground-muted transition hover:border-accent hover:text-foreground"
          >
            {geoStatus === "loading" ? "Locating..." : "Use my location"}
          </button>
        </div>
        {geoStatus === "done" && (
          <p className="mt-1 text-xs text-success">Location captured — add a description above too.</p>
        )}
        {geoStatus === "error" && (
          <p className="mt-1 text-xs text-foreground-muted">
            Could not get your location automatically. Type it in above.
          </p>
        )}
        <input type="hidden" name="lat" value={coords?.lat ?? ""} />
        <input type="hidden" name="lng" value={coords?.lng ?? ""} />
        {state.fieldErrors?.location && (
          <p className="mt-1 text-xs text-danger">{state.fieldErrors.location[0]}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-foreground">
            Vehicle type
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            required
            defaultValue=""
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground focus:border-accent focus:outline-none"
          >
            <option value="" disabled>
              Select vehicle type
            </option>
            {Object.entries(vehicleTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-foreground">
            Issue
          </label>
          <select
            id="issue"
            name="issue"
            required
            defaultValue=""
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground focus:border-accent focus:outline-none"
          >
            <option value="" disabled>
              Select issue
            </option>
            {Object.entries(issueLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cableType" className="block text-sm font-medium text-foreground">
            Cable type, if known
          </label>
          <select
            id="cableType"
            name="cableType"
            required
            defaultValue="not_sure"
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground focus:border-accent focus:outline-none"
          >
            {cableCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.shortName}
              </option>
            ))}
            <option value="not_sure">Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-foreground">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            defaultValue=""
            className="tap-target mt-1.5 w-full rounded-md border border-border-subtle bg-surface px-3.5 py-2.5 text-foreground focus:border-accent focus:outline-none"
          >
            <option value="" disabled>
              Select urgency
            </option>
            {Object.entries(urgencyLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-foreground">Preferred contact</legend>
        <div className="mt-1.5 flex gap-4">
          <label className="tap-target flex items-center gap-2 text-sm text-foreground-muted">
            <input type="radio" name="preferredContact" value="call" defaultChecked required />
            Call
          </label>
          <label className="tap-target flex items-center gap-2 text-sm text-foreground-muted">
            <input type="radio" name="preferredContact" value="whatsapp" />
            WhatsApp
          </label>
        </div>
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-foreground-muted">
        <input type="checkbox" name="consent" required className="tap-target mt-0.5" />
        <span>
          I consent to {siteConfig.brand.name} calling or messaging me back about this request.
        </span>
      </label>
      {state.fieldErrors?.consent && (
        <p className="text-xs text-danger">{state.fieldErrors.consent[0]}</p>
      )}

      <SubmitButton />

      <p className="text-xs text-foreground-muted">
        Prefer to talk now?{" "}
        <Link href="/contact" className="text-accent hover:underline">
          See all contact options
        </Link>
        .
      </p>
    </form>
  );
}
