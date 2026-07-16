import Link from "next/link";

const menu = [
  {
    title: "¿Qué es DEPI?",
    href: "/que-es-depi",
  },
  {
    title: "Movilidad",
    href: "/movilidad-academica",
  },
  {
    title: "Internacionalización Articulada",
    href: "/internacionalizacion-articulada",
  },
  {
    title: "Relacionamiento",
    href: "/relacionamiento",
  },
  {
    title: "Programas Inter",
    href: "/programas-inter",
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