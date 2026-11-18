import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "You're on the list | Wales Driving Tour | Rolling Slow Media",
  description: "Thank you for confirming your interest in the Wales Driving Tour, 19–21 March 2027.",
  alternates: { canonical: "/wales-tour/confirmed" },
  robots: { index: false, follow: false },
};

export default function WalesTourConfirmed() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="relative isolate flex min-h-[calc(100svh-6rem)] items-center justify-center overflow-hidden px-4 py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[url('/images/background.png')] bg-cover bg-center opacity-20" />
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/90 px-6 py-12 text-center shadow-2xl md:p-16">
          <span aria-hidden="true" className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#e35e9f]/40 bg-[#e35e9f]/10 text-3xl text-[#e35e9f]">✓</span>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e35e9f]">Wales Driving Tour · 19–21 March 2027</p>
          <h1 className="mt-5 text-6xl md:text-7xl" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>You're on the <span className="text-[#e35e9f]">list!</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-200">Thanks for confirming your interest in our Wales Driving Tour. We'll email you with updates as plans are announced.</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">This registers your interest only and does not reserve a place on the tour.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/events" className="rounded-full bg-[#e35e9f] px-6 py-3 font-semibold text-slate-950 transition hover:bg-pink-300">Explore our events</Link>
            <Link href="/" className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">Back to Rolling Slow</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
