export interface SocialLink {
  label: string;
  url: string;
  type: 'instagram' | 'video' | 'gallery' | 'web';
}

export interface MobilityItem {
  id: string;
  category: 'Docente' | 'Estudiantil' | 'Directiva' | 'Entrante' | 'Institucional';
  title: string;
  subtitle: string;
  institution: string;
  country: string;
  flag: string;
  dates: string;
  image: string;
  participants?: string[];
  description: string;
  highlights: string[];
  links: SocialLink[];
  tags: string[];
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
    id: 'uabc-estancia-docente',
    category: 'Directiva',
    title: 'Estancia Académica e Interculturalidad en México',
    subtitle: 'Licenciatura en Pedagogía Infantil',
    institution: 'Universidad Autónoma de Baja California (UABC)',
    country: 'México',
    flag: '🇲🇽',
    dates: '8 al 16 de mayo de 2026',
    image: '/movilidad/movi1.png',
    participants: ['Giselle Paola Polo Amashta (Directora de Programa)'],
    description:
      'Estancia académica desarrollada en la Facultad de Humanidades y Ciencias Sociales de la UABC para el fortalecimiento de redes de cooperación, culminación exitosa de curso COIL y ponencia magistral.',
    highlights: [
      'Conferencia para docentes y estudiantes sobre práctica docente e interculturalidad',
      'Culminación del curso colaborativo internacional (COIL) "Interculturalidad en México y Colombia"',
      'Promoción del XXXVII Congreso Internacional de Pedagogía Social (Sede CUL 2027)',
      'Conferencia magistral en el 1.° Encuentro Internacional de Cuerpos Académicos',
      'Apoyo de ICETEX e internacionalización de la educación superior',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DanP5HGCcM4/',
        type: 'instagram',
      },
    ],
    tags: ['COIL', 'CurriculoGlobalCUL', 'UABC', 'ICETEX'],
  },
  {
    id: 'nafsa-2026-orlando',
    category: 'Directiva',
    title: 'Participación en NAFSA 2026 Annual Conference & Expo',
    subtitle: 'Posicionamiento y Cooperación Territorial',
    institution: 'NAFSA Association of International Educators',
    country: 'Estados Unidos',
    flag: '🇺🇸',
    dates: '26 al 29 de mayo de 2026',
    image: '/movilidad/movi2.png',
    participants: ['Kelin Pino Silvera (Directora DEPI)'],
    description:
      'Presencia institucional en el mayor escenario mundial de educación superior y redes de cooperación en Orlando, Florida.',
    highlights: [
      'Presentación en la Poster Fair de la iniciativa "Atlántico 360° – Global Academic Hub"',
      'Alianza con la Gobernación del Atlántico y Universidad del Atlántico',
      'Mesas de relacionamiento bilateral y networking institucional con líderes mundiales',
      'Apoyo integral de ICETEX',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DaliFtRCf5R/',
        type: 'instagram',
      },
    ],
    tags: ['NAFSA2026', 'Atlántico360', 'DEPI', 'ICETEX'],
  },
  {
    id: 'cepcm-acapulco-2024',
    category: 'Directiva',
    title: 'Misión Directiva en el VII Congreso Multidisciplinario CEPCM',
    subtitle: 'Convocatoria Expertos Internacionales ICETEX',
    institution: 'Colegio de Estudios de Posgrado de la Ciudad de México (CEPCM)',
    country: 'México',
    flag: '🇲🇽',
    dates: '21 al 24 de junio',
    image: '/movilidad/movi3.png',
    participants: [
      'Vicerrectoría Académica',
      'Vicerrectoría Administrativa y Financiera',
      'Dirección de Investigación (CINPRO)',
      'Dirección de Internacionalización (DEPI)',
    ],
    description:
      'Delegación directiva seleccionada por ICETEX para participar como mesa principal, panelistas y conferencistas en Acapulco, México.',
    highlights: [
      'Consolidación del convenio de cooperación bilateral de más de 3 años con el CEPCM',
      'Participación en mesa de honor, conversatorios y ponencias temáticas',
      'Definición de ruta y plan de trabajo de investigación y movilidad futura',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/C9s2LwkxDGZ/',
        type: 'instagram',
      },
    ],
    tags: ['CEPCM', 'CINPRO', 'ExpertosInternacionales', 'ICETEX'],
  },
  {
    id: 'lachec-2024-encuentro',
    category: 'Directiva',
    title: 'Liderazgo en LACHEC y Encuentro de Rectores/Vicerrectores',
    subtitle: 'Conferencia Latinoamericana y del Caribe de Internacionalización',
    institution: 'Red Colombiana para la Internacionalización (RCI - ASCUN)',
    country: 'Colombia',
    flag: '🇨🇴',
    dates: 'Octubre 2024',
    image: '/movilidad/movi4.png',
    participants: [
      'Dr. Jairo Martínez (Vicerrector Académico)',
      'Dra. Kelin Pino Silvera (Directora DEPI)',
    ],
    description:
      'Participación en el espacio cumbre de internacionalización universitaria del país, promoviendo el diálogo de altos directivos y la cooperación regional.',
    highlights: [
      'Participación en el Encuentro de Rectores y Vicerrectores',
      'Liderazgo de sesión paralela sobre cooperación con la Comunidad para la Acción RCI',
      'Coordinación de la reunión ordinaria del Nodo Caribe de la RCI',
      'Patrocinio y articulación con ICETEX',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DBHJflHxdSn/',
        type: 'instagram',
      },
    ],
    tags: ['LACHEC', 'RCI', 'ASCUN', 'ICETEX'],
  },
  {
    id: 'uisek-summer-school-2024',
    category: 'Directiva',
    title: 'UISEK Summer School: Empowering Communities',
    subtitle: 'Escuela Internacional de Verano en Quito y Limoncocha',
    institution: 'Universidad Internacional SEK (UISEK)',
    country: 'Ecuador',
    flag: '🇪🇨',
    dates: 'Verano 2024 (15 días)',
    image: '/movilidad/movi5.png',
    participants: [
      'Kelin Pino Silvera (Directora DEPI)',
      'Camila Cáceres (Ingeniería de Sistemas)',
      'Robinson Hernández (Educación Física)',
      'Dylan Aranzalez (Ingeniería de Sistemas)',
    ],
    description:
      'Inmersión formativa de 15 días en desarrollo sostenible, economía circular, flora/fauna y ciudadanía global con estudiantes de Polonia, Perú, Brasil, Chile y Ecuador.',
    highlights: [
      'Beneficio para 3 estudiantes bajo convenio marco bilateral suscrito CUL - UISEK',
      'Directora seleccionada como Experta Internacional por ICETEX (III Comité)',
      'Taller impartido sobre competencias globales y mesas de trabajo directivas',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DA_K9tCvN22/',
        type: 'instagram',
      },
    ],
    tags: ['UISEK', 'SummerSchool', 'Sostenibilidad', 'ICETEX'],
  },
  {
    id: 'afide-cuba-docente',
    category: 'Docente',
    title: 'X Convención Internacional de Actividad Física y Deporte (AFIDE)',
    subtitle: 'Licenciatura en Educación Física, Recreación y Deportes',
    institution: 'UCCFD e Instituto Nacional de Deportes (INDER)',
    country: 'Cuba',
    flag: '🇨🇺',
    dates: '27 al 30 de noviembre',
    image: '/movilidad/movi6.png',
    participants: ['PhD. (C) Everardo Manuel Sánchez Puche'],
    description:
      'Representación académica en La Habana, Cuba, bajo la consigna "Ciencia para vencer", respaldado por la convocatoria de Expertos Internacionales ICETEX.',
    highlights: [
      'Seleccionado en el IV Comité de Convocatoria de Expertos de ICETEX',
      'Ponencia y articulación en ciencias aplicadas al deporte y la actividad física',
      'Internacionalización curricular para la Facultad de Ciencias Sociales',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/C0KCZB4LEzv/',
        type: 'instagram',
      },
    ],
    tags: ['AFIDE', 'Deporte', 'EducacionFisica', 'ICETEX'],
  },
  {
    id: 'mai-pucv-chile',
    category: 'Directiva',
    title: 'Misión Académica Internacional (MAI CUL) en la PUCV',
    subtitle: 'Alianza Estratégica Colombia - Chile',
    institution: 'Pontificia Universidad Católica de Valparaíso (PUCV)',
    country: 'Chile',
    flag: '🇨🇱',
    dates: 'Noviembre 2024',
    image: '/movilidad/movi7.png',
    participants: ['Delegación de Directivos y Académicos CUL'],
    description:
      'Visita oficial de la delegación CUL a la Dirección General de Asuntos Internacionales (DGAI) de la Pontificia Universidad Católica de Valparaíso.',
    highlights: [
      'Encuentro protocolario y de planeación académica interinstitucional',
      'Fomento a la movilidad bidireccional "Vive el Intercambio"',
      'Registro oficial en formatos multimedia y Reel testimonial',
    ],
    links: [
      {
        label: 'Ver Reel Informativo',
        url: 'https://www.instagram.com/p/DCIK8x5vlUO/',
        type: 'video',
      },
      {
        label: 'Ver Galería del Encuentro',
        url: 'https://www.instagram.com/p/DCFaZPDvk4t/?img_index=1',
        type: 'gallery',
      },
    ],
    tags: ['MAI', 'PUCV', 'Chile', 'DGAI'],
  },
  {
    id: 'uabc-mision-entrante',
    category: 'Docente',
    title: 'Estancia Académica y de Investigación Docente Entrante',
    subtitle: 'Facultad de Humanidades y Ciencias Sociales UABC en CUL',
    institution: 'Universidad Autónoma de Baja California (UABC)',
    country: 'México',
    flag: '🇲🇽',
    dates: '8 al 17 de abril de 2026',
    image: '/movilidad/movi9.png',
    participants: [
      'Dr. José Candelario Osuna García (UABC)',
      'Mtro. Marcos Ledezma Velazco (UABC)',
    ],
    description:
      'Recepción de misión académica mexicana liderada por la Facultad de Ciencias Sociales y el DEPI para el desarrollo de clases espejo, conferencias y proyecto COIL.',
    highlights: [
      'Conferencias magistrales en IV Jornada de Ciencias Sociales y II Jornada de Educación Física',
      'Desarrollo de curso colaborativo COIL "Interculturalidad en México y Colombia"',
      'Mesas de trabajo curricular, de investigación y con el Global Club',
      'Apoyo de ICETEX para la movilidad de expertos internacionales',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DalvyBwidgV/',
        type: 'instagram',
      },
    ],
    tags: ['MovilidadEntrante', 'COIL', 'UABC', 'CienciasSociales'],
  },
  {
    id: 'viaja-con-la-cul',
    category: 'Institucional',
    title: 'I Jornada "Viaja con la CUL" e Instalación Global Club',
    subtitle: 'Sensibilización de Emprendimiento y Ciudadanía Global',
    institution: 'Dimis Adventure & DEPI CUL',
    country: 'México / Colombia',
    flag: '🌎',
    dates: '5 de abril',
    image: '/movilidad/movi19.png',
    participants: ['Gerardo Muñoz (CEO Dimis Adventure)'],
    description:
      'Lanzamiento oficial del Global CLUB (Club de los Ciudadanos Globales) acompañado de la conferencia de experiencias corporativas internacionales.',
    highlights: [
      'Conferencia "Historia de vida y servicios de la Empresa"',
      'Instalación formal del Club de Ciudadanía Global CUL',
      'Orientación y asesoría para estancias y pasantías al exterior',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/Cb0nuJ0vvXd/',
        type: 'instagram',
      },
    ],
    tags: ['GlobalClub', 'DimisAdventure', 'InternacionalizacionEnCasa'],
  },
  {
    id: 'convenios-uift-mexico',
    category: 'Directiva',
    title: 'Instalación CUL Global 2024 y Firma de Convenios con México',
    subtitle: 'Alianzas Estratégicas Institucionales',
    institution: 'Universidad Isidro Fabela de Toluca & Universidad Cultural de Investigación',
    country: 'México',
    flag: '🇲🇽',
    dates: '26 de agosto',
    image: '/movilidad/movi10.png',
    participants: ['Delegaciones CUL y Autoridades Académicas Mexicanas'],
    description:
      'Acto solemne de apertura de CUL Global 2024 con la rúbrica oficial de convenios de cooperación internacional.',
    highlights: [
      'Suscripción oficial de convenios marco de cooperación bilateral',
      'Rutas conjuntas para intercambio de alumnos, docentes e investigación',
      'Apertura oficial de la agenda de relacionamiento institucional CUL Global',
    ],
    links: [
      {
        label: 'Ver Video en Instagram',
        url: 'https://www.instagram.com/p/C_lWTkkRBf3/',
        type: 'video',
      },
    ],
    tags: ['Convenios', 'UIFT', 'CULGlobal', 'Cooperacion'],
  },
  {
    id: 'english-summer-camp',
    category: 'Docente',
    title: 'English Summer Camp CUL & Subvención ICETEX',
    subtitle: 'Docente Especialista Entrante en Lengua Extranjera',
    institution: 'DEPI CUL en alianza con Colegio INSTENALCO',
    country: 'Internacional',
    flag: '🌐',
    dates: '14 de octubre al 1 de noviembre',
    image: '/movilidad/movi11.png',
    participants: ['Especialista de Lengua Extranjera Invitada'],
    description:
      'Inmersión lingüística intensiva de 3 semanas ganadora de la convocatoria de Subvención ICETEX para docentes de idiomas.',
    highlights: [
      'Programa Docente Extranjera al Aula para estudiantes CUL',
      'Iniciativa "CUL Global más cerca de ti: Conversa con un extranjero"',
      'Club de inglés para directivos y docentes gestores',
      'Impacto social territorial en el colegio público aliado INSTENALCO',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/DEFsajypiRJ/?img_index=1',
        type: 'gallery',
      },
    ],
    tags: ['EnglishCamp', 'Bilinguismo', 'INSTENALCO', 'ICETEX'],
  },
  {
    id: 'testimonio-uift-director',
    category: 'Directiva',
    title: 'Testimonio Misión México-Colombia 2024: Universidad Isidro Fabela',
    subtitle: 'Experiencia y Alianza con la Facultad de Salud',
    institution: 'Universidad Isidro Fabela de Toluca (UIFT)',
    country: 'México',
    flag: '🇲🇽',
    dates: 'Agosto 2024',
    image: '/movilidad/movi12.png',
    participants: ['Lic. Gustavo Eduardo Mercado Miranda (Director Escuela de la Salud UIFT)'],
    description:
      'Palabras y balance del director general tras su llegada a la CUL como primer destino universitario en Colombia.',
    highlights: [
      'Reconocimiento a la hospitalidad de la comunidad estudiantil y profesoral',
      'Generación de lazos de hermandad académica México-Colombia',
      'Proyección de intercambios específicos en el área de ciencias de la salud',
    ],
    links: [
      {
        label: 'Ver Testimonio en Video',
        url: 'https://www.instagram.com/p/C_0wHVTgPSd/',
        type: 'video',
      },
    ],
    tags: ['Testimonio', 'UIFT', 'MisionEntrante', 'Salud'],
  },
  {
    id: 'dia1-culglobal-uift',
    category: 'Institucional',
    title: '6 Eventos Académicos Paralelos CUL Global',
    subtitle: 'Integración Tri-Facultad con Delegación Mexicana',
    institution: 'Universidad Isidro Fabela de Toluca & U. Cultural de Investigación',
    country: 'México',
    flag: '🇲🇽',
    dates: '26 de agosto',
    image: '/movilidad/movi13.png',
    participants: ['Estudiantes y docentes de las 3 facultades CUL'],
    description:
      'Primer día de actividades temáticas simultáneas, fortaleciendo el aprendizaje global en las aulas del campus universitario.',
    highlights: [
      'Desarrollo coordinado de 6 jornadas y talleres académicos paralelos',
      'Participación de los programas de todas las facultades institucionales',
      'Intercambio cultural y académico en el marco de la Ruta CUL Global 2028',
    ],
    links: [
      {
        label: 'Ver Galería en Instagram',
        url: 'https://www.instagram.com/p/C_QwtNZPtoM/?img_index=8',
        type: 'gallery',
      },
    ],
    tags: ['CULGlobal', 'JornadaAcademica', 'TresFacultades'],
  },
  {
    id: 'jidi-unc-asheville',
    category: 'Docente',
    title: 'I Jornada Internacional por la Diversidad e Inclusión (JIDI)',
    subtitle: 'Enfoque DEIA: Diversidad, Equidad, Inclusión y Accesibilidad',
    institution: 'University of North Carolina Asheville (UNC Asheville)',
    country: 'Estados Unidos',
    flag: '🇺🇸',
    dates: '14 de agosto',
    image: '/movilidad/movi14.png',
    participants: ['Dr. Tiece M. Ruffin (Directora Dpto. Educación UNC Asheville)'],
    description:
      'Jornada académica magistral en el auditorio CUL para reflexionar sobre inclusión, equidad y educación especial.',
    highlights: [
      'Conferencia sobre gestión comunitaria y aprendizaje inclusivo en el aula',
      'Alianza y patrocinio de Partners of the Americas',
      'Organización de Vicerrectoría Académica y DEPI',
    ],
    links: [
      {
        label: 'Ver en Instagram',
        url: 'https://www.instagram.com/p/C-oOPwGMMaA/',
        type: 'instagram',
      },
    ],
    tags: ['JIDI', 'DEIA', 'Inclusion', 'PartnersOfTheAmericas'],
  },
];

export const DELFIN_CALLS: DelfinCall[] = [
  {
    year: '2026',
    dates: '8 de junio al 24 de julio de 2026',
    deadline: '11 de marzo de 2026',
    image: '/opportunities/delfin2026.png',
    instagramUrl: 'https://www.instagram.com/p/DVZhJmvidUb/',
    details: 'Modalidad virtual y presencial en Colombia o el exterior.',
  },
  {
    year: '2025',
    dates: '9 de junio al 25 de julio',
    deadline: '14 de marzo (Reunión informativa: 7 de marzo)',
    image: '/movilidad/movi15.png',
    instagramUrl: 'https://www.instagram.com/p/DGgLyjwJyr4/',
    details: 'Congreso Presencial: 27-30 de agosto en México | Congreso Virtual: 24-26 de septiembre.',
  },
  {
    year: '2024',
    dates: '17 de junio al 2 de agosto',
    deadline: '15 de marzo',
    image: '/movilidad/movi16.png',
    instagramUrl: 'https://www.instagram.com/p/C3bVJZZsSP8/',
    details: 'Congreso Internacional Presencial: 28 al 31 de agosto en México.',
  },
];

export const DELFIN_EXPERIENCES: DelfinExperience[] = [
  {
    year: '2025',
    title: 'Recepción de Investigadores Delfín Foráneos en Campus CUL',
    participants: 'Estudiantes e investigadores de diversas IES aliadas',
    description:
      'La CUL abrió sus puertas a la delegación de estudiantes foráneos del Verano Científico para enriquecer sus competencias investigativas junto a investigadores y semilleros CUL.',
    image: '/movilidad/movi17.png',
    links: [
      {
        label: 'Ver Galería de Fotos',
        url: 'https://www.instagram.com/p/DKtFO1FtLjl/',
        type: 'gallery',
      },
      {
        label: 'Ver Video Reel',
        url: 'https://www.instagram.com/p/DMvVKRixdq-/',
        type: 'video',
      },
    ],
  },
  {
    year: '2022',
    title: 'Estancia Investigativa Internacional: U. Veracruzana y UT de Nayarit',
    participants: 'Mauricio Contreras (U. Veracruzana) y Steffany Haro (UT de Nayarit)',
    description:
      'Bienvenida protocolaria y culminación exitosa de estancia estival en Barranquilla organizada por el DEPI y el Centro de Investigaciones y Proyectos (CINPRO).',
    image: '/movilidad/movi18.png',
    links: [
      {
        label: 'Ver Reel de la Estancia',
        url: 'https://www.instagram.com/p/CrbOJVcrrRS/',
        type: 'video',
      },
      {
        label: 'Ver Fotos de Bienvenida',
        url: 'https://www.instagram.com/p/CfH_s_gMzEu/',
        type: 'gallery',
      },
      {
        label: 'Ver Fotos de Cierre',
        url: 'https://www.instagram.com/p/ChCqv7oLZ-e/',
        type: 'gallery',
      },
    ],
  },
];