// src/lib/schema.ts

export type PersonSchema = {
  "@type": "Person";
  name: string;
  url?: string;
  jobTitle?: string;
  worksFor?: OrganizationSchema;
};

export type OrganizationSchema = {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: {
    "@type": "ImageObject";
    url: string;
  };
};

export type ArticleSchema = {
  "@type": "Article";
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema;
  publisher: OrganizationSchema;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
};

export type FAQSchema = {
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

export type WebPageSchema = {
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: BreadcrumbListSchema;
};

export type BreadcrumbListSchema = {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
};

export type WebsiteSchema = {
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}; 