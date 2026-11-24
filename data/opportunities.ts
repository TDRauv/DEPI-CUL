export interface LocalizedOpportunity {
  id: number;
  slug: string;
  image: string;
  category: string | string[];
  contactEmail?: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  deadline: { es: string; en: string };
  modality?: { es: string; en: string };
  countries?: { es: string[]; en: string[] };
  requirements?: { es: string[]; en: string[] };
  schedule?: {
    event: { es: string; en: string };
    date: { es: string; en: string };
  }[];
  applicationSteps?: {
    step: number;
    title: { es: string; en: string };
    description: { es: string; en: string };
    actionLabel: { es: string; en: string };
    actionUrl: string;
  }[];
  content?: { es: string[]; en: string[] };
  bulletins?: {
    year: number;
    items: {
      code: string;
      title: { es: string; en: string };
      topic: { es: string; en: string };
      url: string;
    }[];
  }[];
}

export const opportunities: LocalizedOpportunity[] = [
  {
    id: 1,
    slug: "intercambio",
    image: "/hero/hero5.jpg",
    category: "Movilidad",
    title: {
      es: "Movilidad Académica",
      en: "Academic Mobility",
    },
    summary: {
      es: "Conoce las oportunidades de movilidad académica en el DEPI.",
      en: "Discover academic mobility opportunities at DEPI.",
    },
    deadline: {
      es: "2026",
      en: "2026",
    },
  },
  {
    id: 2,
    slug: "programa-delfin",
    image: "/opportunities/delfin2026.png",
    category: "Investigación",
    contactEmail: "movilidad@ul.edu.co",
    title: {
      es: "PROGRAMA DEL VERANO CIENTÍFICO - DELFÍN 2026",
      en: "DELFÍN SCIENTIFIC SUMMER PROGRAM 2026",
    },
    summary: {
      es: "Vive una estancia de verano con un investigador internacional de manera virtual o presencial entre junio y julio de 2026.",
      en: "Experience a summer research stay with an international researcher virtually or in-person between June and July 2026.",
    },
    deadline: {
      es: "Cierre: 11 Mar 2026",
      en: "Deadline: Mar 11, 2026",
    },
    modality: {
      es: "Presencial o Virtual",
      en: "In-Person or Virtual",
    },
    countries: {
      es: [
        "México",
        "Colombia",
        "Costa Rica",
        "Perú",
        "Nicaragua",
        "Estados Unidos",
        "Ecuador",
        "Brasil",
        "Panamá",
        "Chile",
      ],
      en: [
        "Mexico",
        "Colombia",
        "Costa Rica",
        "Peru",
        "Nicaragua",
        "United States",
        "Ecuador",
        "Brazil",
        "Panama",
        "Chile",
      ],
    },
    requirements: {
      es: [
        "Ser estudiante CUL activo",
        "Estar mínimo en 4to Semestre",
        "Mínimo 3.5 de promedio acumulado",
        "No tener sanciones académicas o disciplinarias",
        "No haber realizado 2 veranos",
      ],
      en: [
        "Be an active CUL student",
        "Be enrolled in at least the 4th semester",
        "Minimum cumulative GPA of 3.5",
        "Have no academic or disciplinary sanctions",
        "Not having completed 2 previous Delfín summer stays",
      ],
    },
    schedule: [
      {
        event: {
          es: "Recepción de solicitudes (Fecha límite en plataforma CUL y Delfín)",
          en: "Application submission (Deadline on CUL and Delfín platforms)",
        },
        date: {
          es: "Hasta el 11 de marzo de 2026",
          en: "Until March 11, 2026",
        },
      },
      {
        event: {
          es: "Fecha de estancia de investigación",
          en: "Research stay dates",
        },
        date: {
          es: "8 de junio al 24 de julio de 2026",
          en: "June 8 to July 24, 2026",
        },
      },
      {
        event: {
          es: "Congreso Internacional presencial (México)",
          en: "In-person International Congress (Mexico)",
        },
        date: {
          es: "26 al 29 de agosto de 2026",
          en: "August 26 to 29, 2026",
        },
      },
      {
        event: {
          es: "Congreso Internacional virtual",
          en: "Virtual International Congress",
        },
        date: {
          es: "23 al 25 de septiembre de 2026",
          en: "September 23 to 25, 2026",
        },
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: {
          es: "Paso interno CUL – Postulación de interés",
          en: "Internal CUL Step – Expression of Interest",
        },
        description: {
          es: "Diligencia el formulario interno institucional para registrar tus datos de contacto y recibir acompañamiento personalizado del DEPI.",
          en: "Complete the internal institutional form to register your contact details and receive personalized guidance from DEPI.",
        },
        actionLabel: {
          es: "Diligenciar formulario de interés CUL",
          en: "Fill out CUL interest form",
        },
        actionUrl: "https://forms.office.com/r/NdJaKhsk0e",
      },
      {
        step: 2,
        title: {
          es: "Registro oficial en Plataforma Delfín",
          en: "Official Registration on Delfín Platform",
        },
        description: {
          es: "Revisa los lineamientos de la convocatoria y completa tu postulación en el portal oficial del Programa Delfín antes de la fecha límite.",
          en: "Review the call guidelines and complete your application on the official Delfín Program portal before the deadline.",
        },
        actionLabel: {
          es: "Ir a Plataforma Programa Delfín",
          en: "Go to Delfín Program Platform",
        },
        actionUrl: "https://programadelfin.org.mx",
      },
    ],
    content: {
      es: [
        "¿Te gustaría vivir una estancia de investigación con científicos de primer nivel? Se encuentra abierta la convocatoria del Verano Científico 2026 en modalidad virtual y/o presencial en Colombia o el exterior.",
        "Una iniciativa coordinada entre el Departamento de Internacionalización (DEPI), el Centro de Investigación y Proyectos (CINPRO) y el Programa Delfín para formar a los futuros investigadores y ciudadanos globales de la CUL.",
      ],
      en: [
        "Would you like to experience a research stay alongside top-level scientists? The 2026 Scientific Summer call is open in virtual and/or in-person modalities in Colombia or abroad.",
        "An initiative coordinated between the Department of Internationalization (DEPI), the Center for Research and Projects (CINPRO), and the Delfín Program to train CUL's future researchers and global citizens.",
      ],
    },
  },
  {
    id: 3,
    slug: "boletines-informativos",
    image: "/opportunities/imgboletininformativo.jpg",
    category: ["BECA", "CONVOCATORIAS", "ACTIVIDADES", "EVENTOS"],
    title: {
      es: "Boletines Informativos",
      en: "Informative Newsletters",
    },
    summary: {
      es: "Conoce las convocatorias abiertas para estudiar.",
      en: "Explore open calls, scholarships, and international study opportunities.",
    },
    deadline: {
      es: "2026",
      en: "2026",
    },
    content: {
      es: [
        "Comunidad CUL: nos permitimos compartir nuestros boletines informativos CUL GLOBAL, más cerca de ti, un espacio para la socialización de información de interés sobre becas, oportunidades, convocatorias, movilidad académica, cooperación internacional, experiencias globales, noticias y actividades de internacionalización.",
        "Estos contenidos están dirigidos a toda nuestra comunidad universitaria y aliados: Estudiantes de modalidad presencial y virtual, Docentes, Administrativos, Investigadores, Directivos, Egresados y Aliados.",
      ],
      en: [
        "CUL Community: we are pleased to share our informative newsletters 'CUL GLOBAL, closer to you', a space dedicated to sharing key insights on scholarships, opportunities, calls, academic mobility, international cooperation, global experiences, news, and internationalization activities.",
        "This content is aimed at our entire university community and partners: In-person and virtual students, Faculty, Administrative staff, Researchers, Directors, Alumni, and Partners.",
      ],
    },
    bulletins: [
      {
        year: 2026,
        items: [
          {
            code: "N.° 014-2026",
            title: { es: "Becas ICETEX Agosto", en: "ICETEX Scholarships August" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2026/B14.pdf",
          },
          {
            code: "N.° 013-2026",
            title: { es: "Beca Tuna Guajira", en: "Tuna Guajira Scholarship" },
            topic: { es: "Cultura y Arte", en: "Culture & Arts" },
            url: "/documents/boletines/2026/B13.pdf",
          },
          {
            code: "N.° 012-2026",
            title: { es: "Becas ICETEX Junio", en: "ICETEX Scholarships June" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2026/B12.pdf",
          },
          {
            code: "N.° 011-2026",
            title: { es: "Becas CLACSO", en: "CLACSO Scholarships" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2026/B11.pdf",
          },
          {
            code: "N.° 010-2026",
            title: { es: "Club de Inglés", en: "English Club" },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2026/B10.pdf",
          },
          {
            code: "N.° 009-2026",
            title: {
              es: "Club de Lengua de Señas Colombiana",
              en: "Colombian Sign Language Club",
            },
            topic: { es: "Inclusión y Lenguas", en: "Inclusion & Languages" },
            url: "/documents/boletines/2026/B9.pdf",
          },
          {
            code: "N.° 008-2026",
            title: {
              es: "Becas de Maestría Erasmus",
              en: "Erasmus Master's Scholarships",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2026/B8.pdf",
          },
          {
            code: "N.° 007-2026",
            title: {
              es: "Curso de Fundamentos de Inteligencia Artificial Generativa",
              en: "Generative Artificial Intelligence Fundamentals Course",
            },
            topic: { es: "Capacitación", en: "Training" },
            url: "/documents/boletines/2026/B7.pdf",
          },
          {
            code: "N.° 006-2026",
            title: { es: "IAU Webinar Series", en: "IAU Webinar Series" },
            topic: { es: "Webinars", en: "Webinars" },
            url: "/documents/boletines/2026/B6.pdf",
          },
          {
            code: "N.° 005-2026",
            title: {
              es: "British Council English Online 2026",
              en: "British Council English Online 2026",
            },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2026/B5.pdf",
          },
          {
            code: "N.° 004-2026",
            title: {
              es: "Programa Summer Camp Counselor",
              en: "Summer Camp Counselor Program",
            },
            topic: { es: "Movilidad", en: "Mobility" },
            url: "/documents/boletines/2026/B4.pdf",
          },
          {
            code: "N.° 003-2026",
            title: {
              es: "Convocatoria – Verano de la Investigación Delfín en la Universidad Internacional SEK",
              en: "Call – Delfín Scientific Summer at Universidad Internacional SEK",
            },
            topic: { es: "Investigación", en: "Research" },
            url: "/documents/boletines/2026/B3.pdf",
          },
          {
            code: "N.° 002-2026",
            title: {
              es: "Convocatoria del Verano Delfín 2026",
              en: "Delfín Scientific Summer 2026 Call",
            },
            topic: { es: "Investigación", en: "Research" },
            url: "/documents/boletines/2026/B2.pdf",
          },
          {
            code: "N.° 001-2026",
            title: {
              es: "Fortalecimiento de Habilidades en Inglés",
              en: "Strengthening English Language Skills",
            },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2026/B1.pdf",
          },
        ],
      },
      {
        year: 2025,
        items: [
          {
            code: "N.° 020-2025",
            title: {
              es: "Fortalecimiento del Inglés",
              en: "English Language Enhancement",
            },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2025/B20.pdf",
          },
          {
            code: "N.° 019-2025",
            title: { es: "Tuna Guajira", en: "Tuna Guajira" },
            topic: { es: "Cultura y Arte", en: "Culture & Arts" },
            url: "/documents/boletines/2025/B19.pdf",
          },
          {
            code: "N.° 018-2025",
            title: { es: "Becas ICETEX", en: "ICETEX Scholarships" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2025/B18.pdf",
          },
          {
            code: "N.° 017-2025",
            title: { es: "Feria Aula Italia", en: "Aula Italia Fair" },
            topic: { es: "Feria Internacional", en: "International Fair" },
            url: "/documents/boletines/2025/B17.pdf",
          },
          {
            code: "N.° 016-2025",
            title: { es: "América Sostenible", en: "Sustainable America" },
            topic: { es: "Sostenibilidad", en: "Sustainability" },
            url: "/documents/boletines/2025/B16.pdf",
          },
          {
            code: "N.° 015-2025",
            title: { es: "Club Lenguas de Señas", en: "Sign Language Club" },
            topic: { es: "Inclusión y Lenguas", en: "Inclusion & Languages" },
            url: "/documents/boletines/2025/B15.pdf",
          },
          {
            code: "N.° 014-2025",
            title: {
              es: "Intercambio Universidad de Guadalajara",
              en: "Universidad de Guadalajara Exchange",
            },
            topic: { es: "Movilidad", en: "Mobility" },
            url: "/documents/boletines/2025/B14.pdf",
          },
          {
            code: "N.° 013-2025",
            title: { es: "Campaña AIESEC", en: "AIESEC Campaign" },
            topic: { es: "Voluntariado", en: "Volunteering" },
            url: "/documents/boletines/2025/B13.pdf",
          },
          {
            code: "N.° 012-2025",
            title: { es: "Campaña AIESEC", en: "AIESEC Campaign" },
            topic: { es: "Voluntariado", en: "Volunteering" },
            url: "/documents/boletines/2025/B12.pdf",
          },
          {
            code: "N.° 011-2025",
            title: { es: "Becas ICETEX", en: "ICETEX Scholarships" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2025/B11.pdf",
          },
          {
            code: "N.° 010-2025",
            title: { es: "Clase Gratuita de Alemán", en: "Free German Class" },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2025/B10.pdf",
          },
          {
            code: "N.° 009-2025",
            title: { es: "Tuna Guajira", en: "Tuna Guajira" },
            topic: { es: "Cultura y Arte", en: "Culture & Arts" },
            url: "/documents/boletines/2025/B9.pdf",
          },
          {
            code: "N.° 008-2025",
            title: {
              es: "Club de Lenguas 2025 Señas",
              en: "Language Club 2025 Sign Language",
            },
            topic: { es: "Inclusión y Lenguas", en: "Inclusion & Languages" },
            url: "/documents/boletines/2025/B8.pdf",
          },
          {
            code: "N.° 007-2025",
            title: {
              es: "Convocatoria - Beca: EF Concurso Universitario",
              en: "Call - Scholarship: EF University Contest",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2025/B7.pdf",
          },
          {
            code: "N.° 006-2025",
            title: { es: "Becas Erasmus", en: "Erasmus Scholarships" },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2025/B6.pdf",
          },
          {
            code: "N.° 005-2025",
            title: {
              es: "Programa Internacional de Ciudadanía Global",
              en: "International Global Citizenship Program",
            },
            topic: { es: "Ciudadanía Global", en: "Global Citizenship" },
            url: "/documents/boletines/2025/B5.pdf",
          },
          {
            code: "N.° 004-2025",
            title: {
              es: "Convocatoria del Verano de la Investigación Científica",
              en: "Scientific Research Summer Call",
            },
            topic: { es: "Investigación", en: "Research" },
            url: "/documents/boletines/2025/B4.pdf",
          },
          {
            code: "N.° 003-2025",
            title: {
              es: "Conferencias Virtuales de Mercadeo e Inteligencia Artificial",
              en: "Virtual Conferences on Marketing & Artificial Intelligence",
            },
            topic: { es: "Conferencias", en: "Conferences" },
            url: "/documents/boletines/2025/B3.pdf",
          },
          {
            code: "N.° 002-2025",
            title: {
              es: "Becas Fundación Carolina",
              en: "Carolina Foundation Scholarships",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2025/B2.pdf",
          },
          {
            code: "N.° 001-2025",
            title: { es: "Master Class Alemán", en: "German Master Class" },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2025/B1.pdf",
          },
        ],
      },
      {
        year: 2024,
        items: [
          {
            code: "N.° 018-2024",
            title: { es: "Tuna Guajira para 2025-1", en: "Tuna Guajira for 2025-1" },
            topic: { es: "Cultura y Arte", en: "Culture & Arts" },
            url: "/documents/boletines/2024/B18.pdf",
          },
          {
            code: "N.° 017-2024",
            title: {
              es: "Club de Lenguas 2024 Inglés",
              en: "Language Club 2024 English",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2024/B17.pdf",
          },
          {
            code: "N.° 016-2024",
            title: {
              es: "English Summer Camp CUL 2024",
              en: "English Summer Camp CUL 2024",
            },
            topic: { es: "Inmersión Lingüística", en: "Language Immersion" },
            url: "/documents/boletines/2024/B16.pdf",
          },
          {
            code: "N.° 015-2024",
            title: {
              es: "Programa de Becas Institucionales ICETEX – Fundación Carolina",
              en: "ICETEX – Carolina Foundation Institutional Scholarship Program",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2024/B15.pdf",
          },
          {
            code: "N.° 014-2024",
            title: {
              es: "Pasantía para Estudiantes - Grupo RINSA",
              en: "Student Internship - RINSA Group",
            },
            topic: { es: "Pasantías", en: "Internships" },
            url: "/documents/boletines/2024/B14.pdf",
          },
          {
            code: "N.° 013-2024",
            title: {
              es: "Legalización de la Clase Espejo (para docentes)",
              en: "Mirror Class Formalization (for faculty)",
            },
            topic: { es: "Docencia Internacional", en: "International Teaching" },
            url: "/documents/boletines/2024/B13.pdf",
          },
          {
            code: "N.° 012-2024",
            title: {
              es: "Convenio Grupo RINSA (Perú) y la CUL",
              en: "RINSA Group (Peru) & CUL Cooperation Agreement",
            },
            topic: { es: "Convenios", en: "Agreements" },
            url: "/documents/boletines/2024/B12.pdf",
          },
          {
            code: "N.° 011-2024",
            title: {
              es: "Convocatoria - Beca (Grupo RINSA - CUL)",
              en: "Call - Scholarship (RINSA Group - CUL)",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2024/B11.pdf",
          },
          {
            code: "N.° 010-2024",
            title: {
              es: "Convocatoria Jóvenes Talento Mayo",
              en: "Young Talent Call May",
            },
            topic: { es: "Convocatoria", en: "Call" },
            url: "/documents/boletines/2024/B10.pdf",
          },
          {
            code: "N.° 009-2024",
            title: {
              es: "Semana de la Ciudadanía Global 2024-1",
              en: "Global Citizenship Week 2024-1",
            },
            topic: { es: "Ciudadanía Global", en: "Global Citizenship" },
            url: "/documents/boletines/2024/B9.pdf",
          },
          {
            code: "N.° 008-2024",
            title: {
              es: "Intercambio Académico en Universidad de Cundinamarca",
              en: "Academic Exchange at Universidad de Cundinamarca",
            },
            topic: { es: "Movilidad Nacional", en: "National Mobility" },
            url: "/documents/boletines/2024/B8.pdf",
          },
          {
            code: "N.° 007-2024",
            title: {
              es: "Club de Lenguas 2024 Inglés",
              en: "Language Club 2024 English",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2024/B7.pdf",
          },
          {
            code: "N.° 006-2024",
            title: {
              es: "Convocatoria Jóvenes Talento 2024 ICETEX",
              en: "Young Talent 2024 ICETEX Call",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2024/B6.pdf",
          },
          {
            code: "N.° 005-2024",
            title: {
              es: "Beca (Summer School UISEK Ecuador)",
              en: "Scholarship (Summer School UISEK Ecuador)",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2024/B5.pdf",
          },
          {
            code: "N.° 004-2024",
            title: { es: "Tuna Guajira", en: "Tuna Guajira" },
            topic: { es: "Cultura y Arte", en: "Culture & Arts" },
            url: "/documents/boletines/2024/B4.pdf",
          },
          {
            code: "N.° 003-2024",
            title: {
              es: "Legalización de la Clase Espejo (para docentes)",
              en: "Mirror Class Formalization (for faculty)",
            },
            topic: { es: "Docencia Internacional", en: "International Teaching" },
            url: "/documents/boletines/2024/B3.pdf",
          },
          {
            code: "N.° 002-2024",
            title: {
              es: "Convocatoria del Verano de la Investigación Científica",
              en: "Scientific Research Summer Call",
            },
            topic: { es: "Investigación", en: "Research" },
            url: "/documents/boletines/2024/B2.pdf",
          },
          {
            code: "N.° 001-2024",
            title: {
              es: "La lucha contra el discurso del odio",
              en: "Combating Hate Speech",
            },
            topic: { es: "Sensibilización y DDHH", en: "Awareness & Human Rights" },
            url: "/documents/boletines/2024/B1.pdf",
          },
        ],
      },
      {
        year: 2023,
        items: [
          {
            code: "N.° 009-2023",
            title: {
              es: "Especialización en Coaching Educativo (Convocatoria-Beca RINSA_CUL)",
              en: "Specialization in Educational Coaching (RINSA_CUL Scholarship Call)",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2023/B9.pdf",
          },
          {
            code: "N.° 008-2023",
            title: {
              es: "Intercambio Académico Regional",
              en: "Regional Academic Exchange",
            },
            topic: { es: "Movilidad", en: "Mobility" },
            url: "/documents/boletines/2023/B8.pdf",
          },
          {
            code: "N.° 007-2023",
            title: {
              es: "MAI (Misión Académica Internacional)",
              en: "IAM (International Academic Mission)",
            },
            topic: { es: "Movilidad", en: "Mobility" },
            url: "/documents/boletines/2023/B7.pdf",
          },
          {
            code: "N.° 006-2023",
            title: {
              es: "Clase Espejo y Docente-Experto Invitado",
              en: "Mirror Class & Guest Expert Lecturer",
            },
            topic: { es: "Docencia Internacional", en: "International Teaching" },
            url: "/documents/boletines/2023/B6.pdf",
          },
          {
            code: "N.° 005-2023",
            title: {
              es: "Club de Lenguas 2023 Italiano",
              en: "Language Club 2023 Italian",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2023/B5.pdf",
          },
          {
            code: "N.° 004-2023",
            title: {
              es: "Beca Estancia Corta Ecuador: UISEK – Summer School 2023",
              en: "Short Stay Scholarship Ecuador: UISEK – Summer School 2023",
            },
            topic: { es: "Beca", en: "Scholarship" },
            url: "/documents/boletines/2023/B4.pdf",
          },
          {
            code: "N.° 003-2023",
            title: { es: "Ponte Italiano", en: "Speak Italian (Ponte Italiano)" },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2023/B3.pdf",
          },
          {
            code: "N.° 002-2023",
            title: {
              es: "Club de Lenguas 2023 Francés",
              en: "Language Club 2023 French",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2023/B2.pdf",
          },
          {
            code: "N.° 001-2023",
            title: { es: "Portugués Básico", en: "Basic Portuguese" },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2023/B1.pdf",
          },
        ],
      },
      {
        year: 2022,
        items: [
          {
            code: "N.° 014-2022",
            title: {
              es: "Evento Internacional Global Glance",
              en: "Global Glance International Event",
            },
            topic: { es: "Evento Internacional", en: "International Event" },
            url: "/documents/boletines/2022/B14.pdf",
          },
          {
            code: "N.° 013-2022",
            title: {
              es: "Club Conversacional de Francés",
              en: "French Conversational Club",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2022/B13.pdf",
          },
          {
            code: "N.° 012-2022",
            title: {
              es: "Club Conversacional de Italiano",
              en: "Italian Conversational Club",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2022/B12.pdf",
          },
          {
            code: "N.° 011-2022",
            title: {
              es: "Oportunidades Globales con AIESEC",
              en: "Global Opportunities with AIESEC",
            },
            topic: { es: "Voluntariado y Pasantías", en: "Volunteering & Internships" },
            url: "/documents/boletines/2022/B11.pdf",
          },
          {
            code: "N.° 010-2022",
            title: { es: "Nivel Básico de Portugués", en: "Basic Level Portuguese" },
            topic: { es: "Idiomas", en: "Languages" },
            url: "/documents/boletines/2022/B10.pdf",
          },
          {
            code: "N.° 009-2022",
            title: {
              es: "Convocatoria Clase Espejo y/o Docente Experto Invitado 2022-2",
              en: "Mirror Class & Guest Expert Lecturer Call 2022-2",
            },
            topic: { es: "Docencia Internacional", en: "International Teaching" },
            url: "/documents/boletines/2022/B9.pdf",
          },
          {
            code: "N.° 008-2022",
            title: {
              es: "Convocatoria Clase Espejo y/o Docente Experto Invitado 2022-2",
              en: "Mirror Class & Guest Expert Lecturer Call 2022-2",
            },
            topic: { es: "Docencia Internacional", en: "International Teaching" },
            url: "/documents/boletines/2022/B8.pdf",
          },
          {
            code: "N.° 007-2022",
            title: {
              es: "Para Estudiantes CUL: Inscripción para Movilidad Virtual Internacional en la Universidade Estadual do Maranhão (Cursos de Portugués)",
              en: "For CUL Students: Registration for Virtual International Mobility at Universidade Estadual do Maranhão (Portuguese Courses)",
            },
            topic: { es: "Movilidad Virtual", en: "Virtual Mobility" },
            url: "/documents/boletines/2022/B7.pdf",
          },
          {
            code: "N.° 006-2022",
            title: {
              es: "Convocatoria Pasantía Virtual de Invierno Grupo RINSA (Perú)",
              en: "Virtual Winter Internship Call RINSA Group (Peru)",
            },
            topic: { es: "Pasantías", en: "Internships" },
            url: "/documents/boletines/2022/B6.pdf",
          },
          {
            code: "N.° 005-2022",
            title: {
              es: "La CUL firma Convenio de Cooperación con la Alianza Francesa de Barranquilla",
              en: "CUL Signs Cooperation Agreement with Alliance Française of Barranquilla",
            },
            topic: { es: "Convenios", en: "Agreements" },
            url: "/documents/boletines/2022/B5.pdf",
          },
          {
            code: "N.° 004-2022",
            title: {
              es: "Club de Lenguas (Italiano) - Junio 2022",
              en: "Language Club (Italian) - June 2022",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2022/B4.pdf",
          },
          {
            code: "N.° 003-2022",
            title: {
              es: "Club de Lenguas (Italiano) - Mayo 2022",
              en: "Language Club (Italian) - May 2022",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2022/B3.pdf",
          },
          {
            code: "N.° 002-2022",
            title: {
              es: "Club de Lenguas (Italiano) - Marzo 2022",
              en: "Language Club (Italian) - March 2022",
            },
            topic: { es: "Club de Lenguas", en: "Language Club" },
            url: "/documents/boletines/2022/B2.pdf",
          },
          {
            code: "N.° 001-2022",
            title: {
              es: "Pasantía Extraordinaria Internacional (100% Online)",
              en: "Extraordinary International Internship (100% Online)",
            },
            topic: { es: "Pasantías", en: "Internships" },
            url: "/documents/boletines/2022/B1.pdf",
          },
        ],
      },
    ],
  },
];