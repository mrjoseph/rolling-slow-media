"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import NextEvent from "@/components/sections/NextEvent";
import About from "@/components/sections/About";
import Sponsors from "@/components/sections/Sponsors";
import ContactUs from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Hero />
      <NextEvent />
      <About />
      <Sponsors />
      <ContactUs />
    </div>
  );
}
