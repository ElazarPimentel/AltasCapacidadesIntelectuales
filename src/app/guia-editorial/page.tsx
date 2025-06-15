// src/app/guia-editorial/page.tsx
// Guía Editorial

import { getSectionVariant } from '@/lib/section-variants';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Guía Editorial - Altas Capacidades Intelectuales',
  description: 'Principios editoriales y pautas de estilo para la creación de contenido sobre Altas Capacidades Intelectuales en nuestro sitio.',
  path: '/guia-editorial',
  type: 'article',
});

export default function GuiaEditorial() {
  return (
    <main className="main-content">
      <div className="container">
        <h1>Guía Editorial: Principios y Pautas de Estilo</h1>

        <section className={`content-section ${getSectionVariant(0)}`}>
          <h2>Principios Fundamentales</h2>
          <p>
            La creación de contenido para este sitio se rige por principios claros que aseguran
            la calidad, precisión y utilidad de la información presentada.
          </p>
          
          <h3>1. Rigor Académico con Accesibilidad</h3>
          <ul>
            <li>Citar fuentes académicas actualizadas</li>
            <li>Explicar conceptos complejos en lenguaje claro</li>
            <li>Mantener el balance entre precisión técnica y comprensibilidad</li>
            <li>Evitar simplificaciones excesivas sin caer en jerga innecesaria</li>
          </ul>

          <h3>2. Enfoque Empático y No Jerárquico</h3>
          <ul>
            <li>Evitar posicionar las ACI como "superioridad"</li>
            <li>Usar un tono conversacional y cercano</li>
            <li>Reconocer dificultades sin dramatizar</li>
            <li>Validar experiencias sin hacer diagnósticos</li>
          </ul>

          <h3>3. Estructura Clara y Navegable</h3>
          <ul>
            <li>Organizar contenido en secciones lógicas</li>
            <li>Usar títulos descriptivos y enlaces internos</li>
            <li>Mantener párrafos concisos y bien estructurados</li>
            <li>Incluir ejemplos prácticos cuando sea relevante</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(1)}`}>
          <h2>Pautas de Estilo</h2>
          
          <h3>Formato y Presentación</h3>
          <ul>
            <li>Títulos descriptivos y concisos</li>
            <li>Párrafos de 4-5 líneas máximo</li>
            <li>Uso consistente de negritas para énfasis clave</li>
            <li>Enlaces descriptivos y contextuales</li>
          </ul>

          <h3>Tono y Voz</h3>
          <ul>
            <li>Profesional pero accesible</li>
            <li>Evitar jerga innecesaria</li>
            <li>Mantener objetividad sin perder calidez</li>
            <li>Usar ejemplos concretos y relatable</li>
          </ul>

          <h3>Contenido y Estructura</h3>
          <ul>
            <li>Comenzar con lo más importante</li>
            <li>Desarrollar ideas progresivamente</li>
            <li>Incluir ejemplos prácticos</li>
            <li>Cerrar con puntos clave o llamados a la acción</li>
          </ul>
        </section>

        <section className={`content-section ${getSectionVariant(2)}`}>
          <h2>Restricciones y Limitaciones</h2>
          
          <p>Para mantener la integridad y utilidad del contenido:</p>
          
          <ol>
            <li>Sin diagnósticos personalizados</li>
            <li>Sin consejos médicos ni legales</li>
            <li>Sin visión elitista de la inteligencia</li>
          </ol>

          <p>© 2025 altascapacidadesintelectuales.org - CC BY-SA 4.0 salvo indicación contraria</p>
        </section>
      </div>
    </main>
  );
} 