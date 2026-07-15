import Link from "next/link";

const menu = [
  "¿Qué es DEPI?",
  "Movilidad Académica",
  "Internacionalización",
  "Relacionamiento",
  "Programas Inter",
  "Bienvenidos a Barranquilla",
];

export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center gap-8">

      {menu.map((item) => (
        <Link
          key={item}
          href="/"
          className="
            text-[15px]
            font-medium
            text-slate-700
            transition-all
            duration-300
            hover:text-[var(--color-primary)]
          "
        >
          {item}
        </Link>
      ))}

    </nav>
  );
}
