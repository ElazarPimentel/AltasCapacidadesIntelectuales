export interface AcademicAuthor {
  name: string;
  theory: string;
  description: string;
  externalLink?: string;
}

export const academicAuthors: AcademicAuthor[] = [
  {
    name: "Kazimierz Dabrowski",
    theory: "Teoría de la Desintegración Positiva",
    description: "Explica cómo las crisis emocionales pueden ser señales de crecimiento en personas con alta sensibilidad e intensidad. Su concepto de 'sobreexcitabilidades' ayuda a entender por qué muchos adultos ACI sienten tanto.",
    externalLink: "https://www.altascapacidadesytalentos.com/que-significa-tener-las-altas-capacidades/"
  },
  {
    name: "Joseph Renzulli",
    theory: "Modelo de los Tres Anillos",
    description: "Define las altas capacidades como la intersección de habilidad, creatividad y compromiso con la tarea. Su enfoque multidimensional nos aleja del mito del CI como única medida.",
    externalLink: "https://www.aest.es/altas-capacidades-intelectuales-o-superdotacion/"
  },
  {
    name: "Linda Silverman",
    theory: "Asincronía del Desarrollo",
    description: "Describe cómo las personas ACI pueden tener desarrollos cognitivos, emocionales y sociales a ritmos diferentes. Su trabajo sobre la asincronía explica muchas experiencias adultas.",
    externalLink: "https://www.altascapacidades.org.ar/GOPPAC.pdf"
  }
];

export const editorialCriteria = [
  "Claridad sin tecnicismos innecesarios",
  "Enfoque multidimensional (más allá del CI)",
  "Respeto por la experiencia subjetiva",
  "Orientación hacia profesionales especializados",
  "Actualización constante basada en literatura reciente"
]; 