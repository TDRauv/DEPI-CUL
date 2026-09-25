import Link from "next/link";

const menu = [
  {
    title: "Ecosistema CUL Global",
    href: "/ecosistema-cul-global",
  },
// {
//  title: "Movilidad Académica",
// href: "/movilidad-academica",
//},
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
    href: "/Clubs",
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
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {menu.map((item) => (
  <Link
  key={item.title}
  href={item.href}
  className="
    relative
    whitespace-nowrap
    text-[15px]
    font-medium
    text-slate-700
    transition-all
    duration-300
    hover:text-[#003B70]
  "
>
  {item.title}
</Link>
      ))}
    </nav>
  );
}