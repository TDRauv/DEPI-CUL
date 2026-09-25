import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecosistema CUL Global | DEPI - CUL",
  description: "Conoce los ejes de la gestión de la internacionalización y el ecosistema global de la CUL.",
};

const ejesGestion = [
  {
    titulo: "Alianzas estratégicas",
    descripcion: "Construcción de vínculos interinstitucionales para potenciar el desarrollo académico.",
    color: "bg-[#003B70]",
  },
  {
    titulo: "Convenios",
    descripcion: "Acuerdos formales bilaterales y multilaterales con instituciones de educación superior del mundo.",
    color: "bg-[#D9A404]",
  },
  {
    titulo: "Difusión de oportunidades, convocatorias y becas",
    descripcion: "Publicación y acompañamiento permanente en convocatorias externas e internas de estudio.",
    color: "bg-[#003B70]",
  },
  {
    titulo: "Internacionalización en casa",
    descripcion: "Actividades curriculares, cátedras internacionales e interculturalidad dentro de nuestro campus.",
    color: "bg-[#D9A404]",
  },
  {
    titulo: "Programas INTER",
    descripcion: "Proyectos y redes colaborativas orientadas al fortalecimiento internacional.",
    color: "bg-[#003B70]",
  },
  {
    titulo: "Internacionalización articulada",
    descripcion: "Integración transversal de la dimensión global con los programas académicos y facultades.",
    color: "bg-[#D9A404]",
  },
  {
    titulo: "Movilidad académica",
    descripcion: "Intercambios de estudiantes, pasantías, estancias docentes y misiones académicas al exterior.",
    color: "bg-[#003B70]",
  },
  {
    titulo: "Visibilidad nacional e internacional",
    descripcion: "Proyección del impacto y producción académica de la CUL en escenarios internacionales.",
    color: "bg-[#D9A404]",
  },
  {
    titulo: "Global CLUB",
    descripcion: "Comunidad estudiantil enfocada en idiomas, liderazgo e intercambio cultural.",
    color: "bg-[#003B70]",
  },
  {
    titulo: "CGH - CUL",
    descripcion: "Centro Global y Humanístico promotor de la formación de ciudadanos integrales del mundo.",
    color: "bg-[#D9A404]",
  },
];

export default function EcosistemaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabecera / Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#003B70]/10 text-[#003B70] mb-4">
            DEPI · Departamento de Internacionalización
          </span>
          <h1 className="text-4xl font-extrabold text-[#003B70] sm:text-5xl">
            Ecosistema CUL Global
          </h1>
          <p className="mt-4 text-2xl font-bold text-[#D9A404]">
            Te invitamos a transformarte en un CIUDADANO GLOBAL
          </p>
          <p className="mt-3 text-gray-600 text-lg">
            La gestión integral de la internacionalización en la Corporación Universitaria Latinoamericana te conecta con el conocimiento, la innovación y las redes del mundo.
          </p>
        </div>

        {/* Sección Flyer + Ejes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Tarjeta del Flyer Oficial */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
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

          {/* Listado de Ejes de Gestión */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-[#003B70] border-b pb-3 border-gray-200">
              Gestión de la Internacionalización
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ejesGestion.map((eje, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0 ${eje.color}`} />
                    <div>
                      <h3 className="font-bold text-gray-900 text-base leading-tight">
                        {eje.titulo}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                        {eje.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Caja de Contacto Institucional */}
            <div className="mt-8 p-6 rounded-2xl bg-[#003B70] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                  Canales Oficiales
                </p>
                <a
                  href="mailto:internacionalizacion@ul.edu.co"
                  className="text-base font-bold hover:underline block mt-1"
                >
                  internacionalizacion@ul.edu.co
                </a>
              </div>
              <a
                href="https://www.ul.edu.co"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-[#D9A404] text-slate-900 font-bold hover:bg-yellow-400 transition-colors text-sm shadow"
              >
                www.ul.edu.co
              </a>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}