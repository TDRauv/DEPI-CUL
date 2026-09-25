"use client";

import CountUp from "react-countup";
import { Globe2, Handshake, GraduationCap, Plane } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    number: 20,
    label: "Convenios Internacionales",
  },
  {
    icon: GraduationCap,
    number: 840,
    label: "Movilidades Entrantes",
  },
  {
    icon: GraduationCap,
    number: 574,
    label: "Movilidades Salientes",
  },
  {
    icon: Plane,
    number: 1400,
    label: "Estudiantes Beneficiados",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="font-semibold uppercase tracking-[0.25em] text-[#003B70]">
            Internacionalización
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-800">
            Conectando la CUL con el mundo
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Nuestro compromiso es fortalecer la formación académica mediante
            alianzas internacionales, movilidad y cooperación con instituciones
            de todo el mundo.
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
                <Icon
                  size={42}
                  className="mx-auto mb-6 text-[#003B70]"
                />

                <div className="text-5xl font-extrabold text-[#003B70]">

                  +

                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />

                </div>

                <p className="mt-4 text-lg text-slate-600">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

