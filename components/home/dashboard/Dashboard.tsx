"use client";

import KPI from "./KPI";
import { kpis } from "./dashboardData";
import { useLanguage } from "@/app/context/LanguageContext";

const kpiTranslations: Record<string, string> = {
  Convenios: "Agreements",
  Movilidades: "Mobilities",
  Países: "Countries",
  Programas: "Programs",
};

export default function Dashboard() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-[#003B70]">
            {isEn ? "Internationalization" : "Internacionalización"}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            {isEn ? "CUL in Numbers" : "CUL en cifras"}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {isEn
              ? "Impact of the Department of Internationalization."
              : "Impacto del Departamento de Internacionalización."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <KPI
              key={item.title}
              icon={item.icon}
              value={item.value}
              title={isEn ? kpiTranslations[item.title] ?? item.title : item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}