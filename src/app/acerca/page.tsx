// src/app/acerca/page.tsx
// Acerca de

import Link from 'next/link';
import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';
import JsonLd, { websiteStructuredData, organizationStructuredData } from '@/components/JsonLd';

export const metadata = generateMetadata({
  title: 'Acerca de este Sitio - Altas Capacidades en Adultos',
  description: 'Plataforma informativa independiente que conecta adultos con Altas Capacidades Intelectuales (ACI) con recursos, servicios profesionales y opciones de desarrollo personal en Argentina.',
  path: '/acerca',
  keywords: ['altas capacidades intelectuales', 'ACI', 'adultos', 'Argentina', 'desarrollo personal', 'servicios profesionales', 'evaluación cognitiva', 'recursos independientes', 'Buenos Aires', 'CABA'],
  type: 'article'
});

export default function Acerca() {
  return (
    <main className="main-content">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "inLanguage": "es-AR",
        "name": "Acerca de este Sitio - Altas Capacidades en Adultos",
        "description": "Plataforma informativa independiente que conecta adultos con Altas Capacidades Intelectuales (ACI) con recursos, servicios profesionales y opciones de desarrollo personal en Argentina.",
        "url": "https://altascapacidadesintelectuales.org/acerca",
        "isPartOf": websiteStructuredData,
        "mainEntity": {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Acerca de este Sitio",
          "description": "Plataforma informativa independiente que conecta adultos con Altas Capacidades Intelectuales (ACI) con recursos, servicios profesionales y opciones de desarrollo personal en Argentina.",
          "inLanguage": "es-AR",
          "author": organizationStructuredData,
          "publisher": organizationStructuredData,
          "datePublished": "2024-03-19",
          "dateModified": "2024-03-19",
          "keywords": ["altas capacidades intelectuales", "ACI", "adultos", "Argentina", "desarrollo personal", "servicios profesionales", "evaluación cognitiva", "recursos independientes", "Buenos Aires", "CABA"],
          "mainEntityOfPage": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Acerca de este Sitio",
            "description": "Plataforma informativa independiente que conecta adultos con Altas Capacidades Intelectuales (ACI) con recursos, servicios profesionales y opciones de desarrollo personal en Argentina.",
            "url": "https://altascapacidadesintelectuales.org/acerca",
            "inLanguage": "es-AR",
            "isPartOf": websiteStructuredData
          },
          "locationCreated": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Ciudad Autónoma de Buenos Aires",
              "addressCountry": "Argentina"
            }
          }
        }
      }} />
      <div className="container">
        <h1>Acerca de este Sitio</h1>
        
        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            Este sitio es un recurso independiente diseñado para adultos que buscan explorar y maximizar su potencial cognitivo. No somos una institución ni un centro diagnóstico. Somos una plataforma informativa que te conecta con recursos, servicios profesionales y opciones de desarrollo personal<sup><a href="#ref-1">[1]</a></sup>. Nuestro enfoque está en empoderarte para tomar decisiones informadas sobre tu desarrollo cognitivo y profesional.
          </p>
          <p>
            Mientras que muchos servicios se concentran en niños y adolescentes, nosotros nos especializamos en adultos que buscan entender y aprovechar sus capacidades<sup><a href="#ref-2">[2]</a></sup>. Facilitamos la conexión entre individuos y proveedores de servicios especializados, ofreciendo información clara y opciones prácticas para tu desarrollo personal. Explorá nuestra red de <Link href="/profesionales">profesionales independientes</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2 id="metodologia">Enfoque centrado en el individuo&nbsp;<a href="#metodologia">🔗</a></h2>
          <p>
            Nuestra plataforma se basa en tres principios fundamentales<sup><a href="#ref-3">[3]</a></sup>:
          </p>
          <ul>
            <li><strong>Libertad de elección</strong>: Te presentamos opciones para que decidas tu camino de desarrollo.</li>
            <li><strong>Información de calidad</strong>: Combinamos investigación científica con experiencias prácticas del mercado.</li>
            <li><strong>Empoderamiento personal</strong>: Te damos herramientas para tomar decisiones informadas sobre tu desarrollo.</li>
          </ul>
          <p>
            Cada sección está diseñada para ayudarte a entender y maximizar tu potencial<sup><a href="#ref-4">[4]</a></sup>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="transparencia">Guía Editorial y Nuestro compromiso&nbsp;<a href="#transparencia">🔗</a></h2>
          <p>
            Nos basamos en una <a href="/guia-editorial" target="_blank" rel="noopener noreferrer">guía editorial independiente</a> que reconoce la diversidad de talentos y capacidades. Colaboramos con profesionales y organizaciones privadas que comparten nuestra visión de empoderar a individuos para alcanzar su máximo potencial<sup><a href="#ref-5">[5]</a></sup>.
          </p>
          <p>
            Nuestro objetivo es proporcionarte información clara y opciones prácticas para tu desarrollo personal. La decisión de cómo usar estos recursos siempre está en tus manos. Te ofrecemos herramientas para entender tu potencial y elegir cómo desarrollarlo.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2 id="donde-continuar">Explora tus opciones&nbsp;<a href="#donde-continuar">🔗</a></h2>
          <ul>
            <li>
              <strong><Link href="/tests">Evaluación y desarrollo</Link></strong> - Opciones profesionales para explorar tu potencial
            </li>
            <li>
              <strong><Link href="/arquetipos">Desarrollo personal</Link></strong> - Herramientas para entender y maximizar tus capacidades
            </li>
            <li>
              <strong><Link href="/profesionales">Servicios especializados</Link></strong> - Red de profesionales independientes
            </li>
            <li>
              <strong><Link href="/">Información fundamental</Link></strong> - Base científica para decisiones informadas
            </li>
          </ul>
        </section>

        <div className="disclaimer-box">
          Este sitio no ofrece diagnóstico. Su contenido es informativo y está orientado a adultos que sospechan tener un perfil ACI. Recomendamos siempre consultar a un profesional especializado.
        </div>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul>
            <li id="ref-1">[1] <a href="https://www.sengifted.org/post/gifted-adult-manifesto" target="_blank" rel="noopener noreferrer">SENG: The Gifted Adult Manifesto - Supporting Emotional Needs of the Gifted</a></li>
            <li id="ref-2">[2] <a href="https://www.sciencedirect.com/science/article/abs/pii/S0160289621000635" target="_blank" rel="noopener noreferrer">Silverman, L. K. (2021) - Adult Giftedness: Challenges in Diagnosis and Support</a></li>
            <li id="ref-3">[3] <a href="https://www.routledge.com/Gifted-Adults-in-Work/Nauta-Ronner/p/book/9781138291446" target="_blank" rel="noopener noreferrer">Nauta, N., & Ronner, S. (2021). Gifted Adults in Work</a></li>
            <li id="ref-4">[4] <a href="https://www.hoagiesgifted.org/gifted_adults.htm" target="_blank" rel="noopener noreferrer">Hoagies' Gifted: Gifted Adults - Resources and Research</a></li>
            <li id="ref-5">[5] <a href="https://www.davidsongifted.org/gifted-blog/gifted-adults/" target="_blank" rel="noopener noreferrer">Davidson Institute: Understanding and Supporting Gifted Adults</a></li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="contacto">Contacto&nbsp;<a href="#contacto">🔗</a></h2>
          <div className="contact-info">
            Para consultas o sugerencias: <a href="mailto:ACIntelectuales@gmail.com">ACIntelectuales@gmail.com</a>
          </div>
        </section>
      </div>
    </main>
  );
} 