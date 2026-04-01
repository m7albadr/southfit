import { BranchConfig } from "./types";

export const womenConfig: BranchConfig = {
  branch: "women",
  name: { en: "SOUTHFIT", ar: "SOUTHFIT" },
  subtitle: { en: "Women's Branch", ar: "فرع السيدات" },
  tagline: {
    en: "Strength Has No Gender",
    ar: "القوة ما لها حدود",
  },
  location: {
    en: "Jebla — Souad Complex B, Kuwait City",
    ar: "جبلة — مجمع سعاد B — الكويت",
  },
  hours: {
    en: "12:00 PM – 10:00 PM, Saturday – Thursday",
    ar: "12:00 م – 10:00 م، السبت – الخميس",
  },
  instagram: "@southfitwomen",
  instagramUrl: "https://www.instagram.com/southfitwomen/",
  mapUrl: "https://www.google.com/maps/place/SouthFit+Women/@29.3692441,47.9700328,17z",
  bookingUrl: "https://in.app.link",
  whatsappUrl: "https://wa.me/96555459442",
  colors: {
    primary: "#d946ef",
    secondary: "#a21caf",
    light: "#f0abfc",
    gradient: "from-fuchsia-500 to-pink-400",
    glowClass: "animate-glow-pulse-women",
    labelClass: "section-label-women",
    gradientTextClass: "gradient-text-women",
  },
  services: [
    { en: "CrossFit", ar: "كروس فت", icon: "" },
    { en: "Circuit Training", ar: "سيركت", icon: "" },
    { en: "Personal Training", ar: "تدريب خاص", icon: "" },
    { en: "Yoga", ar: "يوقا", icon: "" },
    { en: "Strength & Conditioning", ar: "تقوية وتكييف", icon: "" },
    { en: "Hyrox", ar: "هايروكس", icon: "" },
    { en: "Powerlifting", ar: "باور لفتنق", icon: "" },
    { en: "Bootcamp", ar: "بوت كامب", icon: "" },
  ],
  schedule: [
    { time: "4:00 PM", class: { en: "SFit Circuit", ar: "SFit سيركت" }, days: { en: "Sat – Thu", ar: "سبت – خميس" } },
    { time: "5:00 PM", class: { en: "SFit Strength", ar: "SFit قوة" }, days: { en: "Sat – Thu", ar: "سبت – خميس" } },
    { time: "6:00 PM", class: { en: "SFit Strength", ar: "SFit قوة" }, days: { en: "Sat – Thu", ar: "سبت – خميس" } },
    { time: "7:00 PM", class: { en: "SFit Strength", ar: "SFit قوة" }, days: { en: "Sat – Thu", ar: "سبت – خميس" } },
  ],
  yogaSchedule: [
    { time: "2:00 PM", class: { en: "Gentle Yoga Flow", ar: "يوقا خفيفة" }, days: { en: "Saturday", ar: "السبت" }, coach: { en: "Coach Ghadeer Jumaa", ar: "المدربة غدير جمعة" } },
    { time: "8:00 PM", class: { en: "Relaxing Yoga", ar: "يوقا استرخاء" }, days: { en: "Tuesday", ar: "الثلاثاء" }, coach: { en: "Coach Ghadeer Jumaa", ar: "المدربة غدير جمعة" } },
  ],
  coaches: [
    {
      name: { en: "Bashayer", ar: "بشاير" },
      role: { en: "Strength, Bootcamp, Powerlifting, Personal Trainer", ar: "قوة، بوت كامب، باور لفتنق، مدربة خاصة" },
      schedule: { en: "Sun, Wed @ 5:00 PM / Thu @ 6:00 PM", ar: "أحد، أربعاء @ 5:00 م / خميس @ 6:00 م" },
    },
    {
      name: { en: "Ghadeer Jumaa", ar: "غدير جمعة" },
      role: { en: "Yoga", ar: "يوقا" },
      schedule: { en: "Sat @ 2:00 PM / Tue @ 8:00 PM", ar: "سبت @ 2:00 م / ثلاثاء @ 8:00 م" },
    },
    {
      name: { en: "Coach Sara", ar: "المدربة سارة" },
      role: { en: "Bootcamp, Strength & Conditioning, CrossFit, Personal Training", ar: "بوت كامب، تقوية، كروس فت، تدريب خاص" },
    },
    {
      name: { en: "Nora", ar: "نورة" },
      role: { en: "Personal Training", ar: "تدريب خاص" },
    },
  ],
  pricing: [
    { name: { en: "1 Day", ar: "يوم واحد" }, price: "8 KD" },
    { name: { en: "1 Month", ar: "شهر" }, price: "85 KD" },
    { name: { en: "3 Months", ar: "3 شهور" }, price: "240 KD" },
    { name: { en: "6 Months", ar: "6 شهور" }, price: "420 KD" },
    { name: { en: "1 Year", ar: "سنة" }, price: "595 KD" },
  ],
  studentPricing: [
    { name: { en: "1 Day", ar: "يوم واحد" }, price: "8 KD" },
    { name: { en: "1 Month", ar: "شهر" }, price: "75 KD" },
    { name: { en: "3 Months", ar: "3 شهور" }, price: "210 KD" },
    { name: { en: "6 Months", ar: "6 شهور" }, price: "360 KD" },
    { name: { en: "1 Year", ar: "سنة" }, price: "495 KD" },
  ],
  ptPricing: [
    { name: { en: "1 Session", ar: "جلسة وحدة" }, price: "25 KD" },
    { name: { en: "6 Sessions", ar: "6 جلسات" }, price: "135 KD" },
    { name: { en: "8 Sessions", ar: "8 جلسات" }, price: "160 KD" },
    { name: { en: "12 Sessions", ar: "12 جلسة" }, price: "220 KD" },
    { name: { en: "16 Sessions", ar: "16 جلسة" }, price: "260 KD" },
    { name: { en: "20 Sessions", ar: "20 جلسة" }, price: "295 KD" },
  ],
  spaceRent: [
    { name: { en: "PT (1-on-1)", ar: "تدريب خاص (فردي)" }, price: "10 KD/hr" },
    { name: { en: "Group PT (1–4)", ar: "قروب (1–4)" }, price: "14 KD/hr" },
    { name: { en: "Group PT (1–10)", ar: "قروب (1–10)" }, price: "20 KD/hr" },
  ],
  amenities: [
    { en: "Valet Parking Service", ar: "فاليه باركنق", icon: "" },
    { en: "Prayer Room", ar: "مصلى", icon: "" },
    { en: "Free Coffee on Mondays (3\u20137 PM)", ar: "قهوة مجانية يوم الاثنين (3–7 م)", icon: "" },
    { en: "City Skyline Views", ar: "فيو على المدينة", icon: "" },
  ],
  promotions: [
    { en: "Free trial available — book via WhatsApp", ar: "تجربة مجانية — كلمينا واتساب واحجزي" },
    { en: "Bring 1 friend = 1 free week added to your subscription", ar: "جيبي رفيجتج معاج = أسبوع مجاني على اشتراكج" },
    { en: "10% discount for employees in Jableh & Dira areas when bringing a friend", ar: "خصم 10% لموظفات جبلة والديرة اذا جابت رفيجتها" },
  ],
  faq: [
    {
      q: { en: "Do I need prior experience to join?", ar: "لازم يكون عندي خبرة عشان أشترك؟" },
      a: { en: "Not at all! Our classes cater to all levels — beginners and advanced. Our coaches will guide you through every step.", ar: "أبد! الكلاسات حق كل المستويات. المدربات بيساعدونج من البداية." },
    },
    {
      q: { en: "How do I book a class?", ar: "شلون أحجز كلاس؟" },
      a: { en: "All class bookings are done through WhatsApp. Contact us and we'll get you set up.", ar: "كلمينا على الواتساب وراح نرتب موعد." },
    },
    {
      q: { en: "What are the gym hours?", ar: "شنو أوقات النادي؟" },
      a: { en: "We're open Saturday to Thursday, 12:00 PM to 10:00 PM. Open gym is available throughout our hours.", ar: "من السبت للخميس، 12 الظهر لين 10 الليل. الجيم المفتوح متاح طول الوقت." },
    },
    {
      q: { en: "Is there a free trial?", ar: "في تجربة مجانية؟" },
      a: { en: "Yes! We offer a free trial class. Contact us via WhatsApp to book.", ar: "إي! كلمينا واتساب ونرتب تجربة مجانية." },
    },
    {
      q: { en: "Do you offer student discounts?", ar: "عندكم أسعار للطالبات؟" },
      a: { en: "Yes! We have special student pricing. Check our pricing section for details.", ar: "إي! عندنا أسعار خاصة للطالبات. شوفي قسم الأسعار." },
    },
    {
      q: { en: "Is there parking available?", ar: "في باركنق؟" },
      a: { en: "Yes! We offer valet parking service for all our members.", ar: "إي! عندنا فاليه باركنق لكل المشتركات." },
    },
  ],
};
