export interface TeamMember {
  name: string;
  role: string;
  subrole?: string;
  email: string;
  image: string;
}

export const contactInfo = {
  department: "Departamento de Internacionalización (DEPI)",
  institution: "Corporación Universitaria Latinoamericana - CUL",
  location: "Cl. 58 #55 - 24 A, Barranquilla, Atlántico. Bloque A, Sótano - Piso 1",
  mainEmail: "asis.depi@ul.edu.co",
  channels: [
    {
      title: "Boletines y Convocatorias",
      description: "Recibir boletín informativo, convocatorias, becas y oportunidades.",
      qrImage: "/contact/qr-boletin.png",
      actionLabel: "Suscribirme al Boletín",
      actionUrl: "https://bit.ly/425JmVo?r=qr",
    },
    {
      title: "Global Club",
      description: "Únete al Global Club: ciudadanos del mundo.",
      qrImage: "/contact/qr-club.png",
      actionLabel: "Unirme al Global Club",
      actionUrl: "https://bit.ly/425JmVo?r=qr",
    },
    {
      title: "Chat Teams - CUL Global",
      description: "CUL Global: más cerca de ti en Microsoft Teams.",
      qrImage: "/contact/qr-teams.png",
      actionLabel: "Abrir canal en Teams",
      actionUrl: "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchat%2F0%2F0%3Fusers%3Dasis.depi%40ul.edu.co&type=chat&deeplinkId=c77f044a-4567-4bca-beaf-79f4eba36c9b&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
    },
  ],
  leadership: [
    {
      name: "Kelin Pino Silvera",
      role: "Directora DEPI",
      email: "internacionalizacion@ul.edu.co",
      image: "/contact/team/kelin.png",
    },
    {
      name: "Ricardo Arturo Utria Viana",
      role: "Auxiliar DEPI",
      subrole: "Gestión y Transformación Digital | Global Ambassador (Global CLUB)",
      email: "asis.depi@ul.edu.co",
      image: "/contact/team/ricardo.png",
    },
    {
      name: "Carolina Florez",
      role: "Movilidad Académica",
      subrole: "Global Ambassador (Global CLUB)",
      email: "movilidad@ul.edu.co",
      image: "/contact/team/caro.png",
    },
  ] as TeamMember[],
  coordinators: [
    {
      name: "Ana B. Ortega Dolovitz",
      role: "Líder - Currículo Global DEPI",
      email: "curriculoglobal@ul.edu.co",
      image: "/contact/team/anaortega.png",
    },
    {
      name: "Iliana Ivone Velez Sukier",
      role: "Líder de Multilingüismo DEPI",
      email: "multilinguismo@ul.edu.co",
      image: "/contact/team/iliana.png",
    },
    {
      name: "Diego Armando Diaz Castro",
      role: "Líder de Convenios Interinstitucionales DEPI",
      email: "conveniosinter@ul.edu.co",
      image: "/contact/team/diego.png",
    },
    {
      name: "Diana Carolina Montero de León",
      role: "Líder Inter en Casa | Líder de Gestión y Cooperación DEPI",
      email: "interencasa@ul.edu.co",
      image: "/contact/team/diana.png",
    },
    {
      name: "Néstor Fontalvo Osorio",
      role: "Líder de Interculturalidad e Identidad DEPI",
      email: "interculturalidad@ul.edu.co",
      image: "/contact/team/nestor.png",
    },
  ] as TeamMember[],
};