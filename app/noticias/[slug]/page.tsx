"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";
import { CalendarDays, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoryTranslations: Record<string, { es: string; en: string }> = {
  Relacionamiento: { es: "Relacionamiento", en: "Networking & Alliances" },
  Convenios: { es: "Convenios", en: "Agreements" },
  Investigación: { es: "Investigación", en: "Research" },
  Movilidad: { es: "Movilidad", en: "Mobility" },
  MOVILIDAD: { es: "Movilidad", en: "Mobility" },
  Eventos: { es: "Eventos", en: "Events" },
  Convocatoria: { es: "Convocatoria", en: "Call" },
};

export default function DetalleNoticiaPage({ params }: PageProps) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const noticiaActual = news.find((item) => item.slug === slug);

  if (!noticiaActual) {
    notFound();
  }

  const otrasNoticias = news.filter((item) => item.slug !== slug);

  // Obtener campos según idioma activo
  const title =
    typeof noticiaActual.title === "object"
      ? noticiaActual.title[lang]
      : noticiaActual.title;

  const date =
    typeof noticiaActual.date === "object"
      ? noticiaActual.date[lang]
      : noticiaActual.date;

  const paragraphs =
    typeof noticiaActual.content === "object" && !Array.isArray(noticiaActual.content)
      ? noticiaActual.content[lang]
      : Array.isArray(noticiaActual.content)
      ? noticiaActual.content
      : [noticiaActual.summary];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enlace para volver */}
        <div className="mb-8">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to news" : "Volver a noticias"}
          </Link>
        </div>

        {/* Estructura de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Noticia Completa */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            {/* Metadatos y Categoría */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003B70] border border-blue-100">
                <Tag className="w-3 h-3" />
                {categoryTranslations[noticiaActual.category]?.[lang] ??
                  noticiaActual.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CalendarDays className="w-4 h-4 text-[#D9A404]" />
                {date}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#003B70] leading-tight mb-6">
              {title}
            </h1>

            {/* Imagen Principal */}
            <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden rounded-2xl bg-slate-900/5 mb-8 shadow-sm flex items-center justify-center">
              <Image
                src={noticiaActual.image}
                alt={title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Párrafos traducidos */}
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {paragraphs.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))}
            </div>

            {/* Pie de página */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500">
              <span>
                {isEn
                  ? "Department of Internationalization (DEPI) · CUL"
                  : "Departamento de Internacionalización (DEPI) · CUL"}
              </span>
              <a
                href="mailto:internacionalizacion@ul.edu.co"
                className="font-semibold text-[#003B70] hover:underline"
              >
                internacionalizacion@ul.edu.co
              </a>
            </div>
          </article>

          {/* Columna Derecha: Barra lateral con otras noticias */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl font-bold text-[#003B70] pb-3 border-b border-slate-100">
                {isEn ? "More News" : "Otras noticias"}
              </h2>

              <div className="mt-6 space-y-6 divide-y divide-slate-100">
                {otrasNoticias.map((item) => {
                  const itemTitle =
                    typeof item.title === "object" ? item.title[lang] : item.title;
                  const itemDate =
                    typeof item.date === "object" ? item.date[lang] : item.date;

                  return (
                    <div key={item.id} className="pt-6 first:pt-0 group">
                      <Link href={`/noticias/${item.slug}`} className="block">
                        <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                          <Image
                            src={item.image}
                            alt={itemTitle}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                          <span className="font-semibold text-[#003B70]">
                            {categoryTranslations[item.category]?.[lang] ??
                              item.category}
                          </span>
                          <span>•</span>
                          <span>{itemDate}</span>
                        </div>

                        <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#003B70] transition-colors line-clamp-2">
                          {itemTitle}
                        </h3>

                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#D9A404] group-hover:underline">
                          {isEn ? "Read full story" : "Leer noticia"}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}