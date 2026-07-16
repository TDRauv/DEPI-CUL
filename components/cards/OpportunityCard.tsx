import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  organization: string;
  country: string;
  deadline: string;
  status: string;
  image: string;
};

const statusStyles: Record<string, string> = {
  Abierta: "bg-green-100 text-green-700",
  "Próximamente": "bg-yellow-100 text-yellow-700",
  "Cierra pronto": "bg-red-100 text-red-700",
};

export default function OpportunityCard({
  title,
  organization,
  country,
  deadline,
  status,
  image,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-semibold ${
            statusStyles[status]
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            {title}
          </h3>

          <p className="mt-1 text-slate-500">
            {organization}
          </p>

          <p className="text-slate-500">{country}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={18} />
          {deadline}
        </div>

        <button className="flex items-center gap-2 font-semibold text-[#003B70] transition-all hover:gap-3">
          Ver convocatoria
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
