// src/app/legislacion/page.tsx
// Legislación

import Link from 'next/link';
import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Legislación sobre ACI - Altas Capacidades en Adultos',
  description: 'Conoce el marco legal para Altas Capacidades Intelectuales en Argentina y su impacto en educación y apoyo profesional.',
  path: '/legislacion',
  type: 'article',
});

export default function Legislacion() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Legislación sobre Altas Capacidades Intelectuales en Argentina</h1>
        
        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            En Argentina, las iniciativas privadas han sido históricamente las principales impulsoras del reconocimiento y apoyo a las Altas Capacidades Intelectuales (ACI). Esta sección documenta el marco regulatorio actual, no para justificar su existencia, sino para que entiendas cómo navegar el sistema mientras trabajás en tu desarrollo personal.
          </p>
        </section>

        <section className="content-section variant-b">
          <h2 id="marco-nacional">El contexto actual: oportunidades desde la iniciativa privada&nbsp;<a href="#marco-nacional">🔗</a></h2>
          <p>
            La ausencia de regulaciones específicas sobre ACI en Argentina ha permitido que surjan diversas iniciativas privadas y soluciones individuales. Mientras que existe legislación educativa general, la falta de regulación específica permite mayor flexibilidad para encontrar soluciones personalizadas fuera del sistema tradicional.
          </p>
          <p>
            Esta libertad de acción ha llevado a que personas con alta capacidad desarrollen estrategias propias y busquen alternativas en el sector privado (<Link href="/historia#aci-en-argentina">ver más en Historia</Link>).
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2 id="ley-benjamin">La Ley Benjamín: un paso provincial clave&nbsp;<a href="#ley-benjamin">🔗</a></h2>
          <p>
            En la provincia de Buenos Aires, el caso de Benjamín Equiza dio origen a un proyecto legislativo clave. Se llama <i>Ley Benjamín</i> (en trámite al 2025) busca garantizar detección temprana y acompañamiento integral de estudiantes con ACI<sup><a href="#ref-3">[3]</a></sup>, desde nivel inicial hasta la secundaria. Sus pilares son:
          </p>
          <ul>
            <li><strong>Detección sistemática</strong>: Capacitación docente para reconocer señales de ACI.</li>
            <li><strong>Acompañamiento educativo</strong>: Adaptaciones curriculares y trayectorias flexibles.</li>
            <li><strong>Enfoque inclusivo</strong>: Reconocer la diversidad cognitiva como derecho, no como excepción.</li>
          </ul>
          <p>
            Esto genera que niños con ACI sean malentendidos como problemáticos, vagos o disruptivos, a pesar de su capacidad avanzada (<Link href="/historia#el-caso-benjamin">ver caso en Historia</Link>).
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="avances-provinciales">Iniciativas privadas por región&nbsp;<a href="#avances-provinciales">🔗</a></h2>
          <p>
            El sector privado ha desarrollado diversas soluciones adaptadas a cada región<sup><a href="#ref-4">[4]</a></sup>:
          </p>
          <ul>
            <li><strong>Buenos Aires</strong>: Red de profesionales independientes especializados en evaluación y acompañamiento.</li>
            <li><strong>Córdoba</strong>: Centros privados con programas de enriquecimiento extracurricular.</li>
            <li><strong>Mendoza</strong>: Consultoras educativas que ofrecen capacitación a docentes e instituciones.</li>
          </ul>
          <p>
            Estas iniciativas demuestran cómo el mercado responde naturalmente a las necesidades específicas de cada región.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">Explorá cómo estas opciones benefician a los adultos</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2 id="adultos-aci">Adultos: libertad y responsabilidad personal&nbsp;<a href="#adultos-aci">🔗</a></h2>
          <p>
            Los adultos con ACI tienen la ventaja de poder elegir libremente cómo desarrollar su potencial<sup><a href="#ref-5">[5]</a></sup>. La ausencia de regulaciones específicas significa que podés diseñar tu propio camino, eligiendo entre múltiples opciones privadas de desarrollo profesional y personal.
          </p>
          <p>
            Tu desarrollo depende de tu iniciativa y las conexiones que construyas. <Link href="/arquetipos#introduccion">Explorá Arquetipos para encontrar tu camino</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="que-hacer">Opciones disponibles en el mercado&nbsp;<a href="#que-hacer">🔗</a></h2>
          <p>
            El sector privado ofrece múltiples alternativas para tu desarrollo:
          </p>
          <ol>
            <li>Contratar una <Link href="/profesionales#que-esperar">evaluación especializada</Link> con profesionales independientes.</li>
            <li>Acceder a programas de coaching y mentoría personalizada.</li>
            <li>Participar en comunidades y redes de aprendizaje autoorganizadas.</li>
            <li>Conectar con consultores especializados en desarrollo personal y profesional.</li>
          </ol>
          <p>
            <Link href="/tests#la-verdadera-evaluacion-es-un-proceso">Conocé más sobre las evaluaciones disponibles</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="legislacion-internacional">Legislación internacional como referencia&nbsp;<a href="#legislacion-internacional">🔗</a></h2>
          <p>
            Argentina ratificó la Convención sobre los Derechos de las Personas con Discapacidad (Ley 26.378)<sup><a href="#ref-2">[2]</a></sup>, que garantiza educación inclusiva a personas neurodivergentes. Aunque no menciona ACI explícitamente, su espíritu respalda la necesidad de políticas adaptadas.
          </p>
          <p>
            Otros países, como España, cuentan con leyes autonómicas específicas para ACI<sup><a href="#ref-1">[1]</a></sup>. Ese modelo inspiró parte de la propuesta de la Ley Benjamín (<Link href="/historia#de-platon-al-test-de-ci">ver contexto histórico</Link>).
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(6)}`}>
          <h2 id="por-que-importa">Por qué la libertad importa&nbsp;<a href="#por-que-importa">🔗</a></h2>
          <p>
            La ausencia de regulaciones específicas puede ser una ventaja: te permite buscar soluciones personalizadas sin restricciones burocráticas. El mercado libre genera constantemente nuevas opciones para quienes buscan desarrollar su potencial.
          </p>
          <p>
            Tu camino es tuyo: podés elegir entre múltiples opciones privadas, crear tus propias soluciones o unirte a comunidades autoorganizadas que comparten tus intereses y necesidades.
          </p>
          <p>
            <Link href="/tests#tu-sospecha-es-legitima">Comenzá tu exploración personal</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul>
            <li id="ref-1">[1] <a href="https://www.boe.es/eli/es/l/2006/05/03/2" target="_blank" rel="noopener noreferrer">Ley Orgánica 2/2006 de Educación (España) - Artículos sobre Altas Capacidades</a></li>
            <li id="ref-2">[2] <a href="https://www.argentina.gob.ar/normativa/nacional/ley-26206" target="_blank" rel="noopener noreferrer">Ley 26.206 - Ley de Educación Nacional</a></li>
            <li id="ref-3">[3] <a href="https://www.boletinoficial.gob.ar/ley27306" target="_blank" rel="noopener noreferrer">Ley 27.306 - Ley Benjamín: Detección y Acompañamiento de Estudiantes con ACI</a></li>
            <li id="ref-4">[4] <a href="https://www.argentina.gob.ar/educacion/validez-titulos/glosario/normativas-jurisdiccionales" target="_blank" rel="noopener noreferrer">Normativas Jurisdiccionales en Educación - Ministerio de Educación</a></li>
            <li id="ref-5">[5] <a href="https://www.argentina.gob.ar/sites/default/files/informe_educacion_inclusiva.pdf" target="_blank" rel="noopener noreferrer">Informe sobre Educación Inclusiva en Argentina (2023)</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 