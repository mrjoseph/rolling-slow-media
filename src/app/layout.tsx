import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Rolling Slow Media | Car YouTube Channel",
  description: "Watch epic car content and events from Rolling Slow Media. Car reviews, coffee meets and driving tours documenting car culture since 2023. Join our cars and coffee events featuring Porsches, supercars and modern classics.",
  keywords: ["cars and coffee", "cars & coffee", "porsche", "supercars", "modern classics", "classic cars", "car meets", "automotive events", "YouTube", "car reviews", "driving tours", "car culture", "automotive enthusiasts", "London car meets", "regents park cars and coffee", "Trevor Joseph", "car meetups", "supercar meets", "porsche meets", "classic car events"],
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
    title: "Rolling Slow Media | Car YouTube Channel",
    description: "Watch epic car content and events from Rolling Slow Media. Car reviews, coffee meets and driving tours documenting car culture since 2023. Join our cars and coffee events featuring Porsches, supercars and modern classics.",
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
    title: "Rolling Slow Media | Car YouTube Channel",
    description: "Watch epic car content and events from Rolling Slow Media. Cars and coffee meets featuring Porsches, supercars and modern classics.",
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
