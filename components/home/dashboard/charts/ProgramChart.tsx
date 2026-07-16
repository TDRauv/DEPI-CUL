"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { mobilityPrograms } from "../dashboardData";

export default function ProgramChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h3 className="mb-8 text-2xl font-bold">
        Movilidad por programa
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={mobilityPrograms}
        >
          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="program"
            width={120}
          />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#003B70"
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
