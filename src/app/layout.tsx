// src/app/layout.tsx

import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultMetadata } from "@/lib/metadata";
import JsonLd, { websiteStructuredData } from "@/components/JsonLd";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e) {
                if (e.target && e.target.getAttribute('data-copy-target')) {
                  const selector = e.target.getAttribute('data-copy-target');
                  const targetEl = document.querySelector(selector);
                  if (targetEl) {
                    navigator.clipboard.writeText(targetEl.innerText)
                      .then(() => {
                        const originalText = e.target.innerText;
                        e.target.innerText = 'Copiado';
                        setTimeout(() => {
                          e.target.innerText = originalText;
                        }, 2000);
                      })
                      .catch(err => console.error('Error al copiar:', err));
                  }
                }
              });
            `
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
