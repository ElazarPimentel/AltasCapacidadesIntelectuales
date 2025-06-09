import Link from 'next/link';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import Disclaimer from '@/components/Disclaimer';
import References from '@/components/References';
import AcademicReferences from '@/components/AcademicReferences';
import MethodologyBox from '@/components/MethodologyBox';
import LastUpdated from '@/components/LastUpdated';

export const metadata = generatePageMetadata({
  title: 'Acerca de este Sitio - Altas Capacidades en Adultos',
  description: 'Un recurso empático y riguroso para adultos que sospechan tener ACI. Conocé nuestro enfoque, inspiraciones académicas y metodología editorial.',
  path: '/acerca',
  keywords: ['altas capacidades intelectuales', 'ACI', 'adultos', 'Argentina', 'Dabrowski', 'Renzulli', 'Silverman', 'guía editorial', 'autoconocimiento'],
  type: 'article',
});

export default function Acerca() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Acerca de este Sitio</h1>
        
        {/* Hero - Posicionamiento claro */}
        <section className="content-section">
          <p>
            Este sitio fue creado para personas adultas que sospechan tener Altas Capacidades Intelectuales (ACI) y buscan entender su diferencia sin necesidad de etiquetas clínicas ni tecnicismos. No somos un centro diagnóstico ni una institución educativa. No ofrecemos tests, terapias ni programas. Somos un recurso informativo, independiente y <strong>enfocado exclusivamente en adultos</strong>.
          </p>
          <p>
            A diferencia de centros que se enfocan en niños y adolescentes, nuestro sitio está diseñado para quienes ya pasaron la infancia sin identificación temprana. No competimos con instituciones establecidas; las complementamos ofreciendo claridad conceptual, tono empático y orientación práctica hacia <Link href="/profesionales">profesionales especializados</Link>.
          </p>
        </section>

        {/* Methodology Box */}
        <MethodologyBox />

        {/* Academic References */}
        <AcademicReferences />

        {/* Transparencia editorial */}
        <section className="content-section">
          <h2 id="transparencia">Transparencia y Criterios&nbsp;<a href="#transparencia">🔗</a></h2>
          <p>
            Nuestro contenido se basa en una <a href="/data/editorial-guide.md" target="_blank" rel="noopener noreferrer">guía editorial propia</a>, alineada con enfoques multidimensionales que reconocen la creatividad, la asincronía y la intensidad emocional de las ACI, más allá del CI. Nos inspiramos en fuentes confiables y colaboramos con la comunidad, como la <a href="https://revista.elarcondeclio.com.ar/la-asociacion-civil-altas-capacidades-argentina/" target="_blank" rel="noopener noreferrer">Asociación Altas Capacidades Argentina</a>.
          </p>
          <p>
            Cada página de este sitio está pensada para aportar claridad sin imponer diagnósticos. Si algo te resuena, perfecto. Si no, también está bien. El objetivo es que tengas palabras para pensar tu experiencia, no que encajes en una categoría.
          </p>
        </section>

        {/* Enlaces estratégicos múltiples */}
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

        {/* Disclaimer integrado */}
        <Disclaimer />

        {/* Referencias bibliográficas */}
        <References title="Fuentes y Enlaces Útiles" />

        {/* Last Updated sutil */}
        <LastUpdated />
      </div>
    </main>
  );
} 