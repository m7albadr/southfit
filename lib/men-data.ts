import { BranchConfig } from "./types";

export const menConfig: BranchConfig = {
  branch: "men",
  name: { en: "SOUTHFIT", ar: "SOUTHFIT" },
  subtitle: { en: "Men's Branch", ar: "فرع الرجال" },
  tagline: {
    en: "Where Limits Are Broken",
    ar: "وقت الجد يبدأ هني",
  },
  location: {
    en: "Mangaf — Next to Shermy",
    ar: "المنقف — بجانب شرمبي",
  },
  hours: {
    en: "10:00 AM – 10:00 PM, Saturday – Thursday",
    ar: "10:00 ص – 10:00 م، السبت – الخميس",
  },
  instagram: "@southfitkuwait",
  instagramUrl: "https://www.instagram.com/southfitkuwait",
  mapUrl: "https://www.google.com/maps/place/SouthFit+Kuwait/@29.1004993,48.1332087,17z",
  bookingUrl: "https://in.app.link",
  whatsappUrl: "https://wa.me/96555459442",
  colors: {
    primary: "#0891b2",
    secondary: "#0e7490",
    light: "#22d3ee",
    gradient: "from-teal-500 to-cyan-400",
    glowClass: "animate-glow-pulse-men",
    labelClass: "section-label-men",
    gradientTextClass: "gradient-text-men",
  },
  services: [
    { en: "CrossFit", ar: "كروس فت", icon: "" },
    { en: "Bootcamp", ar: "بوت كامب", icon: "" },
    { en: "Personal Training", ar: "تدريب خاص", icon: "" },
    { en: "Kickboxing", ar: "كيك بوكسنق", icon: "" },
    { en: "Hyrox", ar: "هايروكس", icon: "" },
    { en: "SF Team WOD", ar: "تمرين جماعي", icon: "" },
  ],
  schedule: [
    { time: "5:00 AM", class: { en: "Bootcamp + CrossFit", ar: "بوت كامب + كروس فت" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "11:00 AM", class: { en: "Bootcamp", ar: "بوت كامب" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "3:00 PM", class: { en: "Bootcamp", ar: "بوت كامب" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "4:00 PM", class: { en: "CrossFit", ar: "كروس فت" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "5:00 PM", class: { en: "Bootcamp", ar: "بوت كامب" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "6:00 PM", class: { en: "CrossFit", ar: "كروس فت" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "7:00 PM", class: { en: "Bootcamp", ar: "بوت كامب" }, days: { en: "Sun – Thu", ar: "أحد – خميس" } },
    { time: "4:00 PM", class: { en: "SF Team WOD", ar: "تمرين جماعي" }, days: { en: "Saturday", ar: "السبت" } },
  ],
  coaches: [
    {
      name: { en: "Abdalrahman Alqattan", ar: "عبدالرحمن القطان" },
      role: { en: "Kickboxing", ar: "كيك بوكسنق" },
      schedule: { en: "Sun, Tue, Thu @ 8:00 PM | Beginners & Advanced", ar: "أحد، ثلاثاء، خميس @ 8:00 م | كل المستويات" },
    },
    {
      name: { en: "Yousef", ar: "يوسف" },
      role: { en: "Bootcamp, Personal Trainer", ar: "بوت كامب، مدرب خاص" },
      schedule: { en: "11:00 AM | Beginners & Advanced", ar: "11:00 ص | كل المستويات" },
    },
    {
      name: { en: "Ahmad", ar: "أحمد" },
      role: { en: "CrossFit, Bootcamp, Personal Trainer", ar: "كروس فت، بوت كامب، مدرب خاص" },
      schedule: { en: "6:00 PM | Beginners & Advanced", ar: "6:00 م | كل المستويات" },
    },
    {
      name: { en: "Abdulaziz", ar: "عبدالعزيز" },
      role: { en: "CrossFit, Bootcamp, Personal Trainer", ar: "كروس فت، بوت كامب، مدرب خاص" },
      schedule: { en: "6:00 PM | Beginners & Advanced", ar: "6:00 م | كل المستويات" },
    },
  ],
  pricing: [
    { name: { en: "1 Day", ar: "يوم واحد" }, price: "6 KD" },
    { name: { en: "2 Weeks", ar: "أسبوعين" }, price: "40 KD" },
    { name: { en: "1 Month", ar: "شهر" }, price: "60 KD" },
    { name: { en: "3 Months", ar: "3 شهور" }, price: "165 KD" },
    { name: { en: "6 Months", ar: "6 شهور" }, price: "280 KD" },
    { name: { en: "1 Year", ar: "سنة" }, price: "480 KD" },
  ],
  ptPricing: [
    { name: { en: "1 Session", ar: "جلسة وحدة" }, price: "20 KD" },
    { name: { en: "6 Sessions", ar: "6 جلسات" }, price: "120 KD" },
    { name: { en: "8 Sessions", ar: "8 جلسات" }, price: "145 KD" },
    { name: { en: "12 Sessions", ar: "12 جلسة" }, price: "200 KD" },
    { name: { en: "16 Sessions", ar: "16 جلسة" }, price: "240 KD" },
    { name: { en: "20 Sessions", ar: "20 جلسة" }, price: "280 KD" },
  ],
  spaceRent: [
    { name: { en: "PT (1-on-1)", ar: "تدريب خاص (فردي)" }, price: "7 KD/hr" },
    { name: { en: "Group PT (2–4)", ar: "قروب (2–4)" }, price: "10 KD/hr" },
    { name: { en: "Group PT (10–15)", ar: "قروب (10–15)" }, price: "12.5 KD/hr" },
  ],
  promotions: [
    { en: "Free trial available — book via WhatsApp", ar: "تجربة مجانية — كلمنا واتساب واحجز" },
    { en: "Bring 1 friend = 1 free week added to your subscription", ar: "جيب رفيجك معاك = أسبوع مجاني على اشتراكك" },
    { en: "Bring 4 friends = 1 free workshop with Abdulaziz Bouheimed", ar: "جيب 4 رفجانك = ورشة مجانية مع عبدالعزيز بوحيمد" },
  ],
  faq: [
    {
      q: { en: "Do I need prior experience to join?", ar: "لازم يكون عندي خبرة عشان أشترك؟" },
      a: { en: "Not at all! Our classes cater to all levels — beginners and advanced. Our coaches will guide you through every step.", ar: "أبد! الكلاسات حق كل المستويات — مبتدئ أو متقدم. المدربين بيساعدونك من البداية." },
    },
    {
      q: { en: "How do I book a class?", ar: "شلون أحجز كلاس؟" },
      a: { en: "All class bookings are done through WhatsApp. Contact us and we'll get you set up.", ar: "كلمنا على الواتساب وراح نرتب موعد." },
    },
    {
      q: { en: "What are the gym hours?", ar: "شنو أوقات النادي؟" },
      a: { en: "We're open Saturday to Thursday, 10:00 AM to 10:00 PM. Closed on Fridays.", ar: "من السبت للخميس، 10 الصبح لين 10 الليل. الجمعة مقفل." },
    },
    {
      q: { en: "Is there a free trial?", ar: "في تجربة مجانية؟" },
      a: { en: "Yes! We offer a free trial class. Contact us via WhatsApp to book.", ar: "إي! كلمنا واتساب ونرتب تجربة مجانية." },
    },
    {
      q: { en: "What equipment do you have?", ar: "شنو الأجهزة اللي عندكم؟" },
      a: { en: "We feature industrial-style Rogue equipment, heavy punching bags, gymnastic rings, and a full open gym area.", ar: "عندنا أجهزة Rogue، أكياس ملاكمة، حلقات جمباز، وصالة مفتوحة كاملة." },
    },
    {
      q: { en: "Do you offer personal training?", ar: "عندكم تدريب خاص؟" },
      a: { en: "Yes! We offer personal training sessions with our certified coaches. Check our pricing section for package details.", ar: "إي! عندنا مدربين خاص. شوف قسم الأسعار لتفاصيل الباقات." },
    },
  ],
};
