import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ecosistema CUL Global | DEPI - CUL",
  description:
    "Modelo Institucional de Internacionalización Integral de la Corporación Universitaria Latinoamericana.",
};

const hitosGobernanza = [
  {
    periodo: "2014",
    hito: "HITO 1",
    titulo: "Creación del Departamento de Internacionalización",
    detalle: "Acuerdo 032 de 2014",
    subtexto: "Nace una estructura administrativa formal.",
    icon: Building2,
    color: "bg-[#003B70]",
  },
  {
    periodo: "2014 – 2021",
    hito: "HITO 2",
    titulo: "Consolidación de la Gestión Institucional de la Internacionalización",
    detalle: "De una estructura administrativa hacia una gestión estratégica y transversal.",
    subtexto: "",
    icon: TrendingUp,
    color: "bg-[#003B70]",
  },
  {
    periodo: "2021",
    hito: "HITO 2",
    titulo: "Política Institucional de Internacionalización",
    detalle: "Acuerdo 117-21",
    subtexto: "Internacionalización como proceso estratégico y transversal. 6 ejes estratégicos.",
    icon: FileCheck,
    color: "bg-[#003B70]",
  },
  {
    periodo: "2022 – 2028",
    hito: "HITO 3",
    titulo: "Incorporación de la Internacionalización como eje estratégico del PDI",
    detalle: "Plan de Desarrollo Institucional 2022-2028",
    subtexto: "La internacionalización integrada a la planeación institucional.",
    icon: Target,
    color: "bg-[#003B70]",
  },
  {
    periodo: "2022 – 2026",
    hito: "HITO 4",
    titulo: "Consolidación de la #RutaCULGlobal2028",
    detalle: "Estrategias, programas, proyectos, alianzas, indicadores y seguimiento.",
    subtexto: "",
    icon: Globe2,
    color: "bg-[#003B70]",
  },
  {
    periodo: "2026 →",
    hito: "SIGUIENTE ETAPA",
    titulo: "Ecosistema CUL Global®",
    detalle: "Evolución hacia un modelo institucional integral y articulado.",
    subtexto: "",
    icon: Share2,
    color: "bg-[#D9A404]",
  },
];

const lineasAccion = [
  {
    num: "01",
    titulo: "Gestión de la internacionalización.",
    icon: Building2,
  },
  {
    num: "02",
    titulo: "Internacionalización en Casa (CULGlobal).",
    icon: Home,
  },
  {
    num: "03",
    titulo: "Movilidad (Experiencias con propósito).",
    icon: Plane,
  },
  {
    num: "04",
    titulo: "Currículo Global.",
    icon: BookOpen,
  },
  {
    num: "05",
    titulo: "Cooperación y Relacionamiento Internacional.",
    icon: Handshake,
  },
  {
    num: "06",
    titulo: "Docencia Global.",
    icon: Users,
  },
  {
    num: "07",
    titulo: "Internacionalización de la Investigación.",
    icon: FlaskConical,
  },
  {
    num: "08",
    titulo: "Internacionalización con Impacto Territorial.",
    icon: Sprout,
  },
];

const gestionAreasFlyer = [
  { title: "Alianzas estratégicas", color: "bg-[#003B70]" },
  { title: "Convenios", color: "bg-[#D9A404]" },
  { title: "Difusión de oportunidades, convocatorias y becas", color: "bg-[#003B70]" },
  { title: "Internacionalización en casa", color: "bg-[#D9A404]" },
  { title: "Programas INTER", color: "bg-[#003B70]" },
  { title: "Internacionalización articulada", color: "bg-[#D9A404]" },
  { title: "Movilidad académica", color: "bg-[#003B70]" },
  { title: "Visibilidad nacional e internacional", color: "bg-[#D9A404]" },
  { title: "Global CLUB", color: "bg-[#003B70]" },
  { title: "CGH - CUL", color: "bg-[#D9A404]" },
];

export default function EcosistemaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        {/* Enlace para volver */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>

        {/* Cabecera Principal */}
        <div className="text-left max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#003B70]/10 text-[#003B70] mb-4">
            DEPI · Departamento de Internacionalización
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#003B70] sm:text-5xl uppercase">
            Ecosistema CUL Global® / CUL Global Hub
          </h1>

          <p className="mt-2 text-xl font-bold text-[#D9A404]">
            Modelo Institucional de Internacionalización Integral de la Corporación Universitaria Latinoamericana
          </p>

          <p className="mt-2 text-lg italic text-slate-700 font-medium">
            “Transformando vidas, conectando territorios desde la ciudadanía global”
          </p>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            Departamento que se encarga de impulsar los procesos de internacionalización Institucional, 
            asesorando y contribuyendo a la formación de competencias internacionales de sus estudiantes, 
            promoviendo la participación de los académicos y funcionarios administrativos en los programas 
            establecidos, el desarrollo y fortalecimiento de programas académicos conjuntos, la visibilidad 
            y el reconocimiento a través de la cooperación interinstitucional regional, nacional y mundial.
          </p>
        </div>

        {/* 1. IDENTIDAD Y FUNDAMENTOS */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-6">
            1. IDENTIDAD Y FUNDAMENTOS DEL ECOSISTEMA CUL GLOBAL
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              El Ecosistema CUL Global trasciende la ejecución de programas independientes y constituye una arquitectura institucional que articula políticas, estrategias, procesos, proyectos y actores alrededor de una visión compartida de internacionalización integral.
            </p>
            <p>
              Su implementación se desarrolla mediante la <strong>#RutaCULGlobal2028</strong>, alineada con la Política Institucional de Internacionalización y el Plan de Desarrollo Institucional, garantizando la planeación, ejecución, seguimiento y mejora continua de las acciones institucionales en materia de internacionalización.
            </p>
          </div>
        </section>

        {/* 2. GOBERNANZA DEL ECOSISTEMA CUL GLOBAL */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-10">
            2. GOBERNANZA DEL ECOSISTEMA CUL GLOBAL
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

                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.color === 'bg-[#D9A404]' ? 'text-[#D9A404]' : 'text-[#003B70]'}`}>
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

                  {item.subtexto && (
                    <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                      {item.subtexto}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-orange-200 bg-orange-50/50 py-3.5 px-6 text-center">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#003B70]">
              De una unidad administrativa a una arquitectura institucional de internacionalización
            </p>
          </div>
        </section>

        {/* 3. LÍNEAS DE ACCIÓN / EJES DE TRABAJO */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#003B70] text-white text-sm font-bold tracking-wide mb-10">
            3. LÍNEAS DE ACCIÓN / EJES DE TRABAJO DEL DEPI
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

          <div className="mt-10 rounded-3xl bg-[#003B70] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#D9A404] flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6 text-[#D9A404]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold tracking-wide uppercase">
                  El Ecosistema CUL Global® es la arquitectura que hace posible una internacionalización integral, sostenible y con impacto.
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-[#D9A404] mt-1">
                  Transformamos vidas. Conectamos territorios. Construimos ciudadanía global.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <span className="text-xs text-blue-200">Contacto:</span>
              <a
                href="mailto:internacionalizacion@ul.edu.co"
                className="text-xs font-bold underline hover:text-[#D9A404] transition-colors"
              >
                internacionalizacion@ul.edu.co
              </a>
            </div>
          </div>
        </section>

        {/* 4. FLYER INSTITUCIONAL Y RED DE GESTIÓN (AL FINAL) */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Imagen del Flyer */}
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

            {/* Listado de los 10 ejes del flyer y enlace web */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/10 text-[#D9A404] mb-2">
                  Gestión Operativa
                </span>
                <h2 className="text-2xl font-bold text-[#003B70]">
                  Áreas de Gestión de la Internacionalización
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Articulación directa para el apoyo integral a la comunidad universitaria:
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

              {/* Tarjeta de contacto oficial */}
              <div className="p-5 rounded-2xl bg-[#003B70] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Canales de Contacto Directo
                  </p>
                  <a
                    href="mailto:internacionalizacion@ul.edu.co"
                    className="text-sm font-bold hover:underline block mt-1"
                  >
                    internacionalizacion@ul.edu.co
                  </a>
                </div>
                <a
                  href="https://www.ul.edu.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-[#D9A404] text-slate-900 font-bold hover:bg-yellow-400 transition-colors text-xs shadow"
                >
                  www.ul.edu.co
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}