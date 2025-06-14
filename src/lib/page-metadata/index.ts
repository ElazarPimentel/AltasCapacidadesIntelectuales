// src/lib/page-metadata/index.ts

import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const homeMetadata = generatePageMetadata({
  title: 'Inicio - Altas Capacidades en Adultos',
  description: 'Guía comprensiva sobre las Altas Capacidades Intelectuales (ACI) en adultos. Información, recursos y apoyo para el autoconocimiento.',
  path: '/',
  type: 'website',
});

export const acercaMetadata = generatePageMetadata({
  title: 'Acerca de este Sitio - Altas Capacidades en Adultos',
  description: 'Un recurso empático y riguroso para adultos que sospechan tener ACI. Conocé nuestro enfoque, inspiraciones académicas y metodología editorial.',
  path: '/acerca',
  keywords: ['altas capacidades intelectuales', 'ACI', 'adultos', 'Argentina', 'Dabrowski', 'Renzulli', 'Silverman', 'guía editorial', 'autoconocimiento'],
  type: 'article',
});

export const arquetiposMetadata = generatePageMetadata({
  title: 'Arquetipos de ACI - Altas Capacidades en Adultos',
  description: 'Exploración de los diferentes perfiles y manifestaciones de las Altas Capacidades Intelectuales en adultos.',
  path: '/arquetipos',
  type: 'article',
});

export const historiaMetadata = generatePageMetadata({
  title: 'Historia de las ACI - Altas Capacidades en Adultos',
  description: 'Recorrido histórico por el estudio y comprensión de las Altas Capacidades Intelectuales.',
  path: '/historia',
  type: 'article',
});

export const legislacionMetadata = generatePageMetadata({
  title: 'Legislación sobre ACI - Altas Capacidades en Adultos',
  description: 'Marco legal y normativo relacionado con las Altas Capacidades Intelectuales en Argentina y el mundo.',
  path: '/legislacion',
  type: 'article',
});

export const profesionalesMetadata = generatePageMetadata({
  title: 'Profesionales en ACI - Altas Capacidades en Adultos',
  description: 'Directorio de profesionales especializados en evaluación y acompañamiento de adultos con Altas Capacidades.',
  path: '/profesionales',
  type: 'article',
});

export const testsMetadata = generatePageMetadata({
  title: 'Tests y Evaluación - Altas Capacidades en Adultos',
  description: 'Guía sobre evaluación profesional y tests orientativos para adultos que sospechan tener Altas Capacidades.',
  path: '/tests',
  type: 'article',
});

export const curiosidadesMetadata = generatePageMetadata({
  title: "Curiosidades para Mentes ACI | Argentina",
  description: "Juegos, paradojas y datos para estimular el pensamiento abstracto en adultos con Altas Capacidades.",
  path: '/curiosidades',
  keywords: ["curiosidades ACI", "juegos lógicos", "pensamiento abstracto", "neurodivergencia"],
  type: "article",
}); 