import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolling Slow Media | Car YouTube Channel",
  description: "Watch epic car content and events from Rolling Slow Media. Car reviews, coffee meets and driving tours documenting car culture since 2023.",
  keywords: ["cars", "automotive", "YouTube", "car reviews", "car meets", "driving tours", "car culture"],
  authors: [{ name: "Trevor Joseph" }],
  creator: "Rolling Slow Media",
  publisher: "Rolling Slow Media",
  metadataBase: new URL("https://www.rollingslowmedia.com"),
  openGraph: {
    title: "Rolling Slow Media | Car YouTube Channel",
    description: "Watch epic car content and events from Rolling Slow Media. Car reviews, coffee meets and driving tours documenting car culture since 2023.",
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
    description: "Watch epic car content and events from Rolling Slow Media. Car reviews, coffee meets and driving tours.",
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
      <body>{children}</body>
    </html>
  );
}
