"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CulGlobalVirtualPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24 text-slate-800 antialiased selection:bg-[#D9A404]/30 selection:text-[#003B70]">
      <Container>
        {/* Encabezado / Hero */}
        <section className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D9A404]/15 text-[#003B70] border border-[#D9A404]/30 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] animate-pulse" />
            Ecosistema CUL Global
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#003B70] tracking-tight leading-tight">
            CUL Global Virtual
          </h1>
          <p className="mt-3 text-base sm:text-xl font-bold text-[#D9A404]">
            Espacio de Internacionalización para la Comunidad CUL Virtual
          </p>
          <div className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal space-y-4 max-w-3xl mx-auto text-center sm:text-justify">
            <p>
              <strong className="text-[#003B70]">Comunidad CUL Virtual:</strong> en el marco del Ecosistema CUL Global, este espacio reúne oportunidades, recursos e iniciativas de internacionalización dirigidas a estudiantes y docentes de la modalidad virtual, facilitando el acceso a experiencias académicas nacionales e internacionales desde cualquier lugar.
            </p>
            <p>
              Aquí encontrarás información actualizada sobre convocatorias, becas, movilidad virtual, eventos, boletines y demás oportunidades que fortalecerán tu ciudadanía global y promoverán tu participación activa en las estrategias de internacionalización institucional.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Tarjeta: Movilidad Académica */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Oportunidades de Aprendizaje y Conexión
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                Movilidad Académica
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Descubre las modalidades de intercambio presencial y virtual, clases espejo, misiones académicas, pasantías y convocatorias internacionales adaptadas a tu formación.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/movilidad-academica"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>Explorar Movilidad</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta: Boletines Informativos */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#D9A404] uppercase tracking-widest block">
                Difusión y Actualidad
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                Boletines Informativos
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <strong className="text-[#003B70]">Comunidad CUL:</strong> nos permitimos compartir nuestros boletines informativos <em>CUL GLOBAL, más cerca de ti</em>, un espacio para la socialización de información de interés sobre becas, oportunidades, convocatorias, movilidad académica, cooperación internacional, experiencias globales, noticias y actividades de internacionalización.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Dirigido a toda nuestra comunidad universitaria y aliados:
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Estudiantes de modalidad presencial y virtual • Docentes • Administrativos • Investigadores • Directivos • Egresados • Aliados
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/oportunidades/boletines-informativos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>Ver Boletines Informativos</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta: Internacionalización en Casa y Currículo Global */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Dimensión Internacional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                Internacionalización en Casa y Currículo Global
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                En estos ejes se evidencian los procesos mediante los cuales la institución fomenta la inserción de la dimensión internacional en la gestión curricular, en la vida universitaria (actividades extracurriculares) y el fortalecimiento de las competencias internacionales e interculturales.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                La interacción con la comunidad académica por parte de los docentes y estudiantes del programa, se manifiestan en la participación en eventos académicos y científicos a nivel local, regional, nacional e internacional, en actividades de promoción de la actividad internacional, de la interculturalidad y el multilingüismo, así como en el relacionamiento con actores nacionales e internacionales producto de la relación de cooperación con otras instituciones y aliados estratégicos.
              </p>
            </div>

            {/* Listado de Formas de Gestión */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <span className="text-xs font-bold text-[#003B70] uppercase tracking-wider block">
                El Departamento de Internacionalización articulado con el programa gestionan la participación de la comunidad académica y administrativa en diversas gestiones de promoción de internacionalización en casa y curricular en la CUL de las siguientes formas:
              </span>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>Eventos y Actividades institucionalizadas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>Eventos y Actividades programadas por interés, requerimientos, propósito y/o tendencias.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>Promoción del multiculturalismo y multilingüismo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>Programa Inter - Global Club.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A404] mt-2 shrink-0" />
                  <span>Formación y Currículo Global.</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200/60">
                Estas actividades y eventos permiten promover el multiculturalismo, multilingüismo y divulgar la actividad internacional en la institución, por medio de la (Globalización): Pensar lo global desde lo local.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/internacionalizacion-articulada#clubes-de-lenguas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>Explorar Multilingüismo</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>

          {/* Tarjeta Final: Contacto e Interacción */}
          <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-[#D9A404] uppercase tracking-widest block">
                Canales de Atención DEPI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
                Contacto e Interacción
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Comunícate directamente con nuestro equipo de internacionalización, consulta canales oficiales, grupos de atención y la red de alianzas estratégicas.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contacto-e-interaccion"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#003B70] text-white hover:bg-[#002d57] active:bg-[#002040] transition-colors shadow-sm"
              >
                <span>Ir a Contacto e Interacción</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}