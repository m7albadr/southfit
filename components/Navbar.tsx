"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";
import SouthFitLogo from "./SouthFitLogo";
import Link from "next/link";

const navLinks = [
  { id: "about", en: "About", ar: "عنا" },
  { id: "services", en: "Services", ar: "الخدمات" },
  { id: "schedule", en: "Schedule", ar: "الجدول" },
  { id: "coaches", en: "Coaches", ar: "المدربين" },
  { id: "pricing", en: "Pricing", ar: "الأسعار" },
  { id: "faq", en: "FAQ", ar: "الأسئلة" },
  { id: "contact", en: "Contact", ar: "تواصل" },
];

export default function Navbar({ config }: { config: BranchConfig }) {
  const { lang, toggleLang, isAr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <SouthFitLogo size={36} />
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.1em] text-white leading-tight">
                  SOUTHFIT
                </span>
                <span
                  className="text-[10px] tracking-[0.15em] leading-tight"
                  style={{ color: config.colors.primary }}
                >
                  {isAr ? config.name.ar.split(" ").pop() : config.name.en.split(" ").pop()}
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm text-text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {isAr ? link.ar : link.en}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="text-xs text-text-muted hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1"
              >
                {isAr ? "EN" : "عربي"}
              </button>

              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex text-xs font-semibold px-4 py-2 rounded-full text-white transition-all duration-300 ${config.colors.glowClass}`}
                style={{ backgroundColor: config.colors.primary }}
              >
                {isAr ? "احجز الآن" : "BOOK NOW"}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-text-muted hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-dark/98 pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-lg text-text-muted hover:text-white transition-colors py-3 border-b border-white/5 text-start"
                >
                  {isAr ? link.ar : link.en}
                </motion.button>
              ))}
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center font-semibold px-6 py-3 rounded-full text-white tracking-wider"
                style={{ backgroundColor: config.colors.primary }}
              >
                {isAr ? "احجز الآن" : "BOOK NOW"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
