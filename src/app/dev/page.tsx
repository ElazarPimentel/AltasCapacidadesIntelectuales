// src/app/dev/page.tsx


import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { getSectionVariant } from '@/lib/section-variants';
import JsonLd, { websiteStructuredData, organizationStructuredData } from '@/components/JsonLd';

export const metadata = generatePageMetadata({
  title: 'ACI en Adultos',
  description:
    'Si sentís que tu mente va a otra velocidad, conectás ideas en formas que otros no ven, o el mundo parece ir más lento, esta página es para pensarte.',
  path: '/',
  keywords: [
    'altas capacidades intelectuales',
    'ACI',
    'adultos',
    'Argentina',
    'neurodivergencia',
  ],
  type: 'website',
});



export default function Home() {
  return (
    <main className="main-content">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "inLanguage": "es-AR",
        "name": "ACI en Adultos - Altas Capacidades Intelectuales",
        "description": "Información y recursos sobre Altas Capacidades Intelectuales (ACI) en adultos. Descubre si tu forma de pensar y procesar el mundo podría estar relacionada con las ACI.",
        "url": "https://altascapacidadesintelectuales.org",
        "isPartOf": websiteStructuredData,
        "mainEntity": {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "ACI en Adultos",
          "description": "Si sentís que tu mente va a otra velocidad, conectás ideas en formas que otros no ven, o el mundo parece ir más lento, esta página es para pensarte.",
          "inLanguage": "es-AR",
          "author": organizationStructuredData,
          "publisher": organizationStructuredData,
          "datePublished": "2024-03-19",
          "dateModified": "2024-03-19",
          "keywords": ["altas capacidades intelectuales", "ACI", "adultos", "Argentina", "neurodivergencia", "inteligencia", "procesamiento cognitivo"],
          "mainEntityOfPage": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ACI en Adultos",
            "description": "Si sentís que tu mente va a otra velocidad, conectás ideas en formas que otros no ven, o el mundo parece ir más lento, esta página es para pensarte.",
            "url": "https://altascapacidadesintelectuales.org",
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
        <h1>ACI en Adultos</h1>
        <section className={`content-section ${getSectionVariant(0)}`}>
          <h1>Descubrí las mentes únicas</h1>
          <p>
            Imaginá que tu mente es como un caleidoscopio: cada giro revela patrones que otros no ven. O tal vez conocés a alguien cuya cabeza parece un torbellino de ideas. Este espacio es para vos, para ellos, para entender qué hace únicas a las mentes como las tuyas. Explorá sin prejuicios: no se trata de etiquetas, sino de descubrir cómo pensás, sentís o conectás con el mundo.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="que-son-aci">¿Qué son las Altas Capacidades Intelectuales?&nbsp;<a href="#que-son-aci">🔗</a></h2>
          <p>Las Altas Capacidades Intelectuales (ACI) no son solo un número en un test. Son una manera de vivir el mundo:</p>
          <ul>
            <li><strong>Rápida</strong>: Captás ideas al vuelo, sin necesidad de repetir.</li>
            <li><strong>Profunda</strong>: Sentís emociones con una intensidad que puede desbordar.</li>
            <li><strong>Asincrónica</strong>: Tu mente va a mil, pero tus emociones o relaciones pueden ir a otro ritmo.</li>
          </ul>
          <p>
            No se trata de ser “mejor”, sino de procesar la realidad de forma distinta. ¿Querés saber más? <Link href="/tests">Explorá cómo identificar ACI</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="te-suena">¿Te suena? Características comunes&nbsp;<a href="#te-suena">🔗</a></h2>
          <p>¿Reconocés estas señales en vos o en alguien cercano?</p>
          <table className="data-table">
            <thead>
              <tr>
                <th>¿Esto te representa?</th>
                <th>¿En vos o en alguien más?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aprender rápido conceptos nuevos</td>
                <td>“Entiendo teorías complejas sin esfuerzo, y mi hijo devora libros de ciencia.”</td>
              </tr>
              <tr>
                <td>Conectar ideas de forma inesperada</td>
                <td>“Relaciono arte con física en segundos, igual que mi amigo en sus charlas.”</td>
              </tr>
              <tr>
                <td>Sentir emociones intensas</td>
                <td>“La injusticia me hierve la sangre, y veo lo mismo en mi hermana.”</td>
              </tr>
              <tr>
                <td>Aburrirte con lo rutinario</td>
                <td>“Necesito retos nuevos, y mi colega se frustra con tareas repetitivas.”</td>
              </tr>
            </tbody>
          </table>
          <p>Si esto resuena, ya sea en vos o en alguien más, explorar puede abrir nuevas puertas. <Link href="/arquetipos">Conocé patrones de pensamiento</Link>.</p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="mitos">Mitos que rompen barreras&nbsp;<a href="#mitos">🔗</a></h2>
          <div className="content-quote">
            <p>“Si no fui un niño prodigio, no soy ACI.”</p>
            <footer>Falso: Muchas personas con ACI descubren su potencial en la adultez.</footer>
          </div>
          <p>Otros mitos que desmentir:</p>
          <ul>
            <li><strong>Mito</strong>: “Ser ACI garantiza éxito.” <strong>Realidad</strong>: La asincronía puede traer frustración o aislamiento.</li>
            <li><strong>Mito</strong>: “Solo los genios son ACI.” <strong>Realidad</strong>: Es sobre cómo procesás, no solo logros.</li>
          </ul>
          <p>
            Romper estos mitos te ayuda a entenderte a vos o a alguien más. <Link href="/historia">Descubrí la evolución de las ACI</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="no-aci">Si no sos ACI igual podés ser brillante&nbsp;<a href="#no-aci">🔗</a></h2>
          <p>
            Hay personas que reflexionan con claridad, abordan su trabajo con profundidad, resuelven problemas complejos, crean arte inspirador o disfrutan plenamente de sus pasiones, y no tienen ACI. No les falta nada: su manera de pensar, aunque destacada, es neurotípica, ¡y eso está perfecto!
          </p>
          <p>Las personas con ACI suelen mostrar:</p>
          <ul>
            <li>CI mayor a 125.</li>
            <li>Pensamiento abstracto espontáneo.</li>
            <li>Procesamiento no lineal, fluido y no secuencial.</li>
            <li>Búsqueda de aprendizaje complejo, rechazo a certezas simples o inmersión profunda en temas de interés.</li>
            <li>Visión rígida sobre verdad, justicia, ética o moral.</li>
            <li>Asincronía entre razonamiento, emociones y vínculos sociales.</li>
          </ul>
          <p>
            Si no te identificás con esto, tu singularidad sigue siendo valiosa. <Link href="/arquetipos">Explorá otras formas de brillar</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="siguientes-pasos">Siguientes pasos: Tu camino empieza acá&nbsp;<a href="#siguientes-pasos">🔗</a></h2>
          <p>Tu curiosidad te trajo hasta aquí. Ahora, ¿qué sigue?</p>
          <ul>
            <li><strong>Si sospechás ACI</strong>: <Link href="/tests">Tests</Link> te guía para entender tu perfil cognitivo.</li>
            <li><strong>Si querés aprender más</strong>: <Link href="/articulos">Artículos</Link> y <Link href="/curiosidades">Curiosidades</Link> despiertan mentes inquietas.</li>
            <li><strong>Si ves ACI en alguien más</strong>: <Link href="/profesionales">Profesionales</Link> ofrece recursos para apoyar a quien lo necesita.</li>
          </ul>
          <a href="/tests" className="button">Empezá a explorar</a>
        </section>

       

        {/* 10 ● Nota final */}
        <section className={`content-section ${getSectionVariant(10)}`}>
          <h2 id="nota-final">
            Nota 
            <Link href="#nota-final">🔗</Link>
          </h2>
          <p>
            Este sitio está pensado para adultos en búsqueda de
            autoconocimiento. Si buscás respuestas, estás en el lugar correcto.
            Seguí leyendo, pero no para encontrar certezas, sino para pensar con
            más claridad tu propia complejidad.
          </p>
        </section>
      </div>
    </main>
  );
} 