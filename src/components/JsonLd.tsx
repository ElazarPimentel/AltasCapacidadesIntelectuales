interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Altas Capacidades Intelectuales en Adultos",
  "description": "Información especializada sobre Altas Capacidades Intelectuales en adultos. Recursos, tests, legislación y profesionales en Argentina.",
  "url": "https://altas-capacidades-intelectuales.vercel.app",
  "inLanguage": "es-AR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://altas-capacidades-intelectuales.vercel.app/{search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sitio ACI",
    "url": "https://altas-capacidades-intelectuales.vercel.app"
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sitio ACI",
  "description": "Organización dedicada a la información y recursos sobre Altas Capacidades Intelectuales en Argentina",
  "url": "https://altas-capacidades-intelectuales.vercel.app",
  "sameAs": [],
  "areaServed": {
    "@type": "Country",
    "name": "Argentina"
  },
  "knowsAbout": [
    "Altas Capacidades Intelectuales",
    "Superdotación",
    "Neurodivergencia",
    "Evaluación psicológica",
    "Educación especial"
  ]
}; 