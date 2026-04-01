"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";

function FAQItem({
  q,
  a,
  color,
  isOpen,
  toggle,
}: {
  q: string;
  a: string;
  color: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 px-1 text-start group"
      >
        <span className="text-white text-sm md:text-base font-medium pr-4 group-hover:text-white/90">
          {q}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-text-muted text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-dark py-12 sm:py-20 lg:py-32">
      <div className="section-divider mb-16 sm:mb-24" />
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`section-label ${config.colors.labelClass}`}>
            {isAr ? "أسئلة" : "FAQ"}
          </div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {isAr ? "أسئلة شائعة" : "Common Questions"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-2xl border border-white/5 bg-dark-card px-6 sm:mt-14"
        >
          {config.faq.map((item, i) => (
            <FAQItem
              key={i}
              q={isAr ? item.q.ar : item.q.en}
              a={isAr ? item.a.ar : item.a.en}
              color={config.colors.primary}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
