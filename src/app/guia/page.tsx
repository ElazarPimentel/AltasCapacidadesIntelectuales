import { generateMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { getSectionVariant } from '@/lib/section-variants';

export const metadata = generateMetadata({
  title: "Guía Completa sobre Altas Capacidades Intelectuales (ACI)",
  description: "Una introducción integral a las Altas Capacidades Intelectuales: definición, detección, legislación, arquetipos, y más.",
  path: "/guia",
  type: "article"
});

export default function Guia() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Guía Completa sobre Altas Capacidades Intelectuales</h1>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2>¿Qué son las Altas Capacidades Intelectuales?</h2>
          <p>
            Las ACI representan un perfil neurodivergente que se caracteriza por una forma única de procesar la información. 
            No es solo sobre un CI elevado, sino sobre una forma diferente de pensar, sentir y relacionarse con el mundo.
          </p>
          <p>
            <Link href="/arquetipos">Descubrí los diferentes perfiles de ACI</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2>¿Cómo se detectan las ACI?</h2>
          <p>
            La detección de ACI requiere una evaluación profesional integral que va más allá de un simple test de CI. 
            Es un proceso que considera múltiples aspectos del desarrollo cognitivo y emocional.
          </p>
          <p>
            <Link href="/tests">Conocé más sobre el proceso de evaluación</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2>Marco legal y derechos</h2>
          <p>
            En Argentina, existe un marco legal que reconoce y protege los derechos de las personas con ACI. 
            Es importante conocer estos derechos para poder ejercerlos y reclamarlos cuando sea necesario.
          </p>
          <p>
            <Link href="/legislacion">Explorá el marco legal vigente</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(3)}`}>
          <h2>Historia y evolución del concepto</h2>
          <p>
            La comprensión de las ACI ha evolucionado significativamente a lo largo del tiempo. 
            Desde las primeras teorías hasta los avances más recientes en neurociencia.
          </p>
          <p>
            <Link href="/historia">Descubrí la evolución histórica</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(4)}`}>
          <h2>Recursos y apoyo profesional</h2>
          <p>
            Contar con el apoyo adecuado es fundamental para el desarrollo pleno de las ACI. 
            Existe una red de profesionales especializados que pueden guiarte en este camino.
          </p>
          <p>
            <Link href="/profesionales">Encontrá profesionales especializados</Link>
          </p>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2>Artículos y recursos adicionales</h2>
          <p>
            Mantenete actualizado con los últimos avances y descubrimientos sobre ACI a través de nuestra 
            colección de artículos y recursos especializados.
          </p>
          <p>
            <Link href="/articulos">Explorá nuestros artículos</Link>
          </p>
        </section>
      </div>
    </main>
  );
} 