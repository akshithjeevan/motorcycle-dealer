import type { Metadata } from "next";
import { Inter, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { BikeProvider } from "@/context/BikeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA Motorsport | Precision Motorcycle Engineering & Workshop",
  description: "Bespoke motorcycle servicing, advanced diagnostics, performance tuning, detailing, and restoration. Certified master technicians for BMW Motorrad, Ducati, Triumph, and elite superbikes.",
  keywords: ["luxury motorcycle repair", "superbike workshop", "Ducati service", "BMW Motorrad tuning", "Triumph motorcycle service", "motorcycle detailing", "ceramic coating", "ECU diagnostics"],
  openGraph: {
    title: "AURA Motorsport | Precision Motorcycle Engineering",
    description: "Ultra-premium motorcycle servicing, diagnostics, performance tuning, detailing, and repairs for riders who demand perfection.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        <BikeProvider>{children}</BikeProvider>
      </body>
    </html>
  );
}
