"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MOBILITY_CASES, MobilityItem } from "@/data/mobility";
import { useLanguage } from "@/app/context/LanguageContext";

export default function MovilidadAcademicaPage() {
  const [activeModalItem, setActiveModalItem] = useState<MobilityItem | null>(null);
  const [profileTab, setProfileTab] = useState<"estudiantes" | "docentes">("estudiantes");
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* 1. Header con Definición Institucional */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-28 pb-20 px-6 sm:px-12 border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            {isEn ? "Back to Home" : "Volver al Inicio"}
          </Link>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-500 text-white rounded-full shadow-sm">
            {isEn ? "DEPI • Latin American University Corporation" : "DEPI • Corporación Universitaria Latinoamericana"}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            {isEn ? "Academic Mobility" : "Movilidad Académica"}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-amber-300">
            {isEn
              ? "Connect with the world, transform your life, and become a Global Citizen."
              : "Conecta con el mundo, transforma tu vida y conviértete en Ciudadano Global."}
          </p>
          <div className="max-w-3xl mx-auto space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
            <p>
              {isEn
                ? "Academic mobility allows the CUL community to engage in academic, research, professional, cultural, and intercultural experiences with national and international partner institutions. Broaden your horizons and build meaningful connections for personal and professional growth."
                : "La movilidad académica es una oportunidad para que la comunidad CUL participe en experiencias académicas, investigativas, profesionales, culturales e interculturales con instituciones y organizaciones nacionales e internacionales. A través de la movilidad puedes ampliar perspectivas, fortalecer competencias, conocer nuevos contextos y construir conexiones para tu crecimiento personal, académico y profesional."}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {isEn
                ? "Experiences are available in either in-person or virtual formats according to each call."
                : "Las experiencias pueden desarrollarse en modalidad presencial o virtual, según las características de cada oportunidad."}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-24">
        {/* ¿Quién puede participar? */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-lg border border-blue-800/50">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              {isEn ? "Institutional Eligibility" : "Participación Institucional"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {isEn ? "Who can participate?" : "¿Quién puede participar?"}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              {isEn ? (
                <>
                  Open to <strong className="font-semibold text-white">virtual and in-person students</strong>, <strong className="font-semibold text-white">professors</strong>, <strong className="font-semibold text-white">researchers</strong>, and <strong className="font-semibold text-white">administrative staff</strong> of Corporación Universitaria Latinoamericana – CUL.
                </>
              ) : (
                <>
                  Están dirigidas a los <strong className="font-semibold text-white">estudiantes de la modalidad virtual y presencial</strong>, a los <strong className="font-semibold text-white">docentes</strong>, <strong className="font-semibold text-white">investigadores</strong> y <strong className="font-semibold text-white">administrativos</strong> de la Corporación Universitaria Latinoamericana – CUL.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Modalidades por perfil */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isEn ? "What mobility experience are you looking for?" : "¿Qué experiencia de movilidad estás buscando?"}
            </h2>
            <p className="text-sm text-slate-500">
              {isEn ? "Select your role to view available options." : "Selecciona tu rol en la institución para conocer las opciones disponibles."}
            </p>

            <div className="flex justify-center gap-2 pt-4 max-w-sm mx-auto">
              <button
                type="button"
                onClick={() => setProfileTab("estudiantes")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  profileTab === "estudiantes"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-blue-900"
                }`}
              >
                🎓 {isEn ? "Students" : "Estudiantes"}
              </button>
              <button
                type="button"
                onClick={() => setProfileTab("docentes")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  profileTab === "docentes"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-blue-900"
                }`}
              >
                👥 {isEn ? "Faculty / Staff" : "Docentes / Admin"}
              </button>
            </div>
          </div>

          {profileTab === "estudiantes" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Academic Exchange" : "Intercambio Académico"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Take courses or develop academic activities at partner universities in-person or virtually."
                    : "Cursa asignaturas o desarrolla actividades académicas en una institución aliada, de manera presencial o virtual."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Language Exchange" : "Intercambio Lingüístico"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Participate in programs designed for language learning and intercultural engagement."
                    : "Participa en experiencias orientadas al aprendizaje y fortalecimiento de una lengua, mientras interactúas con otras culturas."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Internships" : "Prácticas"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Gain practical professional experience related to your degree in international organizations or companies."
                    : "Desarrolla una experiencia práctica relacionada con tu formación profesional en una institución, empresa u organización."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Research Stays" : "Pasantías de Investigación"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Collaborate on research projects alongside national or international faculty and scientific networks."
                    : "Participa en proyectos, grupos o actividades de investigación junto a investigadores de universidades aliadas."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 md:col-span-2 lg:col-span-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Short Stays" : "Estancias Cortas"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Short-term experiences: summer courses, seminars, congresses, international volunteering, and academic missions."
                    : "Participa en experiencias de corta duración: cursos, campamentos, seminarios, congresos, eventos y misiones institucionales."}
                </p>
              </div>
            </div>
          )}

          {profileTab === "docentes" && (
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Faculty Research Stays" : "Pasantías y Estancias de Investigación"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Lead collaborative research projects with global researchers and international scientific communities."
                    : "Participa en proyectos, grupos y actividades de investigación con comunidades académicas internacionales."}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{isEn ? "Teaching Stays" : "Estancias Académicas"}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn
                    ? "Deliver guest lectures, mirror classes, and knowledge exchange programs at partner institutions."
                    : "Desarrolla actividades de docencia, clases espejo e intercambio de conocimientos con instituciones aliadas."}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Galería de Casos de Movilidad */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              {isEn ? "Institutional Record" : "Registro Institucional"}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              {isEn ? "International Experiences & Missions" : "Experiencias y Misiones Internacionales"}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {isEn
                ? "Click any card to explore detailed information and official publication links."
                : "Haz clic en cualquiera de las cartas para ver la información detallada y los enlaces directos a sus publicaciones oficiales."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOBILITY_CASES.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
              >
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-blue-600/95 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                      {item.flag} {item.country}
                    </span>
                    <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md shadow">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-bold text-blue-700 tracking-wide block uppercase line-clamp-1">
                      {item.institution}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{item.dates}</p>
                    <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 group-hover:underline">
                      {isEn ? "View full experience →" : "Ver experiencia completa →"}
                    </span>
                    <span className="text-xs text-pink-600 bg-pink-50 border border-pink-100 px-2 py-1 rounded font-medium">
                      Instagram
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requisitos Generales */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              {isEn ? "Institutional Guidelines" : "Lineamientos Institucionales"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isEn ? "General Application Requirements" : "Requisitos Generales de Postulación"}
            </h2>
            <p className="text-sm text-slate-500">
              {isEn
                ? "Minimum academic and administrative conditions required for exchange calls."
                : "Condiciones académicas y administrativas mínimas para aspirar a convocatorias de intercambio y movilidad estudiantil."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">1</span>
              <h4 className="font-bold text-slate-900 text-sm">{isEn ? "Active Enrollment" : "Matrícula Activa"}</h4>
              <p className="text-xs text-slate-600">{isEn ? "Be an active regular CUL student in-person or virtually." : "Ser estudiante regular activo de la CUL en modalidad presencial o virtual."}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">2</span>
              <h4 className="font-bold text-slate-900 text-sm">{isEn ? "Academic Progress" : "Avance Académico"}</h4>
              <p className="text-xs text-slate-600">{isEn ? "Have passed at least 40% of degree curriculum credits." : "Haber cursado y aprobado mínimo el 40% de los créditos del plan de estudios."}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">3</span>
              <h4 className="font-bold text-slate-900 text-sm">{isEn ? "Minimum GPA" : "Promedio Mínimo"}</h4>
              <p className="text-xs text-slate-600">{isEn ? "Cumulative GPA equal to or above 3.8." : "Contar con un promedio acumulado igual o superior a 3.8."}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">4</span>
              <h4 className="font-bold text-slate-900 text-sm">{isEn ? "Disciplinary Record" : "Historial Disciplinario"}</h4>
              <p className="text-xs text-slate-600">{isEn ? "Have no active disciplinary or academic sanctions." : "No registrar sanciones disciplinarias ni condicionamientos vigentes."}</p>
            </div>
          </div>
        </section>

        {/* Contacto Final */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
            {isEn ? "Personalized Guidance" : "Orientación Personalizada"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isEn ? "Do you want to live a global academic experience?" : "¿Tienes una idea o quieres vivir una experiencia global?"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-light">
            {isEn
              ? "At DEPI we guide you to find international opportunities matching your profile."
              : "Desde el Departamento de Internacionalización – DEPI te orientamos para identificar oportunidades de movilidad y experiencias acordes con tu perfil."}
          </p>

          <Link
            href="mailto:movilidad@ul.edu.co"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
          >
            {isEn ? "Contact movilidad@ul.edu.co" : "Contactar a movilidad@ul.edu.co"}
          </Link>
        </section>
      </div>

      {/* Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors z-10"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {activeModalItem.category}
                </span>
                <span className="bg-slate-100 text-slate-800 text-xs font-bold px-2 py-1 rounded">
                  {activeModalItem.flag} {activeModalItem.country}
                </span>
                <span className="text-xs text-slate-400">• {activeModalItem.dates}</span>
              </div>

              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                  {activeModalItem.institution}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {activeModalItem.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                {activeModalItem.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow transition-all hover:scale-105"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}