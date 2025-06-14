// src/app/arquetipos/page.tsx
// Arquetipos

import Link from 'next/link';
import { getSectionVariant } from '@/lib/utils';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Arquetipos de ACI - Altas Capacidades en Adultos',
  description: 'Exploración de los diferentes perfiles y manifestaciones de las Altas Capacidades Intelectuales en adultos.',
  path: '/arquetipos',
  type: 'article',
});

export default function Arquetipos() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Arquetipos de Experiencias con Altas Capacidades Intelectuales</h1>
        
        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            No se trata solo de si tenés o no un perfil ACI. Se trata de cómo viviste con esa diferencia —o sin saber que la tenías. Acá usamos <i>arquetipos experienciales</i> como espejos, no como casilleros. No son categorías clínicas: son formas de entender tu recorrido vital. Si alguno te resuena, puede servirte para pensar(te).
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2 id="introduccion">Introducción&nbsp;<a href="#introduccion">🔗</a></h2>
          <p>
            Estos arquetipos combinan <strong>tipo de mente (ACI / no-ACI / típica)</strong> y <strong>trayectoria vital (favorable / adversa)</strong>. 
            No son diagnósticos ni cajones; son espejos para pensar(te). Si algo te resuena, usalo. Si no, seguí explorando.
            Si querés datos duros sobre evaluación, visitá la sección de <Link href="/tests#tu-sospecha-es-legitima">Tests</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="si-test-no-muestra">¿Y si soy inteligente pero el test no lo muestra?&nbsp;<a href="#si-test-no-muestra">🔗</a></h2>
          <p>
            Gente brillante a veces se frustra si el resultado psicométrico "no coincide" con lo que siente.
            Tres causas frecuentes:
          </p>
          <ol className="content-list">
            <li><strong>Sobreestimación subjetiva.</strong> Confundimos facilidad académica con rendimiento cognitivo global.</li>
            <li><strong>Contexto.</strong> Un entorno estimulante eleva a un CI 90; uno adverso sabotea a un CI 115.</li>
            <li><strong>Expectativa mágica.</strong> Creemos que un único test revelará nuestra genialidad en 90 minutos.</li>
          </ol>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2 id="que-mide-ci">¿Qué mide el CI?&nbsp;<a href="#que-mide-ci">🔗</a></h2>
          <ul className="content-list">
            <li>Media = 100, σ = 15 → ~68 % de la población entre <strong>85 y 115</strong>.</li>
            <li><strong>115 – 129 → muy inteligentes.</strong> Recursos cognitivos por encima del promedio.</li>
            <li><strong>≥ 130 → posible perfil ACI</strong> si el patrón global lo confirma.</li>
          </ul>
          <p>
            Un CI alto no garantiza éxito; un CI medio no lo impide. Lo que importa es cómo lo usás.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="diagnostico">¿Quién decide?&nbsp;<a href="#diagnostico">🔗</a></h2>
          <p>
            Identificar ACI requiere baterías como <strong>WAIS-IV / WISC-V</strong>, administradas por profesionales formados, historia clínica y observación cualitativa. "Sentirse distinto" no alcanza, igual que un dolor lumbar necesita placas, no intuición.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="tabla-arquetipos">Mapa de Arquetipos&nbsp;<a href="#tabla-arquetipos">🔗</a></h2>
          <div className="arquetipos-table-container">
            <table
              className="arquetipos-table"
              aria-labelledby="tabla-arquetipos"
            >
              <caption id="tabla-arquetipos" className="u-visually-hidden">
                Matriz de arquetipos según CI y contexto vital
              </caption>

              <thead>
                <tr>
                  <th scope="col">CI / Contexto</th>
                  <th scope="col">
                    Contexto&nbsp;favorable <span className="arquetipos-table__hint">(alto&nbsp;desempeño)</span>
                  </th>
                  <th scope="col">
                    Contexto&nbsp;adverso <span className="arquetipos-table__hint">(vida&nbsp;difícil)</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* fila ACI ≥ 130 */}
                <tr>
                  <th scope="row">ACI ≥ 130</th>
                  <td data-id="A">
                    <strong>A)</strong> ACI + alto desempeño
                    <br />
                    <span className="arquetipos-table__rec">Mentoría especializada</span>
                  </td>
                  <td data-id="B">
                    <strong>B)</strong> ACI + vida difícil
                    <br />
                    <span className="arquetipos-table__rec">Apoyo psicológico</span>
                  </td>
                </tr>

                {/* fila 110-129 */}
                <tr>
                  <th scope="row">Muy inteligente 110-129</th>
                  <td data-id="C">
                    <strong>C)</strong> Inteligente + alto desempeño
                    <br />
                    <span className="arquetipos-table__rec">Liderazgo / gestión de estrés</span>
                  </td>
                  <td data-id="D">
                    <strong>D)</strong> Inteligente + vida difícil
                    <br />
                    <span className="arquetipos-table__rec">Terapia / recursos</span>
                  </td>
                </tr>

                {/* fila 95-109 */}
                <tr>
                  <th scope="row">Típico 95-109</th>
                  <td data-id="E">
                    <strong>E)</strong> Típico + alto desempeño
                    <br />
                    <span className="arquetipos-table__rec">Orientación vocacional</span>
                  </td>
                  <td data-id="F">
                    <strong>F)</strong> Típico + vida difícil
                    <br />
                    <span className="arquetipos-table__rec">Apoyo socio-económico</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h2 className="section-title">Descripciones de Arquetipos</h2>

        <section className={`content-section ${getSectionVariant(6)}`}>
          <h2 id="arquetipo-b">B) ACI + vida difícil&nbsp;<a href="#arquetipo-b">🔗</a></h2>
          <p>
            <i>Sobrecapacidad sin andamiaje.</i>
          </p>
          <p>
            CI ≥ 130 nunca detectado. Aburrimiento escolar, diagnósticos errados, rechazo social por sensibilidad ética e ideas atípicas.
            <strong>Clave:</strong> una evaluación certera + apoyos específicos puede cambiar el rumbo.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> Tu capacidad es un activo que podés desarrollar proactivamente.</li>
            <li><strong>Oportunidad:</strong> Crear tu propio espacio, conectar con otros que comparten tu visión, desarrollar tu potencial único.</li>
          </ul>
          <p>
            <Link href="/profesionales#que-buscar">Explorá opciones de desarrollo profesional si esto te resuena</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2 id="arquetipo-d">D) Inteligente + vida difícil&nbsp;<a href="#arquetipo-d">🔗</a></h2>
          <p>
            <i>La diferencia que sentís no siempre tiene origen cognitivo.</i>
          </p>
          <p>
            CI promedio; la dificultad surge de trauma, pobreza o violencia. A veces desea "ser ACI" para explicar su malestar.
            <strong>Clave:</strong> abordar la causa real (psicológica, social, económica) antes de buscar un rótulo cognitivo.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> El malestar es real, pero su causa puede estar en otro lado.</li>
            <li><strong>Riesgo:</strong> Autoengañarse con una explicación que distrae en lugar de aclarar.</li>
          </ul>
          <p>
            <Link href="/tests#y-si-no-tenes-aci-pero-igual-sos-brillante">¿Querés explorar esa diferencia? Empezá por Tests</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="arquetipo-c">C) Inteligente + alto desempeño&nbsp;<a href="#arquetipo-c">🔗</a></h2>
          <p>
            <i>Capacidad funcional, estructurada, sostenida.</i>
          </p>
          <p>
            CI 110-129. Brilla por disciplina y buena adaptación a sistemas exigentes; sin asincronía.
            <strong>Riesgo:</strong> atribuir cualquier frustración a "genialidad incomprendida".
            <strong>Oportunidad:</strong> optimizar habilidades sin necesidad de una etiqueta.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> Son brillantes dentro del marco esperable.</li>
            <li><strong>Riesgo:</strong> Atribuir su malestar a "genialidad incomprendida" y no a otros factores.</li>
          </ul>
          <p>
            <Link href="/tests#y-si-no-tenes-aci-pero-igual-sos-brillante">¿Este sos vos? Mirá esta sección en Tests</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2 id="arquetipo-a">A) ACI + alto desempeño&nbsp;<a href="#arquetipo-a">🔗</a></h2>
          <p>
            <i>Alta capacidad como ventaja competitiva en el mercado.</i>
          </p>
          <p>
            CI ≥ 130. Desmenuza estructuras complejas y crea proyectos originales.
            <strong>Potencia:</strong> florece con desafíos del tamaño adecuado y mentoría de pares.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> Usa su capacidad como herramienta para crear valor.</li>
            <li><strong>Oportunidad:</strong> Desarrollar proyectos innovadores, crear espacios de valor, liderar iniciativas únicas.</li>
          </ul>
          <p>
            <Link href="/profesionales#que-buscar">¿Querés desarrollar este potencial? Explorá opciones de mentoría especializada</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="arquetipo-e">E) Típico + alto desempeño&nbsp;<a href="#arquetipo-e">🔗</a></h2>
          <p>
            <i>Rendimiento notable con capacidad promedio.</i>
          </p>
          <p>
            CI 95-109 + entorno estimulante. Se destaca gracias a disciplina y feedback.
            <strong>Necesidad:</strong> orientación vocacional y estrategia para seguir creciendo sin comparaciones tóxicas.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> El éxito no depende solo de la capacidad intelectual.</li>
            <li><strong>Oportunidad:</strong> Aprovechar sus fortalezas en entornos que valoren su estilo de trabajo.</li>
          </ul>
          <p>
            <Link href="/tests#y-si-no-tenes-aci-pero-igual-sos-brillante">¿Te identificás con este perfil? Explorá opciones de desarrollo</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2 id="arquetipo-f">F) Típico + vida difícil&nbsp;<a href="#arquetipo-f">🔗</a></h2>
          <p>
            <i>Potencial valioso en contexto adverso.</i>
          </p>
          <p>
            CI 95-109 en contexto adverso. Puede sentirse "menos" aunque su potencial sea valioso.
            <strong>Prioridad:</strong> cobertura de necesidades básicas y redes de apoyo antes de metas cognitivas ambiciosas.
          </p>
          <ul className="content-list">
            <li><strong>Punto clave:</strong> El contexto puede limitar el desarrollo del potencial.</li>
            <li><strong>Oportunidad:</strong> Construir una base sólida para el crecimiento personal y profesional.</li>
          </ul>
          <p>
            <Link href="/profesionales#recursos-basicos">¿Necesitás recursos básicos? Explorá esta sección</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="mitos">Mitos que hay que romper&nbsp;<a href="#mitos">🔗</a></h2>
          <ul className="content-list">
            <li>«He tenido problemas en la escuela y me siento incomprendido por todos, soy ACI.» – <strong>Falso</strong></li>
            <li>«Si no fui un niño prodigio, no soy ACI.» – <strong>Falso</strong></li>
            <li>«Ser ACI garantiza éxito.» – <strong>Falso</strong></li>
            <li>«Solo los genios son ACI.» – <strong>Falso</strong></li>
            <li>«Las ACI se detectan siempre en la infancia.» – <strong>Falso</strong></li>
          </ul>
          <p>
            Conocé más en la sección de <Link href="/historia">Historia</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="que-hacer">¿Qué hacer si sospechás que sos ACI?&nbsp;<a href="#que-hacer">🔗</a></h2>
          <ol className="content-list">
            <li>Reflexioná sobre tu historia y tu entorno.</li>
            <li>Buscá un <Link href="/profesionales#que-buscar">profesional especializado</Link> para una evaluación clara.</li>
            <li>Explorá actividades intelectuales o creativas que te desafíen.</li>
          </ol>
        </section>

        <section className={`content-section ${getSectionVariant(6)}`}>
          <h2 id="Observaciones">Observaciones&nbsp;<a href="#Observaciones">🔗</a></h2>
          <p>
            Ser ACI no te hace mejor; no serlo no te quita valor. La etiqueta solo importa para elegir estrategias adecuadas de desarrollo. Si dudás, consultá profesionales: un buen diagnóstico ahorra años de ensayo-error.
          </p>
          <p>
            Si querés entender mejor cómo funciona tu mente, el mercado ofrece diversas opciones de <Link href="/tests#la-verdadera-evaluacion-es-un-proceso">evaluación profesional</Link>.
          </p>
          <p>
            Para entender mejor el contexto histórico y cómo otros han navegado estos desafíos, explorá la sección de <Link href="/historia#de-platon-al-test-de-ci">Historia</Link>.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2 id="marco-teorico">Marco teórico&nbsp;<a href="#marco-teorico">🔗</a></h2>
          <p>
            Estos arquetipos se basan en la teoría de la desintegración positiva de <strong>Dabrowski</strong>, los perfiles de <strong>Neihart</strong> sobre personas con altas capacidades, y los estudios longitudinales de <strong>Silverman</strong> sobre el desarrollo asincrónico. No son categorías diagnósticas, sino herramientas para pensar la diversidad cognitiva.
          </p>
          <p>
            <Link href="/acerca#metodologia">Conocé más sobre nuestra metodología</Link>
          </p>
        </section>

        <div className="disclaimer-box">
          <p><strong>Disclaimer.</strong> Este sitio no ofrece diagnóstico. Su contenido es informativo y está orientado a adultos que sospechan tener un perfil ACI. Recomendamos siempre consultar a un profesional especializado.</p>
        </div>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul className="content-list">
            <li id="ref-1">[1] <a href="https://www.sengifted.org/post/the-gifted-adult-manifesto" target="_blank" rel="noopener noreferrer">SENG – The Gifted Adult Manifesto</a></li>
            <li id="ref-2">[2] <a href="https://www.springerpub.com/giftedness-101-9780826107982.html" target="_blank" rel="noopener noreferrer">Silverman, L. K. (2021) – Adult Giftedness: Challenges in Diagnosis and Support</a></li>
            <li id="ref-3">[3] <a href="https://www.penguinrandomhouse.com/books/the-gifted-adult" target="_blank" rel="noopener noreferrer">Nauta, N. & Ronner, S. (2021) – Gifted Adults in Work</a></li>
            <li id="ref-4">[4] <a href="https://www.hoagiesgifted.org/gifted_adults.htm" target="_blank" rel="noopener noreferrer">Hoagies' Gifted – Gifted Adults Resources</a></li>
            <li id="ref-5">[5] <a href="https://www.davidsongifted.org/gifted-blog/understanding-and-supporting-gifted-adults/" target="_blank" rel="noopener noreferrer">Davidson Institute – Understanding and Supporting Gifted Adults</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 