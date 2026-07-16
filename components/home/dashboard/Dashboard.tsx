import KPI from "./KPI";
import { kpis } from "./dashboardData";

export default function Dashboard() {
  return (
    <section className="bg-[#F8FAFC] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-[#003B70]">
            Internacionalización
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            CUL en cifras
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Impacto del Departamento de Internacionalización .
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {kpis.map((item) => (
            <KPI
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
