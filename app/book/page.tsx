import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";

export const metadata: Metadata = {
  title: "Book a Callback | Emergency Suzi Cable Delivery",
  description:
    "Request a callback for emergency Suzi cable delivery in Sydney. Under 60 seconds. Phone and WhatsApp always available.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Book", href: "/book" }]} />

      <header className="mx-auto max-w-2xl px-4 pt-8 pb-2 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Request a Callback</h1>
        <p className="mt-3 text-foreground-muted">
          Tell us where you are and what has failed. We call you back to confirm details and
          dispatch the right cable. Takes under a minute.
        </p>
        <EmergencyCTAGroup className="mt-6" showBook={false} />
      </header>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <BookingForm />
      </div>
    </div>
  );
}
