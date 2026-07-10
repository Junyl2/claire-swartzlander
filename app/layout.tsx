import type { Metadata } from "next";
import { Barlow, Bebas_Neue } from "next/font/google";
import "./globals.css";

import { LenisProvider } from "@/components/interactive/LenisProvider";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/data/site";

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
});

const body = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium multi-page construction company website template with editorial layouts, reusable components, and production-ready structure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <LenisProvider>
          <Navigation />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
