import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  MapPin,
  QrCode,
  ExternalLink,
  Users2,
  Sparkles,
} from "lucide-react";
import TeamCard from "@/components/cards/TeamCard";
import AgreementsAndAlliances from "@/components/contact/AgreementsAndAlliances";
import { contactInfo } from "@/data/contact";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {/* Retorno */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#003B70] hover:text-[#D9A404] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl bg-gradient-to-r from-[#002244] via-[#003B70] to-[#002B52] p-8 sm:p-12 text-white shadow-xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#D9A404] border border-white/15 mb-4">
            Comunidad y Canales
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Contacto e Interacción
          </h1>
          <p className="max-w-2xl text-slate-200 text-sm sm:text-base leading-relaxed">
            Te invitamos a transformarte en un ciudadano global. Conéctate con nuestros canales directos o comunícate con el equipo de trabajo del DEPI.
          </p>
        </div>

        {/* Canales Digitales y Flyer */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003B70] border border-blue-100 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A404]" />
              Conexión Directa
            </span>
            <h2 className="text-3xl font-extrabold text-[#003B70] tracking-tight">
              Canales de Comunicación
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explora nuestros canales de comunicación y únete a nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna Izquierda: Flyer Promocional Oficial */}
            <div className="lg:col-span-5 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
              <div className="relative w-full aspect-[1/1.5] rounded-2xl overflow-hidden bg-slate-100 group">
                <Image
                  src="/contact/flyercanales.jpeg"
                  alt="Canales de Comunicación DEPI CUL"
                  fill
                  priority
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-xs text-slate-400 mt-3 italic">
                Flyer oficial de Canales de Comunicación – DEPI CUL
              </p>
            </div>

            {/* Columna Derecha: Tarjetas de Acción y Sede */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.channels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-3xl bg-white p-6 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003B70] flex items-center justify-center mb-4">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {channel.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {channel.description}
                      </p>
                    </div>

                    <a
                      href={channel.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#003B70] text-white text-xs font-semibold hover:bg-[#002B52] transition-colors"
                    >
                      <span>{channel.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Tarjeta de Sede y Correo Institucional */}
              <div className="rounded-3xl bg-[#003B70] text-white p-6 sm:p-8 space-y-4 shadow-md">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D9A404] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm block">Ubicación Institucional</span>
                    <span className="text-xs text-slate-200 leading-relaxed">
                      {contactInfo.location}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-200">
                    Atención directa a la comunidad académica:
                  </div>
                  <a
                    href={`mailto:${contactInfo.mainEmail}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#003B70] font-bold text-xs hover:bg-slate-100 transition-colors w-fit"
                  >
                    <Mail className="w-4 h-4 text-[#D9A404]" />
                    <span>{contactInfo.mainEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Capital Humano */}
        <section className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#003B70] border border-blue-100 mb-3">
              <Users2 className="w-3.5 h-3.5" />
              Equipo DEPI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Capital Humano
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Conoce a los directivos, líderes de área y profesionales que gestionan la internacionalización en la CUL.
            </p>
          </div>

          {/* Dirección y Asistencia */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.leadership.map((member, idx) => (
              <TeamCard key={idx} member={member} featured={idx === 0} />
            ))}
          </div>

          {/* Coordinadores y Líderes Temáticos */}
          <div className="space-y-4">
            <h3 className="text-center text-xs font-black uppercase tracking-widest text-[#003B70]">
              Líderes de Área y Proyectos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {contactInfo.coordinators.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Sección: Alianzas Estratégicas y Convenios Académicos */}
        <AgreementsAndAlliances />
      </div>
    </main>
  );
}