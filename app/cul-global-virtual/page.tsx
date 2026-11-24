"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CulGlobalVirtualPage() {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800 antialiased selection:bg-[#D9A404]/30 selection:text-[#003B70]">
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

        {/* Encabezado / Hero */}
        <section className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/15 text-[#003B70] border border-[#D9A404]/30 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] animate-pulse" />
            {t("virtual.tag")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#003B70] tracking-tight leading-tight">
            {t("virtual.title")}
          </h1>
          <p className="mt-3 text-base sm:text-xl font-bold text-[#D9A404]">
            {t("virtual.subtitle")}
          </p>
          <div className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal space-y-4 max-w-3xl mx-auto text-center sm:text-justify">
            <p>
              <strong className="text-[#003B70]">
                {isEn ? "CUL Virtual Community:" : "Comunidad CUL Virtual:"}
              </strong>{" "}
              {t("virtual.desc1")}
            </p>
            <p>{t("virtual.desc2")}</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Tarjeta: Movilidad Académica */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                {t("virtual.mobilitySubtitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                {t("virtual.mobilityTitle")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t("virtual.mobilityDesc")}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/movilidad-academica"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>{t("common.exploreMobility")}</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta: Boletines Informativos */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#D9A404] uppercase tracking-widest block">
                {t("virtual.bulletinsSubtitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                {t("virtual.bulletinsTitle")}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <strong className="text-[#003B70]">
                  {isEn ? "CUL Community:" : "Comunidad CUL:"}
                </strong>{" "}
                {t("virtual.bulletinsDesc")}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                {t("virtual.bulletinsAudienceLabel")}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t("virtual.bulletinsAudience")}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/oportunidades/boletines-informativos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>{t("common.seeBulletins")}</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta: Internacionalización en Casa y Currículo Global */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                {t("virtual.homeIntSubtitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                {t("virtual.homeIntTitle")}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {isEn
                  ? "These axes reflect the institutional processes designed to integrate an international dimension into curriculum design, student extracurricular life, and the development of intercultural and global competencies."
                  : "En estos ejes se evidencian los procesos mediante los cuales la institución fomenta la inserción de la dimensión internacional en la gestión curricular, en la vida universitaria (actividades extracurriculares) y el fortalecimiento de las competencias internacionales e interculturales."}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {isEn
                  ? "Academic interactions include participation in regional, national, and global scientific conferences, activities promoting interculturality and multilingualism, and networking through international cooperation alliances."
                  : "La interacción con la comunidad académica por parte de los docentes y estudiantes del programa, se manifiestan en la participación en eventos académicos y científicos a nivel local, regional, nacional e internacional, en actividades de promoción de la actividad internacional, de la interculturalidad y el multilingüismo, así como en el relacionamiento con actores nacionales e internacionales producto de la relación de cooperación con otras instituciones y aliados estratégicos."}
              </p>
            </div>

            {/* Listado de Formas de Gestión */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <span className="text-xs font-bold text-[#003B70] uppercase tracking-wider block">
                {isEn
                  ? "DEPI collaborates with academic programs to coordinate the community's participation through the following formats:"
                  : "El Departamento de Internacionalización articulado con el programa gestionan la participación de la comunidad académica y administrativa en diversas gestiones de promoción de internacionalización en casa y curricular en la CUL de las siguientes formas:"}
              </span>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>
                    {isEn ? "Institutionalized events and academic activities." : "Eventos y Actividades institucionalizadas."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>
                    {isEn
                      ? "Events scheduled by academic interest, needs, purpose, or global trends."
                      : "Eventos y Actividades programadas por interés, requerimientos, propósito y/o tendencias."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>
                    {isEn ? "Promotion of multiculturalism and multilingualism." : "Promoción del multiculturalismo y multilingüismo."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>
                    {isEn ? "Inter Program - Global Club." : "Programa Inter - Global Club."}
                  </span>
                </li>
                <li className="flex items-start gap-2.5 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>
                    {isEn ? "Comprehensive Training & Global Curriculum." : "Formación y Currículo Global."}
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200/60">
                {isEn
                  ? "These initiatives foster global thinking from local realities across all university programs."
                  : "Estas actividades y eventos permiten promover el multiculturalismo, multilingüismo y divulgar la actividad internacional en la institución, por medio de la (Globalización): Pensar lo global desde lo local."}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/internacionalizacion-articulada"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>{isEn ? "Explore Multilingualism" : "Explorar Multilingüismo"}</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta: Contacto e Interacción */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-[#D9A404] uppercase tracking-widest block">
                {t("virtual.contactSubtitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                {t("virtual.contactTitle")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {t("virtual.contactDesc")}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contacto-e-interaccion"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>{t("virtual.goToContact")}</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}