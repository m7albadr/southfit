"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";
import SouthFitLogo from "./SouthFitLogo";
import Hero3D from "./Hero3D";

const ease = [0.34, 1.56, 0.64, 1] as [number, number, number, number];

export default function Hero({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
        <div
          className="absolute -left-32 top-1/4 hidden rounded-full sm:block sm:h-96 sm:w-96 sm:blur-[120px]"
          style={{ backgroundColor: `${config.colors.primary}12` }}
        />
        <div
          className="absolute -right-32 bottom-1/4 hidden rounded-full sm:block sm:h-80 sm:w-80 sm:blur-[100px]"
          style={{ backgroundColor: `${config.colors.primary}0a` }}
        />
        <div
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full sm:block sm:h-[500px] sm:w-[500px] sm:blur-[150px]"
          style={{ backgroundColor: `${config.colors.primary}08` }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 hidden opacity-[0.03] sm:block"
          style={{
            backgroundImage: `linear-gradient(${config.colors.primary}40 1px, transparent 1px), linear-gradient(90deg, ${config.colors.primary}40 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Mobile gradient */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{ background: `linear-gradient(to bottom, ${config.colors.primary}06, transparent, ${config.colors.primary}04)` }}
        />
      </div>

      {/* Logo watermark */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-[0.025] sm:block">
        <SouthFitLogo size={600} className="opacity-50" />
      </div>

      {/* 3D Weight Plate */}
      <Hero3D color={config.colors.primary} />

      {/* Content */}
      {/* Mobile background element */}
      <motion.div
        className="absolute top-1/3 right-1/4 sm:hidden"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: `1px solid ${config.colors.primary}15`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 pb-24 text-center sm:px-6 sm:py-48 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className={`section-label ${config.colors.labelClass} mb-6 inline-block sm:mb-8`}>
            {isAr ? config.subtitle.ar : config.subtitle.en}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mx-auto max-w-5xl font-heading text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {isAr ? (
            <>{config.name.ar}</>
          ) : (
            <>
              SOUTH<span className={config.colors.gradientTextClass}>FIT</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl px-2 font-heading text-lg leading-relaxed text-text-muted sm:mt-6 sm:text-2xl"
        >
          {isAr ? config.tagline.ar : config.tagline.en}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <motion.a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className={`w-full rounded-full px-8 py-4 font-heading text-sm font-bold tracking-wider text-white transition-all sm:w-auto ${config.colors.glowClass}`}
            style={{ backgroundColor: config.colors.primary, boxShadow: `0 0 30px ${config.colors.primary}50` }}
          >
            {isAr ? "احجز الآن" : "BOOK NOW"}
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full rounded-full border border-white/20 px-8 py-4 font-heading text-sm font-semibold tracking-wider text-white transition-colors sm:w-auto"
            style={{ ['--primary' as string]: config.colors.primary }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = config.colors.primary;
              (e.currentTarget as HTMLElement).style.color = config.colors.primary;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
          >
            {isAr ? "شوف الجدول" : "VIEW SCHEDULE"}
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="my-14 section-divider sm:my-16" />

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-16">
          {[
            { value: "7+", label: isAr ? "كلاسات يومية" : "Daily Classes" },
            { value: "4", label: isAr ? "مدربين" : "Expert Coaches" },
            { value: "6", label: isAr ? "أيام / أسبوع" : "Days / Week" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
            >
              <p className="font-heading text-2xl md:text-4xl font-black" style={{ color: config.colors.primary }}>
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1 tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-heading text-[10px] tracking-[0.3em] text-text-muted">
            {isAr ? "اسحب" : "SCROLL"}
          </span>
          <div className="h-10 w-5 rounded-full border border-white/20">
            <motion.div
              animate={{ y: [2, 14, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full"
              style={{ backgroundColor: config.colors.primary }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
