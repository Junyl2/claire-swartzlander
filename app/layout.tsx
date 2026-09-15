import type { Metadata } from "next";
import { Alex_Brush, Jost, Playfair_Display } from "next/font/google";
import "./globals.css";

import { LenisProvider } from "@/components/interactive/LenisProvider";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/data/site";
import { createRealEstateAgentSchema } from "@/lib/metadata";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const script = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Claire Swartzlander, Coastal Property Specialist with RE/MAX Signature, helps buyers and sellers navigate Palm Coast's waterfront and golf communities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${script.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(createRealEstateAgentSchema()) }}
        />
        <LenisProvider>
          <Navigation />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
