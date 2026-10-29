"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ImpactoGlobalPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Container>
        {/* Encabezado Principal */}
        <section className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/20 text-[#003B70] mb-3">
            #ImpactoGlobalCUL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight leading-tight">
            {isEn ? "Results that Transform" : "Resultados que transforman"}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {isEn
              ? "Institutional strategies, international cooperation, and intercultural experiences that strengthen internationalization at home and connect CUL with the world."
              : "Estrategias institucionales, cooperación internacional y experiencias interculturales que fortalecen la internacionalización en casa y conectan a la CUL con el mundo."}
          </p>
        </section>

        {/* SECCIÓN 1: GLOBAL VILLAGE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-sm font-bold text-[#D9A404] uppercase tracking-wider">
                {isEn ? "7th Edition" : "7.ª Edición"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#003B70]">Global Village 2026</h2>
              <p className="text-slate-600 mt-1">
                {isEn ? "Where the classroom connects with the world." : "Donde el aula se conecta con el mundo."}
              </p>
            </div>
            <Link
              href="https://www.instagram.com/p/DdpXO0MCUQV/?stkn=dTQ5ZWh2YjN1ZGww"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#003B70] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#002d57] transition-colors w-fit"
            >
              <span className="text-white">
                {isEn ? "View post on Instagram" : "Ver publicación en Instagram"}
              </span>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 my-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <img
                src="/impacto/impacto1.png"
                alt="Indicadores cuantitativos y cualitativos Global Village 2026"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#003B70]">418</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {isEn ? "Evaluated Sample" : "Muestra Evaluada"}
                  </span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#003B70]">401</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {isEn ? "Students" : "Estudiantes"}
                  </span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#D9A404]">95.0%</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {isEn ? "Satisfaction (4-5★)" : "Satisfacción (4-5★)"}
                  </span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#D9A404]">90.9%</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {isEn ? "Global Understanding" : "Comprensión Global"}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-[#003B70] text-sm uppercase tracking-wider mb-2">
                  {isEn ? "Key Activities Executed" : "Actividades Clave Desarrolladas"}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span>
                    {isEn
                      ? "10 country stations with cultural showcases and intercultural exchange."
                      : "Estaciones de 10 países con muestras culturales e intercambio intercultural."}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span>
                    {isEn
                      ? "Fair with 8 strategic partners offering cooperation and mobility opportunities."
                      : "Feria con 8 aliados estratégicos con oportunidades de cooperación y movilidad."}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span>
                    {isEn
                      ? "Mokaná Indigenous Language stand promoting inclusion and regional identity."
                      : "Stand de Lengua Mokaná visibilizando la inclusión y la identidad regional."}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: PROGRAMA DE CIUDADANÍA GLOBAL */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
            <div className="max-w-3xl">
              <span className="text-sm font-bold text-[#D9A404] uppercase tracking-wider">
                {isEn ? "International Student Scholarship" : "Beca Internacional Estudiantil"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#003B70] mt-1">
                {isEn ? "International Global Citizenship Program" : "Programa Internacional de Ciudadanía Global"}
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                {isEn
                  ? "Intercultural encounters transforming lives and communities. Student scholarship supported by ICETEX, in partnership with CUL, UB, Politécnico Costa Atlántica, and UISEK (Ecuador)."
                  : "Encuentros interculturales para la transformación de vidas y territorios. Beca para estudiantes con apoyo de ICETEX, en alianza con CUL, UB, Politécnico Costa Atlántica y UISEK (Ecuador)."}
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-center lg:text-right shrink-0">
              <span className="block text-xs font-semibold text-amber-800">
                {isEn ? "Application Deadline" : "Fecha Límite Postulación"}
              </span>
              <span className="text-lg font-bold text-[#003B70]">
                {isEn ? "March 23" : "23 de Marzo"}
              </span>
            </div>
          </div>

          {/* Fases */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <img
                src="/impacto/impacto2.png"
                alt="Afiche convocatoria Programa Internacional de Ciudadanía Global"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  {isEn ? "Phase 1" : "Fase 1"}
                </span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">
                  {isEn ? "Virtual Encounters" : "Encuentros Virtuales"}
                </h3>
                <p className="text-xs font-semibold text-[#D9A404]">
                  {isEn ? "Saturdays: April 12 & 26, May 10, and Sept 13" : "Sábados: 12 y 26 de abril, 10 de mayo y 13 de septiembre"}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  {isEn
                    ? "Intercultural induction sessions and collaborative teamwork among partner universities."
                    : "Jornadas de inducción intercultural y trabajo colaborativo entre las universidades aliadas."}
                </p>
              </div>

              <div className="border border-[#003B70]/20 bg-blue-50/40 rounded-2xl p-5">
                <span className="text-xs font-bold text-[#003B70] uppercase">
                  {isEn ? "Phase 2" : "Fase 2"}
                </span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">
                  {isEn ? "Immersion in Ecuador" : "Inmersión Presencial en Ecuador"}
                </h3>
                <p className="text-xs font-semibold text-[#003B70]">
                  {isEn ? "Ecuadorian Highlands and Amazon (June 22 – July 6)" : "Sierra y Amazonía Ecuatoriana (22 de junio – 6 de julio)"}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  {isEn
                    ? "Fieldwork and experiential learning alongside students and professors from Universidad Internacional SEK (UISEK)."
                    : "Trabajo de campo y experiencia presencial junto a estudiantes y docentes de la Universidad Internacional SEK (UISEK)."}
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  {isEn ? "Phase 3" : "Fase 3"}
                </span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">
                  {isEn ? "Mission in Barranquilla" : "Misión en Barranquilla"}
                </h3>
                <p className="text-xs font-semibold text-[#D9A404]">
                  {isEn ? "CUL Campus & Region (Sept 22 – 26)" : "Sede CUL y Territorio (22 – 26 de septiembre)"}
                </p>
                <p className="text-xs text-slate-600 mt-2">
                  {isEn
                    ? "Joint academic activities, knowledge dissemination, closing ceremonies, and sustainability tours."
                    : "Actividades académicas conjuntas, socialización de aprendizajes, clausura y experiencias de sostenibilidad."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}