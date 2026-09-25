"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    title: "Ecosistema CUL Global",
    href: "/ecosistema-cul-global",
  },
  // {
  //  title: "Movilidad Académica",
  //  href: "/movilidad-academica",
  // },
  {
    title: "Relacionamiento",
    href: "/relacionamiento",
  },
  {
    title: "Programas Inter",
    href: "/programas-inter",
  },
  {
    title: "Clubs",
    href: "/clubs", // Nota: se recomienda minúscula en URLs web
  },
  {
    title: "Canales de Comunicación",
    href: "/canales-de-comunicacion",
  },
  {
    title: "Bienvenidos a Barranquilla",
    href: "/barranquilla",
  },
];

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {menu.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`
              relative
              whitespace-nowrap
              text-[15px]
              font-semibold
              transition-colors
              duration-200
              py-1
              ${isActive ? "text-[#003B70]" : "text-slate-700 hover:text-[#003B70]"}
            `}
          >
            {item.title}

            {/* Línea indicadora activa o en hover */}
            <span
              className={`
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                bg-[#D9A404]
                transition-transform
                duration-300
                origin-left
                ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}