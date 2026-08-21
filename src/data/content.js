export const profile = {
  name: "Manuel Martínez Pegalajar",
  role: "Técnico IT · Ciberseguridad · SOC Junior · Desarrollo de Software",
  location: "Jaén, Andalucía, España",
  tagline: "Técnico Superior en DAM con experiencia en soporte IT, desarrollo de software y ciberseguridad.",
  email: "manuujaen00@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuel-mart%C3%ADnez-pegalajar-942191372/",
  github: "https://github.com/manuump",
  cvPath: "/cv.pdf",
};

export const about = `Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con experiencia en soporte IT, desarrollo de software y ciberseguridad. Actualmente trabajo como Técnico IT y Programador Informático en Real Jaén C.F., dando soporte a usuarios y resolviendo incidencias de hardware, software, redes e impresoras, además de desarrollar y mantener aplicaciones. Cuento con experiencia previa en Hispasec, analizando y clasificando casos de phishing e ingeniería social. Mi objetivo es seguir creciendo en sistemas y operaciones de seguridad, aprendiendo rápido y resolviendo problemas de forma metódica.`;

export const experience = [
  {
    company: "Real Jaén C.F. S.A.D.",
    role: "Técnico IT / Programador Informático",
    period: "Abril 2026 – Actualidad",
    current: true,
    items: [
      "Soporte técnico a usuarios",
      "Diagnóstico de hardware y software",
      "Gestión de redes e impresoras",
      "Configuración y mantenimiento de equipos",
      "Desarrollo y mantenimiento de aplicaciones y plataformas web",
      "Resolución de incidencias",
    ],
  },
  {
    company: "Liberi Software",
    role: "Programador Full Stack",
    period: "Septiembre 2025 – Diciembre 2025",
    current: false,
    items: [
      "Desarrollo y mantenimiento de aplicaciones web",
      "PHP",
      "Bases de datos",
      "Resolución de errores e incidencias",
    ],
  },
  {
    company: "Hispasec",
    role: "Técnico de Ciberseguridad — Triaje",
    period: "Marzo 2025 – Junio 2025",
    current: false,
    items: [
      "Análisis y clasificación de casos relacionados con phishing",
      "Identificación de patrones de ingeniería social",
      "Triaje y categorización de incidentes",
      "Documentación de casos",
      "Escalado de casos que requerían revisión adicional",
    ],
  },
];

export const areas = [
  {
    id: "it",
    label: "IT & Soporte",
    status: "ACTIVE",
    items: ["Hardware", "Software", "Redes", "Soporte a usuarios", "Windows", "Linux (básico)", "Resolución de incidencias"],
  },
  {
    id: "sec",
    label: "Ciberseguridad",
    status: "EN CRECIMIENTO",
    items: ["Phishing", "Ingeniería social", "Triaje de amenazas", "Análisis de casos", "Conceptos de SIEM", "Conceptos de EDR", "Seguridad de sistemas"],
  },
  {
    id: "dev",
    label: "Desarrollo",
    status: "ACTIVE",
    items: ["Java", "JavaScript", "PHP", "React", "Spring Boot", "Node.js", "REST APIs"],
  },
];

export const projects = [
  {
    name: "ClubMaster",
    description: "ERP/CRM orientado a la gestión integral de clubes de fútbol.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    github: null,
    demo: null,
  },
  {
    name: "Jaén Card",
    description: "Plataforma turística digital para la provincia de Jaén.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Stripe", "Vercel", "Railway"],
    github: null,
    demo: null,
  },
  {
    name: "GameF11",
    description: "Juego de crear alineaciones y simular torneos con equipos ficticios creados por el usuario.",
    stack: [],
    github: null,
    demo: null,
  },
  {
    name: "MarkVision Sports",
    description: "Plataforma tecnológica orientada a la gestión de patrocinios deportivos.",
    stack: ["React", "Node.js"],
    github: null,
    demo: null,
  },
];

export const stack = [
  { group: "Lenguajes", items: ["Java", "JavaScript", "Kotlin", "PHP", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite"] },
  { group: "Backend", items: ["Spring Boot", "Node.js"] },
  { group: "Bases de datos", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"] },
  { group: "DevOps / Tools", items: ["Docker", "Git", "GitHub"] },
  { group: "IT", items: ["Windows", "Linux", "Redes", "Hardware", "Soporte técnico"] },
];

export const education = {
  school: "I.E.S. Virgen del Carmen",
  degree: "CFGS Desarrollo de Aplicaciones Multiplataforma",
  period: "2023 – 2025",
  description: "Formación especializada en desarrollo de aplicaciones, programación, bases de datos, sistemas, interfaces y desarrollo multiplataforma.",
};

export const goal = "Mi objetivo es seguir creciendo profesionalmente en el ámbito de las tecnologías de la información, especialmente en soporte IT, sistemas y ciberseguridad, adquiriendo experiencia y especialización en entornos profesionales de alta exigencia.";
