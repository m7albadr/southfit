"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig, PricingPlan } from "@/lib/types";

const badgeMapMen: Record<number, string> = { 3: "popular" };
const badgeMapWomen: Record<number, string> = { 2: "popular" };

function PricingCards({
  plans,
  config,
  badgeMap,
}: {
  plans: PricingPlan[];
  config: BranchConfig;
  badgeMap?: Record<number, string>;
}) {
  const { isAr } = useLang();

  return (
    <div className="-mx-5 mt-10 flex gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 sm:gap-4">
      {plans.map((plan, i) => {
        const badge = badgeMap?.[i];
        const badgeLabel = badge === "popular"
          ? (isAr ? "الأكثر طلباً" : "POPULAR")
          : badge === "bestValue"
          ? (isAr ? "أفضل قيمة" : "BEST VALUE")
          : null;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
          >
            <div
              className={`group relative min-w-[160px] shrink-0 overflow-hidden rounded-2xl border p-5 sm:min-w-0 sm:p-6 sm:transition-transform sm:duration-300 sm:hover:-translate-y-2 ${
                badgeLabel
                  ? "bg-gradient-to-b to-dark-card"
                  : "border-white/5 bg-dark-card"
              }`}
              style={badgeLabel ? {
                borderColor: `${config.colors.primary}80`,
                backgroundImage: `linear-gradient(135deg, ${config.colors.primary}25, ${config.colors.primary}08)`,
                boxShadow: `0 0 30px ${config.colors.primary}15, inset 0 1px 0 rgba(255,255,255,0.06)`,
              } : undefined}
            >
              {badgeLabel && (
                <div
                  className="absolute -right-8 top-4 rotate-45 px-10 py-1 text-[10px] font-bold tracking-wider text-white"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  {badgeLabel}
                </div>
              )}
              <h3 className="text-xs font-semibold tracking-wider text-text-muted sm:text-sm">
                {(isAr ? plan.name.ar : plan.name.en).toUpperCase()}
              </h3>
              <div className="mt-3 flex items-baseline gap-1.5 sm:mt-4">
                <span className="text-4xl font-black text-white sm:text-5xl">
                  {plan.price.replace(" KD", "").replace("/hr", "")}
                </span>
                <span className="text-xs font-medium tracking-wider text-text-muted sm:text-sm">
                  {plan.price.includes("/hr") ? "KD/hr" : "KD"}
                </span>
              </div>
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-full border py-2.5 text-center text-xs font-semibold tracking-wider transition-all active:text-white sm:mt-6 sm:hover:text-white"
                style={{
                  borderColor: `${config.colors.primary}50`,
                  color: config.colors.primary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = config.colors.primary;
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = config.colors.primary;
                }}
              >
                {isAr ? "سجّل الآن" : "GET STARTED"}
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function PTCards({
  plans,
  config,
}: {
  plans: PricingPlan[];
  config: BranchConfig;
}) {
  const { isAr } = useLang();

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
      {plans.map((pkg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
        >
          <div className="rounded-xl border border-white/5 bg-dark-card p-4 text-center sm:p-5 sm:transition-transform sm:duration-300 sm:hover:-translate-y-1">
            <div className="text-[10px] font-medium tracking-wider text-text-muted sm:text-sm">
              {(isAr ? pkg.name.ar : pkg.name.en).toUpperCase()}
            </div>
            <div className="mt-2 flex items-baseline justify-center gap-1.5 sm:mt-3">
              <span className="text-3xl font-black text-white sm:text-4xl">
                {pkg.price.replace(" KD", "").replace("/hr", "")}
              </span>
              <span className="text-xs font-medium tracking-wider text-text-muted sm:text-sm">
                {pkg.price.includes("/hr") ? "KD/hr" : "KD"}
              </span>
            </div>
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full border py-2 text-center text-[10px] font-semibold tracking-wider transition-all sm:mt-4 sm:text-xs"
              style={{
                borderColor: `${config.colors.primary}50`,
                color: config.colors.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = config.colors.primary;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = config.colors.primary;
              }}
            >
              {isAr ? "سجّل الآن" : "GET STARTED"}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Pricing({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();
  const tabs = [
    { id: "membership", en: "Membership", ar: "الاشتراك" },
    ...(config.studentPricing
      ? [{ id: "student", en: "Student Prices", ar: "أسعار الطالبات" }]
      : []),
    { id: "pt", en: "Personal Training", ar: "تدريب شخصي" },
    { id: "space", en: "Space Rent", ar: "تأجير مساحة" },
  ];

  const [activeTab, setActiveTab] = useState("membership");

  return (
    <section id="pricing" className="bg-dark py-12 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`section-label ${config.colors.labelClass}`}>
            {isAr ? "الأسعار" : "Pricing"}
          </div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {isAr ? "باقات الاشتراك" : "Our Plans"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {isAr ? "اختار الباقة اللي تناسبك" : "Choose the plan that fits your goals"}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <div className="inline-flex w-full max-w-2xl flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-dark-card p-1.5 sm:w-auto sm:flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 rounded-full px-3 py-2.5 text-xs font-semibold tracking-wider transition-all sm:flex-none sm:px-5 sm:text-sm ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-text-muted hover:text-white"
                }`}
                style={
                  activeTab === tab.id
                    ? { backgroundColor: config.colors.primary }
                    : undefined
                }
              >
                {isAr ? tab.ar : tab.en}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "membership" && (
          <motion.div
            key="membership"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PricingCards
              plans={config.pricing}
              config={config}
              badgeMap={config.branch === "men" ? badgeMapMen : badgeMapWomen}
            />
          </motion.div>
        )}

        {activeTab === "student" && config.studentPricing && (
          <motion.div
            key="student"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PricingCards plans={config.studentPricing} config={config} />
          </motion.div>
        )}

        {activeTab === "pt" && (
          <motion.div
            key="pt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PTCards plans={config.ptPricing} config={config} />
          </motion.div>
        )}

        {activeTab === "space" && (
          <motion.div
            key="space"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PTCards plans={config.spaceRent} config={config} />
            <p className="text-center text-text-muted text-xs mt-6 tracking-wider">
              {isAr
                ? "ساعة وحدة لكل جلسة، أقصى شي باقة 5 أسابيع"
                : "1 hour per session, maximum 5-week package"}
              {config.branch === "women" &&
                (isAr ? " \u2014 مع فاليه باركنق" : " \u2014 Includes valet parking")}
            </p>
          </motion.div>
        )}

        {/* Promotions */}
        {config.promotions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 sm:mt-16 max-w-2xl mx-auto"
          >
            <h3 className="text-center text-lg font-semibold tracking-wider text-white mb-6">
              {isAr ? "العروض" : "Promotions"}
            </h3>
            <div className="space-y-3">
              {config.promotions.map((promo, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-dark-card p-4 text-sm"
                >
                  <div
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: config.colors.primary }}
                  />
                  <p className="text-text-muted">{isAr ? promo.ar : promo.en}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
