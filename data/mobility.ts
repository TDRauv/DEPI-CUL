export interface SocialLink {
  label: string;
  url: string;
  type: "instagram" | "video" | "gallery" | "web";
}

export interface MobilityItem {
  id: string;
  category: "Docente" | "Estudiantil" | "Directiva" | "Entrante" | "Institucional";
  country: string;
  flag: string;
  image: string;
  links: SocialLink[];
  tags: string[];
  participants?: string[];
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  institution: { es: string; en: string };
  dates: { es: string; en: string };
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
}

export interface DelfinCall {
  year: string;
  dates: string;
  deadline: string;
  image: string;
  instagramUrl: string;
  details?: string;
}

export interface DelfinExperience {
  year: string;
  title: string;
  participants: string;
  description: string;
  image: string;
  links: SocialLink[];
}

export const MOBILITY_CASES: MobilityItem[] = [
  {
    id: "uabc-estancia-docente",
    category: "Directiva",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi1.png",
    participants: ["Giselle Paola Polo Amashta (Directora de Programa)"],
    tags: ["COIL", "CurriculoGlobalCUL", "UABC", "ICETEX"],
    title: {
      es: "Estancia Académica e Interculturalidad en México",
      en: "Academic Stay and Interculturality in Mexico",
    },
    subtitle: {
      es: "Licenciatura en Pedagogía Infantil",
      en: "Degree in Early Childhood Pedagogy",
    },
    institution: {
      es: "Universidad Autónoma de Baja California (UABC)",
      en: "Universidad Autónoma de Baja California (UABC)",
    },
    dates: {
      es: "8 al 16 de mayo de 2026",
      en: "May 8 - 16, 2026",
    },
    description: {
      es: "Estancia académica desarrollada en la Facultad de Humanidades y Ciencias Sociales de la UABC para el fortalecimiento de redes de cooperación, culminación exitosa de curso COIL y ponencia magistral.",
      en: "Academic stay carried out at UABC's Faculty of Humanities and Social Sciences to strengthen cooperation networks, complete the international COIL course, and deliver a keynote lecture.",
    },
    highlights: {
      es: [
        "Conferencia para docentes y estudiantes sobre práctica docente e interculturalidad",
        'Culminación del curso colaborativo internacional (COIL) "Interculturalidad en México y Colombia"',
        "Promoción del XXXVII Congreso Internacional de Pedagogía Social (Sede CUL 2027)",
        "Conferencia magistral en el 1.° Encuentro Internacional de Cuerpos Académicos",
        "Apoyo de ICETEX e internacionalización de la educación superior",
      ],
      en: [
        "Keynote lecture for faculty and students on teaching practice and interculturality",
        'Completion of the international COIL course "Interculturality in Mexico and Colombia"',
        "International promotion of the XXXVII International Congress of Social Pedagogy (CUL Host 2027)",
        "Keynote presentation at the 1st International Academic Research Group Meeting",
        "Support from ICETEX and higher education internationalization programs",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DanP5HGCcM4/",
        type: "instagram",
      },
    ],
  },
  {
    id: "nafsa-2026-orlando",
    category: "Directiva",
    country: "Estados Unidos",
    flag: "🇺🇸",
    image: "/movilidad/movi2.png",
    participants: ["Kelin Pino Silvera (Directora DEPI)"],
    tags: ["NAFSA2026", "Atlántico360", "DEPI", "ICETEX"],
    title: {
      es: "Participación en NAFSA 2026 Annual Conference & Expo",
      en: "Participation in NAFSA 2026 Annual Conference & Expo",
    },
    subtitle: {
      es: "Posicionamiento y Cooperación Territorial",
      en: "Institutional Positioning & Regional Cooperation",
    },
    institution: {
      es: "NAFSA Association of International Educators",
      en: "NAFSA Association of International Educators",
    },
    dates: {
      es: "26 al 29 de mayo de 2026",
      en: "May 26 - 29, 2026",
    },
    description: {
      es: "Presencia institucional en el mayor escenario mundial de educación superior y redes de cooperación en Orlando, Florida.",
      en: "Institutional presence in the world's premier higher education international conference in Orlando, Florida.",
    },
    highlights: {
      es: [
        'Presentación en la Poster Fair de la iniciativa "Atlántico 360° – Global Academic Hub"',
        "Alianza con la Gobernación del Atlántico y Universidad del Atlántico",
        "Mesas de relacionamiento bilateral y networking institucional con líderes mundiales",
        "Apoyo integral de ICETEX",
      ],
      en: [
        'Poster Fair presentation of the "Atlántico 360° – Global Academic Hub" initiative',
        "Partnership with the Governorate of Atlántico and Universidad del Atlántico",
        "Bilateral networking roundtables with global higher education leaders",
        "Full support from ICETEX",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DaliFtRCf5R/",
        type: "instagram",
      },
    ],
  },
  {
    id: "cepcm-acapulco-2024",
    category: "Directiva",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi3.png",
    participants: [
      "Vicerrectoría Académica",
      "Vicerrectoría Administrativa y Financiera",
      "Dirección de Investigación (CINPRO)",
      "Dirección de Internacionalización (DEPI)",
    ],
    tags: ["CEPCM", "CINPRO", "ExpertosInternacionales", "ICETEX"],
    title: {
      es: "Misión Directiva en el VII Congreso Multidisciplinario CEPCM",
      en: "Leadership Mission at the VII CEPCM Multidisciplinary Congress",
    },
    subtitle: {
      es: "Convocatoria Expertos Internacionales ICETEX",
      en: "ICETEX International Experts Program",
    },
    institution: {
      es: "Colegio de Estudios de Posgrado de la Ciudad de México (CEPCM)",
      en: "Colegio de Estudios de Posgrado de la Ciudad de México (CEPCM)",
    },
    dates: {
      es: "21 al 24 de junio",
      en: "June 21 - 24",
    },
    description: {
      es: "Delegación directiva seleccionada por ICETEX para participar como mesa principal, panelistas y conferencistas en Acapulco, México.",
      en: "Leadership delegation selected by ICETEX to participate as key panelists and keynote speakers in Acapulco, Mexico.",
    },
    highlights: {
      es: [
        "Consolidación del convenio de cooperación bilateral de más de 3 años con el CEPCM",
        "Participación en mesa de honor, conversatorios y ponencias temáticas",
        "Definición de ruta y plan de trabajo de investigación y movilidad futura",
      ],
      en: [
        "Consolidation of the 3+ year bilateral cooperation agreement with CEPCM",
        "Keynote participation in presidential tables, debates, and panels",
        "Definition of future research roadmaps and student/faculty exchange plans",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/C9s2LwkxDGZ/",
        type: "instagram",
      },
    ],
  },
  {
    id: "lachec-2024-encuentro",
    category: "Directiva",
    country: "Colombia",
    flag: "🇨🇴",
    image: "/movilidad/movi4.png",
    participants: [
      "Dr. Jairo Martínez (Vicerrector Académico)",
      "Dra. Kelin Pino Silvera (Directora DEPI)",
    ],
    tags: ["LACHEC", "RCI", "ASCUN", "ICETEX"],
    title: {
      es: "Liderazgo en LACHEC y Encuentro de Rectores/Vicerrectores",
      en: "Leadership at LACHEC & Rectors/Vice-Rectors Summit",
    },
    subtitle: {
      es: "Conferencia Latinoamericana y del Caribe de Internacionalización",
      en: "Latin American & Caribbean Conference for Internationalization",
    },
    institution: {
      es: "Red Colombiana para la Internacionalización (RCI - ASCUN)",
      en: "Colombian Network for Internationalization (RCI - ASCUN)",
    },
    dates: {
      es: "Octubre 2024",
      en: "October 2024",
    },
    description: {
      es: "Participación en el espacio cumbre de internacionalización universitaria del país, promoviendo el diálogo de altos directivos y la cooperación regional.",
      en: "Participation in the premier university internationalization conference in Colombia, fostering high-level leadership dialogue and regional cooperation.",
    },
    highlights: {
      es: [
        "Participación en el Encuentro de Rectores y Vicerrectores",
        "Liderazgo de sesión paralela sobre cooperación con la Comunidad para la Acción RCI",
        "Coordinación de la reunión ordinaria del Nodo Caribe de la RCI",
        "Patrocinio y articulación con ICETEX",
      ],
      en: [
        "Executive participation in the Rectors and Vice-Rectors Summit",
        "Led parallel conference session on regional cooperation with RCI Action Community",
        "Chaired the Caribbean Node meeting of RCI",
        "Strategic alignment with ICETEX sponsorship",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DBHJflHxdSn/",
        type: "instagram",
      },
    ],
  },
  {
    id: "uisek-summer-school-2024",
    category: "Directiva",
    country: "Ecuador",
    flag: "🇪🇨",
    image: "/movilidad/movi5.png",
    participants: [
      "Kelin Pino Silvera (Directora DEPI)",
      "Camila Cáceres (Ingeniería de Sistemas)",
      "Robinson Hernández (Educación Física)",
      "Dylan Aranzalez (Ingeniería de Sistemas)",
    ],
    tags: ["UISEK", "SummerSchool", "Sostenibilidad", "ICETEX"],
    title: {
      es: "UISEK Summer School: Empowering Communities",
      en: "UISEK Summer School: Empowering Communities",
    },
    subtitle: {
      es: "Escuela Internacional de Verano en Quito y Limoncocha",
      en: "International Summer School in Quito & Limoncocha",
    },
    institution: {
      es: "Universidad Internacional SEK (UISEK)",
      en: "Universidad Internacional SEK (UISEK)",
    },
    dates: {
      es: "Verano 2024 (15 días)",
      en: "Summer 2024 (15 days)",
    },
    description: {
      es: "Inmersión formativa de 15 días en desarrollo sostenible, economía circular, flora/fauna y ciudadanía global con estudiantes de Polonia, Perú, Brasil, Chile y Ecuador.",
      en: "15-day immersive training in sustainable development, circular economy, biodiversity, and global citizenship alongside students from Poland, Peru, Brazil, Chile, and Ecuador.",
    },
    highlights: {
      es: [
        "Beneficio para 3 estudiantes bajo convenio marco bilateral suscrito CUL - UISEK",
        "Directora seleccionada como Experta Internacional por ICETEX (III Comité)",
        "Taller impartido sobre competencias globales y mesas de trabajo directivas",
      ],
      en: [
        "Scholarships for 3 CUL students under bilateral CUL - UISEK framework",
        "DEPI Director selected as International Expert by ICETEX",
        "Workshops delivered on global skills and bilateral leadership roundtables",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DA_K9tCvN22/",
        type: "instagram",
      },
    ],
  },
  {
    id: "afide-cuba-docente",
    category: "Docente",
    country: "Cuba",
    flag: "🇨🇺",
    image: "/movilidad/movi6.png",
    participants: ["PhD. (C) Everardo Manuel Sánchez Puche"],
    tags: ["AFIDE", "Deporte", "EducacionFisica", "ICETEX"],
    title: {
      es: "X Convención Internacional de Actividad Física y Deporte (AFIDE)",
      en: "X International Convention of Physical Activity & Sports (AFIDE)",
    },
    subtitle: {
      es: "Licenciatura en Educación Física, Recreación y Deportes",
      en: "Degree in Physical Education, Recreation, and Sports",
    },
    institution: {
      es: "UCCFD e Instituto Nacional de Deportes (INDER)",
      en: "UCCFD & National Institute of Sports (INDER)",
    },
    dates: {
      es: "27 al 30 de noviembre",
      en: "November 27 - 30",
    },
    description: {
      es: 'Representación académica en La Habana, Cuba, bajo la consigna "Ciencia para vencer", respaldado por la convocatoria de Expertos Internacionales ICETEX.',
      en: 'Academic representation in Havana, Cuba under the banner "Science to Overcome", sponsored by ICETEX International Experts call.',
    },
    highlights: {
      es: [
        "Seleccionado en el IV Comité de Convocatoria de Expertos de ICETEX",
        "Ponencia y articulación en ciencias aplicadas al deporte y la actividad física",
        "Internacionalización curricular para la Facultad de Ciencias Sociales",
      ],
      en: [
        "Selected in ICETEX International Experts Committee",
        "Keynote paper on sports sciences and physical training methodologies",
        "Curriculum internationalization for the Faculty of Social Sciences",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/C0KCZB4LEzv/",
        type: "instagram",
      },
    ],
  },
  {
    id: "mai-pucv-chile",
    category: "Directiva",
    country: "Chile",
    flag: "🇨🇱",
    image: "/movilidad/movi7.png",
    participants: ["Delegación de Directivos y Académicos CUL"],
    tags: ["MAI", "PUCV", "Chile", "DGAI"],
    title: {
      es: "Misión Académica Internacional (MAI CUL) en la PUCV",
      en: "International Academic Mission (MAI CUL) at PUCV",
    },
    subtitle: {
      es: "Alianza Estratégica Colombia - Chile",
      en: "Colombia - Chile Strategic Alliance",
    },
    institution: {
      es: "Pontificia Universidad Católica de Valparaíso (PUCV)",
      en: "Pontificia Universidad Católica de Valparaíso (PUCV)",
    },
    dates: {
      es: "Noviembre 2024",
      en: "November 2024",
    },
    description: {
      es: "Visita oficial de la delegación CUL a la Dirección General de Asuntos Internacionales (DGAI) de la Pontificia Universidad Católica de Valparaíso.",
      en: "Official visit of the CUL delegation to the Directorate of International Affairs at Pontificia Universidad Católica de Valparaíso.",
    },
    highlights: {
      es: [
        "Encuentro protocolario y de planeación académica interinstitucional",
        'Fomento a la movilidad bidireccional "Vive el Intercambio"',
        "Registro oficial en formatos multimedia y Reel testimonial",
      ],
      en: [
        "Protocol and inter-institutional academic planning meeting",
        'Promotion of bidirectional mobility "Live the Exchange"',
        "Official documentation through multimedia and video testimonials",
      ],
    },
    links: [
      {
        label: "Ver Reel Informativo",
        url: "https://www.instagram.com/p/DCIK8x5vlUO/",
        type: "video",
      },
      {
        label: "Ver Galería del Encuentro",
        url: "https://www.instagram.com/p/DCFaZPDvk4t/?img_index=1",
        type: "gallery",
      },
    ],
  },
  {
    id: "uabc-mision-entrante",
    category: "Docente",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi9.png",
    participants: [
      "Dr. José Candelario Osuna García (UABC)",
      "Mtro. Marcos Ledezma Velazco (UABC)",
    ],
    tags: ["MovilidadEntrante", "COIL", "UABC", "CienciasSociales"],
    title: {
      es: "Estancia Académica y de Investigación Docente Entrante",
      en: "Incoming Academic and Faculty Research Stay",
    },
    subtitle: {
      es: "Facultad de Humanidades y Ciencias Sociales UABC en CUL",
      en: "UABC Faculty of Humanities & Social Sciences at CUL",
    },
    institution: {
      es: "Universidad Autónoma de Baja California (UABC)",
      en: "Universidad Autónoma de Baja California (UABC)",
    },
    dates: {
      es: "8 al 17 de abril de 2026",
      en: "April 8 - 17, 2026",
    },
    description: {
      es: "Recepción de misión académica mexicana liderada por la Facultad de Ciencias Sociales y el DEPI para el desarrollo de clases espejo, conferencias y proyecto COIL.",
      en: "Incoming academic visit from UABC professors to lead mirror classes, keynote conferences, and execute the joint COIL project.",
    },
    highlights: {
      es: [
        "Conferencias magistrales en IV Jornada de Ciencias Sociales y II Jornada de Educación Física",
        'Desarrollo de curso colaborativo COIL "Interculturalidad en México y Colombia"',
        "Mesas de trabajo curricular, de investigación y con el Global Club",
        "Apoyo de ICETEX para la movilidad de expertos internacionales",
      ],
      en: [
        "Keynote lectures at Social Sciences & Physical Education Conferences",
        'Execution of the joint COIL course "Interculturality in Mexico and Colombia"',
        "Curriculum and research meetings with faculty and the CUL Global Club",
        "ICETEX incoming international experts grant support",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DalvyBwidgV/",
        type: "instagram",
      },
    ],
  },
  {
    id: "viaja-con-la-cul",
    category: "Institucional",
    country: "México / Colombia",
    flag: "🌎",
    image: "/movilidad/movi19.png",
    participants: ["Gerardo Muñoz (CEO Dimis Adventure)"],
    tags: ["GlobalClub", "DimisAdventure", "InternacionalizacionEnCasa"],
    title: {
      es: 'I Jornada "Viaja con la CUL" e Instalación Global Club',
      en: '1st "Travel with CUL" Conference & Global Club Inauguration',
    },
    subtitle: {
      es: "Sensibilización de Emprendimiento y Ciudadanía Global",
      en: "Entrepreneurship Awareness & Global Citizenship",
    },
    institution: {
      es: "Dimis Adventure & DEPI CUL",
      en: "Dimis Adventure & DEPI CUL",
    },
    dates: {
      es: "5 de abril",
      en: "April 5",
    },
    description: {
      es: "Lanzamiento oficial del Global CLUB (Club de los Ciudadanos Globales) acompañado de la conferencia de experiencias corporativas internacionales.",
      en: "Official launch of the CUL Global CLUB accompanied by a conference on corporate internationalization experiences.",
    },
    highlights: {
      es: [
        'Conferencia "Historia de vida y servicios de la Empresa"',
        "Instalación formal del Club de Ciudadanía Global CUL",
        "Orientación y asesoría para estancias y pasantías al exterior",
      ],
      en: [
        'Keynote lecture "Life Journey & International Business Services"',
        "Formal establishment of the CUL Global Citizenship Club",
        "Guidance and coaching for international internships and student stays",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/Cb0nuJ0vvXd/",
        type: "instagram",
      },
    ],
  },
  {
    id: "convenios-uift-mexico",
    category: "Directiva",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi10.png",
    participants: ["Delegaciones CUL y Autoridades Académicas Mexicanas"],
    tags: ["Convenios", "UIFT", "CULGlobal", "Cooperacion"],
    title: {
      es: "Instalación CUL Global 2024 y Firma de Convenios con México",
      en: "CUL Global 2024 Inauguration & Bilateral Agreements with Mexico",
    },
    subtitle: {
      es: "Alianzas Estratégicas Institucionales",
      en: "Strategic Institutional Alliances",
    },
    institution: {
      es: "Universidad Isidro Fabela de Toluca & Universidad Cultural de Investigación",
      en: "Universidad Isidro Fabela de Toluca & Universidad Cultural de Investigación",
    },
    dates: {
      es: "26 de agosto",
      en: "August 26",
    },
    description: {
      es: "Acto solemne de apertura de CUL Global 2024 con la rúbrica oficial de convenios de cooperación internacional.",
      en: "Solemn opening ceremony of CUL Global 2024 with the signing of official international cooperation agreements.",
    },
    highlights: {
      es: [
        "Suscripción oficial de convenios marco de cooperación bilateral",
        "Rutas conjuntas para intercambio de alumnos, docentes e investigación",
        "Apertura oficial de la agenda de relacionamiento institucional CUL Global",
      ],
      en: [
        "Official signing of bilateral framework cooperation agreements",
        "Joint pathways for student/faculty exchanges and collaborative research",
        "Opening of the institutional global networking agenda",
      ],
    },
    links: [
      {
        label: "Ver Video en Instagram",
        url: "https://www.instagram.com/p/C_lWTkkRBf3/",
        type: "video",
      },
    ],
  },
  {
    id: "english-summer-camp",
    category: "Docente",
    country: "Jamaica",
    flag: "🌐",
    image: "/movilidad/movi11.png",
    participants: ["Especialista de Lengua Extranjera Invitada"],
    tags: ["EnglishCamp", "Bilinguismo", "INSTENALCO", "ICETEX"],
    title: {
      es: "English Summer Camp CUL & Subvención ICETEX",
      en: "English Summer Camp CUL & ICETEX Grant",
    },
    subtitle: {
      es: "Docente Especialista Entrante en Lengua Extranjera",
      en: "Incoming Foreign Language Specialist Visiting Professor",
    },
    institution: {
      es: "DEPI CUL en alianza con Colegio INSTENALCO",
      en: "DEPI CUL in partnership with INSTENALCO School",
    },
    dates: {
      es: "14 de octubre al 1 de noviembre",
      en: "October 14 - November 1",
    },
    description: {
      es: "Inmersión lingüística intensiva de 3 semanas ganadora de la convocatoria de Subvención ICETEX para docentes de idiomas.",
      en: "Intensive 3-week language immersion program awarded under the ICETEX incoming language specialist grant.",
    },
    highlights: {
      es: [
        "Programa Docente Extranjera al Aula para estudiantes CUL",
        'Iniciativa "CUL Global más cerca de ti: Conversa con un extranjero"',
        "Club de inglés para directivos y docentes gestores",
        "Impacto social territorial en el colegio público aliado INSTENALCO",
      ],
      en: [
        "Visiting Professor in the Classroom program for regular CUL students",
        'Outreach initiative "CUL Global closer to you: Conversation with a native speaker"',
        "English conversational clubs for directors and faculty",
        "Territorial educational outreach at public partner school INSTENALCO",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/DEFsajypiRJ/?img_index=1",
        type: "gallery",
      },
    ],
  },
  {
    id: "testimonio-uift-director",
    category: "Directiva",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi12.png",
    participants: ["Lic. Gustavo Eduardo Mercado Miranda (Director Escuela de la Salud UIFT)"],
    tags: ["Testimonio", "UIFT", "MisionEntrante", "Salud"],
    title: {
      es: "Testimonio Misión México-Colombia 2024: Universidad Isidro Fabela",
      en: "Testimonial Mexico-Colombia Mission 2024: Universidad Isidro Fabela",
    },
    subtitle: {
      es: "Experiencia y Alianza con la Facultad de Salud",
      en: "Experience & Partnership with Health Sciences Faculty",
    },
    institution: {
      es: "Universidad Isidro Fabela de Toluca (UIFT)",
      en: "Universidad Isidro Fabela de Toluca (UIFT)",
    },
    dates: {
      es: "Agosto 2024",
      en: "August 2024",
    },
    description: {
      es: "Palabras y balance del director general tras su llegada a la CUL como primer destino universitario en Colombia.",
      en: "Remarks and evaluation from the Director General on his visit to CUL as their first university partner destination in Colombia.",
    },
    highlights: {
      es: [
        "Reconocimiento a la hospitalidad de la comunidad estudiantil y profesoral",
        "Generación de lazos de hermandad académica México-Colombia",
        "Proyección de intercambios específicos en el área de ciencias de la salud",
      ],
      en: [
        "Recognition of the warm hospitality from students and faculty",
        "Strengthening academic ties between Mexico and Colombia",
        "Projected student and faculty exchanges in health sciences",
      ],
    },
    links: [
      {
        label: "Ver Testimonio en Video",
        url: "https://www.instagram.com/p/C_0wHVTgPSd/",
        type: "video",
      },
    ],
  },
  {
    id: "dia1-culglobal-uift",
    category: "Institucional",
    country: "México",
    flag: "🇲🇽",
    image: "/movilidad/movi13.png",
    participants: ["Estudiantes y docentes de las 3 facultades CUL"],
    tags: ["CULGlobal", "JornadaAcademica", "TresFacultades"],
    title: {
      es: "6 Eventos Académicos Paralelos CUL Global",
      en: "6 Simultaneous CUL Global Academic Events",
    },
    subtitle: {
      es: "Integración Tri-Facultad con Delegación Mexicana",
      en: "Tri-Faculty Academic Integration with Mexican Delegation",
    },
    institution: {
      es: "Universidad Isidro Fabela de Toluca & U. Cultural de Investigación",
      en: "Universidad Isidro Fabela de Toluca & U. Cultural de Investigación",
    },
    dates: {
      es: "26 de agosto",
      en: "August 26",
    },
    description: {
      es: "Primer día de actividades temáticas simultáneas, fortaleciendo el aprendizaje global en las aulas del campus universitario.",
      en: "First day of simultaneous specialized workshops, enriching global classroom learning on campus.",
    },
    highlights: {
      es: [
        "Desarrollo coordinado de 6 jornadas y talleres académicos paralelos",
        "Participación de los programas de todas las facultades institucionales",
        "Intercambio cultural y académico en el marco de la Ruta CUL Global 2028",
      ],
      en: [
        "Coordinated execution of 6 parallel academic workshops",
        "Active involvement of degree programs from all university faculties",
        "Intercultural and academic exchange within the #RutaCULGlobal2028 framework",
      ],
    },
    links: [
      {
        label: "Ver Galería en Instagram",
        url: "https://www.instagram.com/p/C_QwtNZPtoM/?img_index=8",
        type: "gallery",
      },
    ],
  },
  {
    id: "jidi-unc-asheville",
    category: "Docente",
    country: "Estados Unidos",
    flag: "🇺🇸",
    image: "/movilidad/movi14.png",
    participants: ["Dr. Tiece M. Ruffin (Directora Dpto. Educación UNC Asheville)"],
    tags: ["JIDI", "DEIA", "Inclusion", "PartnersOfTheAmericas"],
    title: {
      es: "I Jornada Internacional por la Diversidad e Inclusión (JIDI)",
      en: "1st International Conference for Diversity & Inclusion (JIDI)",
    },
    subtitle: {
      es: "Enfoque DEIA: Diversidad, Equidad, Inclusión y Accesibilidad",
      en: "DEIA Approach: Diversity, Equity, Inclusion & Accessibility",
    },
    institution: {
      es: "University of North Carolina Asheville (UNC Asheville)",
      en: "University of North Carolina Asheville (UNC Asheville)",
    },
    dates: {
      es: "14 de agosto",
      en: "August 14",
    },
    description: {
      es: "Jornada académica magistral en el auditorio CUL para reflexionar sobre inclusión, equidad y educación especial.",
      en: "Keynote academic conference in CUL auditorium addressing inclusion, equity, and special education methodologies.",
    },
    highlights: {
      es: [
        "Conferencia sobre gestión comunitaria y aprendizaje inclusivo en el aula",
        "Alianza y patrocinio de Partners of the Americas",
        "Organización de Vicerrectoría Académica y DEPI",
      ],
      en: [
        "Keynote lecture on community engagement and inclusive classroom learning",
        "Strategic partnership and sponsorship from Partners of the Americas",
        "Joint organization by Academic Vice-Rectory and DEPI",
      ],
    },
    links: [
      {
        label: "Ver en Instagram",
        url: "https://www.instagram.com/p/C-oOPwGMMaA/",
        type: "instagram",
      },
    ],
  },
];

export const DELFIN_CALLS: DelfinCall[] = [
  {
    year: "2026",
    dates: "8 de junio al 24 de julio de 2026",
    deadline: "11 de marzo de 2026",
    image: "/opportunities/delfin2026.png",
    instagramUrl: "https://www.instagram.com/p/DVZhJmvidUb/",
    details: "Modalidad virtual y presencial en Colombia o el exterior.",
  },
  {
    year: "2025",
    dates: "9 de junio al 25 de julio",
    deadline: "14 de marzo (Reunión informativa: 7 de marzo)",
    image: "/movilidad/movi15.png",
    instagramUrl: "https://www.instagram.com/p/DGgLyjwJyr4/",
    details: "Congreso Presencial: 27-30 de agosto en México | Congreso Virtual: 24-26 de septiembre.",
  },
  {
    year: "2024",
    dates: "17 de junio al 2 de agosto",
    deadline: "15 de marzo",
    image: "/movilidad/movi16.png",
    instagramUrl: "https://www.instagram.com/p/C3bVJZZsSP8/",
    details: "Congreso Internacional Presencial: 28 al 31 de agosto en México.",
  },
];

export const DELFIN_EXPERIENCES: DelfinExperience[] = [
  {
    year: "2025",
    title: "Recepción de Investigadores Delfín Foráneos en Campus CUL",
    participants: "Estudiantes e investigadores de diversas IES aliadas",
    description:
      "La CUL abrió sus puertas a la delegación de estudiantes foráneos del Verano Científico para enriquecer sus competencias investigativas junto a investigadores y semilleros CUL.",
    image: "/movilidad/movi17.png",
    links: [
      {
        label: "Ver Galería de Fotos",
        url: "https://www.instagram.com/p/DKtFO1FtLjl/",
        type: "gallery",
      },
      {
        label: "Ver Video Reel",
        url: "https://www.instagram.com/p/DMvVKRixdq-/",
        type: "video",
      },
    ],
  },
  {
    year: "2022",
    title: "Estancia Investigativa Internacional: U. Veracruzana y UT de Nayarit",
    participants: "Mauricio Contreras (U. Veracruzana) y Steffany Haro (UT de Nayarit)",
    description:
      "Bienvenida protocolaria y culminación exitosa de estancia estival en Barranquilla organizada por el DEPI y el Centro de Investigaciones y Proyectos (CINPRO).",
    image: "/movilidad/movi18.png",
    links: [
      {
        label: "Ver Reel de la Estancia",
        url: "https://www.instagram.com/p/CrbOJVcrrRS/",
        type: "video",
      },
      {
        label: "Ver Fotos de Bienvenida",
        url: "https://www.instagram.com/p/CfH_s_gMzEu/",
        type: "gallery",
      },
      {
        label: "Ver Fotos de Cierre",
        url: "https://www.instagram.com/p/ChCqv7oLZ-e/",
        type: "gallery",
      },
    ],
  },
];