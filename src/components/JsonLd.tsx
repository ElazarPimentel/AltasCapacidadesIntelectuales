// src/components/JsonLd.tsx

type BaseSchema = {
  "@context": "https://schema.org";
  "@type": string;
  inLanguage: "es-AR";
};

type PersonSchema = BaseSchema & {
  "@type": "Person";
  name: string;
  url?: string;
  jobTitle?: string;
  worksFor?: OrganizationSchema;
};

type OrganizationSchema = BaseSchema & {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: ImageObject;
  address?: PostalAddress;
  areaServed?: (City | State)[];
  knowsAbout?: string[];
};

type ArticleSchema = BaseSchema & {
  "@type": "Article";
  headline: string;
  description: string;
  author: PersonSchema | OrganizationSchema;
  publisher: OrganizationSchema;
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage: WebPageSchema;
  keywords?: string[];
  locationCreated?: Place;
};

type WebPageSchema = BaseSchema & {
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: BreadcrumbListSchema;
  mainEntity?: ArticleSchema | FAQSchema;
  isPartOf?: WebsiteSchema;
};

type WebsiteSchema = BaseSchema & {
  "@type": "WebSite";
  name: string;
  description: string;
  url: string;
  publisher: OrganizationSchema;
  potentialAction?: SearchAction;
};

// Tipos auxiliares
type ImageObject = {
  "@type": "ImageObject";
  url: string;
};

type PostalAddress = {
  "@type": "PostalAddress";
  addressRegion: string;
  addressCountry: string;
};

type City = {
  "@type": "City";
  name: string;
};

type State = {
  "@type": "State";
  name: string;
};

type Place = {
  "@type": "Place";
  address: PostalAddress;
};

type SearchAction = {
  "@type": "SearchAction";
  target: string;
  "query-input": string;
};

type FAQSchema = BaseSchema & {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
};

type BreadcrumbListSchema = {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

// Datos estructurados predefinidos
export const websiteStructuredData: WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Altas Capacidades Intelectuales en Buenos Aires",
  description: "Información especializada sobre Altas Capacidades Intelectuales en CABA. Recursos, tests, legislación y profesionales en Ciudad Autónoma de Buenos Aires.",
  url: "https://altascapacidadesintelectuales.org",
  inLanguage: "es-AR",
  publisher: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sitio ACI Buenos Aires",
    url: "https://altascapacidadesintelectuales.org",
    inLanguage: "es-AR",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "Argentina"
    }
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://altascapacidadesintelectuales.org/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationStructuredData: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sitio ACI Buenos Aires",
  url: "https://altascapacidadesintelectuales.org",
  inLanguage: "es-AR",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "Argentina"
  },
  areaServed: [
    {
      "@type": "City",
      name: "Buenos Aires"
    },
    {
      "@type": "State",
      name: "CABA"
    }
  ],
  knowsAbout: [
    "Altas Capacidades Intelectuales",
    "Superdotación",
    "Neurodivergencia",
    "Evaluación psicológica",
    "Educación especial"
  ]
};

// Función helper para crear datos de artículo
export function createArticleStructuredData(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "es-AR",
    author: organizationStructuredData,
    publisher: organizationStructuredData,
    datePublished: "2024-03-19",
    dateModified: "2024-03-19",
    keywords,
    mainEntityOfPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: `https://altascapacidadesintelectuales.org${path}`,
      inLanguage: "es-AR",
      isPartOf: websiteStructuredData
    },
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Ciudad Autónoma de Buenos Aires",
        addressCountry: "Argentina"
      }
    }
  };
}

// Componente JsonLd
type JsonLdProps = {
  data: ArticleSchema | FAQSchema | WebPageSchema | WebsiteSchema;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 