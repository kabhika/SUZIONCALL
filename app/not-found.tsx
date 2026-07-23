import Link from "next/link";
import { EmergencyCTAGroup } from "@/components/EmergencyCTAGroup";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-20 sm:px-6">
      <span className="text-sm font-semibold uppercase tracking-wide text-accent">404</span>
      <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Page Not Found</h1>
      <p className="mt-4 text-foreground-muted">
        That page does not exist. If you are dealing with a breakdown right now, call or WhatsApp
        us directly.
      </p>
      <EmergencyCTAGroup className="mt-6" />
      <Link href="/" className="mt-8 text-sm text-accent hover:underline">
        Back to home
      </Link>
    </div>
  );
}
