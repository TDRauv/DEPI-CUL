"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { mobilityByYear } from "../dashboardData";

export default function MobilityBarChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h3 className="mb-8 text-2xl font-bold text-slate-800">
        Movilidades por año
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mobilityByYear}>
          <XAxis dataKey="year" />
          <Tooltip />
          <Bar
            dataKey="total"
            radius={[10, 10, 0, 0]}
            fill="#003B70"
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
