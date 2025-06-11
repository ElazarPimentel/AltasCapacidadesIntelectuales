import type { Metadata } from "next";

const siteUrl = 'https://altas-capacidades-intelectuales.vercel.app';
const siteName = 'Altas Capacidades Intelectuales en Buenos Aires';
const defaultDescription = 'Información especializada sobre Altas Capacidades Intelectuales (ACI) en Buenos Aires, CABA y Argentina. Recursos, tests y profesionales en Ciudad Autónoma de Buenos Aires.';

interface MetadataConfig {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: 'website' | 'article';
}

export function generateMetadata({
  title,
  description = defaultDescription,
  path = '',
  keywords = ['altas capacidades intelectuales', 'ACI', 'superdotación', 'CABA', 'Buenos Aires', 'Capital Federal', 'Argentina'],
  type = 'website'
}: MetadataConfig): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path === '/' || path === '' ? title : `${title} | ${siteName}`;

  let structuredData: Record<string, unknown> = {};

  if (path === '/acerca') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: title,
      description: description,
      url: `${siteUrl}${path}`,
      mainEntity: {
        '@type': 'WebSite',
        name: 'Altas Capacidades Intelectuales en Adultos',
        url: siteUrl,
        description: 'Información, tests orientativos y recursos sobre ACI en Argentina',
        author: {
          '@type': 'Organization',
          name: 'Proyecto ACI Argentina',
          description: 'Recurso informativo independiente sobre altas capacidades en adultos',
        },
        about: [
          {
            '@type': 'Thing',
            name: 'Altas Capacidades Intelectuales',
            description: 'Condición caracterizada por capacidades cognitivas, creatividad e intensidad emocional superiores al promedio'
          },
          {
            '@type': 'Person',
            name: 'Kazimierz Dabrowski',
            description: 'Psicólogo y psiquiatra polaco, creador de la Teoría de la Desintegración Positiva'
          },
          {
            '@type': 'Person',
            name: 'Joseph Renzulli',
            description: 'Psicólogo educacional estadounidense, creador del Modelo de los Tres Anillos'
          },
          {
            '@type': 'Person',
            name: 'Linda Silverman',
            description: 'Psicóloga estadounidense especializada en altas capacidades y asincronía del desarrollo'
          }
        ],
        audience: {
          '@type': 'Audience',
          audienceType: 'Adultos con sospecha de ACI',
          geographicArea: {
            '@type': 'Country',
            name: 'Argentina'
          }
        }
      },
      inLanguage: 'es-AR',
      dateModified: '2025-06-09',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Acerca',
            item: `${siteUrl}/acerca`
          }
        ]
      }
    };
  } else {
    structuredData = {
      title: fullTitle,
      description,
      keywords: keywords.join(', '),
      authors: [{ name: 'Sitio ACI' }],
      verification: {
        google: 'mFnY3h12fbLVhwRiqh2raQJe3VJXER_y5jU8k1tJFgg',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type,
        locale: 'es_AR',
        url,
        title: fullTitle,
        description,
        siteName,
        images: [
          {
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description,
        images: [`${siteUrl}/og-image.jpg`],
      },
      alternates: {
        canonical: url,
      },
      metadataBase: new URL(siteUrl),
    };
  }

  return structuredData;
}

export const defaultMetadata = generateMetadata({
  title: siteName,
  description: defaultDescription,
  path: '/',
}); 