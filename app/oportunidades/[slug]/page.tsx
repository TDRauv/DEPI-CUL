import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Globe2,
  CheckCircle2,
  CalendarClock,
  Send,
  Mail,
  FileText,
  ExternalLink,
  Download,
  MapPin,
} from "lucide-react";
import { opportunities } from "@/data/opportunities";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DetalleOportunidadPage({ params }: Props) {
  const { slug } = await params;
  const data = opportunities.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Enlace volver */}
        <div className="mb-6">
          <Link
            href="/oportunidades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver a Oportunidades
          </Link>
        </div>

        <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
          {/* Metadatos superiores */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#003B70]">
              {data.category}
            </span>
            {data.modality && (
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-[#D9A404] border border-amber-200">
                {data.modality}
              </span>
            )}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium ml-auto">
              <Calendar className="w-3.5 h-3.5 text-[#D9A404]" />
              {data.deadline}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#003B70] tracking-tight mb-6">
            {data.title}
          </h1>

          {/* Afiche / Imagen principal */}
          <div className="relative w-full h-80 sm:h-[480px] rounded-2xl overflow-hidden bg-slate-100 mb-8 flex items-center justify-center border border-slate-100">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              className="object-contain p-2"
            />
          </div>

          {/* Resumen / Descripción */}
          {data.content && (
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base mb-10">
              {data.content.map((parrafo, idx) => (
                <p key={idx}>{parrafo}</p>
              ))}
            </div>
          )}

          {/* Países Destino */}
          {data.countries && data.countries.length > 0 && (
            <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#003B70] flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#D9A404]" />
                Países participantes
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.countries.map((country, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Requisitos y Cronograma */}
          {(data.requirements || data.schedule) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pt-4 border-t border-slate-100">
              {/* Requisitos */}
              {data.requirements && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Requisitos de postulación
                  </h3>
                  <ul className="space-y-2.5">
                    {data.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#003B70] mt-2 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fechas Importantes */}
              {data.schedule && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CalendarClock className="w-5 h-5 text-[#003B70]" />
                    Fechas Importantes
                  </h3>
                  <div className="space-y-3">
                    {data.schedule.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200"
                      >
                        <p className="text-xs text-slate-500 font-medium">
                          {item.event}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#003B70] mt-0.5">
                          {item.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pasos de Aplicación */}
          {data.applicationSteps && data.applicationSteps.length > 0 && (
            <div className="mb-10 p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
              <h2 className="text-lg font-bold text-[#003B70] mb-4 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#D9A404]" />
                Pasos para realizar su proceso con éxito
              </h2>

              <div className="space-y-4">
                {data.applicationSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-white border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D9A404]">
                        Fase {step.step}
                      </p>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        {step.description}
                      </p>
                    </div>

                    {step.actionUrl && (
                      <a
                        href={step.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#003B70] text-white text-xs font-semibold hover:bg-[#002B52] transition-colors"
                      >
                        <span>{step.actionLabel || "Postularme"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contacto institucional */}
          {data.contactEmail && (
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#003B70]" />
                <span>¿Dudas sobre la convocatoria? Escríbenos a:</span>
                <a
                  href={`mailto:${data.contactEmail}`}
                  className="font-bold text-[#003B70] hover:underline"
                >
                  {data.contactEmail}
                </a>
              </div>
            </div>
          )}

          {/* Historial de Boletines (en caso de que la oportunidad los tenga) */}
          {data.bulletins && data.bulletins.length > 0 && (
            <div className="space-y-8 border-t border-slate-100 pt-8 mt-8">
              <h2 className="text-xl font-bold text-slate-900">
                Historial de Boletines
              </h2>

              {data.bulletins.map((group) => (
                <div key={group.year} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-black text-[#003B70]">
                      {group.year}
                    </span>
                    <div className="h-px bg-slate-200 flex-1" />
                  </div>

                  {group.items.length === 0 ? (
                    <p className="text-xs text-slate-400 italic pl-1">
                      Sin boletines registrados para este año.
                    </p>
                  ) : (
                    <div className="grid gap-2.5">
                      {group.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#003B70]/40 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 text-red-700 rounded-lg shrink-0">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                                <span className="text-[#003B70] font-bold">
                                  {item.code}
                                </span>{" "}
                                – {item.title}
                              </p>
                              {item.topic && (
                                <span className="inline-block mt-0.5 text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-[#003B70]">
                                  {item.topic}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Ver
                            </a>
                            <a
                              href={item.url}
                              download
                              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#003B70] text-white hover:bg-[#002B52] transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" />
                              Descargar
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </main>
  );
}