// src/app/page.tsx
// Home

import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Altas Capacidades Intelectuales en Adultos',
  description: 'Descubrí si podrías tener Altas Capacidades Intelectuales. Información especializada sobre ACI en adultos, evaluación, contexto histórico y recursos en Argentina.',
  path: '/',
  keywords: ['altas capacidades intelectuales', 'ACI', 'superdotación', 'adultos', 'Argentina', 'evaluación', 'test', 'neurodivergencia'],
});

export default function Home() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Altas Capacidades Intelectuales (ACI) en Adultos</h1>
        
        <section className="content-section">
          <p>
            Si sentís que tu mente va a otra velocidad, conectás ideas en formas que otros no ven, o el mundo parece ir más lento, esta página es para pensarte. No para decirte quién sos, sino para darte palabras que ordenen lo que quizás sospechás.
          </p>
          <blockquote className="content-quote">
            "Sí, es cierto que a veces las personas inusualmente inteligentes y perceptivas pueden parecer tontas. Pero las personas tontas también pueden parecer tontas. Es algo que tal vez deberíamos considerar."
            <br/>
            - Douglas Adams, parafraseado del libro <i>The Long Dark Tea-Time of the Soul</i>
          </blockquote>
        </section>

        <section className="content-section">
          <h2 id="que-son-las-altas-capacidades-intelectuales">¿Qué son las Altas Capacidades Intelectuales?&nbsp;<a href="#que-son-las-altas-capacidades-intelectuales">🔗</a></h2>
          <p>
            Las ACI no son un número en un test de CI. Son una forma de procesar el mundo: rápida, profunda, a veces abrumadora. Implican aprender sin repetir, captar patrones en lo desconocido y manejar ideas complejas con facilidad. Pero también traen asincronía: tu mente puede ir más rápido que tus emociones o vínculos, y eso no siempre es sencillo.
          </p>
          <p>
            Algunas personas con ACI también presentan TDAH o TEA, lo que complejiza su experiencia (<Link href="/tests#diferencias-con-tdah-tea">ver más en Tests</Link>).
          </p>
          <p>
            No se trata de ser "mejor" ni destacar en todo. Muchos adultos con ACI pasaron desapercibidos en la escuela, confundidos con vagos o distraídos. Otros se camuflaron para encajar, ocultando una intensidad sin nombre. Si esto resuena, explorá <Link href="/arquetipos">cómo otros han vivido esta diferencia</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="la-definicion-formal-de-aci">La definición formal de ACI&nbsp;<a href="#la-definicion-formal-de-aci">🔗</a></h2>
          <p>
            Las Altas Capacidades Intelectuales se definen por una aptitud sobresaliente para razonar y aprender, o un desempeño documentado en el 10% superior en uno o más dominios, lo que refleja un potencial significativo a desarrollar más allá de un alto CI. No se trata solo de habilidades académicas, sino de una forma de aprender y procesar información fundamentalmente diferente y avanzada, como lo explica el <a href="https://nagc.org/page/what-is-giftedness" target="_blank" rel="noopener noreferrer">National Association for Gifted Children (NAGC)</a>.
          </p>
          <p>
            Las características comunes incluyen una inteligencia que permite el rápido procesamiento de información, la abstracción y la resolución de problemas complejos; creatividad con pensamiento flexible y soluciones originales; y rasgos de personalidad como perfeccionismo, autoexigencia, sensibilidad emocional y un fuerte sentido de la justicia.
          </p>
        </section>

        <section className="content-section">
          <h2 id="como-se-si-podria-tener-aci">¿Cómo sé si podría tener ACI?&nbsp;<a href="#como-se-si-podria-tener-aci">🔗</a></h2>
          <p>No podés autodiagnosticarte, pero hay señales que orientan:</p>
          <ul className="content-list">
            <li>Aprendés conceptos nuevos sin esfuerzo, especialmente si te atrapan.</li>
            <li>Tu mente salta entre ideas, uniendo disciplinas que parecen lejanas.</li>
            <li>Vivís emociones con una intensidad que te desborda, para bien o para mal.</li>
            <li>Lo rutinario te aburre y buscás desafíos complejos sin darte cuenta.</li>
          </ul>
          <p>
            Si esto te resulta familiar, una <Link href="/tests#la-verdadera-evaluacion-es-un-proceso">evaluación psicodiagnóstica integral</Link> puede aclarar tu perfil cognitivo y emocional. No se trata de validarte, sino de conocerte sin autoengaño.
          </p>
        </section>

        <section className="content-section">
          <h2 id="aci-no-es-sinonimo-de-exito">ACI no es sinónimo de éxito&nbsp;<a href="#aci-no-es-sinonimo-de-exito">🔗</a></h2>
          <p>
            Tener ACI no garantiza buenas notas, un trabajo soñado ni relaciones perfectas. La asincronía entre tu mente y tu entorno puede generar frustración, aislamiento o malentendidos. Muchos adultos con ACI enfrentan:
          </p>
          <ul className="content-list">
            <li><strong>Baja autoestima</strong> por sentirse "rotos" o fuera de lugar.</li>
            <li><strong>Insatisfacción laboral</strong> en roles que no desafían su mente.</li>
            <li><strong>Dificultades sociales</strong> por una intensidad que otros no comprenden.</li>
          </ul>
          <p>
            Esto no es un defecto. Es parte de la neurodivergencia. Con el <Link href="/profesionales">acompañamiento adecuado</Link>, podés integrar estas diferencias.
          </p>
        </section>

        <section className="content-section">
          <h2 id="y-si-no-soy-aci">¿Y si no soy ACI?&nbsp;<a href="#y-si-no-soy-aci">🔗</a></h2>
          <p>
            Sentirse diferente es humano. Podés ser creativo o sensible por otras razones, como <Link href="/arquetipos#b-persona-no-aci-con-vida-dificil">experiencias vitales descritas en Arquetipos</Link>. La clave es entender cómo funciona tu mente, no encajar en una etiqueta. Explorá <Link href="/arquetipos#c-persona-no-aci-con-alto-desempeno">otras formas de vivir tu singularidad</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="y-si-no-tienes-aci-pero-igual-sos-brillante">¿Y si no tenés ACI, pero igual sos brillante?&nbsp;<a href="#y-si-no-tienes-aci-pero-igual-sos-brillante">🔗</a></h2>
          <p>
            Hay personas que reflexionan con claridad, abordan su trabajo con gran profundidad, resuelven problemas difíciles, tienen vidas ricas y conversaciones complejas… y no tienen ACI. No porque "les falte algo", sino porque su manera de pensar, aunque destacada, no se sale de lo esperable para su entorno y formación.
          </p>
          <p>
            Tienen foco, disciplina, inteligencia práctica. Tal vez hablan varios idiomas, lideran proyectos, o tienen un pensamiento estratégico envidiable. Suelen ser reconocidos y valorados por eso. Pero cuando se aburren o se sienten vacíos, pueden empezar a preguntarse: "¿y si soy un genio no descubierto?"
          </p>
          <p>
            La respuesta puede ser más simple: sos una persona capaz, sensible y pensante. Pero tu estructura cognitiva no es inusualmente distinta. Y eso está bien. No necesitás ser ACI para tener una vida rica. Ni para sentir cosas profundas. Ni para atravesar crisis.
          </p>
          <p>
            Si te identificás con esto, explorá el <Link href="/arquetipos#c-persona-no-aci-con-alto-desempeno">arquetipo-c</Link>, donde hablamos de personas sin ACI que igual logran cosas complejas, relevantes y profundamente humanas.
          </p>
          <ul className="content-list">
            <li>CI menor a 115–120. No es lo único que importa, pero sí un umbral orientativo.</li>
            <li>Ausencia de pensamiento abstracto espontáneo.</li>
            <li>Procesamiento lineal, secuencial y rígido.</li>
            <li>Rechazo al aprendizaje complejo, ambiguo o inacabado.</li>
            <li>Principios propios sin base argumentativa sólida.</li>
            <li>Sin asincronía entre razonamiento, emoción y vínculo social.</li>
          </ul>
          <p>
            Estas características no invalidan a nadie. Simplemente indican otra forma de pensar. Una forma igualmente valiosa, solo que distinta.
          </p>
        </section>

        <section className="content-section">
          <h2 id="mitos-que-hay-que-romper">Mitos que hay que romper&nbsp;<a href="#mitos-que-hay-que-romper">🔗</a></h2>
          <ul className="content-list">
            <li><strong>"Si no fui un niño prodigio, no soy ACI."</strong> Falso. Muchos ACI no destacaron en la infancia.</li>
            <li><strong>"Ser ACI significa tener éxito."</strong> No. La alta capacidad no asegura logros, y el éxito no implica ACI.</li>
            <li><strong>"Solo los genios son ACI."</strong> Las ACI son diversas: incluyen talentos específicos, no solo superdotación global.</li>
            <li><strong>"Las ACI se detectan siempre en la infancia."</strong> No. Muchísimas personas no fueron identificadas de niñas.</li>
          </ul>
          <p>
            Conocé más sobre <Link href="/historia">cómo se entendieron (o ignoraron) las ACI a lo largo del tiempo</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2 id="que-hacer-si-sospechas-que-sos-aci">¿Qué hacer si sospechás que sos ACI?&nbsp;<a href="#que-hacer-si-sospechas-que-sos-aci">🔗</a></h2>
          <p>No tenés que hacer nada. Pero si querés, podés:</p>
          <ol className="content-list">
            <li>Reflexionar sobre tu historia: ¿te sentiste limitado por un entorno que no te entendía?</li>
            <li>Buscar un <Link href="/profesionales">profesional especializado</Link> para una evaluación que te dé claridad.</li>
            <li>Explorar actividades como lógica, sistemas o proyectos creativos.</li>
          </ol>
          <p>
            Ser ACI es como tener un instrumento único: no te obliga a tocarlo, pero saber que lo tenés puede cambiar cómo ves tu vida.
          </p>
        </section>

        <section className="content-section">
          <h2 id="nota">Nota&nbsp;<a href="#nota">🔗</a></h2>
          <p>
            Este sitio está pensado para adultos en búsqueda de autoconocimiento. Si buscás respuestas, estás en el lugar correcto. Seguí leyendo, pero no para encontrar certezas, sino para pensar con más claridad tu propia complejidad.
          </p>
        </section>
      </div>
    </main>
  );
} 