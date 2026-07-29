import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import { News } from "@/types/news";

interface Props {
  news: News;
}

const categoryColors: Record<string, string> = {
  Convenios: "bg-blue-100 text-blue-800",
  Investigación: "bg-purple-100 text-purple-800",
  Movilidad: "bg-green-100 text-green-800",
  Eventos: "bg-orange-100 text-orange-800",
  Convocatoria: "bg-red-100 text-red-700",
};

export default function NewsCard({ news }: Props) {
  return (
    <article
      className="
        group
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
      {/* Imagen */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Degradado */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="flex h-77.5 flex-col p-7">
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
              categoryColors[news.category] ??
              "bg-slate-100 text-slate-700"
            }
          `}
        >
          {news.category}
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
          {news.title}
        </h3>

        {/* Resumen */}
        <p className="mt-4 line-clamp-3 text-slate-600 leading-7">
          {news.summary}
        </p>

        {/* Fecha */}
        <div className="mt-auto flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays size={18} />
          <span>{news.date}</span>
        </div>

        {/* Botón */}
        <Link
          href={`/noticias/${news.slug}`}
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
          Leer noticia
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}