import Image from "next/image";
import { Mail } from "lucide-react";
import { TeamMember } from "@/data/contact";

interface Props {
  member: TeamMember;
  featured?: boolean;
}

export default function TeamCard({ member, featured = false }: Props) {
  return (
    <div
      className={`
        flex flex-col items-center text-center rounded-3xl bg-white p-6 border border-slate-200 shadow-sm
        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl
        ${featured ? "ring-2 ring-[#003B70]/10" : ""}
      `}
    >
      <div
        className={`
          relative rounded-2xl overflow-hidden bg-slate-100 mb-5 border-2 border-[#D9A404]/30 shadow-inner
          ${featured ? "w-36 h-36 sm:w-44 sm:h-44" : "w-28 h-28 sm:w-32 sm:h-32"}
        `}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
        {member.name}
      </h3>

      <p className="mt-1 text-xs sm:text-sm font-semibold text-[#003B70]">
        {member.role}
      </p>

      {member.subrole && (
        <p className="mt-1 text-[11px] text-slate-500 font-medium italic max-w-xs">
          {member.subrole}
        </p>
      )}

      <a
        href={`mailto:${member.email}`}
        className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-blue-50 text-xs font-medium text-[#003B70] border border-slate-200 transition-colors"
      >
        <Mail className="w-3.5 h-3.5 text-[#D9A404]" />
        <span className="truncate max-w-[200px]">{member.email}</span>
      </a>
    </div>
  );
}