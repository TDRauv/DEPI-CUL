"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import useScroll from "@/hooks/useScroll";

import DesktopMenu, { menu } from "./DesktopMenu";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";

export default function Header() {
  const isScrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-md"
        }
      `}
    >
      <HeaderTop />

      <Container>
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <Logo />

          {/* Menú para pantallas grandes */}
          <div className="hidden lg:block ml-12">
            <DesktopMenu />
          </div>

          {/* Botón hamburguesa para celulares y tablets */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:text-[#003B70] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#003B70] lg:hidden transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Menú desplegable móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-6 py-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between
                    ${
                      isActive
                        ? "bg-blue-50 text-[#003B70] border-l-4 border-[#D9A404]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#003B70]"
                    }
                  `}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#D9A404]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}