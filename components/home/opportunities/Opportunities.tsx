import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionTitle from "@/components/ui/typography/SectionTitle";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";
import OpportunitiesGrid from "./OpportunitiesGrid";

export default function Opportunities() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Financiamiento y Movilidad</SectionBadge>

          <div className="mt-5">
            <SectionTitle center>Oportunidades y Convocatorias</SectionTitle>
          </div>

          <SectionSubtitle center>
            Descubre convocatorias, becas, programas, estancias académicas, movilidad nacional e internacional
            y otras oportunidades compartidas por el DEPI para fortalecer tu experiencia global.
          </SectionSubtitle>
        </div>

        {/* Muestra las oportunidades usando el Grid */}
        <OpportunitiesGrid />

        <div className="mt-16 flex justify-center">
          <Link
            href="/oportunidades"
            className="
              rounded-full
              bg-[#003B70]
              px-8
              py-4
              text-white
              font-semibold
              transition-all
              duration-300
              hover:bg-[#002B52]
              hover:scale-105"
          >
            Ver todas las oportunidades
          </Link>
        </div>
      </Container>
    </Section>
  );
}