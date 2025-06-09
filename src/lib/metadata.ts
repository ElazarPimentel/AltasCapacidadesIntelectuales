import type { Metadata } from "next";

const siteUrl = 'https://altas-capacidades-intelectuales.vercel.app';
const siteName = 'Altas Capacidades Intelectuales en Adultos';
const defaultDescription = 'Información especializada sobre Altas Capacidades Intelectuales en adultos. Recursos, tests, legislación y profesionales en Argentina.';

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
  keywords = ['altas capacidades intelectuales', 'ACI', 'superdotación', 'adultos', 'Argentina'],
  type = 'website'
}: MetadataConfig): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path === '/' || path === '' ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Sitio ACI' }],
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

export const defaultMetadata = generateMetadata({
  title: siteName,
  description: defaultDescription,
  path: '/',
}); 