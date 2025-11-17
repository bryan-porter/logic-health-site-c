import type { Metadata, Viewport } from "next";
// NOTE: Google Fonts blocked in build environment (403) - using system fonts
// import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";

// Fallback to system font stack when Google Fonts unavailable
const inter = {
  variable: "--font-inter",
};

export const metadata: Metadata = {
  title: {
    default: 'Logic Health Management',
    template: '%s · Logic Health Management',
  },
  description:
    'CCM & RPM programs for physician practices and small hospitals—compliant, integrated, and outcomes‑focused.',
  openGraph: {
    type: 'website',
    title: 'Logic Health Management',
    url: 'https://logichm.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Health Management',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OrganizationSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
