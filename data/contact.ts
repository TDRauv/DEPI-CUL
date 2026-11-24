export interface TeamMember {
  name: string;
  role: { es: string; en: string };
  subrole?: { es: string; en: string };
  email: string;
  image: string;
}

export const contactInfo = {
  department: {
    es: "Departamento de Internacionalización (DEPI)",
    en: "Department of Internationalization (DEPI)",
  },
  institution: "Corporación Universitaria Latinoamericana - CUL",
  location: "Cl. 58 #55 - 24 A, Barranquilla, Atlántico. Bloque A, Sótano - Piso 1",
  mainEmail: "asis.depi@ul.edu.co",
  channels: [
    {
      title: {
        es: "Boletines y Convocatorias",
        en: "Newsletters & Calls",
      },
      description: {
        es: "Recibir boletín informativo, convocatorias, becas y oportunidades.",
        en: "Receive informative newsletters, calls, scholarships, and opportunities.",
      },
      qrImage: "/contact/qr-boletin.png",
      actionLabel: {
        es: "Suscribirme al Boletín",
        en: "Subscribe to Newsletter",
      },
      actionUrl: "https://bit.ly/425JmVo?r=qr",
    },
    {
      title: {
        es: "Global Club",
        en: "Global Club",
      },
      description: {
        es: "Únete al Global Club: ciudadanos del mundo.",
        en: "Join Global Club: citizens of the world.",
      },
      qrImage: "/contact/qr-club.png",
      actionLabel: {
        es: "Unirme al Global Club",
        en: "Join Global Club",
      },
      actionUrl: "https://bit.ly/425JmVo?r=qr",
    },
    {
      title: {
        es: "Chat Teams - CUL Global",
        en: "Teams Chat - CUL Global",
      },
      description: {
        es: "CUL Global: más cerca de ti en Microsoft Teams.",
        en: "CUL Global: closer to you on Microsoft Teams.",
      },
      qrImage: "/contact/qr-teams.png",
      actionLabel: {
        es: "Abrir canal en Teams",
        en: "Open Teams Channel",
      },
      actionUrl:
        "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dasis.depi%40ul.edu.co&type=chat&deeplinkId=c77f044a-4567-4bca-beaf-79f4eba36c9b&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
    },
  ],
  leadership: [
    {
      name: "Kelin Pino Silvera",
      role: { es: "Directora DEPI", en: "DEPI Director" },
      email: "internacionalizacion@ul.edu.co",
      image: "/contact/team/kelin.png",
    },
    {
      name: "Ricardo Arturo Utria Viana",
      role: { es: "Auxiliar DEPI", en: "DEPI Assistant" },
      subrole: {
        es: "Gestión y Transformación Digital | Global Ambassador (Global CLUB)",
        en: "Digital Management & Transformation | Global Ambassador (Global CLUB)",
      },
      email: "asis.depi@ul.edu.co",
      image: "/contact/team/ricardo.png",
    },
    {
      name: "Carolina Florez",
      role: {
        es: "Ayudantía - DEPI - Movilidad Académica",
        en: "Student Assistant - DEPI - Academic Mobility",
      },
      subrole: {
        es: "Global Ambassador (Global CLUB)",
        en: "Global Ambassador (Global CLUB)",
      },
      email: "movilidad@ul.edu.co",
      image: "/contact/team/caro.png",
    },
  ] as TeamMember[],
  coordinators: [
    {
      name: "Ana B. Ortega Dolovitz",
      role: {
        es: "Líder - Currículo Global DEPI",
        en: "Leader - Global Curriculum DEPI",
      },
      email: "curriculoglobal@ul.edu.co",
      image: "/contact/team/anaortega.png",
    },
    {
      name: "Iliana Ivone Velez Sukier",
      role: {
        es: "Líder de Multilingüismo DEPI",
        en: "Multilingualism Leader DEPI",
      },
      email: "multilinguismo@ul.edu.co",
      image: "/contact/team/iliana.png",
    },
    {
      name: "Diego Armando Diaz Castro",
      role: {
        es: "Líder de Convenios Interinstitucionales DEPI",
        en: "Inter-Institutional Agreements Leader DEPI",
      },
      email: "conveniosinter@ul.edu.co",
      image: "/contact/team/diego.png",
    },
    {
      name: "Diana Carolina Montero de León",
      role: {
        es: "Líder Inter en Casa | Líder de Gestión y Cooperación DEPI",
        en: "Internationalization at Home | Management & Cooperation Leader DEPI",
      },
      email: "interencasa@ul.edu.co",
      image: "/contact/team/diana.png",
    },
    {
      name: "Néstor Fontalvo Osorio",
      role: {
        es: "Líder de Interculturalidad e Identidad DEPI",
        en: "Interculturality & Identity Leader DEPI",
      },
      email: "interculturalidad@ul.edu.co",
      image: "/contact/team/nestor.png",
    },
  ] as TeamMember[],
};