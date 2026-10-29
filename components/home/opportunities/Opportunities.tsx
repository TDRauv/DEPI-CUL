"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionTitle from "@/components/ui/typography/SectionTitle";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";
import OpportunitiesGrid from "./OpportunitiesGrid";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Opportunities() {
  const { t } = useLanguage();

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t("opportunitiesHome.badge")}</SectionBadge>

          <div className="mt-5">
            <SectionTitle center>{t("opportunitiesHome.title")}</SectionTitle>
          </div>

          <SectionSubtitle center>
            {t("opportunitiesHome.subtitle")}
          </SectionSubtitle>
        </div>

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
            {t("opportunitiesHome.viewAll")}
          </Link>
        </div>
      </Container>
    </Section>
  );
}