"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";

const colorAccentsMen = [
  "bg-teal-400", "bg-cyan-400", "bg-sky-400", "bg-emerald-400",
];
const colorAccentsWomen = [
  "bg-fuchsia-400", "bg-pink-400", "bg-violet-400", "bg-rose-400",
];

export default function Schedule({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();

  return (
    <section id="schedule" className="bg-dark-lighter py-12 sm:py-20 lg:py-32">
      {/* Top divider */}
      <div className="section-divider mb-16 sm:mb-24" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`section-label ${config.colors.labelClass}`}>
            {isAr ? "الجدول" : "Class Schedule"}
          </div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {isAr ? "جدول الكلاسات" : "Weekly Schedule"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {isAr ? "لازم تحجز قبل عن طريق الواتساب" : "Advance booking required via WhatsApp"}
          </p>
        </motion.div>

        {/* Schedule grid */}
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {config.schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            >
              <div className="group rounded-xl border border-white/5 bg-dark-card p-5 sm:transition-transform sm:duration-300 sm:hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      config.branch === "women"
                        ? colorAccentsWomen[i % colorAccentsWomen.length]
                        : colorAccentsMen[i % colorAccentsMen.length]
                    }`}
                  />
                  <span className="text-xs font-semibold tracking-wider text-text-muted">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-white sm:text-base">
                  {isAr ? item.class.ar : item.class.en}
                </h3>
                {item.days && (
                  <p className="mt-2 text-xs" style={{ color: config.colors.primary }}>
                    {isAr ? item.days.ar : item.days.en}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Yoga schedule (women only) */}
        {config.yogaSchedule && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-center text-lg font-semibold tracking-wider text-white sm:text-xl mb-6">
              {isAr ? "جدول اليوقا" : "Yoga Schedule"}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
              {config.yogaSchedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="rounded-xl border border-white/5 bg-dark-card p-5 sm:transition-transform sm:duration-300 sm:hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`h-2 w-2 rounded-full ${colorAccentsWomen[i % colorAccentsWomen.length]}`} />
                      <span className="text-xs font-semibold tracking-wider text-text-muted">
                        {item.time}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      {isAr ? item.class.ar : item.class.en}
                    </h4>
                    <p className="text-xs text-text-muted mt-1">
                      {item.days ? (isAr ? item.days.ar : item.days.en) : ""}
                    </p>
                    {item.coach && (
                      <p className="text-xs mt-2" style={{ color: config.colors.primary }}>
                        {isAr ? item.coach.ar : item.coach.en}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Open gym note for women */}
        {config.branch === "women" && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-muted text-sm mt-8 tracking-wider"
          >
            {isAr ? "الجيم المفتوح: 12:00 م – 10:00 م" : "Open Gym: 12:00 PM \u2013 10:00 PM"}
          </motion.p>
        )}
      </div>
    </section>
  );
}
