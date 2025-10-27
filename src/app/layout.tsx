import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolling Slow Media | Car YouTube Channel",
  description: "Watch epic car content and events from Rolling Slow Media",
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
