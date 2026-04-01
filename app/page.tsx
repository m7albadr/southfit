"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [mounted, setMounted] = useState(0);
  const isAr = lang === "ar";

  // Force re-animate on back navigation
  useEffect(() => {
    setMounted(Date.now());
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("sf-lang") as "en" | "ar" | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    localStorage.setItem("sf-lang", lang);
  }, [lang, isAr]);

  return (
    <div key={mounted} className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#050508] px-5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[150px] bg-white pointer-events-none" />

      {/* Language toggle */}
      <button
        onClick={() => setLang((l) => (l === "en" ? "ar" : "en"))}
        className="absolute top-5 text-xs text-white/40 hover:text-white/80 transition-colors border border-white/10 rounded-full px-4 py-2"
        style={{ [isAr ? "left" : "right"]: "1.25rem" }}
      >
        {isAr ? "EN" : "عربي"}
      </button>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Image
          src="/logo.jpg"
          alt="SouthFit Kuwait"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
      </motion.div>

      {/* Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-4xl sm:text-5xl font-black tracking-[0.2em] text-white mb-2"
      >
        SOUTHFIT
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white/30 text-xs tracking-[0.4em] font-heading mb-12"
      >
        KUWAIT
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-16 h-px bg-white/15 mb-10"
      />

      {/* Choose */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-white/40 text-xs tracking-[0.3em] font-heading uppercase mb-8"
      >
        {isAr ? "اختار فرعك" : "Choose Your Branch"}
      </motion.p>

      {/* Branch cards */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xl">
        {[
          {
            href: "/men",
            label: isAr ? "فرع الرجال" : "MEN",
            sub: isAr ? "المنقف" : "MANGAF",
            color: "#0891b2",
          },
          {
            href: "/women",
            label: isAr ? "فرع السيدات" : "WOMEN",
            sub: isAr ? "قبلة" : "JEBLA",
            color: "#d946ef",
          },
        ].map((branch, i) => (
          <motion.div
            key={branch.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="flex-1"
          >
            <Link href={branch.href}>
              <div
                className="group relative flex flex-col items-center py-10 sm:py-14 rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 sm:hover:-translate-y-1 active:scale-[0.98] cursor-pointer"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 transition-all duration-500"
                  style={{ backgroundColor: branch.color }}
                />

                <h2 className="font-heading text-xl sm:text-2xl font-black tracking-[0.15em] text-white mb-2">
                  {branch.label}
                </h2>
                <p className="text-[10px] tracking-[0.3em] text-white/30 font-heading mb-6">
                  {branch.sub}
                </p>

                {/* Enter */}
                <div
                  className="flex items-center gap-2 text-xs font-heading font-semibold tracking-[0.2em] transition-all duration-300 group-hover:gap-3"
                  style={{ color: branch.color }}
                >
                  {isAr ? "ادخل" : "ENTER"}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isAr ? "rotate-180" : ""} group-hover:translate-x-0.5`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: branch.color, boxShadow: `0 0 20px ${branch.color}` }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 text-white/20 text-[10px] tracking-[0.2em]"
        style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
      >
        © 2025 SOUTHFIT KUWAIT
      </motion.p>
    </div>
  );
}
