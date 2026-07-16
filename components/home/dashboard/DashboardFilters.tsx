"use client";

export default function DashboardFilters() {
  return (
    <div className="mb-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-md md:flex-row">

      <div>

        <h3 className="text-2xl font-bold text-slate-800">
          Estadísticas de Movilidad
        </h3>

        <p className="mt-1 text-slate-500">
          Consulta los indicadores del Departamento de Internacionalización.
        </p>

      </div>

      <div className="flex gap-4">

        <select
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-[#003B70] focus:outline-none"
        >
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>

        <select
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-[#003B70] focus:outline-none"
        >
          <option>Todos</option>
          <option>Estudiantes</option>
          <option>Docentes</option>
          <option>Administrativos</option>
        </select>

      </div>

    </div>
  );
}
