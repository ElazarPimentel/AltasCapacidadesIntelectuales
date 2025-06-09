// src/app/legislacion/page.tsx
// Legislación

import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Legislación sobre Altas Capacidades en Argentina',
  description: 'Marco legal argentino sobre Altas Capacidades Intelectuales. Conocé la Ley Benjamín y los derechos de personas con ACI en el sistema educativo.',
  path: '/legislacion',
  keywords: ['legislación ACI', 'Ley Benjamín', 'derechos ACI', 'educación Argentina', 'marco legal altas capacidades'],
  type: 'article',
});

export default function Legislacion() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Legislación sobre Altas Capacidades Intelectuales en Argentina</h1>
        
        <section className="content-section">
          <p>
            La legislación sobre Altas Capacidades Intelectuales (ACI) en Argentina es limitada y fragmentada, pero refleja un reconocimiento incipiente de la diversidad cognitiva. Esta sección resume el marco normativo actual, con foco en la Ley Benjamín y otras iniciativas provinciales, para ayudarte a entender el contexto legal y sus implicancias.
          </p>
        </section>

        <section className="content-section">
          <h2 id="marco-nacional">El marco nacional: un vacío histórico&nbsp;<a href="#marco-nacional">🔗</a></h2>
          <p>
            En Argentina no existe una ley nacional integral para identificar ni acompañar a personas con ACI. La Ley de Educación Nacional 26.206 (2006) garantiza el derecho a una educación inclusiva, pero no menciona explícitamente a las ACI. Eso deja la responsabilidad en manos de cada provincia y genera una geografía de desigualdades.
          </p>
          <p>
            Muchas leyes educativas no contemplan las ACI, lo que genera que personas con alta capacidad enfrentaron barreras educativas y sociales (<Link href="/historia#aci-en-argentina">ver más en Historia</Link>). Algunas aún lo hacen.
          </p>
        </section>

        <section className="content-section">
          <h2 id="ley-benjamin">La Ley Benjamín: un paso provincial clave&nbsp;<a href="#ley-benjamin">🔗</a></h2>
          <p>
            En la provincia de Buenos Aires, el caso de Benjamín Equiza dio origen a un proyecto legislativo clave. Se llama <i>Ley Benjamín</i> (en trámite al 2025) busca garantizar detección temprana y acompañamiento integral de estudiantes con ACI, desde nivel inicial hasta la secundaria. Sus pilares son:
          </p>
          <ul className="content-list">
            <li><strong>Detección sistemática</strong>: Capacitación docente para reconocer señales de ACI.</li>
            <li><strong>Acompañamiento educativo</strong>: Adaptaciones curriculares y trayectorias flexibles.</li>
            <li><strong>Enfoque inclusivo</strong>: Reconocer la diversidad cognitiva como derecho, no como excepción.</li>
          </ul>
          <p>
            Esto genera que niños con ACI sean malentendidos como problemáticos, vagos o disruptivos, a pesar de su capacidad avanzada (<Link href="/historia#el-caso-benjamin">ver caso en Historia</Link>).
          </p>
        </section>

        <section className="content-section">
          <h2 id="avances-provinciales">Avances en otras provincias&nbsp;<a href="#avances-provinciales">🔗</a></h2>
          <p>
            Aunque sin legislación integral, algunas jurisdicciones han ensayado políticas propias:
          </p>
          <ul className="content-list">
            <li><strong>Santa Fe</strong>: Resoluciones que permiten adaptaciones curriculares, sujetas a criterio docente.</li>
            <li><strong>Córdoba</strong>: Programas piloto en escuelas públicas, enfocados en enriquecimiento extracurricular.</li>
            <li><strong>Mendoza</strong>: Publicaciones orientativas para docentes sobre identificación de ACI, sin aplicación obligatoria.</li>
          </ul>
          <p>
            Estas iniciativas muestran voluntad, pero siguen siendo parciales, inestables y sin coordinación nacional.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">Explorá cómo estas brechas impactan en adultos</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="adultos-aci">¿Y si ya sos adulto?&nbsp;<a href="#adultos-aci">🔗</a></h2>
          <p>
            Hoy no existe legislación para detectar ni acompañar adultos con ACI. No hay políticas públicas, laborales ni sanitarias pensadas para perfiles con funcionamiento cognitivo inusualmente potente.
          </p>
          <p>
            Todo queda en manos de tu iniciativa personal y del acompañamiento que consigas. <Link href="/arquetipos#introduccion">Explorá Arquetipos para ubicar tu recorrido</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="que-hacer">¿Qué podés hacer si tu provincia no tiene nada?&nbsp;<a href="#que-hacer">🔗</a></h2>
          <p>
            Aunque el sistema no te vea, podés hacer visible tu necesidad. Algunas opciones:
          </p>
          <ol className="content-list">
            <li>Solicitar una <Link href="/profesionales#que-esperar">evaluación especializada</Link> fuera del sistema educativo.</li>
            <li>Presentar ese informe en la escuela o ámbito laboral como sustento técnico.</li>
            <li>Pedir una respuesta formal por escrito a la institución.</li>
            <li>Buscar acompañamiento legal o mediación pedagógica si es necesario.</li>
          </ol>
          <p>
            <Link href="/tests#la-verdadera-evaluacion-es-un-proceso">¿Cómo funciona una evaluación integral?</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="legislacion-internacional">Legislación internacional como referencia&nbsp;<a href="#legislacion-internacional">🔗</a></h2>
          <p>
            Argentina ratificó la Convención sobre los Derechos de las Personas con Discapacidad (Ley 26.378), que garantiza educación inclusiva a personas neurodivergentes. Aunque no menciona ACI explícitamente, su espíritu respalda la necesidad de políticas adaptadas.
          </p>
          <p>
            Otros países, como España, cuentan con leyes autonómicas específicas para ACI. Ese modelo inspiró parte de la propuesta de la Ley Benjamín (<Link href="/historia#de-platon-al-test-de-ci">ver contexto histórico</Link>).
          </p>
        </section>

        <section className="content-section">
          <h2 id="por-que-importa">Por qué importa&nbsp;<a href="#por-que-importa">🔗</a></h2>
          <p>
            La ley no resuelve todo, pero habilita. Sin marco normativo, las ACI siguen siendo confundidas, ignoradas o patologizadas. Un sistema que no contempla lo inusual lo transforma en problema.
          </p>
          <p>
            Hasta que eso cambie, conocerte, formarte y vincularte con quienes sí entienden la diferencia es una forma de ejercer tu derecho.
          </p>
          <p>
            <Link href="/tests#tu-sospecha-es-legitima">Explorá los Tests si querés empezar por entender tu mente</Link>
          </p>
        </section>
      </div>
    </main>
  );
} 