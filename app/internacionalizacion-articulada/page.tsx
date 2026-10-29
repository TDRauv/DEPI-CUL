"use client";

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
import { useLanguage } from "@/app/context/LanguageContext";

export default function ClubsPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const clubes = [
    {
      id: "lsc",
      titulo: isEn ? "Colombian Sign Language Club" : "Club de Lengua de Señas Colombiana",
      modalidad: isEn ? "Virtual" : "Virtual",
      esVirtual: true,
      horario: "2:30 p. m. - 3:30 p. m.",
      lugar: isEn ? "Virtual (Final session in-person)" : "Virtual (Sesión final presencial en salón)",
      fechas: isEn
        ? [
            "Monday, Sept 14",
            "Monday, Sept 28",
            "Monday, Oct 5",
            "Monday, Oct 26",
            "Monday, Nov 9 (In-person 2:00 p. m. - 4:00 p. m.)",
          ]
        : [
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
      titulo: isEn ? "English Club (100% Virtual)" : "Club de Inglés (100% Virtual)",
      modalidad: isEn ? "Virtual" : "Virtual",
      esVirtual: true,
      horario: isEn ? "Scheduled virtual sessions" : "Sesiones virtuales programadas",
      lugar: "100% Virtual",
      fechas: isEn
        ? ["Tuesday, Sept 22", "Tuesday, Oct 13", "Tuesday, Oct 20"]
        : ["Martes, 22 de sept.", "Martes, 13 de oct.", "Martes, 20 de oct."],
      imagen: "/clubs/club de ingles virtual 2026-2.png",
      icono: Laptop,
    },
    {
      id: "aleman",
      titulo: isEn ? "German Club" : "Club de Alemán",
      modalidad: isEn ? "In-Person" : "Presencial",
      esVirtual: false,
      horario: "2:00 P. M. - 4:00 P. M.",
      lugar: isEn ? "Room A101" : "Salón A101",
      fechas: isEn
        ? ["Monday, Sept 21", "Friday, Oct 16", "Monday, Oct 19", "Monday, Nov 9"]
        : ["Lunes, 21 de sept.", "Viernes, 16 de oct.", "Lunes, 19 de oct.", "Lunes, 9 de nov."],
      imagen: "/clubs/club de aleman 2026-2.png",
      icono: Users2,
    },
    {
      id: "ingles-presencial",
      titulo: isEn ? "In-Person English Club" : "Club de Inglés Presencial",
      modalidad: isEn ? "In-Person" : "Presencial",
      esVirtual: false,
      horario: "2:00 P. M. - 4:00 P. M.",
      lugar: isEn ? "Room A101" : "Salón A101",
      fechas: isEn
        ? ["Friday, Oct 2", "Monday, Oct 19", "Friday, Oct 30", "Monday, Nov 9"]
        : ["Viernes, 2 de oct.", "Lunes, 19 de oct.", "Viernes, 30 de oct.", "Lunes, 9 de nov."],
      imagen: "/clubs/club ingles presencial 2026-2.png",
      icono: Languages,
    },
    {
      id: "robotica",
      titulo: isEn ? "Robotics Club" : "Club de Robótica",
      modalidad: isEn ? "In-Person" : "Presencial",
      esVirtual: false,
      horario: "1:00 P. M. - 2:00 P. M.",
      lugar: isEn ? "Room A101" : "Salón A101",
      fechas: isEn ? ["Tuesday, Nov 3", "Tuesday, Nov 17"] : ["Martes, 3 de nov.", "Martes, 17 de nov."],
      imagen: "/clubs/club robotica 2026-2.png",
      icono: Bot,
    },
  ];

  const clubesVirtuales = clubes.filter((c) => c.esVirtual);
  const clubesPresenciales = clubes.filter((c) => !c.esVirtual);

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

        <div className="max-w-4xl text-left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#003B70]/10 text-[#003B70] mb-3">
            {isEn ? "DEPI Club Schedule 2026-2" : "Programación Clubes 2026-2 · DEPI"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003B70] tracking-tight">
            {isEn ? "Multilingualism & Interculturality" : "Multilingüismo e Interculturalidad"}
          </h1>
          <p className="mt-2 text-slate-600 text-base">
            {isEn
              ? "Who can participate? Open to in-person and virtual students, faculty, administrative staff, partners, and the external community."
              : "¿Quién puede participar? Están dirigidas a los estudiantes de la modalidad virtual y presencial, docentes, administrativos, aliados y comunidad externa."}
          </p>
        </div>

        {/* VIRTUALES */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Laptop className="w-6 h-6 text-[#003B70]" />
            <h2 className="text-2xl font-bold text-[#003B70]">
              {isEn ? "Virtual Clubs" : "Clubes en Modalidad Virtual"}
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
                          {isEn ? "Schedule:" : "Programación:"}
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
                        {isEn ? "Global Citizen!" : "¡Ciudadano Global!"}
                      </span>
                      <Icono className="w-5 h-5 text-[#003B70]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PRESENCIALES */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Users2 className="w-6 h-6 text-[#003B70]" />
            <h2 className="text-2xl font-bold text-[#003B70]">
              {isEn ? "In-Person Clubs" : "Clubes en Modalidad Presencial"}
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
                          {isEn ? "Scheduled Dates:" : "Fechas programadas:"}
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