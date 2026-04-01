"use client";

import { LangProvider } from "@/lib/context";
import { menConfig } from "@/lib/men-data";
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

export default function MenBranch() {
  return (
    <LangProvider>
      <main>
        <Navbar config={menConfig} />
        <Hero config={menConfig} />
        <About config={menConfig} />
        <Services config={menConfig} />
        <Pricing config={menConfig} />
        <Schedule config={menConfig} />
        <Coaches config={menConfig} />
        <FAQ config={menConfig} />
        <Contact config={menConfig} />
        <Footer config={menConfig} />
        <WhatsAppButton config={menConfig} />
        <BackToTop config={menConfig} />
      </main>
    </LangProvider>
  );
}
