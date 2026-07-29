import Link from "next/link";
import { ArrowRight } from "lucide-react";

import OpportunityCard from "@/components/cards/OpportunityCard";
import FeaturedOpportunityCard from "@/components/cards/FeaturedOpportunityCard";

import { opportunities } from "@/data/opportunities";

export default function Opportunities() {
  const featured = opportunities.find((item) => item.featured);

  const others = opportunities.filter((item) => !item.featured);

  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <div className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#003B70]">
              Internacionalización
            </span>

            <h2 className="mt-3 text-5xl font-bold text-slate-800">
              Oportunidades y Becas
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Descubre convocatorias, becas internacionales,
              programas de intercambio y oportunidades de movilidad
              académica dirigidas a estudiantes, docentes y
              administrativos de la Corporación Universitaria
              Latinoamericana.
            </p>

          </div>

          <Link
            href="/relacionamiento/becas-oportunidades"
            className="inline-flex items-center gap-2 rounded-xl bg-[#003B70] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#002B52]"
          >
            Ver todas
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Convocatorias */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Convocatoria principal */}

          <div className="lg:col-span-2">

            {featured && (
              <FeaturedOpportunityCard
                {...featured}
              />
            )}

          </div>

          {/* Convocatorias secundarias */}

          <div className="space-y-6">

            {others.map((item) => (
              <OpportunityCard
                key={item.id}
                {...item}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
} 