import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface Props {
  opportunity: Opportunity;
}

const categoryColors: Record<string, string> = {
  Movilidad: "bg-green-100 text-green-800",
  Investigación: "bg-purple-100 text-purple-800",
  Beca: "bg-blue-100 text-[#003B70]",
  Convocatoria: "bg-orange-100 text-orange-800",
};

export default function OpportunityCard({ opportunity }: Props) {
  return (
    <Link
      href={`/oportunidades/${opportunity.slug}`}
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
          {/* Categoría */}
          <span
            className={`
              inline-flex
              w-fit
              rounded-full
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              ${
                categoryColors[opportunity.category] ??
                "bg-slate-100 text-slate-700"
              }
            `}
          >
            {opportunity.category}
          </span>

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
            <span>Ver convocatoria</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </article>
    </Link>
  );
}