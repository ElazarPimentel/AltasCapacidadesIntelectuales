// src/app/profesionales/page.tsx
// profesionales

import Link from 'next/link';

export { default as metadata } from './metadata';

export default function Profesionales() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Profesionales Especializados en Altas Capacidades Intelectuales</h1>

        <section className="content-section">
          <p>
            Encontrar un profesional que entienda las Altas Capacidades Intelectuales (ACI) en adultos es clave si querés explorar tu perfil cognitivo o emocional. Esta sección te orienta para elegir bien, entender qué esperar y evitar diagnósticos genéricos que te dejen igual que antes.
          </p>
        </section>

        <section className="content-section">
          <h2 id="por-que-especializado">Por qué un profesional especializado&nbsp;<a href="#por-que-especializado">🔗</a></h2>
          <p>
            Según la Asociación Española de Superdotación y Talento, la formación en altas capacidades es limitada en muchos programas de psicología general, y mucho más aún en perfiles adultos<sup><a href="#ref-1">[1]</a></sup>. Las ACI no son parte del entrenamiento clínico estándar.
          </p>
          <p>
            Un profesional no especializado puede minimizar lo que sentís o confundirlo con otro cuadro<sup><a href="#ref-2">[2]</a></sup>. Uno formado en ACI sabe detectar patrones, validar tu experiencia sin exagerarla y ayudarte a ponerle palabras a lo que quizás viviste en silencio.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">¿Cómo se vive esa diferencia? Mirá los arquetipos</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="que-buscar">Qué buscar en un profesional&nbsp;<a href="#que-buscar">🔗</a></h2>
          <p>
            Estas son buenas señales<sup><a href="#ref-3">[3]</a></sup>:
          </p>
          <ul className="content-list">
            <li><strong>Formación específica</strong> en neurodivergencia, ACI o evaluación psicodiagnóstica.</li>
            <li><strong>Experiencia con adultos</strong>: muchos solo trabajan con niños.</li>
            <li><strong>Enfoque integral</strong>: entrevistas clínicas + pruebas + contexto vital.</li>
            <li><strong>Lenguaje claro y sin reduccionismos</strong>: te escucha más de lo que encasilla.</li>
          </ul>
          <p>
            Organizaciones como AACArg o Mensa pueden servir como punto de partida. También podés consultar la <a href="#lista-de-profesionales">lista de profesionales</a>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="que-esperar">Qué esperar de una evaluación&nbsp;<a href="#que-esperar">🔗</a></h2>
          <p>
            No es un test de CI y listo. Es un proceso que incluye<sup><a href="#ref-4">[4]</a></sup>:
          </p>
          <ul className="content-list">
            <li><strong>Entrevistas clínicas</strong> para conocer tu historia y estilo de pensamiento.</li>
            <li><strong>Pruebas psicométricas</strong> como WAIS-IV.</li>
            <li><strong>Análisis cualitativo</strong> de tu forma de aprender, conectar ideas o sentir.</li>
            <li><strong>Informe final</strong> con hipótesis diagnóstica, recomendaciones y opciones de acción.</li>
          </ul>
          <p>
            Este recorrido no busca definirte. Busca afinar tu brújula.
          </p>
          <p>
            <Link href="/tests#la-verdadera-evaluacion-es-un-proceso">Conocé el proceso completo en Tests</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="lista-de-profesionales">Lista de profesionales (placeholder)&nbsp;<a href="#lista-de-profesionales">🔗</a></h2>
          <p>
            <em>(Esta sección debe completarse con especialistas reales)</em>
          </p>
          <ul className="content-list">
            <li><strong>Lic. Ana Pérez</strong> – Neuropsicóloga, Buenos Aires. Especialista en ACI y doble excepcionalidad.</li>
            <li><strong>Dr. Juan Gómez</strong> – Psicólogo, Córdoba. Evaluaciones integrales para adultos.</li>
            <li><strong>Lic. María López</strong> – Psicopedagoga, Mendoza. Orientación en trayectorias educativas y ACI.</li>
          </ul>
          <p>
            Para más opciones, revisá <Link href="/tests#el-profesional-adecuado-importa">Tests</Link> o contactá asociaciones locales.
          </p>
        </section>

        <section className="content-section">
          <h2 id="sin-acceso">Si no tenés acceso inmediato&nbsp;<a href="#sin-acceso">🔗</a></h2>
          <p>
            Si no podés acceder a un especialista (por distancia, costo o tiempo), podés<sup><a href="#ref-5">[5]</a></sup>:
          </p>
          <ul className="content-list">
            <li>Buscar comunidades online donde se compartan experiencias reales.</li>
            <li>Leer libros o artículos de calidad sobre ACI y neurodivergencia.</li>
            <li>Usar una IA para poner en palabras lo que sentís (<Link href="/tests#charlar-con-una-ia">ver prompt en Tests</Link>).</li>
          </ul>
          <p>
            No reemplazan una evaluación profesional, pero pueden ayudarte a empezar.
          </p>
        </section>

        <section className="content-section">
          <h2 id="por-que-importa">Por qué importa&nbsp;<a href="#por-que-importa">🔗</a></h2>
          <p>
            Un diagnóstico no es una etiqueta: es una llave. El profesional adecuado puede ayudarte a entender tu mente sin distorsionarla, y acompañarte a integrarla en tu vida.
          </p>
          <p>
            <Link href="/historia#aci-en-argentina">¿Querés entender cómo llegamos hasta acá? Mirá Historia</Link>
            <br/>
            <Link href="/legislacion#marco-nacional">¿Querés saber qué derechos tenés? Leé Legislación</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul className="content-list">
            <li id="ref-1">[1] <a href="https://www.aest.es/altas-capacidades-intelectuales-o-superdotacion/" target="_blank" rel="noopener noreferrer">AEST: Altas Capacidades Intelectuales o Superdotación - Asociación Española de Superdotación y Talento</a></li>
            <li id="ref-2">[2] <a href="https://www.sciencedirect.com/science/article/abs/pii/S0160289621000635" target="_blank" rel="noopener noreferrer">Silverman, L. K. (2021) - Adult Giftedness: Challenges in Diagnosis and Support</a></li>
            <li id="ref-3">[3] <a href="https://www.nagc.org/resources-publications/resources/selecting-professional" target="_blank" rel="noopener noreferrer">NAGC: Selecting a Mental Health Professional - National Association for Gifted Children</a></li>
            <li id="ref-4">[4] <a href="https://www.pearsonassessments.com/professional-assessments/digital-solutions/wais-iv.html" target="_blank" rel="noopener noreferrer">Wechsler Adult Intelligence Scale-Fourth Edition (WAIS-IV)</a></li>
            <li id="ref-5">[5] <a href="https://www.sengifted.org/post/self-discovery-adult-giftedness" target="_blank" rel="noopener noreferrer">SENG: Self-Discovery of Adult Giftedness - Supporting Emotional Needs of the Gifted</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 