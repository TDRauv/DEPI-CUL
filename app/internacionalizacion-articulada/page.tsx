import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Laptop,
  Users2,
  Bot,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clubes DEPI 2026-2 | CUL",
  description:
    "Promoción de la actividad internacional, la interculturalidad y el multilingüismo.",
};

const clubes = [
  {
    id: "lsc",
    titulo: "Club de Lengua de Señas Colombiana",
    modalidad: "Virtual",
    esVirtual: true,
    horario: "2:30 p. m. - 3:30 p. m.",
    lugar: "Virtual (Sesión final presencial en salón)",
    fechas: [
      "Lunes, 14 de sept.",
      "Lunes, 28 de sept.",
      "Lunes, 5 de oct.",
      "Lunes, 26 de oct.",
      "Lunes, 9 de nov. (Presencial 2:00 p. m. - 4:00 p. m.)",
    ],
    imagen: "/clubs/club señas 2026-2.png",
    icono: Languages,
  },
  {
    id: "ingles-virtual",
    titulo: "Club de Inglés (100% Virtual)",
    modalidad: "Virtual",
    esVirtual: true,
    horario: "Sesiones virtuales programadas",
    lugar: "100% Virtual",
    fechas: [
      "Martes, 22 de sept.",
      "Martes, 13 de oct.",
      "Martes, 20 de oct.",
    ],
    imagen: "/clubs/club de ingles virtual 2026-2.png",
    icono: Laptop,
  },
  {
    id: "aleman",
    titulo: "Club de Alemán",
    modalidad: "Presencial",
    esVirtual: false,
    horario: "2:00 P. M. - 4:00 P. M.",
    lugar: "Salón A101",
    fechas: [
      "Lunes, 21 de sept.",
      "Viernes, 16 de oct.",
      "Lunes, 19 de oct.",
      "Lunes, 9 de nov.",
    ],
    imagen: "/clubs/club de aleman 2026-2.png",
    icono: Users2,
  },
  {
    id: "ingles-presencial",
    titulo: "Club de Inglés Presencial",
    modalidad: "Presencial",
    esVirtual: false,
    horario: "2:00 P. M. - 4:00 P. M.",
    lugar: "Salón A101",
    fechas: [
      "Viernes, 2 de oct.",
      "Lunes, 19 de oct.",
      "Viernes, 30 de oct.",
      "Lunes, 9 de nov.",
    ],
    imagen: "/clubs/club ingles presencial 2026-2.png",
    icono: Languages,
  },
  {
    id: "robotica",
    titulo: "Club de Robótica",
    modalidad: "Presencial",
    esVirtual: false,
    horario: "1:00 P. M. - 2:00 P. M.",
    lugar: "Salón A101",
    fechas: [
      "Martes, 3 de nov.",
      "Martes, 17 de nov.",
    ],
    imagen: "/clubs/club robotica 2026-2.png",
    icono: Bot,
  },
];

export default function ClubsPage() {
  const clubesVirtuales = clubes.filter((c) => c.esVirtual);
  const clubesPresenciales = clubes.filter((c) => !c.esVirtual);

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Retorno */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al Inicio
          </Link>
        </div>

        {/* Encabezado */}
        <div className="max-w-4xl text-left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#003B70]/10 text-[#003B70] mb-3">
            Programación Clubes 2026-2 · DEPI
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight">
            Multilinguismo e Interculturalidad 
          </h1>
          
          <p className="mt-2 text-slate-600 text-base">
            Espacios diseñados para desarrollar habilidades globales, aprendizaje de lenguas y tecnología aplicada.
          </p>
        </div>

        {/* SECCIÓN 1: CLUBES VIRTUALES */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Laptop className="w-6 h-6 text-[#003B70]" />
            <h2 className="text-2xl font-bold text-[#003B70]">
              Clubes en Modalidad Virtual
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clubesVirtuales.map((club) => {
              const Icono = club.icono;
              return (
                <div
                  key={club.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow"
                >
                  <div className="sm:w-1/2 relative min-h-[320px] bg-slate-100">
                    <Image
                      src={club.imagen}
                      alt={club.titulo}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-100 text-[#003B70] mb-3">
                        {club.modalidad}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {club.titulo}
                      </h3>

                      <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D9A404] shrink-0" />
                          <span>{club.horario}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#D9A404] shrink-0" />
                          <span>{club.lugar}</span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#003B70]" />
                          Programación:
                        </p>
                        <ul className="space-y-1">
                          {club.fechas.map((fecha, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <span className="text-[#D9A404] font-bold">✦</span>
                              {fecha}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">
                        ¡Ciudadano Global!
                      </span>
                      <Icono className="w-5 h-5 text-[#003B70]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 2: CLUBES PRESENCIALES */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Users2 className="w-6 h-6 text-[#003B70]" />
            <h2 className="text-2xl font-bold text-[#003B70]">
              Clubes en Modalidad Presencial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubesPresenciales.map((club) => {
              const Icono = club.icono;
              return (
                <div
                  key={club.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="relative h-72 w-full bg-slate-100">
                    <Image
                      src={club.imagen}
                      alt={club.titulo}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-100 text-[#003B70]">
                          {club.modalidad}
                        </span>
                        <Icono className="w-5 h-5 text-[#003B70]" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {club.titulo}
                      </h3>

                      <div className="mt-4 space-y-2 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D9A404] shrink-0" />
                          <span>{club.horario}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#D9A404] shrink-0" />
                          <span className="font-semibold text-slate-800">{club.lugar}</span>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#003B70]" />
                          Fechas programadas:
                        </p>
                        <ul className="space-y-1">
                          {club.fechas.map((fecha, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <span className="text-[#D9A404] font-bold">✦</span>
                              {fecha}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <p className="text-[11px] text-center font-bold text-[#003B70]">
                        Corporación Universitaria Latinoamericana
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}