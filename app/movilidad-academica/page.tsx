'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOBILITY_CASES, MobilityItem } from '@/data/mobility';

export default function MovilidadAcademicaPage() {
  const [activeModalItem, setActiveModalItem] = useState<MobilityItem | null>(null);
  const [profileTab, setProfileTab] = useState<'estudiantes' | 'docentes'>('estudiantes');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* 1. Header con Definición Institucional */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-20 px-6 sm:px-12 border-b border-blue-800/40">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-orange-500 text-white rounded-full shadow-sm">
            DEPI • Corporación Universitaria Latinoamericana
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Movilidad Académica
          </h1>
          <p className="text-lg sm:text-xl font-medium text-amber-300">
            Conecta con el mundo, transforma tu vida y conviértete en Ciudadano Global.
          </p>
          <div className="max-w-3xl mx-auto space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
            <p>
              La movilidad académica es una oportunidad para que la comunidad CUL participe en experiencias académicas, investigativas, profesionales, culturales e interculturales con instituciones y organizaciones nacionales e internacionales. A través de la movilidad puedes ampliar perspectivas, fortalecer competencias, conocer nuevos contextos y construir conexiones para tu crecimiento personal, académico y profesional.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Las experiencias pueden desarrollarse en modalidad presencial o virtual, según las características de cada oportunidad.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-24">
        {/* ¿Quién puede participar? */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-lg border border-blue-800/50">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Participación Institucional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              ¿Quién puede participar?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
              Están dirigidas a los <strong className="font-semibold text-white">estudiantes de la modalidad virtual y presencial</strong>, a los <strong className="font-semibold text-white">docentes</strong>, <strong className="font-semibold text-white">investigadores</strong> y <strong className="font-semibold text-white">administrativos</strong> de la Corporación Universitaria Latinoamericana – CUL.
            </p>
          </div>
        </section>

        {/* ¿Qué experiencia de movilidad estás buscando? */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Qué experiencia de movilidad estás buscando?
            </h2>
            <p className="text-sm text-slate-500">
              Selecciona tu rol en la institución para conocer las opciones disponibles.
            </p>

            <div className="flex justify-center gap-2 pt-4 max-w-sm mx-auto">
              <button
                type="button"
                onClick={() => setProfileTab('estudiantes')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  profileTab === 'estudiantes'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-blue-900'
                }`}
              >
                🎓 Estudiantes
              </button>
              <button
                type="button"
                onClick={() => setProfileTab('docentes')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  profileTab === 'docentes'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-blue-900'
                }`}
              >
                👥 Docentes / Admin
              </button>
            </div>
          </div>

          {profileTab === 'estudiantes' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Intercambio Académico</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cursa asignaturas o desarrolla actividades académicas en una institución aliada, de manera presencial o virtual, de acuerdo con las condiciones de cada oportunidad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Intercambio Lingüístico</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participa en experiencias orientadas al aprendizaje y fortalecimiento de una lengua, mientras interactúas con otras culturas y comunidades.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Prácticas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desarrolla una experiencia práctica relacionada con tu formación profesional en una institución, empresa u organización, conforme a las condiciones académicas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Pasantías de Investigación</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participa en proyectos, grupos o actividades de investigación junto a investigadores, universidades o centros de investigación nacionales o internacionales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 md:col-span-2 lg:col-span-2">
                <h3 className="font-bold text-slate-900 text-base">Estancias Cortas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participa en experiencias de corta duración: cursos, campamentos, seminarios, congresos, eventos, voluntariados, visitas académicas y misiones institucionales.
                </p>
              </div>
            </div>
          )}

          {profileTab === 'docentes' && (
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Pasantías y Estancias de Investigación</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participa en proyectos, grupos y actividades de investigación con instituciones y comunidades académicas nacionales o internacionales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Estancias Académicas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Desarrolla actividades de formación, docencia, intercambio de conocimientos y fortalecimiento de capacidades con instituciones aliadas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Misiones y Visitas Académicas</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Participa en congresos, seminarios, encuentros, visitas institucionales y otras experiencias de relacionamiento académico y científico.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Otras Experiencias de Internacionalización</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accede a oportunidades de cooperación, formación, intercambio académico y fortalecimiento de redes de acuerdo con las convocatorias disponibles.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Modalidades y Carácter de la Movilidad */}
        <section className="space-y-12">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Formatos y Vías
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Modalidades de Movilidad
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-3xl block">🌎</span>
                <h3 className="font-bold text-slate-900 text-base">Movilidad Saliente</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrantes de la comunidad CUL participan en actividades fuera de la institución a nivel nacional o internacional.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-3xl block">🏫</span>
                <h3 className="font-bold text-slate-900 text-base">Movilidad Entrante</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Estudiantes o colaboradores de otras instituciones participan en actividades académicas o de investigación en la CUL.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-3xl block">✈️</span>
                <h3 className="font-bold text-slate-900 text-base">Movilidad Presencial</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experiencias con desplazamiento físico a la institución u organización donde se ejecuta la actividad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <span className="text-3xl block">💻</span>
                <h3 className="font-bold text-slate-900 text-base">Movilidad Virtual</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experiencias a través de entornos digitales que posibilitan la interacción sin necesidad de desplazamiento.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                Alcance Territorial
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Carácter de la Movilidad
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl block">📍</span>
                  <h3 className="font-bold text-slate-900 text-lg">Regional</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Desarrolladas en organizaciones e instituciones de la región Caribe colombiana para potenciar el intercambio regional.
                  </p>
                </div>
                <p className="text-xs font-bold text-amber-600 pt-3 border-t border-slate-100">
                  Conecta con tu región y descubre nuevas experiencias.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl block">🇨🇴</span>
                  <h3 className="font-bold text-slate-900 text-lg">Nacional</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experiencias en otras regiones del país para intercambiar metodologías, ampliar redes de colaboración y saberes.
                  </p>
                </div>
                <p className="text-xs font-bold text-amber-600 pt-3 border-t border-slate-100">
                  Amplía tus horizontes dentro de Colombia.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl block">🌐</span>
                  <h3 className="font-bold text-slate-900 text-lg">Internacional</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Experiencias fuera de Colombia para conocer nuevos contextos globales y consolidar competencias interculturales.
                  </p>
                </div>
                <p className="text-xs font-bold text-amber-600 pt-3 border-t border-slate-100">
                  Conecta con el mundo y vive una experiencia global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Galería de Experiencias y Misiones Internacionales */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              Registro Institucional
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Experiencias y Misiones Internacionales
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Haz clic en cualquiera de las cartas para ver la información detallada y los enlaces directos a sus publicaciones oficiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOBILITY_CASES.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer group"
              >
                {/* Imagen Preview */}
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

                {/* Contenido de la Carta */}
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
                      Ver experiencia completa &rarr;
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

        {/* Requisitos Generales de Postulación */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              Lineamientos Institucionales
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Requisitos Generales de Postulación
            </h2>
            <p className="text-sm text-slate-500">
              Condiciones académicas y administrativas mínimas para aspirar a convocatorias de intercambio y movilidad estudiantil.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">1</span>
              <h4 className="font-bold text-slate-900 text-sm">Matrícula Activa</h4>
              <p className="text-xs text-slate-600">Ser estudiante regular activo de la CUL en modalidad presencial o virtual.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">2</span>
              <h4 className="font-bold text-slate-900 text-sm">Avance Académico</h4>
              <p className="text-xs text-slate-600">Haber cursado y aprobado mínimo el 40% de los créditos del plan de estudios.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">3</span>
              <h4 className="font-bold text-slate-900 text-sm">Promedio Mínimo</h4>
              <p className="text-xs text-slate-600">Contar con un promedio acumulado igual o superior a 3.8 (o según términos específicos de cada beca).</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">4</span>
              <h4 className="font-bold text-slate-900 text-sm">Historial Disciplinario</h4>
              <p className="text-xs text-slate-600">No registrar sanciones disciplinarias ni condicionamientos académicos vigentes.</p>
            </div>
          </div>
        </section>

        {/* ¿Cómo postularte a una movilidad? */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              Ruta de Aplicación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Cómo postularte a una movilidad?
            </h2>
            <p className="text-sm text-slate-500">
              Sigue estos pasos con el acompañamiento del equipo DEPI.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
              <span className="text-2xl font-black text-amber-500">01</span>
              <h3 className="font-bold text-slate-900 text-base">Consulta y Asesoría</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisa los convenios y convocatorias abiertas. Escribe a DEPI para recibir asesoría sobre opciones compatibles con tu pensum.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
              <span className="text-2xl font-black text-amber-500">02</span>
              <h3 className="font-bold text-slate-900 text-base">Aval de Programa</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elabora tu propuesta de homologación con la dirección de tu programa académico para validar las asignaturas a cursar.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
              <span className="text-2xl font-black text-amber-500">03</span>
              <h3 className="font-bold text-slate-900 text-base">Postulación Oficial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                DEPI presenta formalmente tu postulación ante la universidad aliada o entidad organizadora junto con tu expediente.
              </p>
            </div>

            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
              <span className="text-2xl font-black text-amber-500">04</span>
              <h3 className="font-bold text-slate-900 text-base">Aceptación y Viaje</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Al recibir la carta de aceptación, gestionas seguro médico internacional, trámites migratorios e inducción previa al viaje.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto Final */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
            Orientación Personalizada
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ¿Tienes una idea o quieres vivir una experiencia global?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-light">
            Desde el Departamento de Internacionalización – DEPI te orientamos para identificar oportunidades de movilidad y experiencias acordes con tu perfil y formación.
          </p>

          <Link
            href="mailto:movilidad@ul.edu.co"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
          >
            Contactar a movilidad@ul.edu.co
          </Link>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">DEPARTAMENTO DE INTERNACIONALIZACIÓN – DEPI</p>
            <p>Corporación Universitaria Latinoamericana – CUL</p>
          </div>
        </section>
      </div>

      {/* 4. Modal Interactivo */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors z-10"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Imagen del modal completa */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Datos y Texto */}
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

              {activeModalItem.participants && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-700 block uppercase">Participantes / Delegación:</span>
                  {activeModalItem.participants.map((p, i) => (
                    <p key={i} className="text-slate-600">• {p}[cite: 1]</p>
                  ))}
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeModalItem.description}
              </p>

              {activeModalItem.highlights.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Puntos Clave y Logros:
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc pl-5">
                    {activeModalItem.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botones a Instagram / Medios */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                {activeModalItem.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow transition-all hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
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