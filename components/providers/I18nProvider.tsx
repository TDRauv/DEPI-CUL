"use client";

import { useEffect, useState } from "react";
import "@/i18n/config"; // Inicializa i18n
import i18n from "i18next";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("cul_lang") || "es";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  // Opcional: renderizar children siempre, o esperar a montar
  return <>{children}</>;
}
