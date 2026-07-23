import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: `Emergency Suzi Cable Replacement Sydney | ${siteConfig.brand.name}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description:
    "On-demand Suzi cable and trailer electrical delivery across Sydney. Call, WhatsApp, or book online and we dispatch the right cable to your breakdown location.",
  applicationName: siteConfig.brand.name,
  authors: [{ name: siteConfig.brand.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: siteConfig.brand.name,
    url: siteConfig.brand.url,
    title: `Emergency Suzi Cable Replacement Sydney | ${siteConfig.brand.name}`,
    description:
      "On-demand Suzi cable and trailer electrical delivery across Sydney. Call, WhatsApp, or book online.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Emergency Suzi Cable Replacement Sydney | ${siteConfig.brand.name}`,
    description:
      "On-demand Suzi cable and trailer electrical delivery across Sydney. Call, WhatsApp, or book online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteConfig.brand.name,
    image: `${siteConfig.brand.url}/opengraph-image`,
    url: siteConfig.brand.url,
    telephone: siteConfig.contact.phoneE164,
    areaServed: siteConfig.hub.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.hub.displayLocation,
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Coralstone Group",
    },
  };

  return (
    <html lang="en-AU" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={localBusinessJsonLd} />
        <SiteHeader />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <SiteFooter />
        <StickyMobileCTA />

        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_ID}');
                window.gtag = gtag;
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
