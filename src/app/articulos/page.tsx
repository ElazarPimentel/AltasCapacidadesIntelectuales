// src/app/articulos/page.tsx
// Artículos

import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';
import JsonLd, { createArticleStructuredData } from '@/components/JsonLd';

export const metadata = generateMetadata({
  title: "Artículos sobre ACI | Argentina",
  description: "Artículos académicos sobre Altas Capacidades Intelectuales, audiencia imaginaria y auto-diagnóstico para adultos en Argentina.",
  path: "/articulos",
  keywords: ["artículos ACI", "audiencia imaginaria", "auto-diagnóstico", "psicología ACI", "David Elkind"],
  type: "article",
});

export default function ArticulosPage() {
  return (
    <main className="main-content">
      <JsonLd data={createArticleStructuredData(
        "Criterios Contemporáneos para la Identificación de Altas Capacidades Intelectuales (ACI)",
        "La confusión sobre las Altas Capacidades Intelectuales (ACI) nace porque el término «superdotación» designa simultáneamente dos realidades. La principal tensión en la identificación de la Alta Capacidad Intelectual es lingüística, causando un subdiagnóstico considerable.",
        "/articulos",
        ["superdotación", "ACI", "diagnóstico", "educación"]
      )} />

      <JsonLd data={createArticleStructuredData(
        "La Audiencia Imaginaria, Redes Sociales y falso Auto-Diagnóstico ACI",
        "El concepto de audiencia imaginaria, descrito originalmente por David Elkind, ha sido transformado por las redes sociales. Un riesgo crucial de este auto-diagnóstico radica en la confusión con características negativas no exclusivas de la superdotación.",
        "/articulos",
        ["audiencia imaginaria", "ACI", "auto-diagnóstico", "psicología"]
      )} />

      <JsonLd data={createArticleStructuredData(
        "La Audiencia Imaginaria: Un Análisis Psicológico desde sus Orígenes hasta la Era Digital",
        "La audiencia imaginaria, acuñada por David Elkind en 1967, describía la creencia egocéntrica adolescente de estar bajo constante observación. Con redes sociales, esta audiencia ha evolucionado hacia una entidad pseudo-real.",
        "/articulos",
        ["psicología adolescente", "audiencia imaginaria", "redes sociales"]
      )} />

      <JsonLd data={createArticleStructuredData(
        "La Audiencia Imaginaria: Cuando la Audiencia no está presente",
        "El texto distingue dos manifestaciones clave del fenómeno: la Audiencia Imaginaria Presente y la Ausente, fundamentales para comprender el egocentrismo adolescente.",
        "/articulos",
        ["egocentrismo", "adolescencia", "audiencia imaginaria"]
      )} />

      <JsonLd data={createArticleStructuredData(
        "La Audiencia Imaginaria: Aspectos Positivos y Adversos",
        "Explora la audiencia imaginaria como fenómeno psicológico con funciones adaptativas, influyendo en pensamientos y comportamientos incluso en soledad.",
        "/articulos",
        ["psicología", "ACI", "funciones adaptativas", "audiencia imaginaria"]
      )} />

      <div className="container">
        <h1>Artículos Interesantes</h1>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>Colección de artículos sobre Altas Capacidades Intelectuales.</p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2>Criterios Contemporáneos para la Identificación de Altas Capacidades Intelectuales (ACI)</h2>
          <p>La confusión sobre las Altas Capacidades Intelectuales (ACI) nace porque el término «superdotación» designa simultáneamente dos realidades.</p>
          <p>La principal tensión en la identificación de la Alta Capacidad Intelectual es lingüística, causando un subdiagnóstico considerable.</p>
          <a 
            href="/Criterios_Contemporáneos_para_la_Identificación_de_Altas_Capacidades_Intelectuales_ACI-P04V06.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ver PDF
          </a>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2>La Audiencia Imaginaria, Redes Sociales y falso Auto-Diagnóstico ACI</h2>
          <p>El concepto de la audiencia imaginaria, originalmente descrito por David Elkind en 1967 como una creencia adolescente de estar bajo constante observación y juicio, ha sido profundamente transformado por las redes sociales.</p>
          <p>Un riesgo crucial de este auto-diagnóstico de ACI radica en la confusión con características negativas que no son exclusivas de la superdotación.</p>
          <a 
            href="/La_Audiencia_Imaginaria_Redes_Sociales_y_falso_Auto-Diagnóstico_ACI-P05V06.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ver PDF
          </a>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2>La Audiencia Imaginaria: Un Análisis Psicológico desde sus Orígenes hasta la Era Digital</h2>
          <p>Originalmente, la audiencia imaginaria, un concepto acuñado por David Elkind en 1967, describía la creencia egocéntrica de los adolescentes de estar bajo constante y minuciosa observación y juicio por parte de sus pares y extraños.</p>
          <p>Con la llegada de las redes sociales, esta audiencia, antes puramente imaginaria, ha evolucionado a una entidad pseudo-real.</p>
          <a 
            href="/La_Audiencia_Imaginaria_Un_Analisis_Psicológico_desde_sus_Orígenes_hasta_la_Era_Digital-P01V06.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ver PDF
          </a>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2>La Audiencia Imaginaria: Cuando la Audiencia no está presente</h2>
          <p>El concepto de audiencia imaginaria, introducido por David Elkind en 1967, es fundamental para comprender el egocentrismo adolescente.</p>
          <p>El texto distingue dos manifestaciones clave del fenómeno: la Audiencia Imaginaria Presente y la Audiencia Imaginaria Ausente.</p>
          <a 
            href="/La_Audiencia_Imaginaria_Cuando_la_Audiencia_no_esta_presente-P02V06.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ver PDF
          </a>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2>La Audiencia Imaginaria: Aspectos Positivos y Adversos</h2>
          <p>La Introducción de este texto explora la "audiencia imaginaria" como un fenómeno psicológico arraigado, una actuación para un público invisible que influye en pensamientos y comportamientos incluso en soledad.</p>
          <p>El fenómeno de esta audiencia imaginaria ausente y admiradora posee Funciones Adaptativas.</p>
          <a 
            href="/La_Audiencia_Imaginaria_Aspectos_Positivos_y_Adversos_P03V06.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Ver PDF
          </a>
        </section>
      </div>
    </main>
  );
} 