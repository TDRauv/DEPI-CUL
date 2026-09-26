import Link from "next/link";
import NewsGrid from "./NewsGrid";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionTitle from "@/components/ui/typography/SectionTitle";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";

export default function News() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Noticias</SectionBadge>

          <div className="mt-5">
            <SectionTitle center>Últimas noticias</SectionTitle>
          </div>

          <SectionSubtitle center>
            Descubre las actividades, convenios, eventos y oportunidades más
            recientes del Departamento.
          </SectionSubtitle>
        </div>

        {/* Solo mostrará las 3 últimas con id más alto: 5, 4 y 3 */}
        <NewsGrid limit={3} />

        <div className="mt-16 flex justify-center">
          <Link
            href="/noticias"
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
            Ver todas las noticias
          </Link>
        </div>
      </Container>
    </Section>
  );
}