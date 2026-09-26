import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";
import { CalendarDays, ArrowLeft, ArrowRight, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const noticia = news.find((item) => item.slug === slug);

  if (!noticia) {
    return { title: "Noticia no encontrada | DEPI - CUL" };
  }

  return {
    title: `${noticia.title} | DEPI - CUL`,
    description: noticia.summary,
  };
}

export default async function DetalleNoticiaPage({ params }: PageProps) {
  const { slug } = await params;
  const noticiaActual = news.find((item) => item.slug === slug);

  if (!noticiaActual) {
    notFound();
  }

  // Filtra las demás noticias para la barra lateral
  const otrasNoticias = news.filter((item) => item.slug !== slug);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Enlace para volver */}
        <div className="mb-8">
          <Link
            href="/#noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a noticias
          </Link>
        </div>

        {/* Estructura principal de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Noticia Completa */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            
            {/* Metadatos y Categoría */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003B70] border border-blue-100">
                <Tag className="w-3 h-3" />
                {noticiaActual.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CalendarDays className="w-4 h-4 text-[#D9A404]" />
                {noticiaActual.date}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#003B70] leading-tight mb-6">
              {noticiaActual.title}
            </h1>

            {/* Imagen Principal */}
            <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden rounded-2xl bg-slate-900/5 mb-8 shadow-sm flex items-center justify-center">
             <Image
             src={noticiaActual.image}
             alt={noticiaActual.title}
             fill
             priority
             className="object-contain"
              />
            </div>

            {/* Párrafos de la noticia */}
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
             {Array.isArray(noticiaActual.content) ? (
              noticiaActual.content.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
             ))
             ) : typeof noticiaActual.content === "string" ? (
             <p>{noticiaActual.content}</p>
             ) : (
             <p>{noticiaActual.summary}</p>
             )}
            </div>

            {/* Pie de página de la noticia */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500">
              <span>Departamento de Internacionalización (DEPI) · CUL</span>
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
                Otras noticias
              </h2>

              <div className="mt-6 space-y-6 divide-y divide-slate-100">
                {otrasNoticias.map((item) => (
                  <div key={item.id} className="pt-6 first:pt-0 group">
                    <Link href={`/noticias/${item.slug}`} className="block">
                      {/* Miniatura */}
                      <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <span className="font-semibold text-[#003B70]">
                          {item.category}
                        </span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#003B70] transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#D9A404] group-hover:underline">
                        Leer noticia
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>

      </div>
    </main>
  );
}