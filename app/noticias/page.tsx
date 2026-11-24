"use client";

import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import NewsGrid from "@/components/home/news/NewsGrid";
import { useLanguage } from "@/app/context/LanguageContext";

export default function TodasLasNoticiasPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#003B70]/10 text-[#003B70]">
            <Newspaper className="w-3.5 h-3.5" />
            {isEn ? "DEPI News" : "Actualidad DEPI"}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight">
            {isEn ? "News and Press Releases" : "Noticias y Comunicados"}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {isEn
              ? "Explore activities, agreements, academic partnerships, and mobility opportunities for our university community."
              : "Explora las actividades, convenios, alianzas académicas y oportunidades de movilidad de la comunidad universitaria."}
          </p>
        </div>

        <NewsGrid />
      </div>
    </main>
  );
}