// src/app/curiosidades/page.tsx
// Curiosidades

import React from 'react';
import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: "Curiosidades para Mentes ACI | Argentina",
  description: "Juegos, paradojas y datos curiosos para estimular el pensamiento abstracto en adultos con Altas Capacidades en Argentina.",
  path: '/curiosidades',
  keywords: ["curiosidades ACI", "juegos lógicos", "pensamiento abstracto", "neurodivergencia"],
  type: "article",
});

export default function CuriosidadesPage() {
  return (
    <div className="main-content">
      <div className="container">
        <h1>Curiosidades que estimulan tu mente</h1>
        
        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            Bienvenido a nuestra colección de recursos para el desarrollo cognitivo independiente. 
            Si estás en Buenos Aires y buscás maximizar tu potencial intelectual, estas herramientas te ayudarán a crear tu propio camino de crecimiento.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2>Herramientas para el desarrollo cognitivo</h2>
          <p>El mercado ofrece diversas aplicaciones para potenciar tus capacidades cognitivas. Estas son algunas opciones premium que podrían interesarte:</p>
          <ul>
            <li><a href="https://play.google.com/store/apps/details?id=air.nn.mobile.app.main&hl=es" target="_blank" rel="noopener noreferrer">NeuroNation Premium</a> — Inversión en desarrollo cognitivo con ejercicios personalizados.</li>
            <li><a href="https://brilliant.org/" target="_blank" rel="noopener noreferrer">Brilliant.org Pro</a> — Plataforma premium para desarrollo matemático y científico avanzado.</li>
            <li><a href="https://play.google.com/store/apps/details?id=org.aztest.iqtest&hl=es" target="_blank" rel="noopener noreferrer">IQ Test Pro - Aztest</a> — Herramienta avanzada de evaluación cognitiva.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2>¿Sabías esto?</h2>
          <p>En el siglo XVI, Galileo propuso que dos objetos caen a la misma velocidad, sin importar su peso. Lo podés ver con dos pelotas en una escalera.</p>
          <p>En la misión Apolo 15, el astronauta David Scott replicó ese experimento... en la Luna. ¿Resultado? Igual que en la Tierra: la gravedad no discrimina masa.</p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Oo8TaPVsn9Y"
              loading="lazy"
              title="Experimento de Galileo en la Luna"
              allowFullScreen
            />
          </div>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2>Pensamiento lógico</h2>
          <blockquote className="content-quote">
            "Todos los gatos son negros. Vi un gato. ¿De qué color era?"<br />
            Si respondiste algo que no sea negro, volvé al principio.<br />
            (Sí, esto es un silogismo —y no, no hace falta estudiarlo para entenderlo.)
          </blockquote>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2>Datos curiosos del universo</h2>
          <h3>¿Qué tan lejos viaja la luz?</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Tiempo</th>
                <th>Distancia aproximada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 segundo</td>
                <td>300.000 km</td>
              </tr>
              <tr>
                <td>1 minuto</td>
                <td>18 millones de km</td>
              </tr>
              <tr>
                <td>1 hora</td>
                <td>1.08 mil millones de km</td>
              </tr>
              <tr>
                <td>1 día</td>
                <td>25.9 mil millones de km</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2>Equivalentes astronómicos</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Objeto</th>
                <th>Distancia media desde la Tierra</th>
                <th>Equivalente en tiempo-luz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estación Espacial (ISS)</td>
                <td>408 km</td>
                <td>~1.4 segundos luz (LS)</td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>384.400 km</td>
                <td>~1.28 LS</td>
              </tr>
              <tr>
                <td>Sol</td>
                <td>149.6 millones km</td>
                <td>~8.3 minutos luz (LM)</td>
              </tr>
              <tr>
                <td>Mercurio</td>
                <td>91 M km</td>
                <td>~5.1 LM</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>42 M km</td>
                <td>~2.3 LM</td>
              </tr>
              <tr>
                <td>Marte</td>
                <td>78 M km</td>
                <td>~4.3 LM</td>
              </tr>
              <tr>
                <td>Júpiter</td>
                <td>628 M km</td>
                <td>~34.9 LM</td>
              </tr>
              <tr>
                <td>Saturno</td>
                <td>1.28 B km</td>
                <td>~1.19 horas luz (LH)</td>
              </tr>
              <tr>
                <td>Urano</td>
                <td>2.72 B km</td>
                <td>~2.53 LH</td>
              </tr>
              <tr>
                <td>Neptuno</td>
                <td>4.35 B km</td>
                <td>~4.02 LH</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={`content-section ${getSectionVariant(6)}`}>
          <h2>Órbitas y zonas espaciales</h2>
          <ul>
            <li><strong>LEO (Órbita baja terrestre)</strong>: 160–2.000 km · Ej: ISS, Starlink</li>
            <li><strong>MEO (Media altura)</strong>: 2.000–35.786 km · Ej: GPS, Galileo</li>
            <li><strong>GEO (Geostacionaria)</strong>: ~35.786 km · Satélites meteorológicos y de comunicaciones</li>
          </ul>
          <p><strong>Más allá:</strong></p>
          <ul>
            <li>Punto Lagrange L1: ~1.5 M km (~5 LS)</li>
            <li>Probetas interplanetarias: Voyager 1 está a más de 22 LH</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2>Tamaños relativos</h2>
          <ul>
            <li>Diámetro de la Tierra: ~3.7 veces el de la Luna</li>
            <li>Diámetro del Sol: ~109 veces el de la Tierra</li>
            <li>Tierra equivale a:
              <ul>
                <li>2.63 Mercurios</li>
                <li>1.05 Venus</li>
                <li>1.89 Martes</li>
              </ul>
            </li>
            <li>Júpiter: ~11.2 Tierras</li>
            <li>Saturno: ~9.4 Tierras</li>
            <li>Urano: ~4.0 Tierras</li>
            <li>Neptuno: ~3.9 Tierras</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(8)}`}>
          <h2>Datos Planetarios</h2>
          <p>Distancias promedio al Sol y diámetros ecuatoriales de los planetas.</p>
          <ul>
            <li><strong>Mercurio</strong>: 58M km (0.39 AU, ~3.2 min luz), Diámetro: 4,879 km</li>
            <li><strong>Venus</strong>: 108M km (0.72 AU, ~6 min luz), Diámetro: 12,104 km</li>
            <li><strong>Tierra</strong>: 150M km (1 AU, ~8.3 min luz), Diámetro: 12,742 km</li>
            <li><strong>Marte</strong>: 228M km (1.52 AU, ~12.7 min luz), Diámetro: 6,792 km</li>
            <li><strong>Júpiter</strong>: 778M km (5.20 AU, ~43.2 min luz), Diámetro: 139,820 km</li>
            <li><strong>Saturno</strong>: 1,429M km (9.58 AU, ~79.3 min luz), Diámetro: 116,460 km</li>
            <li><strong>Urano</strong>: 2,871M km (19.18 AU, ~159.6 min luz), Diámetro: 50,724 km</li>
            <li><strong>Neptuno</strong>: 4,498M km (30.07 AU, ~4 hr luz), Diámetro: 49,244 km</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(9)}`}>
          <h2>Juegos de mesa con sesgo abstracto o estratégico</h2>
          <p>Algunos juegos favoritos entre adultos con pensamiento divergente o gusto por la complejidad estructural:</p>
          <ul>
            <li><strong>Hive</strong> — Estrategia sin tablero, ideal para amantes del pensamiento espacial.</li>
            <li><strong>Azul</strong> — Patrones, estética y lógica.</li>
            <li><strong>The Mind</strong> — Cooperación basada en sincronía no verbal: no se puede hablar.</li>
            <li><strong>Patchwork</strong> — Ideal para personas que disfrutan combinar eficiencia con belleza visual.</li>
            <li><strong>Codenames</strong> — Asociación semántica y comunicación ambigua: perfecto para mentes que procesan capas múltiples.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(10)}`}>
          <h2>Hobbies que suelen resonar con personas con Altas Capacidades Intelectuales (ACI)</h2>
          <ul>
            <li>Escritura creativa — Como forma de procesar y reorganizar el mundo.</li>
            <li>Aprendizaje autodidacta en bucle — Aprender sobre aprendizaje: metacognición pura.</li>
            <li>Lenguajes de programación — Por su estructura lógica y posibilidad de creación infinita.</li>
            <li>Jardinería o bonsái — Una forma de lentitud deliberada y contemplación activa.</li>
            <li>Instrumentos musicales poco comunes — Como el theremin, hang drum o laúd.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(11)}`}>
          <h2>Paradojas y problemas clásicos</h2>
          <ul>
            <li>La paradoja del barquero y el lobo — Más que lógica: regulación emocional bajo presión.</li>
            <li>Problema de los tres interruptores — Razonamiento experimental no lineal.</li>
            <li>Dilema del prisionero — Ideal para quienes sobrepiensan todo (y lo saben).</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(12)}`}>
          <h2>Microlecturas, papers y artículos con impacto</h2>
          <p>Curaduría de textos breves, intensos, y posiblemente transformadores. Algunos ejemplos:</p>
          <ul>
            <li><em>The Hedgehog and the Fox</em> de Isaiah Berlin — ¿Pensás como zorro o como erizo?</li>
            <li><em>A Mathematician's Lament</em> de Paul Lockhart — Si alguna vez odiaste la matemática.</li>
            <li><em>The Importance of Stupidity in Scientific Research</em> de Schwartz — Un clásico para los que se frustran rápido.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(13)}`}>
          <h2>Inversiones en desarrollo personal</h2>
          <p>El mercado ofrece diversas opciones para estimular tu desarrollo cognitivo y creativo:</p>
          <ul>
            <li><strong>Juegos de estrategia premium</strong> — Inversiones en desarrollo cognitivo a través del juego.</li>
            <li><strong>Cursos especializados</strong> — Programas personalizados de desarrollo intelectual.</li>
            <li><strong>Herramientas digitales</strong> — Software y apps para potenciar tus capacidades.</li>
            <li><strong>Coaching cognitivo</strong> — Servicios personalizados de desarrollo mental.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(14)}`}>
          <h2>Recursos para el desarrollo autónomo</h2>
          <p>Opciones para quienes prefieren un camino independiente de desarrollo:</p>
          <ul>
            <li>Plataformas de escritura creativa con mentorías personalizadas.</li>
            <li>Recursos premium de aprendizaje autodidacta.</li>
            <li>Cursos avanzados de programación y desarrollo tecnológico.</li>
            <li>Talleres especializados en artes y oficios de precisión.</li>
            <li>Programas de desarrollo musical con instrumentos no convencionales.</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(15)}`}>
          <h2>Recursos académicos selectos</h2>
          <p>Una selección de recursos premium para el desarrollo intelectual avanzado:</p>
          <ul>
            <li><em>The Hedgehog and the Fox</em> de Isaiah Berlin — Análisis estratégico del pensamiento.</li>
            <li><em>A Mathematician's Lament</em> de Paul Lockhart — Perspectivas innovadoras en educación matemática.</li>
            <li><em>The Importance of Stupidity in Scientific Research</em> de Schwartz — Estrategias para el desarrollo científico.</li>
          </ul>
          <p>
            Estos recursos representan inversiones valiosas en tu desarrollo personal y profesional.
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(18)}`}>
          <h2>Diez Dominios del Conocimiento</h2>
          <p>Quizá escuchaste hablar de los tres clásicos dominios del conocimiento:</p>
          <p><strong>1. Lo que sabés que sabés</strong><br />Conocimiento explícito. Todo lo que sabés que sabés: tu profesión, habilidades, lo que estudiaste, lo que dominás.</p>
          <p><strong>2. Lo que sabés que no sabés</strong><br />Ignorancia consciente. Sabés que no sabés pilotear un F-22, dirigir una sinfónica o cómo funciona un panel solar.</p>
          <p><strong>3. Lo que no sabés que no sabés</strong><br />Ceguera epistémica. Creés entender qué es una IA porque chateás con una, pero no sabés qué son cabezales, tokens, espacios de alta dimensión, vectores, pesos, biases, etc.</p>
          <p><strong>Siete más que quizá no conocías:</strong></p>
          <p><strong>4. Lo que no sabés que sabés</strong><br />Conocimiento tácito. Tapás la olla para que hierva más rápido, sin saber nada de termodinámica. Pero lo hacés igual.</p>
          <p><strong>5. Lo que negás que sabés</strong><br />Autoengaño. Defendés a un político corrupto porque te cae bien, o sostenés una relación tóxica por miedo a la soledad. En el fondo, lo sabés… pero no querés saberlo.</p>
          <p><strong>6. Lo inefable</strong><br />Lo que no se puede pensar. Qué es la nada (no el vacío), qué había antes del tiempo, cómo sería percibir más de tres dimensiones. No solo no lo sabés: tu mente no puede concebirlo.</p>
          <p><strong>7. Lo que sabías y olvidaste</strong><br />Memoria erosionada. Alguna vez supiste resolver ecuaciones o hablaste en francés, pero hoy no podrías sin repasar.</p>
          <p><strong>8. Conocimientos imaginarios</strong><br />Falsas certezas. Que usamos solo el 10% del cerebro, que lo natural es siempre mejor, que los murciélagos son ciegos.</p>
          <p><strong>9. Lo ignorado por todos</strong><br />Horizonte compartido de ignorancia. ¿Hay vida en otros planetas? ¿Una cura definitiva para el Alzheimer? Nadie lo sabe, <em>todavía</em>.</p>
          <p><strong>10. Lo incognoscible</strong><br />Lo que está —y estará siempre— más allá del alcance humano. Aunque evolucione la ciencia o la mente, hay cosas que nunca podremos saber.</p>
        </section>

        <section className={`content-section ${getSectionVariant(18)}`}>
          <h2>Pronto a ser agregado</h2>
          <p>Lista de temas que se agregarán en breve:</p>
          <ol>
            <li>Near Transfer y Far Transfer</li>
            <li>Hemisferio Derecho e Izquierdo: Mitos y Realidades</li>
            <li>El uso de solo el 10% del cerebro</li>
            {/* <li>-</li> */}
            {/* <li>-</li> */}
            {/* <li>-</li> */}
          </ol>
        </section>

        <section className={`content-section ${getSectionVariant(19)}`}>
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul>
            <li id="ref-1">[1] <a href="https://www.jstor.org/stable/galileo1638" target="_blank" rel="noopener noreferrer">Galileo Galilei. (1638). Diálogos sobre dos nuevas ciencias. Leiden: Elsevier.</a></li>
            <li id="ref-2">[2] <a href="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095458976" target="_blank" rel="noopener noreferrer">Berlin, I. (1953) - The Hedgehog and the Fox</a></li>
            <li id="ref-3">[3] <a href="https://www.maa.org/sites/default/files/pdf/devlin/LockhartsLament.pdf" target="_blank" rel="noopener noreferrer">Lockhart, P. (2002) - A Mathematician's Lament</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
} 