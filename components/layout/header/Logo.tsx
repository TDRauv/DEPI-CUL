import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="https://ul.edu.co"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/logos/logo-cul.png"
        alt="Logo CUL"
        width={180}
        height={60}
        priority
      />
    </Link>
  );
}