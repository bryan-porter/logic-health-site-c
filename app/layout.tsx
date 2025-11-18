import type { Metadata, Viewport } from "next";
// NOTE: Google Fonts blocked in build environment (403) - using system fonts
// import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL('https://logichm.com'),
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
    siteName: 'Logic Health Management',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Health Management',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <OrganizationSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
