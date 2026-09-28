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

            {/* Públicos objetivo */}
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
        </div>
      </Container>
    </main>
  );
}