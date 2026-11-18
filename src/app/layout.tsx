import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Rolling Slow Media | London Cars & Coffee | Porsche Meets & Supercar Events",
  description: "London's premier cars and coffee events at Regent's Park. Join us for Porsche meets, supercars and modern classics every month. Free entry — perfect for car enthusiasts and visitors to London.",
  keywords: [
    "cars and coffee London",
    "cars and coffee Regent's Park",
    "London car meets",
    "Porsche London",
    "Porsche meet London",
    "Porsche cars and coffee",
    "supercar meet London",
    "supercar events London",
    "modern classics London",
    "Regent's Park car meet",
    "Regent's Park events",
    "free London events",
    "things to do in London",
    "London tourist attractions",
    "London car show",
    "car events London 2026",
    "London automotive events",
    "cars & coffee",
    "car meets UK",
    "classic car events London",
    "automotive enthusiasts London",
    "car culture London",
    "Rolling Slow Media",
    "Trevor Joseph",
    "car YouTube channel",
  ],
  authors: [{ name: "Trevor Joseph" }],
  creator: "Rolling Slow Media",
  publisher: "Rolling Slow Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.rollingslowmedia.com",
  },
  metadataBase: new URL("https://www.rollingslowmedia.com"),
  openGraph: {
    title: "Rolling Slow Media | London Cars & Coffee | Porsche Meets & Supercar Events",
    description: "London's premier cars and coffee events at Regent's Park. Porsche meets, supercars and modern classics every month. Free entry — perfect for car enthusiasts and visitors to London.",
    url: "https://www.rollingslowmedia.com",
    siteName: "Rolling Slow Media",
    images: [
      {
        url: "/images/LOGO-3.png",
        width: 1200,
        height: 1200,
        alt: "Rolling Slow Media Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolling Slow Media | London Cars & Coffee | Porsche Meets",
    description: "London's premier cars and coffee events at Regent's Park. Porsches, supercars and modern classics every month. Free entry!",
    images: ["/images/LOGO-3.png"],
    creator: "@rollingslowmedia",
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico", sizes: "any" },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
