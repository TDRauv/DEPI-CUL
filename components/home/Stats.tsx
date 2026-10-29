"use client";

import CountUp from "react-countup";
import { Globe2, GraduationCap, Plane } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Globe2,
      number: 24,
      label: t("stats.agreements"),
    },
    {
      icon: GraduationCap,
      number: 840,
      label: t("stats.incoming"),
    },
    {
      icon: GraduationCap,
      number: 574,
      label: t("stats.outgoing"),
    },
    {
      icon: Plane,
      number: 15,
      label: t("stats.alliances"),
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-[#003B70]">
            {t("stats.badge")}
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-800">
            {t("stats.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            {t("stats.description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon size={42} className="mx-auto mb-6 text-[#003B70]" />

                <div className="text-5xl font-extrabold text-[#003B70]">
                  +
                  <CountUp end={item.number} duration={2.5} />
                </div>

                <p className="mt-4 text-lg text-slate-600">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}