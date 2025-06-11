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
          <h2 id="nota">Bienvenido a tu exploración personal&nbsp;<a href="#nota">🔗</a></h2>
          <p>
            Este sitio está diseñado para adultos que buscan entender y maximizar su potencial cognitivo. Te ofrecemos información y recursos para que tomes decisiones informadas sobre tu desarrollo personal y profesional. Aquí encontrarás herramientas para explorar tus capacidades y conectar con servicios especializados que se ajusten a tus necesidades.
          </p>
        </section>

        <section className="content-section">
          <h2 id="inspiracion-academica">Base científica y soluciones prácticas&nbsp;<a href="#inspiracion-academica">🔗</a></h2>
          <p>
            Nuestro contenido combina investigación académica rigurosa con soluciones prácticas del mercado. Nos basamos en los estudios de Linda Silverman sobre asincronía en adultos con ACI<sup><a href="#ref-1">[1]</a></sup>, la teoría de Dabrowski, y las investigaciones sobre intensidad emocional<sup><a href="#ref-2">[2]</a></sup><sup><a href="#ref-3">[3]</a></sup>. Esta base científica te ayuda a tomar decisiones informadas sobre los servicios y recursos disponibles para tu desarrollo.
          </p>
          <p>
            <Link href="/acerca#metodologia">Descubrí cómo aplicamos esta información</Link>
          </p>
        </section>

        <section className="content-section">
          <h2 id="opciones-desarrollo">Opciones para tu desarrollo&nbsp;<a href="#opciones-desarrollo">🔗</a></h2>
          <p>
            El mercado ofrece diversas opciones para explorar y desarrollar tu potencial:
          </p>
          <ul className="content-list">
            <li><Link href="/tests">Evaluaciones profesionales</Link> para entender tu perfil cognitivo</li>
            <li><Link href="/profesionales">Servicios especializados</Link> adaptados a tus necesidades</li>
            <li><Link href="/arquetipos">Herramientas de autoconocimiento</Link> para tu desarrollo personal</li>
            <li>Recursos y comunidades para conectar con otros que comparten tu búsqueda</li>
          </ul>
        </section>

        <section className="content-section">
          <h2 id="tu-camino">Tu camino, tus decisiones&nbsp;<a href="#tu-camino">🔗</a></h2>
          <p>
            La exploración de las Altas Capacidades Intelectuales es un viaje personal. Te ofrecemos información y opciones para que elijas las herramientas y servicios que mejor se adapten a tus objetivos y circunstancias. Tu desarrollo está en tus manos.
          </p>
          <p>
            <Link href="/tests#tu-sospecha-es-legitima">Comenzá tu exploración personal</Link>
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