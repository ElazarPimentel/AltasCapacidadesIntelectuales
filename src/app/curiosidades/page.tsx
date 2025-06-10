import { References } from '@/components/References'
import { curiosidadesMetadata } from '@/lib/utils'

export const metadata = curiosidadesMetadata

export default function CuriosidadesPage() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Curiosidades que estimulan tu mente</h1>
        
        <section className="content-section">
          <h2>¿Querés estimular tu mente?</h2>
          <p>Algunas aplicaciones que pueden resultarte interesantes si te atraen los desafíos cognitivos y el pensamiento abstracto:</p>
          <ul className="content-list">
            <li><a href="https://play.google.com/store/apps/details?id=air.nn.mobile.app.main&hl=es" target="_blank" rel="noopener noreferrer">NeuroNation</a> — ejercicios de memoria, lógica y concentración, con dificultad progresiva.</li>
            <li><a href="https://brilliant.org/" target="_blank" rel="noopener noreferrer">Brilliant.org</a> — pensamiento matemático, ciencia aplicada y resolución de problemas.</li>
            <li><a href="https://play.google.com/store/apps/details?id=org.aztest.iqtest&hl=es" target="_blank" rel="noopener noreferrer">IQ Test - Aztest</a> — test de razonamiento lógico con feedback visual.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>¿Sabías esto?</h2>
          <p>En el siglo XVI, Galileo propuso que dos objetos caen a la misma velocidad, sin importar su peso. Lo podés ver con dos pelotas en una escalera.</p>
          <p>En la misión Apolo 15, el astronauta David Scott replicó ese experimento... en la Luna. ¿Resultado? Igual que en la Tierra: la gravedad no discrimina masa.</p>
          <p><a href="https://www.youtube.com/watch?v=Oo8TaPVsn9Y" target="_blank" rel="noopener noreferrer">Ver video del experimento</a></p>
        </section>

        <section className="content-section">
          <h2>Pensamiento lógico</h2>
          <blockquote className="content-quote">
            "Todos los gatos son negros. Vi un gato. ¿De qué color era?"<br/>
            Si respondiste algo que no sea negro, volvé al principio.<br/>
            (Sí, esto es un silogismo —y no, no hace falta estudiarlo para entenderlo.)
          </blockquote>
        </section>

        <section className="content-section">
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

        <section className="content-section">
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

        <section className="content-section">
          <h2>Órbitas y zonas espaciales</h2>
          <ul className="content-list">
            <li><strong>LEO (Órbita baja terrestre)</strong>: 160–2.000 km · Ej: ISS, Starlink</li>
            <li><strong>MEO (Media altura)</strong>: 2.000–35.786 km · Ej: GPS, Galileo</li>
            <li><strong>GEO (Geostacionaria)</strong>: ~35.786 km · Satélites meteorológicos y de comunicaciones</li>
          </ul>
          <p><strong>Más allá:</strong></p>
          <ul className="content-list">
            <li>Punto Lagrange L1: ~1.5 M km (~5 LS)</li>
            <li>Probetas interplanetarias: Voyager 1 está a más de 22 LH</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Tamaños relativos</h2>
          <ul className="content-list">
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

        <section className="content-section">
          <h2>Datos Planetarios</h2>
          <p>Distancias promedio al Sol y diámetros ecuatoriales de los planetas.</p>
          <ul className="content-list">
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

        <section className="content-section">
          <h2>Juegos de mesa con sesgo abstracto o estratégico</h2>
          <p>Algunos juegos favoritos entre adultos con pensamiento divergente o gusto por la complejidad estructural:</p>
          <ul className="content-list">
            <li><strong>Hive</strong> — Estrategia sin tablero, ideal para amantes del pensamiento espacial.</li>
            <li><strong>Azul</strong> — Patrones, estética y lógica.</li>
            <li><strong>The Mind</strong> — Cooperación basada en sincronía no verbal: no se puede hablar.</li>
            <li><strong>Patchwork</strong> — Ideal para personas que disfrutan combinar eficiencia con belleza visual.</li>
            <li><strong>Codenames</strong> — Asociación semántica y comunicación ambigua: perfecto para mentes que procesan capas múltiples.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Hobbies que suelen resonar con personas ACI</h2>
          <ul className="content-list">
            <li>Escritura creativa — Como forma de procesar y reorganizar el mundo.</li>
            <li>Aprendizaje autodidacta en bucle — Aprender sobre aprendizaje: metacognición pura.</li>
            <li>Lenguajes de programación — Por su estructura lógica y posibilidad de creación infinita.</li>
            <li>Jardinería o bonsái — Una forma de lentitud deliberada y contemplación activa.</li>
            <li>Instrumentos musicales poco comunes — Como el theremin, hang drum o laúd.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Paradojas y problemas clásicos</h2>
          <ul className="content-list">
            <li>La paradoja del barquero y el lobo — Más que lógica: regulación emocional bajo presión.</li>
            <li>Problema de los tres interruptores — Razonamiento experimental no lineal.</li>
            <li>Dilema del prisionero — Ideal para quienes sobrepiensan todo (y lo saben).</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Microlecturas, papers y artículos con impacto</h2>
          <p>Curaduría de textos breves, intensos, y posiblemente transformadores. Algunos ejemplos:</p>
          <ul className="content-list">
            <li><em>The Hedgehog and the Fox</em> de Isaiah Berlin — ¿Pensás como zorro o como erizo?</li>
            <li><em>A Mathematician's Lament</em> de Paul Lockhart — Si alguna vez odiaste la matemática.</li>
            <li><em>The Importance of Stupidity in Scientific Research</em> de Schwartz — Un clásico para los que se frustran rápido.</li>
          </ul>
        </section>

        <References>
          <p id="ref-1">[1] Galileo Galilei. (1638). Diálogos sobre dos nuevas ciencias. Leiden: Elsevier.</p>
          <p id="ref-2"><a href="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095458976" target="_blank" rel="noopener noreferrer">Berlin, I. (1953) - The Hedgehog and the Fox</a></p>
          <p id="ref-3"><a href="https://www.maa.org/sites/default/files/pdf/devlin/LockhartsLament.pdf" target="_blank" rel="noopener noreferrer">Lockhart, P. (2002) - A Mathematician's Lament</a></p>
        </References>
      </div>
    </main>
  )
} 