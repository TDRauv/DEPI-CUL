export interface LocalizedNews {
  id: number;
  slug: string;
  image: string;
  category: "Relacionamiento" | "Movilidad" | "Eventos" | "Convenios" | "Investigación" | "Convocatoria";
  title: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
  date: {
    es: string;
    en: string;
  };
  content: {
    es: string[];
    en: string[];
  };
}

export const news: LocalizedNews[] = [
  {
    id: 5,
    slug: "cul-participo-en-nafsa-2026",
    image: "/news/news1.jpg",
    category: "Relacionamiento",
    date: {
      es: "26 al 29 de mayo, 2026",
      en: "May 26 - 29, 2026",
    },
    title: {
      es: "La Corporación Universitaria Latinoamericana (CUL) participó en la NAFSA 2026 Annual Conference & Expo",
      en: "Corporación Universitaria Latinoamericana (CUL) Participated in the NAFSA 2026 Annual Conference & Expo",
    },
    summary: {
      es: "La CUL hizo presencia en Orlando, Florida, representada por la directora del DEPI, Kelin Pino Silvera, promoviendo el relacionamiento internacional y presentando la iniciativa Atlántico 360° – Global Academic Hub.",
      en: "CUL attended in Orlando, Florida, represented by DEPI Director Kelin Pino Silvera, fostering international partnerships and presenting the Atlántico 360° – Global Academic Hub initiative.",
    },
    content: {
      es: [
        "La Corporación Universitaria Latinoamericana (CUL) participó en la NAFSA 2026 Annual Conference & Expo, realizada del 26 al 29 de mayo de 2026 en Orlando, Florida (EE. UU.), representada por la directora del Departamento de Internacionalización, Kelin Pino Silvera. Este escenario internacional reunió a líderes, instituciones de educación superior y organizaciones de todo el mundo para promover la internacionalización, el intercambio de buenas prácticas y la construcción de alianzas estratégicas.",
        "En el marco del evento, la CUL desarrolló una agenda de relacionamiento internacional que incluyó reuniones bilaterales, participación en espacios académicos y actividades de networking, generando nuevas oportunidades de cooperación para la institución y el territorio.",
        "Asimismo, en el Foro Colombia en NAFSA, la CUL presentó en la Poster Fair la iniciativa Atlántico 360° – Global Academic Hub, desarrollada en alianza con la Gobernación del Atlántico y la Universidad del Atlántico, como una apuesta para impulsar la cooperación internacional con enfoque territorial y proyectar al Atlántico como un referente de internacionalización.",
        "Agradecemos al ICETEX por el apoyo brindado para hacer posible la participación de la CUL en este importante escenario internacional, impulsando la construcción de alianzas que generan nuevas oportunidades para nuestra institución y la región.",
      ],
      en: [
        "Corporación Universitaria Latinoamericana (CUL) participated in the NAFSA 2026 Annual Conference & Expo, held from May 26 to 29, 2026 in Orlando, Florida (USA), represented by the Director of the Department of Internationalization, Kelin Pino Silvera. This premier international forum brought together higher education leaders, institutions, and global organizations to advance internationalization, share best practices, and build strategic alliances.",
        "During the conference, CUL advanced an institutional networking agenda that included bilateral meetings, academic panels, and networking sessions, generating high-impact cooperation opportunities for our university and the region.",
        "Furthermore, at the Colombia Forum in NAFSA, CUL showcased at the Poster Fair the 'Atlántico 360° – Global Academic Hub' initiative, developed in alliance with the Governorate of Atlántico and Universidad del Atlántico, aiming to foster territorial international cooperation and position our department as an academic hub.",
        "We express our gratitude to ICETEX for their support in making CUL's participation in this global event possible, fostering alliances that bring valuable opportunities to our students, faculty, and region.",
      ],
    },
  },
  {
    id: 4,
    slug: "estancia-academica-uabc-mexico-2026",
    image: "/news/news2.png",
    category: "Movilidad",
    date: {
      es: "8 al 16 de mayo, 2026",
      en: "May 8 - 16, 2026",
    },
    title: {
      es: "Estancia académica de la CUL en la Universidad Autónoma de Baja California (UABC), México",
      en: "CUL Academic Stay at Universidad Autónoma de Baja California (UABC), Mexico",
    },
    summary: {
      es: "La CUL desarrolló del 8 al 16 de mayo de 2026 una estancia académica en la Facultad de Humanidades y Ciencias Sociales de la UABC, fortaleciendo redes de cooperación, proyectos COIL y la proyección institucional.",
      en: "CUL carried out an academic stay from May 8 to 16, 2026 at UABC's Faculty of Humanities and Social Sciences, strengthening cooperation networks, COIL projects, and institutional impact.",
    },
    content: {
      es: [
        "La Corporación Universitaria Latinoamericana (CUL) desarrolló del 8 al 16 de mayo de 2026 una estancia académica en la Facultad de Humanidades y Ciencias Sociales de la Universidad Autónoma de Baja California (UABC), México, representada por Giselle Paola Polo Amashta, directora del programa de Licenciatura en Pedagogía Infantil de la Facultad de Ciencias Sociales.",
        "Durante la estancia se desarrolló una agenda académica que incluyó una conferencia para estudiantes y docentes sobre el fortalecimiento de la práctica docente e interculturalidad; reuniones con directivos y grupos de investigación para consolidar proyectos conjuntos; la culminación del curso colaborativo internacional (COIL) \"Interculturalidad en México y Colombia\"; la promoción internacional del XXXVII Congreso Internacional de Pedagogía Social y Foro Mundial de Pedagogía Social y Educación Social \"Educación para la Paz\", que tendrá como sede a la CUL en 2027; y la participación como conferencista magistral en el 1.º Encuentro Internacional y 4.º Regional de Cuerpos Académicos y Grupos de Investigación en Educación y Sociedad.",
        "Esta estancia fortaleció las redes de cooperación internacional, el trabajo colaborativo en investigación, la culminación exitosa del COIL entre ambas instituciones y la proyección académica de la CUL en escenarios internacionales.",
        "Agradecemos al ICETEX por su apoyo al fortalecimiento de la internacionalización de la educación superior y a la Universidad Autónoma de Baja California (UABC) por continuar consolidando esta alianza académica.",
      ],
      en: [
        "Corporación Universitaria Latinoamericana (CUL) conducted an academic stay from May 8 to 16, 2026 at the Faculty of Humanities and Social Sciences of Universidad Autónoma de Baja California (UABC), Mexico, represented by Giselle Paola Polo Amashta, Director of the Early Childhood Education program.",
        "The visit included a keynote lecture on teaching practice and interculturality; meetings with academic deans and research groups; the successful conclusion of the Collaborative Online International Learning (COIL) project 'Interculturality in Mexico and Colombia'; and the international promotion of the XXXVII International Congress of Social Pedagogy 'Education for Peace', to be hosted at CUL in 2027.",
        "This academic stay strengthened international research cooperation networks, collaborative student projects between both universities, and CUL's academic footprint abroad.",
        "We thank ICETEX for supporting higher education internationalization and UABC for continuing to strengthen this fruitful partnership.",
      ],
    },
  },
  {
    id: 3,
    slug: "congreso-internacional-pedagogia-social-sips-2027",
    image: "/news/news3.png",
    category: "Eventos",
    date: {
      es: "3 al 5 de febrero, 2027",
      en: "February 3 - 5, 2027",
    },
    title: {
      es: "XXXVII Congreso Internacional de Pedagogía Social (SIPS) y Foro Mundial \"Educación para la paz\"",
      en: "XXXVII International Congress of Social Pedagogy (SIPS) & World Forum \"Education for Peace\"",
    },
    summary: {
      es: "Barranquilla y la CUL serán sede de este magno encuentro internacional en febrero de 2027 para reflexionar sobre pedagogía social, políticas públicas y cultura de paz.",
      en: "Barranquilla and CUL will host this major international summit in February 2027 to examine social pedagogy, public policies, and peacebuilding culture.",
    },
    content: {
      es: [
        "Este evento pretende analizar y visibilizar el efecto transformador de la Pedagogía Social/Educación Social en relación con la construcción de cultura de paz en el mundo. Desde esta perspectiva se orienta a fortalecer la alianza entre el ámbito académico, profesional, las organizaciones y entidades, las políticas públicas y la sociedad civil.",
        "La Sociedad Iberoamericana de Pedagogía Social (SIPS) se compromete en el desarrollo de su XXXVII Congreso Internacional de Pedagogía Social en el contexto latinoamericano, acogiendo en esta edición el territorio colombiano (con sede en Barranquilla), como faro de los múltiples retos y avances para esta disciplina y profesión en la región iberoamericana y el mundo.",
        "Ejes temáticos del evento: Eje 1. Políticas públicas y propuestas intersectoriales para la paz. | Eje 2. Buenas prácticas socioeducativas para la equidad, la paz y la esperanza.",
        "Pre - Congreso Iberoamericano de Pedagogía Social: Miércoles 3 de febrero de 2027 en la Corporación Universitaria Latinoamericana (CUL) – Barranquilla (Modalidad presencial y virtual).",
        "XXXVII Congreso Internacional de Pedagogía Social (SIPS) y Foro Mundial: Jueves 4 y viernes 5 de febrero de 2027 en el Hotel Marriott – Barranquilla (Modalidad híbrida presencial y virtual).",
        "Para consultar detalles de agenda, inscripciones y tarifas, visita el portal oficial: https://sips.ul.edu.co/",
      ],
      en: [
        "This global congress aims to analyze the transformative impact of Social Pedagogy and Social Education on peacebuilding culture worldwide, bridging academia, public policy makers, and civil society.",
        "The Ibero-American Society of Social Pedagogy (SIPS) brings its 37th edition to Colombia, hosted in Barranquilla by CUL, highlighting regional solutions and educational methodologies.",
        "Thematic axes: Axis 1. Public policies and intersectoral initiatives for peace. | Axis 2. Socio-educational good practices for equity, peace, and hope.",
        "Pre-Congress: Wednesday, February 3, 2027 at CUL Campus – Barranquilla (Hybrid).",
        "Main World Forum & Congress: Thursday, Feb 4 & Friday, Feb 5, 2027 at Marriott Hotel – Barranquilla.",
        "For agenda information, registration, and submissions, visit the official website: https://sips.ul.edu.co/",
      ],
    },
  },
  {
    id: 2,
    slug: "mision-academica-uabc-mexico-en-la-cul-2026",
    image: "/news/news4.png",
    category: "Movilidad",
    date: {
      es: "8 al 17 de abril, 2026",
      en: "April 8 - 17, 2026",
    },
    title: {
      es: "La CUL recibió la misión académica de la Universidad Autónoma de Baja California (UABC), México",
      en: "CUL Hosted Academic Mission from Universidad Autónoma de Baja California (UABC), Mexico",
    },
    summary: {
      es: "Expertos internacionales de la UABC visitaron la CUL del 8 al 17 de abril de 2026, desarrollando clases espejo, proyectos COIL y conferencias magistrales en facultades clave.",
      en: "International professors from UABC visited CUL from April 8 to 17, 2026, leading mirror classes, COIL projects, and keynote sessions across key faculties.",
    },
    content: {
      es: [
        "La Corporación Universitaria Latinoamericana (CUL) recibió del 8 al 17 de abril de 2026 la misión académica de la Facultad de Humanidades y Ciencias Sociales de la Universidad Autónoma de Baja California (UABC), México, representada por el Dr. José Candelario Osuna García y el Mtro. Marcos Ledezma Velazco.",
        "Durante su estancia, los expertos desarrollaron una agenda académica que incluyó clases espejo y talleres, mesas de trabajo en investigación y currículo, encuentros institucionales con el Departamento de Internacionalización y el Club de Ciudadanía Global, el desarrollo del curso colaborativo internacional (COIL) \"Interculturalidad en México y Colombia\", y su participación como conferencistas internacionales.",
        "Esta misión fortaleció la cooperación académica entre la CUL y la UABC, promoviendo el intercambio de conocimiento, la innovación educativa y el desarrollo de proyectos conjuntos con proyección internacional.",
        "Agradecemos al ICETEX por su apoyo al fortalecimiento de la internacionalización de la educación superior y a la Universidad Autónoma de Baja California por esta valiosa experiencia.",
      ],
      en: [
        "Corporación Universitaria Latinoamericana (CUL) hosted an incoming academic mission from UABC Mexico from April 8 to 17, 2026, represented by Dr. José Candelario Osuna García and Prof. Marcos Ledezma Velazco.",
        "The delegation carried out mirror classes, curriculum design sessions, collaborative student forums, and the joint COIL project 'Interculturality in Mexico and Colombia', alongside guest keynote lectures in social sciences and physical education.",
        "This mission consolidated institutional ties between CUL and UABC, fostering knowledge transfer, pedagogical innovation, and future joint research endeavors.",
        "Special thanks to ICETEX for supporting incoming academic mobility and to UABC for their academic dedication.",
      ],
    },
  },
  {
    id: 1,
    slug: "ii-english-summer-camp-cul-2026",
    image: "/news/news5.png",
    category: "Movilidad",
    date: {
      es: "22 de febrero al 14 de marzo, 2026",
      en: "February 22 - March 14, 2026",
    },
    title: {
      es: "II English Summer Camp CUL 2026",
      en: "II English Summer Camp CUL 2026",
    },
    summary: {
      es: "Finalizó con éxito la segunda versión del English Summer Camp con la participación del docente internacional Dr. Rubén Carvajal Sacoto (UISEK Ecuador), INSTENALCO y el respaldo del ICETEX.",
      en: "The second edition of the English Summer Camp concluded successfully featuring international specialist Dr. Rubén Carvajal Sacoto (UISEK Ecuador), INSTENALCO, and ICETEX support.",
    },
    content: {
      es: [
        "La CUL en alianza con la Universidad Internacional SEK del Ecuador y el Instituto Técnico Nacional de Comercio (INSTENALCO), colegio público de Barranquilla, finalizó con éxito la 2da Versión del programa: ENGLISH SUMMER CAMP CUL 2026, llevado a cabo del 22 de febrero al 14 marzo del 2026 en Barranquilla.",
        "Este ejercicio académico le permitió a la comunidad universitaria vivir 3 semanas de inmersión lingüística y cultural con el docente extranjero especialista en idiomas, Dr. Rubén Carvajal Sacoto de UISEK Ecuador, fomentando el multilingüismo, la actividad internacional y la interculturalidad.",
        "El programa se articuló en torno a 4 líneas de acción principales: fomento de segunda lengua en aula (Currículo Global), club de inglés para funcionarios y docentes, e inmersión escolar comunitaria.",
        "Agradecemos a toda la comunidad participante y al ICETEX por su gestión para impulsar la internacionalización inclusiva en el Caribe colombiano.",
      ],
      en: [
        "CUL, in alliance with Universidad Internacional SEK (Ecuador) and public high school INSTENALCO, concluded the 2nd edition of the ENGLISH SUMMER CAMP CUL 2026, held from February 22 to March 14, 2026 in Barranquilla.",
        "The project offered 3 weeks of intensive linguistic and cultural immersion with guest language education expert Dr. Rubén Carvajal Sacoto (UISEK Ecuador), promoting multilingualism and global competencies.",
        "Activities included curriculum-integrated English sessions, specialized staff language clubs, and outreach workshops at local partner schools.",
        "We thank ICETEX and all participating institutions for fostering inclusive internationalization in our territory.",
      ],
    },
  },
];