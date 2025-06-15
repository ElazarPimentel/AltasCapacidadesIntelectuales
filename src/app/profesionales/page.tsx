// src/app/profesionales/page.tsx
// profesionales

import Link from 'next/link';
import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Profesionales en ACI - Altas Capacidades en Adultos',
  description: 'Encuentra profesionales especializados en evaluación y apoyo de adultos con Altas Capacidades en Buenos Aires.',
  path: '/profesionales',
  type: 'article',
});

export default function Profesionales() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Profesionales Especializados en Altas Capacidades Intelectuales</h1>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            Encontrar un profesional que entienda las Altas Capacidades Intelectuales (ACI) en adultos es clave si querés explorar tu perfil cognitivo o emocional. Esta sección te orienta para elegir bien, entender qué esperar y evitar diagnósticos genéricos que te dejen igual que antes.
          </p>
        </section>

        <section className="content-section variant-b">
          <h2 id="por-que-especializado">El valor de la especialización en el mercado&nbsp;<a href="#por-que-especializado">🔗</a></h2>
          <p>
            El mercado de profesionales especializados en ACI ha surgido como respuesta a una demanda específica. Mientras que la formación general en psicología puede ser limitada en este campo<sup><a href="#ref-1">[1]</a></sup>, algunos profesionales han elegido desarrollar expertise particular en altas capacidades, creando un nicho valioso de servicios especializados.
          </p>
          <p>
            La diferencia entre un profesional generalista y uno especializado en ACI radica en su inversión en formación específica<sup><a href="#ref-2">[2]</a></sup>. Los especialistas han desarrollado herramientas precisas para detectar patrones, validar experiencias y ofrecer un acompañamiento efectivo.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">¿Cómo se refleja esto en la práctica? Mirá los arquetipos</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2 id="que-buscar">Criterios para elegir un profesional&nbsp;<a href="#que-buscar">🔗</a></h2>
          <p>
            Al elegir un profesional en el mercado, considerá estos indicadores de calidad<sup><a href="#ref-3">[3]</a></sup>:
          </p>
          <ul>
            <li><strong>Inversión en formación específica</strong> en neurodivergencia, ACI o evaluación psicodiagnóstica.</li>
            <li><strong>Especialización en adultos</strong>: un nicho más específico y valioso.</li>
            <li><strong>Metodología integral</strong>: combinación de herramientas diagnósticas y análisis personalizado.</li>
            <li><strong>Comunicación efectiva</strong>: capacidad de transmitir información compleja de forma clara.</li>
          </ul>
          <p>
            El mercado ofrece múltiples opciones: desde profesionales independientes hasta organizaciones especializadas como AACArg o Mensa. Explorá la <a href="#lista-de-profesionales">lista de profesionales</a> para comparar servicios.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="que-esperar">Qué esperar de una evaluación&nbsp;<a href="#que-esperar">🔗</a></h2>
          <p>
            No es un test de CI y listo. Es un proceso que incluye<sup><a href="#ref-4">[4]</a></sup>:
          </p>
          <ul>
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

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="sin-acceso">Alternativas en el mercado&nbsp;<a href="#sin-acceso">🔗</a></h2>
          <p>
            El mercado ofrece múltiples opciones según tu presupuesto y necesidades<sup><a href="#ref-5">[5]</a></sup>:
          </p>
          <ul>
            <li>Comunidades online autoorganizadas con experiencias compartidas.</li>
            <li>Recursos educativos digitales y libros especializados.</li>
            <li>Herramientas de IA para exploración inicial (<Link href="/tests#charlar-con-una-ia">ver prompt en Tests</Link>).</li>
            <li>Consultas virtuales con profesionales de otras regiones.</li>
          </ul>
          <p>
            Cada opción tiene su propio valor y puedes elegir la que mejor se ajuste a tus necesidades actuales.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="por-que-importa">El valor de la elección informada&nbsp;<a href="#por-que-importa">🔗</a></h2>
          <p>
            La diversidad de opciones en el mercado te permite elegir el camino que mejor se ajuste a tus necesidades. Un profesional especializado es una inversión en autoconocimiento que puede transformar cómo entendés y aprovechás tus capacidades.
          </p>
          <p>
            <Link href="/historia#aci-en-argentina">¿Querés entender cómo evolucionó este mercado? Mirá Historia</Link>
            <br/>
            <Link href="/legislacion#marco-nacional">¿Querés conocer el contexto actual? Leé Legislación</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul>
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