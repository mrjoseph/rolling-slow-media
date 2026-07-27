import React from "react";
import Hero from "@/components/sections/Hero";
import NextEvent from "@/components/sections/NextEvent";
import About from "@/components/sections/About";
import Sponsors from "@/components/sections/Sponsors";
import ContactUs from "@/components/sections/ContactUs";
import SiteHeader from "@/components/SiteHeader";
import { getAllEvents, getFeaturedEvent } from "@/lib/events";

export const dynamic = "force-dynamic";

export default function Home() {
  const events = getAllEvents();
  const featuredEvent = getFeaturedEvent();

  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <SiteHeader />
      <Hero featuredEvent={featuredEvent} />
      <NextEvent featuredEvent={featuredEvent} events={events} />
      <About />
      <Sponsors />
      <ContactUs />
    </main>
  );
}
