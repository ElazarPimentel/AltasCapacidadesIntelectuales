import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import LayoutWrapper from "@/components/LayoutWrapper";
import { defaultMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { websiteStructuredData } from "@/lib/structured-data";
import ThemeScript from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link 
          rel="alternate" 
          hrefLang="es-AR" 
          href="https://altascapacidadesintelectuales.org"
        />
        <link 
          rel="alternate" 
          hrefLang="es" 
          href="https://altascapacidadesintelectuales.org"
        />
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href="https://altascapacidadesintelectuales.org"
        />
        <JsonLd data={websiteStructuredData} />
      </head>
      <body>
        <ThemeScript />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
