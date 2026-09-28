/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { DELFIN_CALLS, DELFIN_EXPERIENCES } from "@/data/mobility";
import { opportunities } from "@/data/opportunities";

export default function DelfinOpportunityPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  const currentDelfin = opportunities.find((o) => o.slug === "programa-delfin");

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Container>
        {/* Encabezado */}
        <section className="text-center max-w-3xl mx-auto mb-12 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/20 text-[#003B70] mb-3">
            Investigación e Internacionalización
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight leading-tight">
            Programa Verano Científico Delfín
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Una iniciativa coordinada entre el Departamento de Internacionalización (DEPI), el Centro de Investigación y Proyectos (CINPRO) y el Programa Delfín para formar a los futuros investigadores y ciudadanos globales de la CUL.
          </p>
        </section>

        {/* Selector de Convocatorias (2026, 2025, 2024) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#003B70] mb-2">
            Convocatorias del Programa
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Selecciona la convocatoria para consultar los detalles o las ediciones anteriores.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {DELFIN_CALLS.map((call) => (
              <button
                key={call.year}
                type="button"
                onClick={() => setSelectedYear(call.year)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  selectedYear === call.year
                    ? "border-[#003B70] bg-blue-50/50 ring-2 ring-[#003B70]/20 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-black text-[#003B70]">Delfín {call.year}</span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      call.year === "2026"
                        ? "bg-green-100 text-green-800"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {call.year === "2026" ? "Vigente" : "Finalizada"}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#D9A404] mb-1">{call.dates}</p>
                <p className="text-[11px] text-slate-500 mb-2">{call.deadline}</p>
                {call.details && (
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{call.details}</p>
                )}
              </button>
            ))}
          </div>

          {/* Detalle Convocatoria 2026 */}
          {selectedYear === "2026" && currentDelfin && (
            <div className="pt-8 border-t border-slate-200 animate-in fade-in duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
                <div className="lg:w-1/3 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                  <img
                    src={currentDelfin.image}
                    alt={currentDelfin.title}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="lg:w-2/3 w-full space-y-4">
                  <span className="text-xs font-bold text-[#D9A404] uppercase tracking-wider">
                    Convocatoria Activa 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                    {currentDelfin.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {currentDelfin.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-blue-100 text-[#003B70] text-xs font-bold px-3 py-1 rounded-full">
                      Modalidad: {currentDelfin.modality}
                    </span>
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                      {currentDelfin.deadline}
                    </span>
                  </div>

                  {currentDelfin.countries && (
                    <div className="pt-4">
                      <h4 className="text-xs font-bold text-[#003B70] uppercase mb-2">Países Participantes</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {currentDelfin.countries.map((c, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Requisitos y Cronograma */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {currentDelfin.requirements && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h4 className="text-base font-bold text-[#003B70] mb-3">Requisitos de Postulación</h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {currentDelfin.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D9A404] font-bold">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentDelfin.schedule && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h4 className="text-base font-bold text-[#003B70] mb-3">Cronograma Oficial</h4>
                    <ul className="space-y-3 text-xs text-slate-700">
                      {currentDelfin.schedule.map((item, i) => (
                        <li key={i} className="border-b border-slate-200 pb-2 last:border-none">
                          <strong className="block text-[#003B70]">{item.event}</strong>
                          <span className="text-slate-500">{item.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Pasos de Postulación */}
              {currentDelfin.applicationSteps && (
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-[#003B70] mb-4">Pasos para Postularte</h4>
                  <div className="grid md:grid-cols-2 gap-5">
                    {currentDelfin.applicationSteps.map((step) => (
                      <div key={step.step} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                        <div>
                          <span className="text-xl font-black text-[#D9A404]">Paso {step.step}</span>
                          <h5 className="font-bold text-[#003B70] text-base mt-1 mb-2">{step.title}</h5>
                          <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.description}</p>
                        </div>
                        <Link
                          href={step.actionUrl ?? "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl font-bold text-xs bg-[#003B70] text-white hover:bg-[#002d57] transition-colors"
                        >
                          <span className="text-white">{step.actionLabel}</span>
                          <span className="ml-1 text-white">↗</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

{/* Enlace para años anteriores */}
          {selectedYear !== "2026" && (() => {
            const pastCall = DELFIN_CALLS.find((c) => c.year === selectedYear);
            if (!pastCall?.instagramUrl) return null;

            return (
              <div className="pt-6 border-t border-slate-200 text-center animate-in fade-in duration-300">
                <p className="text-sm text-slate-600 mb-4">
                  Esta convocatoria concluyó. Puedes consultar el afiche y registro oficial en Instagram.
                </p>
                <Link
                  href={pastCall.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#003B70] text-white hover:bg-[#002d57] transition-colors"
                >
                  <span className="text-white">Ver Convocatoria Oficial {selectedYear}</span>
                  <span className="text-white">↗</span>
                </Link>
              </div>
            );
          })()}
        </section>

        {/* Recepción de Investigadores Foráneos en Campus CUL */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#D9A404] uppercase tracking-wider">
              Movilidad Entrante
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B70] mt-1">
              Recepción de Estudiantes en CUL
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Evidencias fotográficas y audiovisuales de estudiantes foráneos recibidos en el campus de la CUL en Barranquilla.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DELFIN_EXPERIENCES.map((exp) => (
              <div
                key={exp.year}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Contenedor de Imagen con respaldo visual si la ruta local no existe */}
                <div className="relative h-52 w-full bg-gradient-to-tr from-[#003B70] to-[#002040] flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Oculta la etiqueta img rota si el archivo no está en public/
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Respaldo decorativo en caso de que no cargue la foto */}
                  <div className="absolute inset-0 -z-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-3xl mb-1">🔬</span>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      Verano Delfín {exp.year}
                    </span>
                    <span className="text-slate-300 text-[11px] mt-0.5">
                      Registro Institucional DEPI
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-[#D9A404] uppercase">Verano {exp.year}</span>
                  <h4 className="font-bold text-[#003B70] text-base mt-1 mb-2">{exp.title}</h4>
                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    Participantes: {exp.participants}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">{exp.description}</p>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                    {exp.links.map((lnk, idx) => (
                      <Link
                        key={idx}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-[#003B70] hover:border-[#003B70] hover:text-[#003B70] transition-colors"
                      >
                        <span>{lnk.label}</span>
                        <span>↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}