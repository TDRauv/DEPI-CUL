"use client";

import CountUp from "react-countup";

interface Props {
  title: string;
  value: number;
  icon: string;
}

export default function KPI({
  title,
  value,
  icon,
}: Props) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl"
    >
      <div className="mb-6 text-5xl">
        {icon}
      </div>

      <h3 className="text-5xl font-extrabold text-[#003B70]">
        +
        <CountUp
          end={value}
          duration={2}
        />
      </h3>

      <p className="mt-3 text-lg text-slate-600">
        {title}
      </p>
    </div>
  );
}

