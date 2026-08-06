import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_CONFIG } from "@/config/site";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Aura Atelier",
    "Haute Couture",
    "Luxury Boutique",
    "Bespoke Evening Gowns",
    "Royal Bridal Lehenga",
    "Mongolian Cashmere Overcoat",
    "High Fashion Boutique",
    "VJ Web Studio",
  ],
  authors: [{ name: SITE_CONFIG.agency.name, url: SITE_CONFIG.agency.url }],
  creator: SITE_CONFIG.agency.name,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23141416' stroke='%23D4AF37' stroke-width='4'/><text x='50%' y='62%' font-family='serif' font-size='42' font-weight='bold' fill='%23D4AF37' text-anchor='middle'>A</text></svg>",
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
        width: 1200,
        height: 630,
        alt: "AURA Luxury Fashion Boutique",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae"],
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
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[#0E0E10] text-stone-100 antialiased selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
