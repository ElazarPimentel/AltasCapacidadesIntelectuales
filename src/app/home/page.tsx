import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Altas Capacidades Intelectuales en Adultos',
  description: 'Información especializada sobre Altas Capacidades Intelectuales en adultos. Recursos, tests, legislación y profesionales en Argentina.',
  path: '/',
  keywords: ['altas capacidades intelectuales', 'ACI', 'adultos', 'Argentina', 'neurodivergencia', 'superdotación'],
  type: 'website',
});

export default function Home() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Altas Capacidades Intelectuales (ACI) en Adultos</h1>
        
        <section className="content-section">
          <h2 id="nota">Nota&nbsp;<a href="#nota">🔗</a></h2>
          <p>
            Este sitio está pensado para adultos en búsqueda de autoconocimiento. Si buscás respuestas, estás en el lugar correcto. Seguí leyendo, pero no para encontrar certezas, sino para pensar con más claridad tu propia complejidad.
          </p>
        </section>

        <section className="content-section">
          <h2 id="inspiracion-academica">Inspiración académica&nbsp;<a href="#inspiracion-academica">🔗</a></h2>
          <p>
            Este sitio se nutre de las investigaciones de Linda Silverman sobre asincronía en adultos con ACI<sup><a href="#ref-1">[1]</a></sup>, la teoría de la desintegración positiva de Dabrowski, y los estudios sobre intensidad emocional y sobreexcitabilidad en personas con altas capacidades<sup><a href="#ref-2">[2]</a></sup><sup><a href="#ref-3">[3]</a></sup>.
          </p>
          <p>
            <Link href="/acerca#metodologia">Conocé más sobre nuestra metodología</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="referencias">Referencias&nbsp;<a href="#referencias">🔗</a></h2>
          <ul className="content-list">
            <li id="ref-1">[1] <a href="https://www.springerpub.com/giftedness-101-9780826107982.html" target="_blank" rel="noopener noreferrer">Silverman, L. K. (2013) - Giftedness 101: Understanding Gifted People</a></li>
            <li id="ref-2">[2] <a href="https://www.greatpotentialpress.com/searching-for-meaning" target="_blank" rel="noopener noreferrer">Webb, J. T. (2013) - Searching for Meaning: Idealism, Bright Minds, Disillusionment</a></li>
            <li id="ref-3">[3] <a href="https://www.penguinrandomhouse.com/books/the-gifted-adult" target="_blank" rel="noopener noreferrer">Jacobsen, M. E. (2000) - The Gifted Adult: A Revolutionary Guide</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
} 