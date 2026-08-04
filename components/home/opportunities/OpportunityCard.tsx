import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Opportunity } from "@/types/opportunity";

interface Props {
  opportunity: Opportunity;
}

const categoryColors: Record<string, string> = {
  Beca: "bg-blue-100 text-blue-800",
  Investigación: "bg-purple-100 text-purple-800",
  Movilidad: "bg-green-100 text-green-800",
};

export default function OpportunityCard({
  opportunity,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={opportunity.image}
          alt={opportunity.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

      </div>

      <div className="flex h-[300px] flex-col p-7">

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

        <h3 className="mt-5 line-clamp-2 text-2xl font-bold text-slate-900 group-hover:text-[#003B70]">
          {opportunity.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
          {opportunity.summary}
        </p>

        <div className="mt-auto flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={18} />
          {opportunity.deadline}
        </div>

        <Link
          href={`/oportunidades/${opportunity.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#003B70] transition-all group-hover:gap-4"
        >
          Ver oportunidad
          <ArrowRight size={18} />
        </Link>

      </div>

    </article>
  );
}