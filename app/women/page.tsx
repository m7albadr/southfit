"use client";

import { LangProvider } from "@/lib/context";
import { womenConfig } from "@/lib/women-data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Coaches from "@/components/Coaches";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function WomenBranch() {
  return (
    <LangProvider>
      <main>
        <Navbar config={womenConfig} />
        <Hero config={womenConfig} />
        <About config={womenConfig} />
        <Services config={womenConfig} />
        <Pricing config={womenConfig} />
        <Schedule config={womenConfig} />
        <Coaches config={womenConfig} />
        <FAQ config={womenConfig} />
        <Contact config={womenConfig} />
        <Footer config={womenConfig} />
        <WhatsAppButton config={womenConfig} />
        <BackToTop config={womenConfig} />
      </main>
    </LangProvider>
  );
}
