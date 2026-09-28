/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import {
  ACADEMIC_AGREEMENTS,
  STRATEGIC_ALLIANCES_DATA,
  ALLIANCE_LOGOS,
} from '@/data/agreements';

export default function AgreementsAndAlliances() {
  const [activeTab, setActiveTab] = useState<'alianzas' | 'convenios'>('alianzas');
  const [agreementScope, setAgreementScope] = useState<'Todos' | 'Internacional' | 'Nacional' | 'Regional'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado de Convenios
  const filteredAgreements = ACADEMIC_AGREEMENTS.filter((item) => {
    const matchesScope = agreementScope === 'Todos' || item.scope === agreementScope;
    const matchesQuery =
      item.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.objective.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesScope && matchesQuery;
  });

  // Filtrado de Alianzas
  const filteredAlliances = STRATEGIC_ALLIANCES_DATA.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.focus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scope.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="space-y-16 pt-12 border-t border-slate-200">
      {/* 1. Carrusel continuo de logos de Alianzas (15 marcas) */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#D9A404] uppercase tracking-widest block">
            Red Global CUL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B70]">
            Nuestras Alianzas Estratégicas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light">
            Organizaciones, redes y fundaciones multilaterales aliadas para el desarrollo integral de la comunidad académica.
          </p>
        </div>

        {/* Carrusel infinito marquee con fallback */}
        <div className="relative w-full overflow-hidden bg-white border border-slate-200 rounded-3xl py-6 shadow-sm">
          <div className="flex w-max animate-marquee gap-8 items-center">
            {[...ALLIANCE_LOGOS, ...ALLIANCE_LOGOS].map((alliance, index) => (
              <div
                key={`${alliance.id}-${index}`}
                className="relative h-24 w-48 shrink-0 flex items-center justify-center p-3 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#003B70]/40 transition-colors"
              >
                <img
                  src={alliance.image}
                  alt={alliance.name}
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback visual en caso de que alguna imagen falte temporalmente
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Sección de Tablas: Selector de Pestañas */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                setActiveTab('alianzas');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'alianzas'
                  ? 'bg-[#003B70] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#003B70]'
              }`}
            >
              🤝 Alianzas Estratégicas ({STRATEGIC_ALLIANCES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('convenios');
                setSearchTerm('');
              }}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'convenios'
                  ? 'bg-[#003B70] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#003B70]'
              }`}
            >
              📜 Convenios Académicos ({ACADEMIC_AGREEMENTS.length})
            </button>
          </div>

          {/* Buscador interactivo */}
          <div className="w-full sm:w-80">
            <input
              type="text"
              placeholder={
                activeTab === 'alianzas'
                  ? 'Buscar alianza, sigla, país...'
                  : 'Buscar universidad, objeto, país...'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#003B70] bg-white shadow-xs"
            />
          </div>
        </div>

        {/* TAB 1: TABLA ALIANZAS ESTRATÉGICAS */}
        {activeTab === 'alianzas' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-bold text-[#D9A404] uppercase tracking-wider block">
                Redes • Fundaciones • Asociaciones • Mesas • Programas
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#003B70]">
                Alianzas Estratégicas CUL
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#003B70] text-white text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Organización / Programa</th>
                    <th className="py-3.5 px-4 font-bold text-center">Sigla</th>
                    <th className="py-3.5 px-4 font-bold">Enfoque / Eje</th>
                    <th className="py-3.5 px-4 font-bold">Alcance Territorial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredAlliances.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 max-w-md">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 text-[#003B70] border border-blue-200">
                          {item.acronym}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-700 font-medium">
                        {item.focus}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {item.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredAlliances.length === 0 && (
                <div className="p-8 text-center text-xs text-slate-500">
                  No se encontraron alianzas que coincidan con la búsqueda.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: TABLA CONVENIOS ACADÉMICOS */}
        {activeTab === 'convenios' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Marco Institucional y Homologación
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#003B70]">
                  Convenios Académicos
                </h3>
              </div>

              {/* Filtro por Carácter */}
              <div className="flex flex-wrap gap-1.5">
                {(['Todos', 'Internacional', 'Nacional', 'Regional'] as const).map((scope) => (
                  <button
                    key={scope}
                    type="button"
                    onClick={() => setAgreementScope(scope)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      agreementScope === scope
                        ? 'bg-[#003B70] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#003B70] text-white text-[11px] sm:text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Tipo</th>
                    <th className="py-3.5 px-4 font-bold text-center">Carácter</th>
                    <th className="py-3.5 px-4 font-bold">Contraparte / Institución</th>
                    <th className="py-3.5 px-4 font-bold">Objeto</th>
                    <th className="py-3.5 px-4 font-bold">Ciudad / País</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredAgreements.map((conv) => (
                    <tr key={conv.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {conv.type}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            conv.scope === 'Internacional'
                              ? 'bg-blue-100 text-blue-900'
                              : conv.scope === 'Nacional'
                              ? 'bg-amber-100 text-amber-900'
                              : 'bg-emerald-100 text-emerald-900'
                          }`}
                        >
                          {conv.scope}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-800 max-w-sm">
                        {conv.institution}
                      </td>
                      <td className="py-3 px-4 text-slate-600 whitespace-nowrap">
                        {conv.objective}
                      </td>
                      <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                        {conv.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredAgreements.length === 0 && (
                <div className="p-8 text-center text-xs text-slate-500">
                  No se encontraron convenios que coincidan con la búsqueda.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
