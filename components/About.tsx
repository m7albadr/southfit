"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { BranchConfig } from "@/lib/types";

const menAbout = {
  en: "SouthFit Mangaf is an industrial-style CrossFit box featuring top-tier Rogue equipment, heavy punching bags, gymnastic rings, high ceilings, and an expansive open gym area. Whether you're a beginner or a seasoned athlete, our facility and coaches are here to push your limits.",
  ar: "نادي كروس فت بستايل صناعي، فيه أجهزة Rogue من أفضل النوعيات، أكياس ملاكمة، حلقات جمباز، سقف عالي، وصالة مفتوحة واسعة. سواء مبتدئ أو محترف، المدربين والمكان هني عشان توصل لأقصى مستوى.",
};

const womenAbout = {
  en: "SouthFit Jebla is a modern women's fitness space located in Souad Complex B, featuring city skyline views, premium Rogue rigs, squat racks, and a welcoming atmosphere. With amenities including valet parking, a prayer room, and caf\u00e9 partnership \u2014 it's fitness meets lifestyle.",
  ar: "مساحة لياقة نسائية بمجمع سعاد B، فيو على المدينة، أجهزة Rogue، سكوات راك، وأجواء حلوة. مع فاليه باركنق، مصلى، وقهوة مجانية أيام الاثنين \u2014 رياضة وستايل بمكان واحد.",
};

// Amenity icons (SVG)
const amenityIcons: Record<string, React.ReactNode> = {
  "Valet Parking Service": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  "Prayer Room": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  ),
  "Free Coffee on Mondays (3\u20137 PM)": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  "City Skyline Views": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

export default function About({ config }: { config: BranchConfig }) {
  const { isAr } = useLang();
  const about = config.branch === "men" ? menAbout : womenAbout;

  return (
    <section id="about" className="bg-dark-lighter py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className={`section-label ${config.colors.labelClass}`}>
            {isAr ? "عنا" : "About Us"}
          </div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {isAr ? "من نحن" : "Who We Are"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-3xl sm:mt-14"
        >
          <p className="text-text-muted text-base md:text-lg leading-relaxed text-center">
            {isAr ? about.ar : about.en}
          </p>

          {/* Location + Hours */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-dark-card p-5 sm:transition-colors sm:duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${config.colors.primary}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${config.colors.primary}15`, color: config.colors.primary }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  {isAr ? "الموقع" : "Location"}
                </p>
                <p className="text-text-muted text-sm">
                  {isAr ? config.location.ar : config.location.en}
                </p>
              </div>
            </div>
            <div
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-dark-card p-5 sm:transition-colors sm:duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${config.colors.primary}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${config.colors.primary}15`, color: config.colors.primary }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">
                  {isAr ? "ساعات العمل" : "Working Hours"}
                </p>
                <p className="text-text-muted text-sm">
                  {isAr ? config.hours.ar : config.hours.en}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Women's amenities */}
        {config.amenities && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {config.amenities.map((a, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-dark-card p-5 text-center sm:transition-transform sm:duration-300 sm:hover:-translate-y-1"
              >
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg mb-3"
                  style={{ backgroundColor: `${config.colors.primary}15`, color: config.colors.primary }}
                >
                  {amenityIcons[a.en] || (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  )}
                </div>
                <p className="text-white text-sm font-medium">
                  {isAr ? a.ar : a.en}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
