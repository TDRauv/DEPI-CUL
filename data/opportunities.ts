import { Opportunity } from "@/types/opportunity";

export const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Intercambio Académico",
    summary:
      "Conoce las convocatorias abiertas para estudiar un semestre en el exterior.",
    image: "/opportunities/intercambio.png",
    category: "Movilidad",
    deadline: "Cierre: 15 Ago 2026",
    slug: "Intercambio",
  },
  {
    id: 2,
    title: "Programa Delfín",
    summary:
      "Participa en una estancia de investigación con instituciones nacionales e internacionales.",
    image: "/opportunities/opp3.jpeg",
    category: "Investigación",
    deadline: "Cierre: 30 Ago 2026",
    slug: "programa-delfin",
  },
  {
    id: 3,
    title: "Boletines Informativos",
    summary:
      "Conoce las convocatorias abiertas para estudiar.",
    image: "/opportunities/imgboletininformativo.jpg",
    category: "Beca",
    deadline: "Cierre: 20 Oct 2026",
    slug: "DEPI",
  },
];

