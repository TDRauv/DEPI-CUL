"use client";

import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Barranquilla() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

        <div className="rounded-3xl bg-[#003B70] text-white p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-white/10 text-[#D9A404] border border-white/20">
            <MapPin className="w-3.5 h-3.5" />
            Puerta de Oro de Colombia
          </span>
          <h1 className="text-3xl sm:text-5xl font-black">
            {isEn ? "Welcome to Barranquilla" : "Bienvenidos a Barranquilla"}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? "Discover the cultural, academic, and economic capital of the Colombian Caribbean. An open door to international students and researchers from around the world."
              : "Descubre la capital cultural, académica y económica del Caribe colombiano. Una puerta abierta a estudiantes e investigadores internacionales de todo el mundo."}
          </p>
        </div>
      </Container>
    </main>
  );
}