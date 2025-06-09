// src/app/historia/page.tsx
// Historia

// Metadata moved to separate file for Fast Refresh compatibility
// import { Metadata } from "next";

import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Historia de las Altas Capacidades Intelectuales',
  description: 'Historia universal y argentina de las Altas Capacidades Intelectuales. Conocé el caso de Benjamín Equiza y la evolución del reconocimiento de las ACI.',
  path: '/historia',
  keywords: ['historia ACI', 'Benjamín Equiza', 'Ley Benjamín', 'historia altas capacidades', 'Argentina', 'reconocimiento'],
  type: 'article',
});

export default function Historia() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Historia de las Altas Capacidades Intelectuales</h1>

        <section className="content-section">
          <p>
            Las Altas Capacidades Intelectuales (ACI) no siempre tuvieron un nombre claro. Esta sección recorre cómo se entendió —o se pasó por alto— la diferencia cognitiva y el impacto que tuvo en vidas reales.
          </p>
        </section>

        <section className="content-section">
          <h2 id="de-platon-al-test-de-ci">De Platón al test de CI&nbsp;<a href="#de-platon-al-test-de-ci">🔗</a></h2>
          <p>
            La noción de mentes excepcionales existe desde hace siglos. En la Grecia clásica, Platón imaginaba filósofos-reyes guiando la sociedad. Sin embargo, no fue hasta el siglo XIX en Europa que se desarrollaron herramientas formales para medir la inteligencia.
          </p>
          <p>
            En el siglo XX, Lewis Terman y Leta Hollingworth estudiaron a niños superdotados en Estados Unidos. Sus trabajos marcaron un avance, pero se centraron en varones jóvenes con logros escolares, dejando fuera a mujeres, adultos y perfiles menos convencionales. Esto limitó la comprensión de la <Link href="/tests#el-objetivo-es-entenderte">neurodivergencia</Link> hasta finales del siglo XX.
          </p>
          <p>
            Hoy, las ACI abarcan más que un CI alto: incluyen creatividad, intensidad emocional y asincronía (<Link href="/">ver más en Home</Link>). Aun así, el mito del "niño genio" persiste, descartando a quienes no encajan en ese molde.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">¿Te suena? Mirá los arquetipos</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="aci-en-argentina">ACI en Argentina: un desafío histórico&nbsp;<a href="#aci-en-argentina">🔗</a></h2>
          <p>
            En Argentina, la atención a las ACI ha sido limitada. Al ser un país federal, la educación depende de cada provincia, y no ha existido una política nacional unificada para identificar o apoyar a personas con alta capacidad.
          </p>
          <p>
            En las décadas de los '80 y '90, muchos niños con ACI fueron mal entendidos, a veces diagnosticados erróneamente con <Link href="/tests#diferencias-con-tdah-tea">TDAH o TEA</Link>, o considerados desinteresados. Esto llevó a dificultades como abandono escolar o baja autoestima. Se estima que cerca de un millón de personas en Argentina podrían tener ACI, pero la mayoría no lo sabe.
          </p>
          <p>
            <Link href="/legislacion#marco-nacional">Conocé el marco actual en Legislación</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="el-caso-benjamin">El caso Benjamín Equiza&nbsp;<a href="#el-caso-benjamin">🔗</a></h2>
          <p>
            A los 8 años, Benjamín Equiza leía con fluidez, escribía con claridad y resolvía cálculos complejos. Sin embargo, la Dirección General de Escuelas de Buenos Aires lo obligó a repetir un año por no ajustarse a las normas de edad. Su familia impulsó la <a href="/legislacion#ley-benjamin">Ley Benjamín</a>, un proyecto para garantizar la detección temprana y el acompañamiento de estudiantes con ACI en la provincia.
          </p>
          <p>
            Este caso reflejó la dificultad de los sistemas educativos para adaptarse a la <Link href="/tests#el-objetivo-es-entenderte">diversidad cognitiva</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="adultos-la-generacion-sin-nombre">Adultos: la generación sin nombre&nbsp;<a href="#adultos-la-generacion-sin-nombre">🔗</a></h2>
          <p>
            Muchos adultos con ACI nunca fueron identificados. Crecieron con una sensación de ser "diferentes" sin explicaciones claras. Algunos racionalizaron esa rareza; otros la confundieron con problemas personales. Esta falta de reconocimiento es una deuda histórica con miles de vidas.
          </p>
          <p>
            <Link href="/tests#tu-sospecha-es-legitima">¿Tu sospecha es válida? Empezá por Tests</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="por-que-importa">Por qué importa&nbsp;<a href="#por-que-importa">🔗</a></h2>
          <p>
            Entender tu diferencia requiere contexto. Saber cómo las ACI han sido vistas —o ignoradas— no es solo historia: es una herramienta para comprender tu propio recorrido (<Link href="/arquetipos#introduccion">mirá Arquetipos</Link>). Ese contexto puede guiarte hacia decisiones más conscientes sobre cómo habitar tu mente.
          </p>
          <p>
            <Link href="/profesionales#que-buscar">Buscá orientación en Profesionales si querés avanzar</Link>
          </p>
        </section>
      </div>
    </main>
  );
} 