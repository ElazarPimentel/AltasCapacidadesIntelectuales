// src/app/arquetipos/page.tsx
// Arquetipos

export default function Arquetipos() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Arquetipos ACI y No ACI</h1>
        
        <section className="tests__section">
          <h2>Introducción a los Arquetipos</h2>
          <p >
            Porque no se trata solo de si sos ACI o no. Se trata de cómo viviste con eso… o sin eso.
          </p>
          <p>
            En lugar de hablar de "tipos de personas", preferimos hablar de <strong>arquetipos experienciales</strong>: combinaciones posibles entre el tipo de mente (ACI o no) y el recorrido vital (adaptación o dificultad). No son etiquetas. Son espejos. Si alguno te resuena, quizás valga la pena seguir explorando.
          </p>
          <p>Utilizaremos de forma arbitraria cuatro arquetipos y usaremos las letras de la a a la d para identificarlos, mas no es una clasificación científica ni adoptada por la comunidad.</p>
        </section>

        <section className="tests__section">
          <h2 id="arquetipo-a">a) Persona ACI con baja integración personal&nbsp;<a href="#arquetipo-a">🔗</a></h2>
          <p >
            <i>Alta capacidad sin acompañamiento emocional ni social.</i>
          </p>
          <p>
            Ejemplo: adultos brillantes en un área, pero desorganizados, aislados, con baja autoestima o historia de fracasos vinculares y laborales.
            Suelen haber sido malinterpretados, exigidos o invisibilizados. Muchos <strong>no saben que son ACI</strong> y solo sienten que algo "no cierra".
          </p>
          <ul className="tests__list">
            <li><strong> Punto clave:</strong> no les falta capacidad, les falta marco de comprensión.</li>
            <li><strong> Riesgo:</strong> encerrarse en su cabeza y resignarse a la disfunción.</li>
          </ul>
        </section>

        <section className="tests__section">
          <h2>b) Persona no ACI con vida difícil</h2>
          <p >
            <i>La lucha es real, pero no siempre tiene que ver con la inteligencia.</i>
          </p>
          <p>
            Ejemplo: personas que sienten que "no encajan", pero no presentan signos de ACI. Pueden tener otros desafíos: trauma, ansiedad, TDAH, entornos adversos, falta de estímulos, etc.
            Buscar una explicación en la etiqueta ACI puede parecer reconfortante, pero <strong>puede desviar de lo que realmente necesita atención</strong>.
          </p>
          <ul className="tests__list">
            <li><strong>Punto clave:</strong> su malestar merece respeto, aunque no provenga de alta capacidad.</li>
            <li><strong>Riesgo:</strong> diagnóstico erróneo o autoengaño identitario.</li>
          </ul>
        </section>

        <section className="tests__section">
          <h2>c) Persona no ACI con alto desempeño</h2>
          <p >
            <i>Capacidad bien orientada, esfuerzo sostenido, sentido práctico.</i>
          </p>
          <p>
            Ejemplo: profesionales exitosos, políglotas, líderes, artistas o académicos que destacan por trabajo, constancia o habilidades sociales, sin mostrar pensamiento abstracto o procesamiento inusualmente veloz.
            <strong>No tienen ACI, y no lo necesitan.</strong> Que tengan conflictos emocionales o fallas vinculares no significa que sean "genios incomprendidos".
          </p>
          <ul className="tests__list">
            <li><strong>Punto clave:</strong> su rendimiento es real, su inteligencia es funcional, pero no opera fuera de lo esperado para su contexto.</li>
            <li><strong>Riesgo:</strong> buscar en la etiqueta ACI una explicación para aspectos no resueltos.</li>
          </ul>
        </section>

        <section className="tests__section">
          <h2>d) Persona ACI adaptada y funcional</h2>
          <p >
            <i>Alta capacidad reconocida, elaborada y puesta en juego de forma constructiva.</i>
          </p>
          <p>
            Ejemplo: alguien que descubrió su perfil ACI (o fue detectado) y logró construir vínculos, carrera y propósito integrando lo cognitivo con lo emocional.
            No necesariamente exitoso en términos sociales o económicos, pero sí <strong>coherente, lúcido, y en paz con su complejidad</strong>.
          </p>
          <ul className="tests__list">
            <li><strong>Punto clave:</strong> no usa su mente como escudo, sino como herramienta.</li>
            <li><strong>Riesgo:</strong> agotamiento por exceso de sobreadaptación, presión autoimpuesta.</li>
          </ul>
        </section>

      </div>
    </main>
  );
} 