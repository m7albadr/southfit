"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ar";

const LangContext = createContext<{ lang: Lang; toggleLang: () => void; isAr: boolean }>({
  lang: "en",
  toggleLang: () => {},
  isAr: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("sf-lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("sf-lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  return (
    <LangContext.Provider value={{ lang, toggleLang, isAr: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
