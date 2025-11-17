import type { Metadata } from "next";
// NOTE: Google Fonts blocked in build environment (403) - using system fonts
// import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Logic Health Management',
    url: 'https://logichm.com',
    logo: 'https://logichm.com/logo.png',
    mainEntityOfPage: {
      '@type': 'WebSite',
      url: 'https://logichm.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://logichm.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
