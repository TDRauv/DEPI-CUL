import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "#ImpactoGlobalCUL | DEPI CUL",
  description: "Resultados que transforman: Global Village 2026 y Programa Internacional de Ciudadanía Global.",
};

export default function ImpactoGlobalPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Container>
        {/* Encabezado Principal */}
        <section className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/20 text-[#003B70] mb-3">
            #ImpactoGlobalCUL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight leading-tight">
            Resultados que transforman
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Estrategias institucionales, cooperación internacional y experiencias interculturales que fortalecen la internacionalización en casa y conectan a la CUL con el mundo.
          </p>
        </section>

        {/* SECCIÓN 1: GLOBAL VILLAGE 2026 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-sm font-bold text-[#D9A404] uppercase tracking-wider">7.ª Edición</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#003B70]">Global Village 2026</h2>
              <p className="text-slate-600 mt-1">Donde el aula se conecta con el mundo.</p>
            </div>
            <Link
              href="https://www.instagram.com/p/DdpXO0MCUQV/?stkn=dTQ5ZWh2YjN1ZGww"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#003B70] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#002d57] transition-colors w-fit"
            >
              <span>Ver publicación en Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Muestra Evaluada</span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#003B70]">401</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Estudiantes</span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#D9A404]">95.0%</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Satisfacción (4-5★)</span>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#D9A404]">90.9%</span>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Comprensión Global</span>
                </div>
              </div>

              <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-[#003B70] text-sm uppercase tracking-wider mb-2">
                  Actividades Clave Desarrolladas
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span> Estaciones de 10 países con muestras culturales e intercambio intercultural.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span> Feria con 8 aliados estratégicos con oportunidades de cooperación y movilidad.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D9A404] font-bold">✓</span> Stand de Lengua Mokaná visibilizando la inclusión y la identidad regional.
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
                Beca Internacional Estudiantil
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#003B70] mt-1">
                Programa Internacional de Ciudadanía Global 2025
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Encuentros interculturales para la transformación de vidas y territorios. Iniciativa coorganizada con ICETEX, UISEK (Ecuador), IUB, Politécnico Costa Atlántica y la CUL.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-center lg:text-right shrink-0">
              <span className="block text-xs font-semibold text-amber-800">Fecha Límite Postulación</span>
              <span className="text-lg font-bold text-[#003B70]">23 de Marzo</span>
            </div>
          </div>

          {/* Afiche y Fases */}
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Imagen 2: Afiche de la convocatoria */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
              <img
                src="/impacto/impacto2.png"
                alt="Afiche convocatoria Programa Internacional de Ciudadanía Global"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Línea de tiempo de las 3 fases */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase">Fase 1</span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">Encuentros Virtuales</h3>
                <p className="text-xs font-semibold text-[#D9A404]">Sábados: 12 y 26 de abril, 10 de mayo y 13 de septiembre</p>
                <p className="text-xs text-slate-600 mt-2">
                  Sesiones teóricas y colaborativas sincrónicas para el desarrollo de competencias interculturales y ciudadanía global.
                </p>
              </div>

              <div className="border border-[#003B70]/20 bg-blue-50/40 rounded-2xl p-5">
                <span className="text-xs font-bold text-[#003B70] uppercase">Fase 2</span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">Inmersión Presencial en Ecuador</h3>
                <p className="text-xs font-semibold text-[#003B70]">Sierra y Amazonía Ecuatoriana (22 de junio – 6 de julio)</p>
                <p className="text-xs text-slate-600 mt-2">
                  Trabajo de campo, intercambio académico y vivencial junto a estudiantes y docentes de la Universidad Internacional SEK (UISEK).
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase">Fase 3</span>
                <h3 className="text-base font-bold text-[#003B70] mt-1">Misión en Barranquilla</h3>
                <p className="text-xs font-semibold text-[#D9A404]">Sede CUL y Territorio (22 – 26 de septiembre)</p>
                <p className="text-xs text-slate-600 mt-2">
                  Actividades académicas, talleres de socialización, clausura institucional y experiencias de sostenibilidad en la ciudad.
                </p>
              </div>
            </div>
          </div>

          {/* SECCIÓN ESTUDIANTES SELECCIONADOS */}
          <div className="pt-10 border-t border-slate-100 mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-[#D9A404] uppercase tracking-wider">
                  Comunidad Beneficiaria
                </span>
                <h3 className="text-2xl font-bold text-[#003B70] mt-1">
                  Estudiantes Seleccionados
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Estudiantes de las instituciones aliadas beneficiarios del programa.
                </p>
              </div>
              <Link
                href="https://www.instagram.com/p/DIRj3CCSJlV/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B70] hover:text-[#D9A404] transition-colors"
              >
                <span>Ver publicación oficial</span>
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
                    <li>• Stefania Piñeres</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003B70]"></span>
                    IUB
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Dalexandro Cantillo</li>
                    <li>• Keyla Meriño</li>
                    <li>• Nicolle Campanelli</li>
                    <li>• Joel Marmol</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#003B70]"></span>
                    PCA
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Sergio Agudelo</li>
                    <li>• Luisa Navarro</li>
                    <li>• Yaileth Coronado</li>
                    <li>• Santiago Lobo</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#003B70] transition-colors">
                  <h4 className="font-extrabold text-[#003B70] text-sm mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9A404]"></span>
                    UISEK (Ecuador)
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1 font-medium">
                    <li>• Paul Vaca A.</li>
                    <li>• David Chamorro</li>
                    <li>• María Sol Mora</li>
                    <li>• Nadine Guerra</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* GALERÍA DE EXPERIENCIAS: MALLORQUÍN, UISEK Y VIDEOS */}
          <div className="pt-10 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-[#003B70] mb-2">
              Experiencias y Evidencias Multimedia
            </h3>
            <p className="text-sm text-slate-600 mb-8">
              Momentos de la misión en Barranquilla: turismo regenerativo, talleres académicos y testimonios del programa.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarjeta 1: Imagen 3 - Turismo Regenerativo */}
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
                    <span className="text-xs font-bold text-[#003B70] uppercase">Sostenibilidad & Territorio</span>
                    <h4 className="font-bold text-lg text-slate-900 mt-1">Turismo Regenerativo en Mallorquín</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                      Estudiantes y autoridades conocieron la fauna, flora y artesanías locales, recibieron un taller de Lengua de Señas Colombiana y participaron en labores de reforestación en la Ciénaga de Mallorquín.
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
                    <span>Ver publicación en Instagram</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Tarjeta 2: Imagen 4 - Intercambio UISEK */}
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
                    <span className="text-xs font-bold text-[#003B70] uppercase">Cooperación Académica</span>
                    <h4 className="font-bold text-lg text-slate-900 mt-1">Visita Institucional UISEK</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">
                      Talleres de &quot;Administración Financiera para la Vida&quot; y &quot;Ciudadanía Global&quot; dirigidos por directivas de la UISEK, junto con socialización de buenas prácticas pedagógicas ante docentes CUL.
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
                    <span>Ver publicación en Instagram</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Enlaces a los Reels / Videos */}
            <div className="mt-8 bg-gradient-to-r from-[#003B70] to-[#00264d] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold">Videos Oficiales del Programa</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Revive las experiencias , recorridos y aprendizajes de los participantes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.instagram.com/p/DPfSKGnjDfL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-[#D9A404]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Ver Reel 1</span>
                </Link>
                <Link
                  href="https://www.instagram.com/p/DRdPT4DCQnJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current text-[#D9A404]" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Ver Reel 2</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}