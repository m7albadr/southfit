export type Branch = "men" | "women";

export interface BranchConfig {
  branch: Branch;
  name: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  tagline: { en: string; ar: string };
  location: { en: string; ar: string };
  hours: { en: string; ar: string };
  instagram: string;
  instagramUrl: string;
  mapUrl: string;
  bookingUrl: string;
  whatsappUrl: string;
  colors: {
    primary: string;
    secondary: string;
    light: string;
    gradient: string;
    glowClass: string;
    labelClass: string;
    gradientTextClass: string;
  };
  services: { en: string; ar: string; icon: string }[];
  schedule: ScheduleItem[];
  yogaSchedule?: ScheduleItem[];
  coaches: Coach[];
  pricing: PricingPlan[];
  ptPricing: PricingPlan[];
  spaceRent: PricingPlan[];
  studentPricing?: PricingPlan[];
  promotions: { en: string; ar: string }[];
  amenities?: { en: string; ar: string; icon: string }[];
  faq: { q: { en: string; ar: string }; a: { en: string; ar: string } }[];
}

export interface ScheduleItem {
  time: string;
  class: { en: string; ar: string };
  days?: { en: string; ar: string };
  coach?: { en: string; ar: string };
}

export interface Coach {
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  schedule?: { en: string; ar: string };
}

export interface PricingPlan {
  name: { en: string; ar: string };
  price: string;
}
