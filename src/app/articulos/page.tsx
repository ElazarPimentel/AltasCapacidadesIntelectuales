// src/app/articulos/page.tsx

import { articulos } from '@/data/articulos';
import { articulosMetadata } from '@/lib/page-metadata/articulos';
import { getSectionVariant } from '@/lib/utils';

export const metadata = articulosMetadata;

export default function ArticulosPage() {
  return (
    <main className="main-content">
      <div className="container">
        <section className={`content-section ${getSectionVariant(0)}`}>
          <h1>Artículos Interesantes</h1>
          <p>Colección de artículos sobre Altas Capacidades Intelectuales.</p>
        </section>

        {articulos.map((articulo, index) => (
          <section key={articulo.filename} className={`content-section ${getSectionVariant(index + 1)}`}>
            <article className="articulo-card">
              <h2>{articulo.title}</h2>
              <div className="abstract" dangerouslySetInnerHTML={{ __html: articulo.abstract }} />
              
              {articulo.tags && (
                <div className="tags">
                  {articulo.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              )}
              
              <a 
                href={`/${encodeURIComponent(articulo.filename)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ver PDF
              </a>
            </article>
          </section>
        ))}
      </div>
    </main>
  );
} 