import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import LayoutWrapper from "@/components/LayoutWrapper";
import { defaultMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { websiteStructuredData, organizationStructuredData, articleStructuredData } from "@/lib/structured-data";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link 
          rel="alternate" 
          hrefLang="es-AR" 
          href="https://AltasCapacidadesIntelectuales.org"
        />
        <JsonLd data={websiteStructuredData} />
        <JsonLd data={organizationStructuredData} />
        <JsonLd data={articleStructuredData} />
        <ThemeScript />
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
