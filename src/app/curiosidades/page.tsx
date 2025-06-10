import { Metadata } from 'next'
import { References } from '@/components/References'

export const metadata: Metadata = {
  title: 'Curiosidades que estimulan tu mente | Altas Capacidades Intelectuales',
  description: 'Descubre recursos, juegos y datos interesantes para mentes curiosas. Una colección de estímulos intelectuales para personas con altas capacidades.',
  alternates: {
    canonical: 'https://altascapacidades.info/curiosidades'
  }
}

export default function CuriosidadesPage() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Curiosidades que estimulan tu mente</h1>
        
        <section className="content-section">
          <p>¿Querés estimular tu mente con ideas, juegos y datos que no aburren? Esta sección reúne recursos para quienes disfrutan del pensamiento abstracto, la lógica elegante o la belleza de un dato bien puesto.</p>
        </section>

        <section className="content-section">
          <h2>Apps que podrían gustarte</h2>
          <ul className="content-list">
            <li><a href="https://play.google.com/store/apps/details?id=air.nn.mobile.app.main&hl=es" target="_blank" rel="noopener noreferrer">NeuroNation</a> — ejercicios de memoria, lógica y concentración.</li>
            <li><a href="https://brilliant.org/" target="_blank" rel="noopener noreferrer">Brilliant.org</a> — pensamiento matemático y resolución de problemas.</li>
            <li><a href="https://play.google.com/store/apps/details?id=org.aztest.iqtest&hl=es" target="_blank" rel="noopener noreferrer">IQ Test - Aztest</a> — razonamiento lógico con feedback visual.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>¿Sabías esto?</h2>
          <p>En el siglo XVI, Galileo propuso que dos objetos caen a la misma velocidad sin importar su peso<sup><a href="#ref-1">[1]</a></sup>. En la misión Apolo 15, David Scott replicó el experimento en la Luna... y funcionó igual. La gravedad no discrimina masa.</p>
          <p><a href="https://www.youtube.com/watch?v=Oo8TaPVsn9Y" target="_blank" rel="noopener noreferrer">Ver video del experimento</a></p>
        </section>

        <section className="content-section">
          <h2>Pensamiento lógico</h2>
          <blockquote className="content-quote">
            "Todos los gatos son negros. Vi un gato. ¿De qué color era?"<br/>
            Si dijiste algo que no sea negro, volvé al principio. (Sí, eso fue un silogismo).
          </blockquote>
        </section>

        <section className="content-section">
          <h2>Juegos de mesa favoritos entre ACI</h2>
          <ul className="content-list">
            <li><strong>Hive</strong> — Estrategia pura sin tablero.</li>
            <li><strong>Azul</strong> — Estética, patrones y lógica.</li>
            <li><strong>The Mind</strong> — Cooperación silenciosa.</li>
            <li><strong>Patchwork</strong> — Belleza + eficiencia.</li>
            <li><strong>Codenames</strong> — Asociación semántica con capas de ambigüedad.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Hobbies que suelen resonar con personas ACI</h2>
          <ul className="content-list">
            <li>Escritura creativa — forma de ordenar el mundo interno.</li>
            <li>Aprendizaje autodidacta — metacognición y curiosidad sin fin.</li>
            <li>Programación — estructura lógica y poder de creación.</li>
            <li>Jardinería o bonsái — lentitud deliberada.</li>
            <li>Instrumentos raros — theremin, hang drum, laúd.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Paradojas y dilemas</h2>
          <ul className="content-list">
            <li>El barquero, el lobo y la cabra — no es solo lógica, es regulación emocional bajo presión.</li>
            <li>Los tres interruptores — razonamiento experimental no lineal.</li>
            <li>El dilema del prisionero — confianza, traición y estrategia.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Microlecturas para activar neuronas</h2>
          <ul className="content-list">
            <li><em>The Hedgehog and the Fox</em> — Isaiah Berlin<sup><a href="#ref-2">[2]</a></sup>. ¿Sos zorro o erizo?</li>
            <li><em>A Mathematician's Lament</em> — Paul Lockhart<sup><a href="#ref-3">[3]</a></sup>. Para quien odiaba matemática... hasta leer esto.</li>
            <li><em>The Importance of Stupidity in Scientific Research</em> — Schwartz. El fracaso como motor real del pensamiento.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Distancias luz: lo que nunca dimensionás</h2>
          <p>La luz recorre 300.000 km por segundo. Eso significa que…</p>
          <ul className="content-list">
            <li>1 minuto ≈ 18 millones de km</li>
            <li>1 hora ≈ 1.08 mil millones de km</li>
            <li>1 día ≈ 25.9 mil millones de km</li>
          </ul>
          <p>La ISS está a 408 km (1.4 segundos luz). El Sol: a 8.3 minutos luz. Neptuno: 4 horas luz. Voyager 1: más de 22 años luz.</p>
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