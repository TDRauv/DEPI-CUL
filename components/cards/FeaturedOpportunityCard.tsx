import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

type Props = {
  title: string;
  organization: string;
  country: string;
  deadline: string;
  status: string;
  image: string;
};

const statusColors: Record<string, string> = {
  Abierta: "bg-green-500",
  "Próximamente": "bg-yellow-500",
  "Cierra pronto": "bg-red-500",
};

export default function FeaturedOpportunityCard({
  title,
  organization,
  country,
  deadline,
  status,
  image,
}: Props) {
  console.log(image);
  return (
    <article className="group relative h-[560px] overflow-hidden rounded-3xl">

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute left-8 bottom-8 right-8 text-white">

        <span
          className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${statusColors[status]}`}
        >
          {status}
        </span>

        <h3 className="mt-5 text-4xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-lg opacity-90">
          {organization}
        </p>

        <p className="opacity-90">
          {country}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <CalendarDays size={18} />
          {deadline}
        </div>

        <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#003B70] transition hover:gap-4">
          Ver convocatoria
          <ArrowRight size={18} />
        </button>

      </div>

    </article>
  );
}


