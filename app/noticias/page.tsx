import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import NewsGrid from "@/components/home/news/NewsGrid";

export const metadata: Metadata = {
  title: "Noticias | DEPI - CUL",
  description: "Todas las noticias, convenios y eventos del Departamento de Internacionalización.",
};

export default function TodasLasNoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enlace para volver al Inicio */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>

        {/* Encabezado de la página */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#003B70]/10 text-[#003B70]">
            <Newspaper className="w-3.5 h-3.5" />
            Actualidad DEPI
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight">
            Noticias y Comunicados
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Explora las actividades, convenios, alianzas académicas y oportunidades de movilidad de la comunidad universitaria.
          </p>
        </div>

        {/* Listado de tarjetas de noticias */}
        <NewsGrid />

      </div>
    </main>
  );
}