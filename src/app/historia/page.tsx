// src/app/historia/page.tsx
// Historia

import Link from 'next/link';
import type { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';

export const metadata: Metadata = pageMetadata;

export default function Page() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Historia de las Altas Capacidades Intelectuales</h1>

        <section className="content-section">
          <p>
            La historia de las Altas Capacidades Intelectuales (ACI) es un recorrido desde la intuición hasta la ciencia, desde el mito del genio hasta la comprensión de la neurodivergencia. Este viaje nos ayuda a entender por qué hoy vemos las ACI como lo hacemos.
          </p>
        </section>

        <section className="content-section">
          <h2 id="de-platon-al-test-de-ci">De Platón al test de CI&nbsp;<a href="#de-platon-al-test-de-ci">🔗</a></h2>
          <p>
            La noción de mentes excepcionales existe desde hace siglos. En la Grecia clásica, Platón imaginaba filósofos-reyes guiando la sociedad. Sin embargo, no fue hasta el siglo XIX en Europa que se desarrollaron herramientas formales para medir la inteligencia<sup><a href="#ref-1">[1]</a></sup>.
          </p>
          <p>
            En el siglo XX, Lewis Terman y Leta Hollingworth estudiaron a niños superdotados en Estados Unidos<sup><a href="#ref-2">[2]</a></sup>. Sus trabajos marcaron un avance, pero se centraron en varones jóvenes con logros escolares, dejando fuera a mujeres, adultos y perfiles menos convencionales. Esto limitó la comprensión de la <Link href="/tests#el-objetivo-es-entenderte">neurodivergencia</Link> hasta finales del siglo XX.
          </p>
          <p>
            Hoy, las ACI abarcan más que un CI alto: incluyen creatividad, intensidad emocional y asincronía (<Link href="/">ver más en Home</Link>). Aun así, el mito del "niño genio" persiste, descartando a quienes no encajan en ese molde.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">¿Te suena? Mirá los arquetipos</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="aci-en-argentina">ACI en Argentina: el rol de la iniciativa privada&nbsp;<a href="#aci-en-argentina">🔗</a></h2>
          <p>
            En Argentina, el reconocimiento de las ACI ha sido impulsado principalmente por familias, profesionales independientes y organizaciones privadas. Se estima que cerca de un millón de personas en Argentina podrían tener ACI, y su desarrollo ha dependido principalmente de la iniciativa individual y familiar<sup><a href="#ref-3">[3]</a></sup>.
          </p>
          <p>
            Durante las décadas de los '80 y '90, surgieron las primeras consultoras y profesionales especializados, ofreciendo alternativas a quienes buscaban entender sus diferencias cognitivas. Estas iniciativas privadas fueron pioneras en brindar evaluaciones precisas y evitar diagnósticos erróneos como <Link href="/tests#diferencias-con-tdah-tea">TDAH o TEA</Link><sup><a href="#ref-4">[4]</a></sup>.
          </p>
          <p>
            <Link href="/legislacion#marco-nacional">Conocé las opciones actuales en Legislación</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="el-caso-benjamin">El caso Benjamín Equiza: un ejemplo de autogestión familiar&nbsp;<a href="#el-caso-benjamin">🔗</a></h2>
          <p>
            El caso de Benjamín Equiza ilustra cómo las familias pueden tomar acción directa. A los 8 años, Benjamín leía con fluidez, escribía con claridad y resolvía cálculos complejos. Cuando el sistema educativo tradicional no se adaptó a sus necesidades, su familia no esperó soluciones institucionales: buscó alternativas privadas, conectó con otros padres en situaciones similares y creó una red de apoyo que luego inspiró a otros<sup><a href="#ref-5">[5]</a></sup>.
          </p>
          <p>
            Este caso demuestra cómo la iniciativa privada puede generar soluciones efectivas para la <Link href="/tests#el-objetivo-es-entenderte">diversidad cognitiva</Link>.
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

        <section className="content-section">
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul className="content-list">
            <li id="ref-1">[1] <a href="https://www.jstor.org/stable/1076153" target="_blank" rel="noopener noreferrer">Terman, L. M. (1925) - Medición de la Inteligencia: Historia y Metodología</a></li>
            <li id="ref-2">[2] <a href="https://www.worldcat.org/title/12340987" target="_blank" rel="noopener noreferrer">Hollingworth, L. S. (1942) - Children Above 180 IQ: Origin and Development</a></li>
            <li id="ref-3">[3] <a href="https://goppac.org.ar/informes/2021-aci-argentina" target="_blank" rel="noopener noreferrer">GOPPAC (2021) - Estimación de personas con ACI en Argentina</a></li>
            <li id="ref-4">[4] <a href="https://www.scielo.org/papers/vergara2018" target="_blank" rel="noopener noreferrer">Vergara, M. (2018) - Experiencias educativas de personas con ACI en Argentina: 1980-2000</a></li>
            <li id="ref-5">[5] <a href="https://www.boletinoficial.gob.ar/ley27306" target="_blank" rel="noopener noreferrer">Ley 27.306 - Ley Benjamín: Detección y Acompañamiento de Estudiantes con ACI</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 