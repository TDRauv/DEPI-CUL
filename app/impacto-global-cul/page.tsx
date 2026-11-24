"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ImpactoGlobalPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Container>
        {/* Retorno */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

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

        {/* SECCIÓN 1: GLOBAL VILLAGE 2026 */}
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
            {/* Imagen 1: Infografía Global Village */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <img
                src="/impacto/impacto1.png"
                alt="Indicadores cuantitativos y cualitativos Global Village 2026"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Métricas y Hallazgos */}
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

          {/* Afiche y Fases */}
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
                  {isEn
                    ? "Saturdays: April 12 & 26, May 10, and Sept 13"
                    : "Sábados: 12 y 26 de abril, 10 de mayo y 13 de septiembre"}
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
                  {isEn
                    ? "Ecuadorian Highlands and Amazon (June 22 – July 6)"
                    : "Sierra y Amazonía Ecuatoriana (22 de junio – 6 de julio)"}
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

          {/* SECCIÓN ESTUDIANTES SELECCIONADOS */}
          <div className="pt-10 border-t border-slate-100 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-[#D9A404] uppercase tracking-wider">
                  {isEn ? "Beneficiary Community" : "Comunidad Beneficiaria"}
                </span>
                <h3 className="text-2xl font-bold text-[#003B70] mt-1">
                  {isEn ? "Selected Students" : "Estudiantes Seleccionados"}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {isEn
                    ? "Students from partner institutions participating in the program."
                    : "Estudiantes de las instituciones aliadas participantes del programa."}
                </p>
              </div>
              <Link
                href="https://www.instagram.com/p/DIRj3CCSJlV/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B70] hover:text-[#D9A404] transition-colors"
              >
                <span>{isEn ? "View official post" : "Ver publicación oficial"}</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Imagen 5: Seleccionados */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <img
                  src="/impacto/impacto5.png"
                  alt="Estudiantes seleccionados Programa de Ciudadanía Global"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Lista por Universidades */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003B70]"></span>
                    CUL
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Dayana Vásquez</li>
                    <li>• Jesús Díaz</li>
                    <li>• Julián Martínez</li>
                    <li>• Stefania Piñeres[cite: 1]</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003B70]"></span>
                    IUB
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Dalexandro Cantillo[cite: 1]</li>
                    <li>• Keyla Meriño[cite: 1]</li>
                    <li>• Nicolle Campanelli[cite: 1]</li>
                    <li>• Joel Marmol[cite: 1]</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003B70]"></span>
                    PCA
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Sergio Agudelo[cite: 1]</li>
                    <li>• Luisa Navarro[cite: 1]</li>
                    <li>• Yaileth Coronado[cite: 1]</li>
                    <li>• Santiago Lobo[cite: 1]</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9A404]"></span>
                    UISEK (Ecuador)
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Paul Vaca A.[cite: 1]</li>
                    <li>• David Chamorro[cite: 1]</li>
                    <li>• María Sol Mora[cite: 1]</li>
                    <li>• Nadine Guerra[cite: 1]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* GALERÍA DE EXPERIENCIAS: MALLORQUÍN, UISEK Y VIDEOS */}
          <div className="pt-10 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-[#003B70] mb-2">
              {isEn ? "Multimedia Evidence & Field Experiences" : "Experiencias y Evidencias Multimedia"}
            </h3>
            <p className="text-sm text-slate-600 mb-8">
              {isEn
                ? "Moments from the Barranquilla mission: regenerative tourism, academic workshops, and video testimonials."
                : "Momentos de la misión en Barranquilla: turismo regenerativo, talleres académicos y testimonios del programa."}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarjeta 1: Mallorquín */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
                <div>
                  <div className="h-64 overflow-hidden bg-slate-200">
                    <img
                      src="/impacto/impacto3.png"
                      alt="Turismo Regenerativo en la Ciénaga de Mallorquín"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#003B70] uppercase">
                      {isEn ? "Sustainability & Territory" : "Sostenibilidad & Territorio"}
                    </span>
                    <h4 className="font-bold text-lg text-slate-900 mt-1">
                      {isEn ? "Regenerative Tourism in Mallorquín" : "Turismo Regenerativo en Mallorquín"}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                      {isEn
                        ? "Students and authorities explored local biodiversity, received a Colombian Sign Language workshop, and participated in reforestation efforts at the Mallorquín wetland."
                        : "Estudiantes y autoridades conocieron la fauna, flora y artesanías locales, recibieron un taller de Lengua de Señas Colombiana y participaron en labores de reforestación en la Ciénaga de Mallorquín."}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="https://www.instagram.com/p/DQFen8kjTJW/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B70] hover:text-[#D9A404] transition-colors"
                  >
                    <span>{isEn ? "View on Instagram" : "Ver publicación en Instagram"}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Tarjeta 2: Intercambio UISEK */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm">
                <div>
                  <div className="h-64 overflow-hidden bg-slate-200">
                    <img
                      src="/impacto/impacto4.png"
                      alt="Encuentro institucional y talleres UISEK en CUL"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-[#003B70] uppercase">
                      {isEn ? "Academic Cooperation" : "Cooperación Académica"}
                    </span>
                    <h4 className="font-bold text-lg text-slate-900 mt-1">
                      {isEn ? "UISEK Institutional Visit" : "Visita Institucional UISEK"}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                      {isEn
                        ? "Workshops on 'Financial Management for Life' and 'Global Citizenship' led by UISEK academic deans, alongside teaching best practice roundtables with CUL professors."
                        : 'Talleres de "Administración Financiera para la Vida" y "Ciudadanía Global" dirigidos por directivas de la UISEK, junto con socialización de buenas prácticas pedagógicas ante docentes CUL.'}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="https://www.instagram.com/p/DPweq3Ujh0b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B70] hover:text-[#D9A404] transition-colors"
                  >
                    <span>{isEn ? "View on Instagram" : "Ver publicación en Instagram"}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Videos oficiales */}
            <div className="mt-8 bg-gradient-to-r from-[#003B70] to-[#00264d] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold">
                  {isEn ? "Official Program Videos" : "Videos Oficiales del Programa"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  {isEn
                    ? "Experience the journeys, field visits, and participants' testimonials on video."
                    : "Revive las experiencias vivenciales, recorridos y aprendizajes de los participantes en video."}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.instagram.com/p/DPfSKGnjDfL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-[#D9A404]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-white">{isEn ? "Watch Reel 1" : "Ver Reel 1"}</span>
                </Link>
                <Link
                  href="https://www.instagram.com/p/DRdPT4DCQnJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-[#D9A404]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-white">{isEn ? "Watch Reel 2" : "Ver Reel 2"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}