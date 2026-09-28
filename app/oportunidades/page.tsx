"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import OpportunityCard from "@/components/home/opportunities/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function OportunidadesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Obtener categorías únicas dinámicamente y aplanadas a string[]
  const categories: string[] = useMemo(() => {
    const rawCategories = opportunities.flatMap((item) => item.category);
    const unique = Array.from(new Set(rawCategories.filter(Boolean)));
    return ["Todas", ...unique];
  }, []);

  // Filtrado reactivo por texto y categoría (soporta string o string[])
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todas" ||
        (Array.isArray(item.category)
          ? item.category.includes(selectedCategory)
          : item.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Navegación de retorno */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </div>

        {/* Encabezado Principal */}
        <div className="rounded-3xl bg-linear-to-r from-[#002244] via-[#003B70] to-[#002B52] p-8 sm:p-12 text-white shadow-xl mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D9A404] border border-white/15 mb-4">
            Convocatorias y Becas
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Oportunidades Académicas
          </h1>
          <p className="max-w-2xl text-slate-200 text-sm sm:text-base leading-relaxed">
            Descubre las convocatorias de movilidad internacional, estancias de
            investigación, becas y el repositorio oficial de boletines del
            Departamento de Internacionalización (DEPI).
          </p>

          {/* Barra de Filtros y Búsqueda */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por título o palabra clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/10 text-white placeholder-slate-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9A404] focus:bg-white/20 transition-all text-sm"
              />
            </div>

            <div className="md:col-span-5 relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#002B52] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D9A404] transition-all text-sm cursor-pointer"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-[#002B52] text-white"
                  >
                    {category === "Todas" ? "Todas las categorías" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Cuadrícula de Oportunidades */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <p className="text-slate-500 font-medium text-lg">
              No se encontraron oportunidades que coincidan con la búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todas");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-semibold hover:bg-[#002B52] transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </main>
  );
}