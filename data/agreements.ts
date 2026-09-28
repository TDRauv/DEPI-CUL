export interface AcademicAgreement {
  id: string;
  type: 'Marco' | 'Específico';
  scope: 'Internacional' | 'Nacional' | 'Regional';
  institution: string;
  objective: string;
  location: string;
}

export interface StrategicAllianceData {
  id: string;
  name: string;
  acronym: string;
  focus: string;
  scope: string;
}

export interface AllianceLogo {
  id: string;
  name: string;
  image: string;
}

// 1. CONVENIOS ACADÉMICOS
export const ACADEMIC_AGREEMENTS: AcademicAgreement[] = [
  {
    id: 'urbe',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD PRIVADA DR. RAFAEL BELLOSO CHACÍN (URBE)',
    objective: 'Cooperación Interinstitucional',
    location: 'Maracaibo / Venezuela',
  },
  {
    id: 'uisek',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD INTERNACIONAL SEK SER MEJORES (UISEK)',
    objective: 'Cooperación Interinstitucional',
    location: 'Quito / Ecuador',
  },
  {
    id: 'umecit',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD METROPOLITANA DE EDUCACIÓN, CIENCIA Y TECNOLOGÍA (UMECIT)',
    objective: 'Cooperación Interinstitucional',
    location: 'Ciudad de Panamá / Panamá',
  },
  {
    id: 'tessfp',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'TECNOLÓGICO DE ESTUDIOS SUPERIORES DE SAN FELIPE DEL PROGRESO (TESSFP)',
    objective: 'Cooperación Interinstitucional',
    location: 'San Felipe del Progreso, Toluca / México',
  },
  {
    id: 'itsoh',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'INSTITUTO TECNOLÓGICO SUPERIOR DE HIDALGO (ITSOH)',
    objective: 'Cooperación Interinstitucional',
    location: 'Ciudad de Hidalgo / México',
  },
  {
    id: 'upaep',
    type: 'Específico',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD POPULAR AUTÓNOMA DEL ESTADO DE PUEBLA, ASOCIACIÓN CIVIL (UPAEP)',
    objective: 'Cooperación Interinstitucional',
    location: 'Ciudad de Puebla / México',
  },
  {
    id: 'itst',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'INSTITUTO TECNOLÓGICO SUPERIOR DE TACÁMBARO-MICHOACÁN, MÉXICO (ITST)',
    objective: 'Cooperación Interinstitucional',
    location: 'Michoacán / México',
  },
  {
    id: 'unac',
    type: 'Específico',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD NACIONAL DEL CALLAO (FACULTAD DE CIENCIAS CONTABLES) - UNAC',
    objective: 'Cooperación Interinstitucional',
    location: 'Callao / Perú',
  },
  {
    id: 'uss',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD SEÑOR DE SIPÁN S.A.C (USS)',
    objective: 'Cooperación Interinstitucional',
    location: 'Chiclayo / Perú',
  },
  {
    id: 'cepcm',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'COLEGIO DE ESTUDIOS DE POSTGRADOS DE LA CIUDAD DE MÉXICO',
    objective: 'Cooperación Interinstitucional',
    location: 'Ciudad de México / México',
  },
  {
    id: 'hipocrates',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD DE HIPÓCRATES',
    objective: 'Cooperación Interinstitucional',
    location: 'Acapulco de Juárez, Guerrero / México',
  },
  {
    id: 'bridgewater',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'BRIDGEWATER STATE UNIVERSITY',
    objective: 'Cooperación Interinstitucional',
    location: 'Bridgewater, Massachusetts / EE. UU.',
  },
  {
    id: 'uift',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD ISIDRO FABELA DE TOLUCA',
    objective: 'Cooperación Interinstitucional',
    location: 'Toluca / México',
  },
  {
    id: 'selva',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD TECNOLÓGICA DE LA SELVA',
    objective: 'Cooperación Interinstitucional',
    location: 'Chiapas / México',
  },
  {
    id: 'investigacion-mexico',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD CULTURAL DE INVESTIGACIÓN, MÉXICO',
    objective: 'Cooperación Interinstitucional',
    location: 'Toluca / México',
  },
  {
    id: 'ceu',
    type: 'Marco',
    scope: 'Internacional',
    institution: 'CENTRO DE ESTUDIOS UNIVERSITARIOS',
    objective: 'Cooperación Interinstitucional',
    location: 'Madrid / España',
  },
  {
    id: 'udg',
    type: 'Específico',
    scope: 'Internacional',
    institution: 'UNIVERSIDAD DE GUADALAJARA, MÉXICO',
    objective: 'Intercambio Académico',
    location: 'Guadalajara / México',
  },
  {
    id: 'iberoamericana',
    type: 'Marco',
    scope: 'Nacional',
    institution: 'CORPORACIÓN UNIVERSITARIA IBEROAMERICANA',
    objective: 'Cooperación Interinstitucional',
    location: 'Bogotá / Colombia',
  },
  {
    id: 'san-buenaventura-coop',
    type: 'Marco',
    scope: 'Regional',
    institution: 'UNIVERSIDAD DE SAN BUENAVENTURA SECCIONAL CARTAGENA',
    objective: 'Cooperación Interinstitucional',
    location: 'Cartagena / Colombia',
  },
  {
    id: 'rafael-nunez',
    type: 'Marco',
    scope: 'Regional',
    institution: 'CORPORACIÓN UNIVERSITARIA RAFAEL NÚÑEZ',
    objective: 'Cooperación Interinstitucional',
    location: 'Cartagena / Colombia',
  },
  {
    id: 'san-buenaventura-homolog',
    type: 'Específico',
    scope: 'Regional',
    institution: 'UNIVERSIDAD DE SAN BUENAVENTURA SECCIONAL CARTAGENA',
    objective: 'Homologación',
    location: 'Cartagena / Colombia',
  },
  {
    id: 'camacho',
    type: 'Marco',
    scope: 'Nacional',
    institution: 'INSTITUCIÓN UNIVERSITARIA ANTONIO JOSÉ CAMACHO',
    objective: 'Cooperación Interinstitucional',
    location: 'Cali / Colombia',
  },
];

// 2. ALIANZAS ESTRATÉGICAS (TABLA DE REDES, FUNDACIONES, ASOCIACIONES)
export const STRATEGIC_ALLIANCES_DATA: StrategicAllianceData[] = [
  {
    id: 'rci',
    name: 'RED COLOMBIANA PARA LA INTERNACIONALIZACIÓN DE LA EDUCACIÓN SUPERIOR',
    acronym: 'RCI',
    focus: 'Internacionalización Educación Superior',
    scope: 'Colombia',
  },
  {
    id: 'iaeste',
    name: 'La Asociación Internacional para el Intercambio de Estudiantes para Experiencia Técnica / International Association for the Exchange of Students for Technical Experience',
    acronym: 'IAESTE',
    focus: 'Internacionalización Educación Superior',
    scope: 'Colombia',
  },
  {
    id: 'delfin',
    name: 'PROGRAMA INSTITUCIONAL PARA EL FORTALECIMIENTO DE LA INVESTIGACIÓN Y EL POSGRADO DEL PACÍFICO',
    acronym: 'DELFIN',
    focus: 'Pasantías y Prácticas',
    scope: 'Colombia',
  },
  {
    id: 'mca',
    name: 'MESA DE COOPERACIÓN DEL ATLÁNTICO',
    acronym: 'MCA',
    focus: 'Cooperación',
    scope: 'Colombia',
  },
  {
    id: 'aiesec',
    name: 'PROGRAMA INTERNACIONAL DE INTERCAMBIOS DE AIESEC',
    acronym: 'AIESEC',
    focus: 'Pasantías y Prácticas',
    scope: 'Ibagué / Colombia',
  },
  {
    id: 'ponte-italiano',
    name: 'LA FUNDACIÓN RAÍCES ÍTALO COLOMBIANAS PONTE ITALIANO',
    acronym: 'PONTE',
    focus: 'Multilingüismo / Multiculturalismo',
    scope: 'Colombia',
  },
  {
    id: 'inilat',
    name: 'PROGRAMA DE MOVILIDAD INILATMOV+',
    acronym: 'INILAT',
    focus: 'Esquema de Movilidad',
    scope: 'CHILE: Extensión a ARGENTINA, BRASIL, CHILE, COLOMBIA Y PERÚ',
  },
  {
    id: 'af-barranquilla',
    name: 'ALIANZA COLOMBO FRANCESA DE BARRANQUILLA',
    acronym: 'AF',
    focus: 'Multilingüismo / Multiculturalismo',
    scope: 'Barranquilla - Colombia',
  },
  {
    id: 'fsusa',
    name: 'FIRE SCHOOL USA (COORP TRAINING AND SERVICES) / OPERADO EN COLOMBIA POR IRO INGENIERIA DE RIESGOS OCUPACIONALES SAS',
    acronym: 'FSUSA',
    focus: 'Administrativo (Inter)',
    scope: 'EE. UU.',
  },
  {
    id: 'umap',
    name: 'UNIVERSITY MOBILITY IN ASIA AND THE PACIFIC',
    acronym: 'UMAP',
    focus: 'Movilidad',
    scope: 'Asia y Pacífico',
  },
  {
    id: 'rinsa',
    name: 'GRUPO RINSA',
    acronym: 'RINSA',
    focus: 'Internacionalización Educación Superior',
    scope: 'Chiclayo - Perú',
  },
  {
    id: 'anefh',
    name: 'SOCIEDAD NOVOMÉXICANA DE ESTUDIOS SOCIALES, FILOSÓFICOS Y HUMANÍSTICOS',
    acronym: 'ANEFH A.C.',
    focus: 'Internacionalización Educación Superior',
    scope: 'Toluca, México',
  },
  {
    id: 'cace',
    name: 'COMUNIDAD ACADÉMICA PARA LA CLASES ESPEJO',
    acronym: 'CACE',
    focus: 'Internacionalización Educación Superior',
    scope: '(Alianzas) Colombia - Bulgaria',
  },
];

// 3. LOGOS DEL CARRUSEL (15 imágenes en /contact/alianza/)
export const ALLIANCE_LOGOS: AllianceLogo[] = Array.from({ length: 15 }, (_, i) => ({
  id: `alianza-${i + 1}`,
  name: `Alianza Estratégica ${i + 1}`,
  image: `/contact/alianza/alianza${i + 1}.png`,
}));

