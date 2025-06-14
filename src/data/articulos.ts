// src/data/articulos.ts

export interface Articulo {
  title: string;       // Título legible
  filename: string;    // Nombre del archivo PDF
  tags?: string[];     // Tags opcionales
  summary?: string;    // Descripción breve
  abstract: string;    // Abstract en HTML
}

export const articulos: Articulo[] = [
  {
    title: "La Audiencia Imaginaria: Un Análisis Psicológico desde sus Orígenes hasta la Era Digital",
    filename: "La Audiencia Imaginaria_ Un Análisis Psicológico desde sus Orígenes hasta la Era Digital P01V06.pdf",
    tags: ["psicología", "audiencia imaginaria"],
    abstract: `<p>Originalmente, la audiencia imaginaria, un concepto acuñado por David Elkind en 1967, describía la creencia egocéntrica de los adolescentes de estar bajo constante y minuciosa observación y juicio por parte de sus pares y extraños, magnificando su visibilidad e importancia. Era una construcción mental interna, una percepción distorsionada ligada al desarrollo que generaba ansiedad y autocrítica.</p>

<p>Con la llegada de las redes sociales, esta audiencia, antes puramente imaginaria, ha evolucionado a una entidad pseudo-real. El diseño intrínseco de estas plataformas —con su flujo constante de publicaciones, "me gusta" y comentarios— crea un entorno que amplifica y refuerza esta percepción. Cada interacción o su ausencia es interpretada como evaluación, transformando un sesgo cognitivo en una realidad social y conductual persistente.</p>

<p>Las posibles consecuencias negativas de esta transición incluyen una intensificación de la auto-presentación idealizada, una búsqueda desmedida de validación a través de métricas numéricas ("me gusta"), el fomento del miedo a perderse algo (FOMO) y una comparación social constante. Estos mecanismos explotan necesidades psicológicas fundamentales, llevando a un ciclo adictivo que puede impactar negativamente la autoestima y el bienestar mental, al mantener a los individuos en un estado continuo de auto-evaluación y búsqueda de aprobación externa en un escenario digital omnipresente.</p>`
  },
  {
    title: "La Audiencia Imaginaria: Cuando la Audiencia no está presente",
    filename: "La Audiencia Imaginaria_ Cuando la Audiencia no está presente P02V06.pdf",
    tags: ["psicología", "audiencia imaginaria"],
    abstract: `<p>El concepto de audiencia imaginaria, introducido por David Elkind en 1967, es fundamental para comprender el egocentrismo adolescente. Se define como la creencia, a menudo exagerada, de los adolescentes de que son el centro de atención y que sus acciones, apariencia y pensamientos están siendo constantemente observados y juzgados por una multitud de personas. Esta percepción surge con la capacidad de pensamiento abstracto, pero los adolescentes asumen erróneamente que los demás comparten sus propias preocupaciones.</p>

<p>El texto distingue dos manifestaciones clave del fenómeno. La Audiencia Imaginaria Presente se refiere a cuando el adolescente se encuentra rodeado de personas que probablemente no le están prestando atención, pero él siente que sí, experimentando una elevada autoconciencia y preocupación por cómo es percibido, como si estuviera en un "escenario" social bajo constante escrutinio. La Audiencia Imaginaria Ausente, por otro lado, se manifiesta cuando el adolescente realiza acciones imaginando que lo están viendo, aunque esté solo. Esto implica que el adolescente, al llevar a cabo una acción destacable, proyecta mentalmente cómo una audiencia reaccionaría con admiración o aprobación, como un atleta en solitario que imagina aplausos después de una jugada exitosa. Esta faceta refleja la necesidad de validación y la creencia en la propia singularidad.</p>

<p>Si bien la audiencia imaginaria es un rasgo distintivo de la adolescencia, el consenso académico reconoce que sus características pueden persistir en la adultez, aunque con menor intensidad, manifestándose como elevada autoconciencia, perfeccionismo, ansiedad social e influenciando comportamientos en entornos digitales. El estudio de este fenómeno es crucial para entender el comportamiento adolescente y cómo sus ecos resuenan en la adultez, particularmente en la era digital.</p>`
  },
  {
    title: "La Audiencia Imaginaria: Aspectos Positivos y Adversos",
    filename: "La Audiencia Imaginaria_ Aspectos Positivos y Adversos P03V06.pdf",
    tags: ["psicología", "audiencia imaginaria"],
    abstract: `<p>La Introducción de este texto explora la "audiencia imaginaria" como un fenómeno psicológico arraigado, una actuación para un público invisible que influye en pensamientos y comportamientos incluso en soledad. Se enfatiza una dimensión particular de este concepto: la fantasía de ser visto y admirado por actos nobles o destacables, incluso sin observadores reales. El psicólogo David Elkind acuñó el término en 1967 para describir la creencia adolescente, a menudo exagerada, de ser el centro de atención y de que sus acciones, apariencia y pensamientos son constantemente observados y juzgados, sea la audiencia física o no. Aunque la formulación original reconocía que el público podía ser "admirador o crítico", el énfasis inicial se inclinaba hacia el escrutinio negativo y la ansiedad.</p>

<p>El fenómeno de esta audiencia imaginaria ausente y admiradora posee Funciones Adaptativas. Contrario a ser un mero error cognitivo, se considera un proceso psicológico complejo que ayuda a los individuos a afrontar la ansiedad por separación y a mantener un sentido de conexión emocional con figuras significativas en su ausencia. Contribuye positivamente a la formación de una identidad coherente y única, y sirve como un potente motivador interno, impulsando comportamientos deseados, incluyendo acciones prosociales. Actúa como un "ensayo cognitivo" para la atención pública anticipada, fomentando la autoaceptación y la resiliencia a través de un autoconcepto saludable. Estas fantasías, aunque a veces asociadas con resultados desadaptativos, refuerzan la autoestima y la construcción de la identidad, proporcionando una poderosa motivación interna para aspiraciones prosociales y acciones loables.</p>`
  },
  {
    title: "La Audiencia Imaginaria, Redes Sociales y falso Auto-Diagnóstico ACI",
    filename: "La Audiencia Imaginaria, Redes Sociales y falso Auto-Diagnóstico ACI P04V06.pdf",
    tags: ["psicología", "ACI", "redes sociales"],
    abstract: `<p>El concepto de la audiencia imaginaria, originalmente descrito por David Elkind en 1967 como una creencia adolescente de estar bajo constante observación y juicio, ha sido profundamente transformado por las redes sociales. Estas plataformas digitales han convertido esta percepción en una realidad tangible, donde la retroalimentación inmediata amplifica la autoconciencia y el comportamiento en línea. Este fenómeno se vincula con el creciente auto-diagnóstico de condiciones como las Altas Capacidades Intelectuales (ACI).</p>

<p>Un riesgo crucial de este auto-diagnóstico de ACI radica en la confusión con características negativas que no son exclusivas de la superdotación, como la ansiedad o las dificultades sociales. Individuos sin un CI que cumpla con los criterios de ACI pueden autoidentificarse erróneamente basándose en estas experiencias compartidas. La percepción del entorno y la validación de la audiencia imaginaria en línea a menudo refuerzan estas creencias incorrectas, lo que puede retrasar el acceso a la ayuda profesional y a intervenciones adecuadas a las necesidades reales del individuo.</p>`
  },
  {
    title: "Criterios Contemporáneos para la Identificación de Altas Capacidades Intelectuales (ACI)",
    filename: "Criterios Contemporáneos para la Identificación de Altas Capacidades Intelectuales (ACI) P04V06.pdf",
    tags: ["ACI", "identificación"],
    abstract: `<p>La confusión sobre las Altas Capacidades Intelectuales (ACI) nace porque el término «superdotación» designa simultáneamente dos realidades: un potencial cognitivo general medible mediante Cociente Intelectual (CI) y talentos específicos en áreas como artes, deportes o liderazgo.</p>

<p>Distinguir claramente ambas acepciones es crucial para que cada persona —niño, adolescente o adulto— pueda identificar correctamente qué tipo de apoyo necesita, evitando la confusión de participar en programas inapropiados.</p>

<p>Este texto aborda dicha ambigüedad reservando el término ACI para aquellos perfiles con talentos excepcionales y un CI elevado, mientras que utiliza talento o virtuosismo para describir logros sobresalientes sin el requisito del CI.</p>

<p>La principal tensión en la identificación de la Alta Capacidad Intelectual es lingüística, causando un subdiagnóstico considerable. Es fundamental distinguir la Alta Capacidad Intelectual (CI ≥ 120). Esta debe diferenciarse del Talento o Virtuosismo (habilidades específicas) para ofrecer programas educativos adecuados. La falta de claridad genera consecuencias inesperadas: personas con ansiedad o desajuste social pueden autoatribuirse erróneamente la Alta Capacidad Intelectual, cuando compartir ciertas dificultades con personas con ACI no significa tener Alta Capacidad Intelectual. Es clave reconocer esta distinción para que cada persona reciba el apoyo específico a sus necesidades.</p>`
  }
]; 