"use client";

import Container from "@/components/ui/Container";
import useScroll from "@/hooks/useScroll";

import DesktopMenu from "./DesktopMenu";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";

export default function Header() {
  const isScrolled = useScroll();

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
  <div className="flex h-24 items-center">

    <Logo />

    <div className="ml-12">
      <DesktopMenu />
    </div>

  </div>
</Container>
    </header>
  );
}