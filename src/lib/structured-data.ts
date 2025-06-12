export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Altas Capacidades Intelectuales en Buenos Aires",
  "description": "Información especializada sobre Altas Capacidades Intelectuales en CABA. Recursos, tests, legislación y profesionales en Ciudad Autónoma de Buenos Aires.",
  "url": "https://AltasCapacidadesIntelectuales.org",
  "inLanguage": "es-AR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://AltasCapacidadesIntelectuales.org/{search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sitio ACI Buenos Aires",
    "url": "https://AltasCapacidadesIntelectuales.org"
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sitio ACI Buenos Aires",
  "description": "Organización dedicada a la información y recursos sobre Altas Capacidades Intelectuales en Buenos Aires",
  "url": "https://AltasCapacidadesIntelectuales.org",
  "sameAs": [],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buenos Aires, CABA",
    "addressCountry": "AR"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Buenos Aires"
    },
    {
      "@type": "State",
      "name": "CABA"
    }
  ],
  "knowsAbout": [
    "Altas Capacidades Intelectuales",
    "Superdotación",
    "Neurodivergencia",
    "Evaluación psicológica",
    "Educación especial"
  ]
};

export const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recursos ACI en Buenos Aires",
  "description": "Información especializada sobre Altas Capacidades Intelectuales en CABA",
  "author": {
    "@type": "Organization",
    "name": "Sitio ACI Buenos Aires"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sitio ACI Buenos Aires",
    "url": "https://AltasCapacidadesIntelectuales.org"
  },
  "datePublished": "2024-03-19",
  "dateModified": "2024-03-19",
  "inLanguage": "es-AR",
  "locationCreated": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires, CABA",
      "addressCountry": "AR"
    }
  }
}; 