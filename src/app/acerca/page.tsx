import Link from 'next/link';
import Disclaimer from '@/components/Disclaimer';

export { default as metadata } from './metadata';

export default function Acerca() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Acerca de este Sitio</h1>
        
        <section className="content-section">
          <p>
            Este sitio fue creado para personas adultas que sospechan tener Altas Capacidades Intelectuales (ACI) y buscan entender su diferencia sin necesidad de etiquetas clínicas ni tecnicismos<sup><a href="#ref-1">[1]</a></sup>. No somos un centro diagnóstico ni una institución educativa. No ofrecemos tests, terapias ni programas. Somos un recurso informativo, independiente y <strong>enfocado exclusivamente en adultos</strong>.
          </p>
          <p>
            A diferencia de centros que se enfocan en niños y adolescentes, nuestro sitio está diseñado para quienes ya pasaron la infancia sin identificación temprana<sup><a href="#ref-2">[2]</a></sup>. No competimos con instituciones establecidas; las complementamos ofreciendo claridad conceptual, tono empático y orientación práctica hacia <Link href="/profesionales">profesionales especializados</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="metodologia">Metodología y Enfoque&nbsp;<a href="#metodologia">🔗</a></h2>
          <p>
            Nuestro enfoque se basa en tres pilares<sup><a href="#ref-3">[3]</a></sup>:
          </p>
          <ul className="content-list">
            <li><strong>Evidencia científica</strong>: Nos basamos en investigación actualizada sobre ACI en adultos.</li>
            <li><strong>Experiencia vivida</strong>: Incorporamos testimonios y patrones observados en la práctica clínica.</li>
            <li><strong>Accesibilidad</strong>: Traducimos conceptos complejos a lenguaje claro y accionable.</li>
          </ul>
          <p>
            Cada sección está diseñada para ayudarte a entender tu mente sin patologizarla<sup><a href="#ref-4">[4]</a></sup>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="transparencia">Transparencia y Criterios&nbsp;<a href="#transparencia">🔗</a></h2>
          <p>
            Nuestro contenido se basa en una <a href="/data/editorial-guide.md" target="_blank" rel="noopener noreferrer">guía editorial propia</a>, alineada con enfoques multidimensionales que reconocen la creatividad, la asincronía y la intensidad emocional de las ACI, más allá del CI<sup><a href="#ref-5">[5]</a></sup>. Nos inspiramos en fuentes confiables y colaboramos con la comunidad, como la <a href="https://revista.elarcondeclio.com.ar/la-asociacion-civil-altas-capacidades-argentina/" target="_blank" rel="noopener noreferrer">Asociación Altas Capacidades Argentina</a>.
          </p>
          <p>
            Cada página de este sitio está pensada para aportar claridad sin imponer diagnósticos. Si algo te resuena, perfecto. Si no, también está bien. El objetivo es que tengas palabras para pensar tu experiencia, no que encajes en una categoría.
          </p>
        </section>

        <section className="content-section">
          <h2 id="donde-continuar">¿Por dónde continuar?&nbsp;<a href="#donde-continuar">🔗</a></h2>
          <ul className="content-list">
            <li>
              <strong><Link href="/tests">¿Querés explorar tu sospecha?</Link></strong> - Tests orientativos y guía para evaluación profesional
            </li>
            <li>
              <strong><Link href="/arquetipos">¿Cómo vivir la diferencia?</Link></strong> - Arquetipos experienciales para entender tu recorrido
            </li>
            <li>
              <strong><Link href="/profesionales">¿Buscás acompañamiento?</Link></strong> - Directorio de profesionales especializados
            </li>
            <li>
              <strong><Link href="/">¿Qué son las ACI?</Link></strong> - Información fundamental sobre altas capacidades
            </li>
          </ul>
        </section>

        <Disclaimer />

        <section className="content-section">
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul className="content-list">
            <li id="ref-1">[1] <a href="https://www.sengifted.org/post/gifted-adult-manifesto" target="_blank" rel="noopener noreferrer">SENG: The Gifted Adult Manifesto - Supporting Emotional Needs of the Gifted</a></li>
            <li id="ref-2">[2] <a href="https://www.sciencedirect.com/science/article/abs/pii/S0160289621000635" target="_blank" rel="noopener noreferrer">Silverman, L. K. (2021) - Adult Giftedness: Challenges in Diagnosis and Support</a></li>
            <li id="ref-3">[3] <a href="https://www.routledge.com/Gifted-Adults-in-Work/Nauta-Ronner/p/book/9781138291446" target="_blank" rel="noopener noreferrer">Nauta, N., & Ronner, S. (2021). Gifted Adults in Work</a></li>
            <li id="ref-4">[4] <a href="https://www.hoagiesgifted.org/gifted_adults.htm" target="_blank" rel="noopener noreferrer">Hoagies' Gifted: Gifted Adults - Resources and Research</a></li>
            <li id="ref-5">[5] <a href="https://www.davidsongifted.org/gifted-blog/gifted-adults/" target="_blank" rel="noopener noreferrer">Davidson Institute: Understanding and Supporting Gifted Adults</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 