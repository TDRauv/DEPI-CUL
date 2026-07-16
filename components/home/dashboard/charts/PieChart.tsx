"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { mobilityByType } from "../dashboardData";

const COLORS = [
  "#003B70",
  "#F28C28",
  "#60A5FA",
];

export default function MobilityPieChart() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h3 className="mb-8 text-2xl font-bold">
        Movilidad por tipo
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={mobilityByType}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
          >
            {mobilityByType.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}
