// src/app/page.tsx
// Home

import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { getSectionVariant } from '@/lib/utils';

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
      <div className="container">
        <h1>ACI en Adultos</h1>
        
        {/* 0 ● Intro */}
        <section className={`content-section ${getSectionVariant(0)}`}>
          <p>
            Si sentís que tu mente va a otra velocidad, conectás ideas en formas
            que otros no ven, o el mundo parece ir más lento, esta página es
            para pensarte. No para decirte quién sos, sino para darte palabras
            que ordenen lo que quizás sospechás.
          </p>
        </section>

        {/* 1 ● Quote */}
        <section className={`content-section ${getSectionVariant(1)}`}>
          <blockquote className="content-quote">
            "Sí, es cierto que a veces las personas inusualmente inteligentes y
            perceptivas pueden parecer tontas. Pero las personas tontas también
            pueden parecer tontas. Es algo que tal vez deberíamos considerar."
            <br />— Douglas Adams, parafraseado de <em>The Long Dark Tea-Time
            of the Soul</em>
          </blockquote>
        </section>

        {/* 2 ● ¿Qué son las ACI? */}
        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2 id="que-son-aci">
            ¿Qué son las Altas Capacidades Intelectuales? 
            <Link href="#que-son-aci">🔗</Link>
          </h2>
          <p>
            Las ACI no son un número en un test de CI. Son una forma de procesar
            el mundo: rápida, profunda, a veces abrumadora. Implican aprender
            sin repetir, captar patrones en lo desconocido y manejar ideas
            complejas con facilidad. Pero también traen asincronía: tu mente
            puede ir más rápido que tus emociones o vínculos, y eso no siempre
            es sencillo.
          </p>
          <p>
            Algunas personas con ACI también presentan TDAH o TEA, lo que
            complejiza su experiencia (
            <Link href="/tests">ver más en Tests</Link>).
          </p>
          <p>
            No se trata de ser «mejor» ni destacar en todo. Muchos adultos con
            ACI pasaron desapercibidos en la escuela, confundidos con vagos o
            distraídos. Otros se camuflaron para encajar, ocultando una
            intensidad sin nombre. Si esto resuena, explorá{' '}
            <Link href="/arquetipos">cómo otros han vivido esta diferencia</Link>
            .
          </p>
        </section>

        {/* 3 ● Definición formal */}
        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2 id="definicion-aci">
            La definición formal de ACI 
            <Link href="#definicion-aci">🔗</Link>
          </h2>
          <p>
            Las Altas Capacidades Intelectuales se definen por una aptitud
            sobresaliente para razonar y aprender, o un desempeño documentado en
            el 10 % superior en uno o más dominios, lo que refleja un potencial
            significativo a desarrollar más allá de un alto CI. No se trata solo
            de habilidades académicas, sino de una forma de aprender y procesar
            información fundamentalmente diferente y avanzada, como lo explica
            el{' '}
            <a
              href="https://www.nagc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Association for Gifted Children (NAGC)
            </a>
            .
          </p>
          <p>
            Las características comunes incluyen inteligencia que permite rápido
            procesamiento de información, abstracción y resolución de problemas
            complejos; creatividad con pensamiento flexible y soluciones
            originales; y rasgos de personalidad como perfeccionismo,
            autoexigencia, sensibilidad emocional y un fuerte sentido de la
            justicia.
          </p>
        </section>

        {/* 4 ● ¿Cómo sé…? */}
        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2 id="como-saber">
            ¿Cómo sé si podría tener ACI? 
            <Link href="#como-saber">🔗</Link>
          </h2>
          <ul className="content-list">
            <li>Aprendés conceptos nuevos sin esfuerzo, especialmente si te atrapan.</li>
            <li>Tu mente salta entre ideas, uniendo disciplinas que parecen lejanas.</li>
            <li>Vivís emociones con una intensidad que te desborda, para bien o para mal.</li>
            <li>Lo rutinario te aburre y buscás desafíos complejos sin darte cuenta.</li>
          </ul>
          <p>
            Si esto te resulta familiar, una{' '}
            <Link href="/tests">evaluación psicodiagnóstica integral</Link> puede
            aclarar tu perfil cognitivo y emocional. No se trata de validarte,
            sino de conocerte sin autoengaño.
          </p>
        </section>

        {/* 5 ● ACI ≠ éxito */}
        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="aci-no-exito">
            ACI no es sinónimo de éxito 
            <Link href="#aci-no-exito">🔗</Link>
          </h2>
          <p>
            Tener ACI no garantiza buenas notas, un trabajo soñado ni relaciones
            perfectas. La asincronía entre tu mente y tu entorno puede generar
            frustración, aislamiento o malentendidos. Muchos adultos con ACI
            enfrentan:
          </p>
          <ul className="content-list">
            <li>Baja autoestima por sentirse «rotos» o fuera de lugar.</li>
            <li>Insatisfacción laboral en roles que no desafían su mente.</li>
            <li>Dificultades sociales por una intensidad que otros no comprenden.</li>
          </ul>
          <p>
            Esto no es un defecto. Es parte de la neurodivergencia. Con el{' '}
            <Link href="/profesionales">acompañamiento adecuado</Link>, podés
            integrar estas diferencias.
          </p>
        </section>

        {/* 6 ● ¿Y si no soy ACI? */}
        <section className={`content-section ${getSectionVariant(6)}`}>
          <h2 id="no-soy-aci">
            ¿Y si no soy ACI? 
            <Link href="#no-soy-aci">🔗</Link>
          </h2>
          <p>
            Sentirse diferente es humano. Podés ser creativo o sensible por otras
            razones, como{' '}
            <Link href="/arquetipos">experiencias vitales descritas en Arquetipos</Link>
            . La clave es entender cómo funciona tu mente, no encajar en una
            etiqueta. Explorá otras formas de vivir tu singularidad.
          </p>
        </section>

        {/* 7 ● ¿Y si no tenés ACI…? */}
        <section className={`content-section ${getSectionVariant(7)}`}>
          <h2 id="brillante-sin-aci">
            ¿Y si no tenés ACI, pero igual sos brillante? 
            <Link href="#brillante-sin-aci">🔗</Link>
          </h2>
          <p>
            Hay personas que reflexionan con claridad, abordan su trabajo con
            profundidad, resuelven problemas difíciles y tienen conversaciones
            complejas… y no tienen ACI. No porque «les falte algo», sino porque
            su manera de pensar, aunque destacada, no se sale de lo esperable
            para su entorno y formación.
          </p>
          <p>
            Tienen foco, disciplina, inteligencia práctica. Cuando se aburren o
            se sienten vacíos, pueden preguntarse: «¿y si soy un genio no
            descubierto?»
          </p>
          <p>
            La respuesta puede ser más simple: sos una persona capaz, sensible y
            pensante. Pero tu estructura cognitiva no es inusualmente distinta.
            Y eso está bien. No necesitás ser ACI para tener una vida rica.
          </p>
          <ul className="content-list">
            <li>CI menor a 115–120.</li>
            <li>Ausencia de pensamiento abstracto espontáneo.</li>
            <li>Procesamiento lineal, secuencial y rígido.</li>
            <li>Rechazo al aprendizaje complejo, ambiguo o inacabado.</li>
            <li>Principios propios sin base argumentativa sólida.</li>
            <li>Sin asincronía entre razonamiento, emoción y vínculo social.</li>
          </ul>
        </section>

        {/* 8 ● Mitos */}
        <section className={`content-section ${getSectionVariant(8)}`}>
          <h2 id="mitos">
            Mitos que hay que romper 
            <Link href="#mitos">🔗</Link>
          </h2>
          <ul className="content-list">
            <li>«Si no fui un niño prodigio, no soy ACI.» – Falso.</li>
            <li>«Ser ACI significa tener éxito.» – Falso.</li>
            <li>«Solo los genios son ACI.» – Falso.</li>
            <li>«Las ACI se detectan siempre en la infancia.» – Falso.</li>
          </ul>
          <p>
            Conocé más sobre{' '}
            <Link href="/historia">cómo se entendieron (o ignoraron) las ACI a lo largo del tiempo</Link>
            .
          </p>
        </section>

        {/* 9 ● ¿Qué hacer? */}
        <section className={`content-section ${getSectionVariant(9)}`}>
          <h2 id="que-hacer">
            ¿Qué hacer si sospechás que sos ACI? 
            <Link href="#que-hacer">🔗</Link>
          </h2>
          <ol className="content-list">
            <li>Reflexionar sobre tu historia y entorno.</li>
            <li>
              Buscar un{' '}
              <Link href="/profesionales">profesional especializado</Link> para
              una evaluación clara.
            </li>
            <li>
              Explorar actividades intelectuales, creativas o lógicas que te
              desafíen.
            </li>
          </ol>
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