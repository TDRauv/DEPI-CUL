'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MOBILITY_CASES,
  DELFIN_CALLS,
  DELFIN_EXPERIENCES,
  MobilityItem,
} from '@/data/mobility';

export default function MovilidadAcademicaPage() {
  const [activeModalItem, setActiveModalItem] = useState<MobilityItem | null>(null);

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
          <div className="max-w-3xl mx-auto space-y-3">
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-24">
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

        {/* 3. Sección Especial: Programa Verano Científico - DELFÍN */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-14 space-y-16">
          {/* Cabecera Delfín */}
          <div className="max-w-4xl space-y-4 border-b border-slate-100 pb-8">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 rounded-md">
              Programa de Investigación Internacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              PROGRAMA DEL VERANO CIENTÍFICO - DELFÍN 🐬
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Una iniciativa de movilidad académica y de investigación que fortalece la formación científica, 
              la cooperación interinstitucional y la creación de redes de conocimiento a nivel nacional e internacional, 
              brindando oportunidades tangibles para el desarrollo académico y profesional de nuestra comunidad universitaria.
            </p>
          </div>

          {/* Tarjetas Informativas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-3xl font-extrabold text-blue-600">7 Semanas</span>
              <h3 className="font-bold text-slate-800">Pasantía de Investigación</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Estancias desarrolladas entre junio y julio en modalidad virtual o presencial con investigadores categorizados.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-3xl font-extrabold text-blue-600">Red Multilateral</span>
              <h3 className="font-bold text-slate-800">Países Participantes</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                México, Colombia, Costa Rica, Perú, Nicaragua, Estados Unidos, Ecuador y República Dominicana.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-3xl font-extrabold text-blue-600">Pregrado & Posgrado</span>
              <h3 className="font-bold text-slate-800">¿Quiénes pueden participar?</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Estudiantes CUL activos (mínimo 4.° semestre cursado y promedio acumulado igual o superior a 3.5).
              </p>
            </div>
          </div>

          {/* Cronograma y Enlaces Clave */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-xl font-bold text-slate-900">
                Fechas Clave del Cronograma Anual
              </h3>
              <div className="flex flex-wrap gap-4 text-xs font-semibold">
                <Link
                  href="https://programadelfin.org.mx/sitio/programa-capitulos.php"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Capítulos Oficiales Delfín &rarr;
                </Link>
                <Link
                  href="https://programadelfin.org.mx/sitio/programa-instituciones.php"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  IES Afiliadas &rarr;
                </Link>
                <span className="text-slate-500">Informes CUL: movilidad@ul.edu.co</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase">Fase 1</span>
                <p className="text-sm font-bold text-slate-800 mt-1">Feb - Mar</p>
                <p className="text-xs text-slate-500 mt-0.5">Registro y recepción de solicitudes.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase">Fase 2</span>
                <p className="text-sm font-bold text-slate-800 mt-1">Abr - May</p>
                <p className="text-xs text-slate-500 mt-0.5">Publicación de resultados.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase">Fase 3</span>
                <p className="text-sm font-bold text-slate-800 mt-1">Jun - Jul</p>
                <p className="text-xs text-slate-500 mt-0.5">Estancia científica (7 semanas).</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase">Fase 4</span>
                <p className="text-sm font-bold text-slate-800 mt-1">Finales Ago</p>
                <p className="text-xs text-slate-500 mt-0.5">Congreso Presencial (México).</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-blue-600 uppercase">Fase 5</span>
                <p className="text-sm font-bold text-slate-800 mt-1">Finales Sep</p>
                <p className="text-xs text-slate-500 mt-0.5">Congreso Internacional Virtual.</p>
              </div>
            </div>
          </div>

          {/* Convocatorias CUL para Estudiantes (Fotos Completas y Espaciadas) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Convocatorias CUL para Estudiantes (Presencial y Virtual)
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Historial de llamados institucionales para realizar estancias de investigación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DELFIN_CALLS.map((call) => (
                <div
                  key={call.year}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                >
                  {/* Foto completa sin recortes */}
                  <div className="relative h-80 w-full bg-slate-100 flex items-center justify-center p-2">
                    <Image
                      src={call.image}
                      alt={`Convocatoria Delfín ${call.year}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 border-t border-slate-100">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          Año {call.year}
                        </span>
                        <span className="text-xs text-red-600 font-semibold">
                          Cierre: {call.deadline}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        <strong>Periodo de Estancia:</strong> {call.dates}
                      </p>
                      {call.details && (
                        <p className="text-xs text-slate-500">{call.details}</p>
                      )}
                    </div>

                    <Link
                      href={call.instagramUrl}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 w-full text-xs font-bold text-pink-600 bg-pink-50 hover:bg-pink-100 py-2.5 rounded-xl border border-pink-200 transition-colors"
                    >
                      Ver post de la convocatoria &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencias de Estudiantes Foráneos en CUL (Fotos Completas) */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Experiencias del Verano Científico en CUL (Estudiantes Foráneos)
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">
                Investigadores y pasantes que seleccionaron a la CUL como su sede de investigación.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DELFIN_EXPERIENCES.map((exp) => (
                <div
                  key={exp.year}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden"
                >
                  {/* Foto completa sin recortes */}
                  <div className="relative h-72 sm:h-96 w-full bg-slate-100 flex items-center justify-center">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-contain p-3"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                      Año {exp.year}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 border-t border-slate-100">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                      <p className="text-xs font-semibold text-blue-700">{exp.participants}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {exp.links.map((lnk, idx) => (
                        <Link
                          key={idx}
                          href={lnk.url}
                          target="_blank"
                          className="inline-flex items-center text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-lg transition-colors"
                        >
                          {lnk.label} &rarr;
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 4. Modal Interactivo (Al hacer clic en cualquier carta) */}
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
                    <p key={i} className="text-slate-600">• {p}</p>
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