import Container from "@/components/ui/Container";

import HeaderTop from "./HeaderTop";
import Logo from "./logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <HeaderTop />

      <Container>

        <div className="flex h-24 items-center justify-between">

          <Logo />

          <Navigation />

        </div>

      </Container>

    </header>
  );
}
