import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="https://ul.edu.co"
      target="_blank"
      className="flex items-center"
    >
      <Image
        src="/logos/logo-cul.png"
        alt="Corporación Universitaria Latinoamericana"
        width={180}
        height={70}
        priority
      />
    </Link>
  );
}
