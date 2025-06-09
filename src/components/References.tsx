interface ReferencesProps {
  title?: string;
}

export default function References({ title = "Referencias" }: ReferencesProps) {
  return (
    <section className="content-section">
      <h2 id="referencias">{title}&nbsp;<a href="#referencias">🔗</a></h2>
      <ul className="content-list">
        <li>
          [1] <a href="https://www.altascapacidadesytalentos.com/que-significa-tener-las-altas-capacidades/" target="_blank" rel="noopener noreferrer">
            Altas Capacidades y Talentos: Qué significa tener altas capacidades
          </a>
        </li>
        <li>
          [6] <a href="https://www.aest.es/altas-capacidades-intelectuales-o-superdotacion/" target="_blank" rel="noopener noreferrer">
            AEST: Altas Capacidades Intelectuales o Superdotación
          </a>
        </li>
        <li>
          [9] <a href="https://www.altascapacidades.org.ar/GOPPAC.pdf" target="_blank" rel="noopener noreferrer">
            GOPPAC: Altas Capacidades Argentina
          </a>
        </li>
      </ul>
    </section>
  );
} 