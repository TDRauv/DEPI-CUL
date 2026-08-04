import Link from "next/link";

import OpportunitiesGrid from "./OpportunitiesGrid";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionTitle from "@/components/ui/typography/SectionTitle";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";

export default function Opportunities() {
  return (
    <Section className="bg-slate-50">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <SectionBadge>
            Oportunidades
          </SectionBadge>

          <div className="mt-5">
            <SectionTitle center>
              Oportunidades y Becas
            </SectionTitle>
          </div>

          <SectionSubtitle center>
            Descubre las convocatorias, becas y programas internacionales
            disponibles para estudiantes, docentes y administrativos de la CUL.
          </SectionSubtitle>

        </div>

        <OpportunitiesGrid />

        <div className="mt-16 flex justify-center">

          <Link
            href="/relacionamiento-y-oportunidades/becas-oportunidades"
            className="rounded-full bg-[#003B70] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#002B52]"
          >
            Ver todas las oportunidades
          </Link>

        </div>

      </Container>

    </Section>
  );
}