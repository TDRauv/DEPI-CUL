import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface Props {
  opportunity: Opportunity;
}

const categoryColors: Record<string, string> = {
  movilidad: "bg-green-100 text-green-800 border-green-200",
  investigación: "bg-purple-100 text-purple-800 border-purple-200",
  investigacion: "bg-purple-100 text-purple-800 border-purple-200",
  beca: "bg-blue-100 text-[#003B70] border-blue-200",
  convocatoria: "bg-orange-100 text-orange-800 border-orange-200",
  convocatorias: "bg-orange-100 text-orange-800 border-orange-200",
  actividades: "bg-emerald-100 text-emerald-800 border-emerald-200",
  eventos: "bg-amber-100 text-amber-900 border-amber-200",
};

export default function OpportunityCard({ opportunity }: Props) {
  // Si la oportunidad es la de Movilidad / intercambio, va directo a /movilidad-academica
  const targetHref =
    opportunity.slug === "intercambio"
      ? "/movilidad-academica"
      : `/oportunidades/${opportunity.slug}`;

  // Normalizamos a arreglo para procesar 1 o varias categorías de forma consistente
  const categories = Array.isArray(opportunity.category)
    ? opportunity.category
    : [opportunity.category];

  return (
    <Link
      href={targetHref}
      className="group block h-full focus:outline-none"
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          bg-white
          border
          border-slate-200
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Contenedor de Imagen */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900/5 flex items-center justify-center">
          <Image
            src={opportunity.image}
            alt={opportunity.title}
            fill
            className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-7">
          {/* Categorías / Badges */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat, idx) => {
              const key = cat.trim().toLowerCase();
              const badgeStyle =
                categoryColors[key] ?? "bg-slate-100 text-slate-700 border-slate-200";

              return (
                <span
                  key={idx}
                  className={`
                    inline-flex
                    w-fit
                    rounded-full
                    px-3
                    py-0.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    border
                    ${badgeStyle}
                  `}
                >
                  {cat}
                </span>
              );
            })}
          </div>

          {/* Título */}
          <h3
            className="
              mt-5
              line-clamp-2
              text-2xl
              font-bold
              leading-tight
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-[#003B70]
            "
          >
            {opportunity.title}
          </h3>

          {/* Resumen */}
          <p className="mt-4 line-clamp-3 text-slate-600 leading-7">
            {opportunity.summary}
          </p>

          {/* Fecha / Plazo de cierre */}
          <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-slate-500 font-medium">
            <CalendarDays size={18} className="text-[#D9A404]" />
            <span>{opportunity.deadline}</span>
          </div>

          {/* Botón de acción */}
          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#003B70]
              transition-all
              duration-300
              group-hover:gap-4
            "
          >
            <span>
              {opportunity.slug === "intercambio"
                ? "Ver Movilidad Académica"
                : "Ver convocatoria"}
            </span>
            <ArrowRight size={18} />
          </div>
        </div>
      </article>
    </Link>
  );
}