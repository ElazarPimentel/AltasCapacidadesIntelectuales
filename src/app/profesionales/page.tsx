// src/app/profesionales/page.tsx
// profesionales

import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Profesionales Especializados en Altas Capacidades',
  description: 'Directorio de profesionales especializados en evaluación y acompañamiento de Altas Capacidades Intelectuales en Argentina. Guía para encontrar el profesional adecuado.',
  path: '/profesionales',
  keywords: ['profesionales ACI', 'psicólogos altas capacidades', 'evaluación ACI', 'directorio profesionales', 'Argentina'],
  type: 'article',
});

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
            Las ACI no son parte del entrenamiento clínico estándar. Muchos psicólogos no están formados en neurodivergencia ni en cómo se manifiestan las ACI en adultos: asincronía, intensidad emocional, camuflaje, doble excepcionalidad (ACI con TDAH, TEA, etc.).
          </p>
          <p>
            Un profesional no especializado puede minimizar lo que sentís o confundirlo con otro cuadro. Uno formado en ACI sabe detectar patrones, validar tu experiencia sin exagerarla y ayudarte a ponerle palabras a lo que quizás viviste en silencio.
          </p>
          <p>
            <Link href="/arquetipos#introduccion">¿Cómo se vive esa diferencia? Mirá los arquetipos</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="que-buscar">Qué buscar en un profesional&nbsp;<a href="#que-buscar">🔗</a></h2>
          <p>
            Estas son buenas señales:
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
            No es un test de CI y listo. Es un proceso que incluye:
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
            Si no podés acceder a un especialista (por distancia, costo o tiempo), podés:
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
      </div>
    </main>
  );
} 