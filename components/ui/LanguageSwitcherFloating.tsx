"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcherFloating() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <aside aria-label="Selector de idioma" className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={toggleLanguage}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#003B70] text-white shadow-xl hover:bg-[#002855] hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D9A404]"
        title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
      >
        <Globe className="w-4 h-4 text-[#D9A404] transition-transform duration-300 group-hover:rotate-45" />
        <span className="text-xs font-black tracking-widest uppercase text-white">
          {lang === "es" ? "ES | EN" : "EN | ES"}
        </span>
      </button>
    </aside>
  );
}
