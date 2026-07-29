import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-6x1 px-8 text-center text-white">

        <h1 className="text-5xl font-bold lg:text-7xl">
          Departamento de Internacionalización
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 lg:text-2xl">
          Te invitamos a transformarte en un CIUDADANO GLOBAL 
        </p>
        
        <Link
          href="/que-es-depi"
          className="
            mt-10
            inline-flex
            rounded-lg
            bg-[#003B70]
            px-8
            py-4
            text-lg
            font-semibold
            transition-all
            duration-300
            hover:bg-[#002B52]
          "
        >
          Conoce el DEPI
        </Link>

      </div>
    </div>
  );
}