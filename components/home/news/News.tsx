"use client";

import Link from "next/link";
import NewsGrid from "./NewsGrid";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionBadge from "@/components/ui/typography/SectionBadge";
import SectionTitle from "@/components/ui/typography/SectionTitle";
import SectionSubtitle from "@/components/ui/typography/SectionSubtitle";
import { useLanguage } from "@/app/context/LanguageContext";

export default function News() {
  const { t } = useLanguage();

  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>{t("newsHome.badge")}</SectionBadge>

          <div className="mt-5">
            <SectionTitle center>{t("newsHome.title")}</SectionTitle>
          </div>

          <SectionSubtitle center>{t("newsHome.subtitle")}</SectionSubtitle>
        </div>

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
            {t("newsHome.viewAll")}
          </Link>
        </div>
      </Container>
    </Section>
  );
}