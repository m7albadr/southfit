"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const TEAL = "#0891b2";
const PINK = "#d946ef";

const content = {
  tagline: {
    en: "WHERE LIMITS DIE",
    ar: "حيث تموت الحدود",
  },
  sub: {
    en: "CrossFit • Bootcamp • Personal Training",
    ar: "كروس فت • بوت كامب • تدريب شخصي",
  },
  choose: {
    en: "CHOOSE YOUR ARENA",
    ar: "اختار ساحتك",
  },
  enter: {
    en: "ENTER",
    ar: "ادخل",
  },
  men: {
    label: { en: "MEN", ar: "رجال" },
    location: { en: "MANGAF", ar: "المنقف" },
    sublabel: { en: "FORGE YOUR LEGACY", ar: "اصنع إرثك" },
  },
  women: {
    label: { en: "WOMEN", ar: "سيدات" },
    location: { en: "JEBLA", ar: "الجبلة" },
    sublabel: { en: "UNLEASH YOUR POWER", ar: "أطلقي قوتك" },
  },
  stats: [
    { value: "500+", label: { en: "ATHLETES", ar: "رياضي" } },
    { value: "2", label: { en: "BRANCHES", ar: "فروع" } },
    { value: "15+", label: { en: "COACHES", ar: "مدرب" } },
    { value: "50+", label: { en: "CLASSES/WEEK", ar: "حصة/أسبوع" } },
  ],
};

// ─── Noise texture (inline SVG for zero network requests) ────────────────────

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;

// ─── Floating particles (lightweight CSS-only) ──────────────────────────────

function Particles({ color, side }: { color: string; side: "left" | "right" }) {
  // Pre-computed random positions so no runtime Math.random in render
  const dots = side === "left"
    ? [
        { x: "15%", y: "20%", d: 6, del: 0 },
        { x: "70%", y: "60%", d: 4, del: 1.2 },
        { x: "40%", y: "80%", d: 5, del: 0.6 },
        { x: "80%", y: "30%", d: 3, del: 1.8 },
        { x: "25%", y: "50%", d: 4, del: 2.4 },
        { x: "60%", y: "15%", d: 5, del: 0.3 },
      ]
    : [
        { x: "85%", y: "25%", d: 5, del: 0.4 },
        { x: "30%", y: "70%", d: 4, del: 1.0 },
        { x: "55%", y: "40%", d: 6, del: 1.6 },
        { x: "20%", y: "85%", d: 3, del: 2.2 },
        { x: "75%", y: "55%", d: 4, del: 0.8 },
        { x: "45%", y: "10%", d: 5, del: 1.4 },
      ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: d.x,
            top: d.y,
            width: d.d,
            height: d.d,
            backgroundColor: color,
            opacity: 0.3,
            animationDelay: `${d.del}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [active, setActive] = useState<"men" | "women" | null>(null);
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isAr = lang === "ar";

  // Track mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Persist language
  useEffect(() => {
    const saved = localStorage.getItem("sf-lang") as "en" | "ar" | null;
    if (saved) setLang(saved);
    // Trigger entry animation
    setEntered(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    localStorage.setItem("sf-lang", lang);
  }, [lang, isAr]);

  // Desktop hover handlers (no-op on mobile -- mobile uses tap)
  const handleHover = useCallback(
    (side: "men" | "women" | null) => {
      if (!isMobile) setActive(side);
    },
    [isMobile]
  );

  // Mobile tap toggles
  const handleTap = useCallback(
    (side: "men" | "women") => {
      if (isMobile) {
        setActive((prev) => (prev === side ? null : side));
      }
    },
    [isMobile]
  );

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-[#050508] select-none">
      {/* ── Noise overlay ─────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat" }}
      />

      {/* ── Language toggle ───────────────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setLang((l) => (l === "en" ? "ar" : "en"))}
        className="absolute top-5 z-50 text-xs text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/25 rounded-full px-4 py-1.5 backdrop-blur-sm"
        style={{ [isAr ? "left" : "right"]: "1.25rem" }}
      >
        {isAr ? "EN" : "عربي"}
      </motion.button>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── SPLIT PANELS ─────────────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}

      <div className="relative z-[2] flex flex-col md:flex-row h-full w-full">
        {/* ── MEN'S PANEL ─────────────────────────────────────────────────── */}
        <motion.div
          className="relative cursor-pointer overflow-hidden"
          initial={{ flex: 1 }}
          animate={{
            flex: active === "men" ? (isMobile ? 2.5 : 2) : active === "women" ? (isMobile ? 0.5 : 0.6) : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => handleHover("men")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleTap("men")}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a1e] via-[#061012] to-[#050508]" />
          {/* Color accent glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: active === "men" ? 0.15 : 0.04,
            }}
            transition={{ duration: 0.6 }}
            style={{
              background: `radial-gradient(ellipse at ${isMobile ? "50% 30%" : "70% 50%"}, ${TEAL}, transparent 70%)`,
            }}
          />
          {/* Particles */}
          <Particles color={TEAL} side="left" />
          {/* Diagonal stripe accent */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${TEAL} 0px, ${TEAL} 1px, transparent 1px, transparent 40px)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
            {/* Branch icon */}
            <motion.div
              animate={{
                scale: active === "men" ? 1.15 : active === "women" ? 0.85 : 1,
                opacity: active === "women" ? 0.4 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Lightning bolt icon */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 border"
                style={{
                  backgroundColor: `${TEAL}10`,
                  borderColor: `${TEAL}25`,
                }}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke={TEAL} strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>

              <h2
                className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {isAr ? content.men.label.ar : content.men.label.en}
              </h2>
              <p className="text-xs md:text-sm tracking-[0.3em] text-white/40 mb-2">
                {isAr ? content.men.location.ar : content.men.location.en}
              </p>
              <p
                className="text-xs md:text-sm font-bold tracking-[0.15em]"
                style={{ color: TEAL }}
              >
                {isAr ? content.men.sublabel.ar : content.men.sublabel.en}
              </p>
            </motion.div>

            {/* Enter button — appears when active */}
            <AnimatePresence>
              {active === "men" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="mt-8"
                >
                  <Link href="/men">
                    <div
                      className="group relative px-10 py-3.5 text-sm font-black tracking-[0.25em] text-white overflow-hidden rounded-lg"
                      style={{ backgroundColor: TEAL }}
                    >
                      <span className="relative z-10">
                        {isAr ? content.enter.ar : content.enter.en}
                      </span>
                      {/* Shine sweep on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Edge glow line */}
          <div
            className="absolute md:top-0 md:right-0 md:w-[1px] md:h-full bottom-0 left-0 w-full h-[1px] md:bottom-auto md:left-auto"
            style={{
              background: isMobile
                ? `linear-gradient(to right, transparent, ${TEAL}40, transparent)`
                : `linear-gradient(to bottom, transparent, ${TEAL}40, transparent)`,
            }}
          />
        </motion.div>

        {/* ── WOMEN'S PANEL ────────────────────────────────────────────────── */}
        <motion.div
          className="relative cursor-pointer overflow-hidden"
          initial={{ flex: 1 }}
          animate={{
            flex: active === "women" ? (isMobile ? 2.5 : 2) : active === "men" ? (isMobile ? 0.5 : 0.6) : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => handleHover("women")}
          onMouseLeave={() => handleHover(null)}
          onClick={() => handleTap("women")}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#1a0a1e] via-[#100610] to-[#050508]" />
          {/* Color accent glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: active === "women" ? 0.15 : 0.04,
            }}
            transition={{ duration: 0.6 }}
            style={{
              background: `radial-gradient(ellipse at ${isMobile ? "50% 70%" : "30% 50%"}, ${PINK}, transparent 70%)`,
            }}
          />
          {/* Particles */}
          <Particles color={PINK} side="right" />
          {/* Diagonal stripe accent */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, ${PINK} 0px, ${PINK} 1px, transparent 1px, transparent 40px)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
            <motion.div
              animate={{
                scale: active === "women" ? 1.15 : active === "men" ? 0.85 : 1,
                opacity: active === "men" ? 0.4 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Fire icon */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 border"
                style={{
                  backgroundColor: `${PINK}10`,
                  borderColor: `${PINK}25`,
                }}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke={PINK} strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>

              <h2
                className="text-3xl md:text-5xl font-black tracking-[0.2em] text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {isAr ? content.women.label.ar : content.women.label.en}
              </h2>
              <p className="text-xs md:text-sm tracking-[0.3em] text-white/40 mb-2">
                {isAr ? content.women.location.ar : content.women.location.en}
              </p>
              <p
                className="text-xs md:text-sm font-bold tracking-[0.15em]"
                style={{ color: PINK }}
              >
                {isAr ? content.women.sublabel.ar : content.women.sublabel.en}
              </p>
            </motion.div>

            {/* Enter button */}
            <AnimatePresence>
              {active === "women" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="mt-8"
                >
                  <Link href="/women">
                    <div
                      className="group relative px-10 py-3.5 text-sm font-black tracking-[0.25em] text-white overflow-hidden rounded-lg"
                      style={{ backgroundColor: PINK }}
                    >
                      <span className="relative z-10">
                        {isAr ? content.enter.ar : content.enter.en}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ── CENTER OVERLAY (logo + brand + tagline + stats) ──────────────── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}

      <div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Logo + Brand cluster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: entered ? 1 : 0,
            scale: entered ? 1 : 0.8,
          }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Glowing ring behind logo */}
          <div className="relative mb-5">
            <motion.div
              className="absolute -inset-3 rounded-full"
              animate={{
                boxShadow: [
                  `0 0 20px ${TEAL}30, 0 0 40px ${PINK}20`,
                  `0 0 30px ${TEAL}40, 0 0 60px ${PINK}30`,
                  `0 0 20px ${TEAL}30, 0 0 40px ${PINK}20`,
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/logo.jpg"
              alt="SouthFit Kuwait"
              width={80}
              height={80}
              className="rounded-full relative z-10 ring-2 ring-white/10"
              priority
            />
          </div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SOUTH<span className="text-white/40">FIT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/30 text-xs tracking-[0.4em] mb-6"
          >
            KUWAIT
          </motion.p>

          {/* Tagline with glitch-style reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative mb-3"
          >
            <h2
              className="text-lg md:text-2xl font-black tracking-[0.15em]"
              style={{
                background: `linear-gradient(90deg, ${TEAL}, #ffffff, ${PINK})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {isAr ? content.tagline.ar : content.tagline.en}
            </h2>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-white/30 text-[10px] md:text-xs tracking-[0.2em] mb-8"
          >
            {isAr ? content.sub.ar : content.sub.en}
          </motion.p>

          {/* "Choose your arena" label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mb-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/20" />
              <p className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] font-bold">
                {isAr ? content.choose.ar : content.choose.en}
              </p>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </motion.div>

          {/* Arrows pointing to sides */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-8 mb-10"
          >
            <motion.svg
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 text-white/20 md:block hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </motion.svg>
            {/* Mobile: up/down arrows */}
            <motion.svg
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 text-white/20 md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </motion.svg>
            <motion.svg
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 text-white/20 md:block hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </motion.svg>
            <motion.svg
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-5 text-white/20 md:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* ── Stats bar ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 md:bottom-10 flex items-center gap-6 md:gap-10"
        >
          {content.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-lg md:text-2xl font-black"
                style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${PINK})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-[8px] md:text-[10px] tracking-[0.15em] text-white/30 font-bold">
                {isAr ? stat.label.ar : stat.label.en}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
