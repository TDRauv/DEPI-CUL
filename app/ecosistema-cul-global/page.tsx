"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  FileCheck,
  Target,
  Globe2,
  Share2,
  Home,
  Plane,
  BookOpen,
  Handshake,
  Users,
  FlaskConical,
  Sprout,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function EcosistemaPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const hitosGobernanza = [
    {
      periodo: "2014",
      hito: isEn ? "MILESTONE 1" : "HITO 1",
      titulo: isEn ? "Creation of the Internationalization Department" : "Creación del Departamento de Internacionalización",
      detalle: isEn ? "Agreement 032 of 2014" : "Acuerdo 032 de 2014",
      subtexto: isEn ? "A formal administrative structure is established." : "Nace una estructura administrativa formal.",
      icon: Building2,
      color: "bg-[#003B70]",
    },
    {
      periodo: "2014 – 2021",
      hito: isEn ? "MILESTONE 2" : "HITO 2",
      titulo: isEn ? "Consolidation of Institutional Internationalization Management" : "Consolidación de la Gestión Institucional de la Internacionalización",
      detalle: isEn ? "From an administrative unit to strategic and transversal management." : "De una estructura administrativa hacia una gestión estratégica y transversal.",
      subtexto: "",
      icon: TrendingUp,
      color: "bg-[#003B70]",
    },
    {
      periodo: "2021",
      hito: isEn ? "MILESTONE 3" : "HITO 3",
      titulo: isEn ? "Institutional Internationalization Policy" : "Política Institucional de Internacionalización",
      detalle: isEn ? "Agreement 117-21" : "Acuerdo 117-21",
      subtexto: isEn ? "Internationalization as a strategic and transversal process. 6 strategic axes." : "Internacionalización como proceso estratégico y transversal. 6 ejes estratégicos.",
      icon: FileCheck,
      color: "bg-[#003B70]",
    },
    {
      periodo: "2022 – 2028",
      hito: isEn ? "MILESTONE 4" : "HITO 4",
      titulo: isEn ? "Integration of Internationalization as a Strategic Axis in the PDI" : "Incorporación de la Internacionalización como eje estratégico del PDI",
      detalle: isEn ? "Institutional Development Plan 2022-2028" : "Plan de Desarrollo Institucional 2022-2028",
      subtexto: isEn ? "Internationalization embedded into institutional planning." : "La internacionalización integrada a la planeación institucional.",
      icon: Target,
      color: "bg-[#003B70]",
    },
    {
      periodo: "2022 – 2026",
      hito: isEn ? "MILESTONE 5" : "HITO 5",
      titulo: isEn ? "Consolidation of #RutaCULGlobal2028" : "Consolidación de la #RutaCULGlobal2028",
      detalle: isEn ? "Strategies, programs, projects, alliances, KPIs, and monitoring." : "Estrategias, programas, proyectos, alianzas, indicadores y seguimiento.",
      subtexto: "",
      icon: Globe2,
      color: "bg-[#003B70]",
    },
    {
      periodo: "2026 →",
      hito: isEn ? "NEXT STAGE" : "SIGUIENTE ETAPA",
      titulo: isEn ? "CUL Global Ecosystem®" : "Ecosistema CUL Global®",
      detalle: isEn ? "Evolution into an integrated and articulated institutional model." : "Evolución hacia un modelo institucional integral y articulado.",
      subtexto: "",
      icon: Share2,
      color: "bg-[#D9A404]",
    },
  ];

  const lineasAccion = [
    { num: "01", titulo: isEn ? "Internationalization Management." : "Gestión de la internacionalización.", icon: Building2 },
    { num: "02", titulo: isEn ? "Internationalization at Home (CULGlobal)." : "Internacionalización en Casa (CULGlobal).", icon: Home },
    { num: "03", titulo: isEn ? "Mobility (Purpose-driven experiences)." : "Movilidad (Experiencias con propósito).", icon: Plane },
    { num: "04", titulo: isEn ? "Global Curriculum." : "Currículo Global.", icon: BookOpen },
    { num: "05", titulo: isEn ? "International Cooperation & Networking." : "Cooperación y Relacionamiento Internacional.", icon: Handshake },
    { num: "06", titulo: isEn ? "Global Teaching & Faculty." : "Docencia Global.", icon: Users },
    { num: "07", titulo: isEn ? "Research Internationalization." : "Internacionalización de la Investigación.", icon: FlaskConical },
    { num: "08", titulo: isEn ? "Internationalization with Territorial Impact." : "Internacionalización con Impacto Territorial.", icon: Sprout },
  ];

  const gestionAreasFlyer = [
    { title: isEn ? "Strategic Alliances" : "Alianzas estratégicas", color: "bg-[#003B70]" },
    { title: isEn ? "Agreements" : "Convenios", color: "bg-[#D9A404]" },
    { title: isEn ? "Dissemination of Opportunities & Scholarships" : "Difusión de oportunidades, convocatorias y becas", color: "bg-[#003B70]" },
    { title: isEn ? "Internationalization at Home" : "Internacionalización en casa", color: "bg-[#D9A404]" },
    { title: isEn ? "INTER Programs" : "Programas INTER", color: "bg-[#003B70]" },
    { title: isEn ? "Articulated Internationalization" : "Internacionalización articulada", color: "bg-[#D9A404]" },
    { title: isEn ? "Academic Mobility" : "Movilidad académica", color: "bg-[#003B70]" },
    { title: isEn ? "National & Global Visibility" : "Visibilidad nacional e internacional", color: "bg-[#D9A404]" },
    { title: "Global CLUB", color: "bg-[#003B70]" },
    { title: "CGH - CUL", color: "bg-[#D9A404]" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

        <div className="text-left max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#003B70]/10 text-[#003B70] mb-4">
            {isEn ? "DEPI · Department of Internationalization" : "DEPI · Departamento de Internacionalización"}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#003B70] sm:text-5xl uppercase">
            Ecosistema CUL Global / CUL Global Hub
          </h1>

          <p className="mt-2 text-xl font-bold text-[#D9A404]">
            {isEn
              ? "Comprehensive Institutional Internationalization Model of Corporación Universitaria Latinoamericana"
              : "Modelo Institucional de Internacionalización Integral de la Corporación Universitaria Latinoamericana"}
          </p>

          <p className="mt-2 text-lg italic text-slate-700 font-medium">
            {isEn
              ? "“Transforming lives, connecting territories through global citizenship”"
              : "“Transformando vidas, conectando territorios desde la ciudadanía global”"}
          </p>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            {isEn
              ? "Department responsible for promoting institutional internationalization processes, advising and contributing to the global competency development of students, encouraging faculty and staff participation in established programs, and expanding inter-institutional cooperation worldwide."
              : "Departamento que se encarga de impulsar los procesos de internacionalización Institucional, asesorando y contribuyendo a la formación de competencias internacionales de sus estudiantes, promoviendo la participación de los académicos y funcionarios administrativos en los programas establecidos, el desarrollo y fortalecimiento de programas académicos conjuntos, la visibilidad y el reconocimiento a través de la cooperación interinstitucional regional, nacional y mundial."}
          </p>
        </div>

        {/* 1. IDENTIDAD */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-6">
            {isEn ? "1. IDENTITY & FOUNDATIONS OF THE CUL GLOBAL ECOSYSTEM" : "1. IDENTIDAD Y FUNDAMENTOS DEL ECOSISTEMA CUL GLOBAL"}
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              {isEn
                ? "The CUL Global Ecosystem transcends independent programs, constituting an institutional architecture that articulates policies, strategies, processes, and stakeholders around a shared vision of comprehensive internationalization."
                : "El Ecosistema CUL Global trasciende la ejecución de programas independientes y constituye una arquitectura institucional que articula políticas, estrategias, procesos, proyectos y actores alrededor de una visión compartida de internacionalización integral."}
            </p>
            <p>
              {isEn
                ? "Implemented via #RutaCULGlobal2028 and aligned with the Institutional Development Plan, ensuring planning, execution, and continuous improvement across all areas."
                : "Su implementación se desarrolla mediante la #RutaCULGlobal2028, alineada con la Política Institucional de Internacionalización y el Plan de Desarrollo Institucional, garantizando la planeación, ejecución, seguimiento y mejora continua de las acciones institucionales en materia de internacionalización."}
            </p>
          </div>
        </section>

        {/* 2. GOBERNANZA */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-10">
            {isEn ? "2. GOVERNANCE OF THE CUL GLOBAL ECOSYSTEM" : "2. GOBERNANZA DEL ECOSISTEMA CUL GLOBAL"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {hitosGobernanza.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <span className="text-base font-extrabold text-[#003B70] mb-3">
                    {item.periodo}
                  </span>

                  <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color === "bg-[#D9A404]" ? "text-[#D9A404]" : "text-[#003B70]"}`}>
                    {item.hito}
                  </span>

                  <h3 className="text-xs font-bold text-slate-900 leading-snug mb-1">
                    {item.titulo}
                  </h3>

                  {item.detalle && (
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      {item.detalle}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. LÍNEAS DE ACCIÓN */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-10">
            {isEn ? "3. LINES OF ACTION / STRATEGIC AXES OF DEPI" : "3. LÍNEAS DE ACCIÓN / EJES DE TRABAJO DEL DEPI"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lineasAccion.map((linea) => {
              const IconComp = linea.icon;
              return (
                <div
                  key={linea.num}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-slate-300 bg-slate-50/60 hover:bg-white hover:shadow-md transition-all"
                >
                  <span className="text-xl font-black text-[#D9A404] w-8">
                    {linea.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#003B70] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {linea.titulo}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. FLYER INSTITUCIONAL */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white group">
                <Image
                  src="/ecosistem/flyerdepi.jpeg"
                  alt="Flyer Oficial Ecosistema CUL Global - DEPI"
                  width={500}
                  height={1000}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/10 text-[#D9A404] mb-2">
                  {isEn ? "Operational Management" : "Gestión Operativa"}
                </span>
                <h2 className="text-2xl font-bold text-[#003B70]">
                  {isEn ? "Internationalization Management Areas" : "Áreas de Gestión de la Internacionalización"}
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  {isEn
                    ? "Direct operational areas for comprehensive support to the university community:"
                    : "Articulación directa para el apoyo integral a la comunidad universitaria:"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {gestionAreasFlyer.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors"
                  >
                    <span className={`w-3 h-3 rounded-full shrink-0 ${area.color}`} />
                    <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                      {area.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}