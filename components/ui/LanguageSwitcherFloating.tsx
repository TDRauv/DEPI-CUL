"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcherFloating() {
  const [currentLang, setCurrentLang] = useState<"es" | "en">("es");

  useEffect(() => {
    // Definir la inicialización del traductor
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const toggleLanguage = () => {
    const nextLang = currentLang === "es" ? "en" : "es";
    setCurrentLang(nextLang);

    // Activar la traducción en el select de Google Translate
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = nextLang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Contenedor invisible para Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Script oficial de traducción */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Botón flotante estilizado */}
      <aside aria-label="Selector de idioma" className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={toggleLanguage}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#003B70] text-white shadow-xl hover:bg-[#002855] hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D9A404]"
          title={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
          <Globe className="w-4 h-4 text-[#D9A404] transition-transform duration-300 group-hover:rotate-45" />
          <span className="text-xs font-black tracking-widest uppercase">
            {currentLang === "es" ? "ES | EN" : "EN | ES"}
          </span>
        </button>
      </aside>
    </>
  );
}