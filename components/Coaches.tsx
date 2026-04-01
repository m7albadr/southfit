"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";

const coachGradients = [
  "from-teal-500/15 to-emerald-500/5",
  "from-violet-500/15 to-purple-500/5",
  "from-sky-500/15 to-cyan-500/5",
  "from-amber-500/15 to-orange-500/5",
];

const coachAccents = [
  "bg-teal-400/20",
  "bg-violet-400/20",
  "bg-sky-400/20",
  "bg-amber-400/20",
];

export default function Coaches({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();

  return (
    <section id="coaches" className="bg-dark-lighter py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`section-label ${config.colors.labelClass}`}>
            {isAr ? "الفريق" : "Our Team"}
          </div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {isAr ? "المدربين" : "Our Coaches"}
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {config.coaches.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            >
              <div className="group rounded-2xl border border-white/5 bg-dark-card p-6 text-center sm:p-8 sm:transition-transform sm:duration-300 sm:hover:-translate-y-1">
                {/* Avatar */}
                <div
                  className="mx-auto mb-6 relative flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-black text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${config.colors.primary}40, ${config.colors.primary}15)`,
                    boxShadow: `0 8px 24px ${config.colors.primary}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    border: `1px solid ${config.colors.primary}40`,
                  }}
                >
                  {(isAr ? coach.name.ar : coach.name.en).charAt(0)}
                </div>

                <h3 className="text-base font-bold text-white sm:text-lg">
                  {isAr ? coach.name.ar : coach.name.en}
                </h3>
                <p
                  className="mt-2 text-xs font-semibold tracking-wider"
                  style={{ color: config.colors.primary }}
                >
                  {(isAr ? coach.role.ar : coach.role.en).toUpperCase()}
                </p>
                {coach.schedule && (
                  <p className="mt-3 text-xs leading-relaxed text-text-muted">
                    {isAr ? coach.schedule.ar : coach.schedule.en}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
