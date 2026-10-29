"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/context/LanguageContext";

export const menuItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.ecosystem", href: "/ecosistema-cul-global" },
  { key: "nav.virtual", href: "/cul-global-virtual" },
  { key: "nav.articulated", href: "/internacionalizacion-articulada" },
  { key: "nav.contact", href: "/contacto-e-interaccion" },
  { key: "nav.globalImpact", href: "/impacto-global-cul" },
];

export default function DesktopMenu() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        const title = t(item.key);

        return (
          <Link
            key={item.href}
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
            {title}

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