// src/app/not-found.tsx
// Página de error 404 

import { getSectionVariant } from '@/lib/section-variants';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="main-content">
      <div className="container">
      <h1>404 - Página no encontrada</h1>
        
        <section className={`content-section ${getSectionVariant(0)}`}>

          <p>Lamentablemente el lugar del sitio al que intentaste ingresar no existe. </p>


          <Link href="/" className="button">
            Volver al inicio
          </Link>
        </section>

        <section className={`content-section ${getSectionVariant(5)}`}>
          <h2 id="contacto">Contacto&nbsp;<a href="#contacto">🔗</a></h2>
          <div className="contact-info">
            Si creés que éste link debería existir, o llegaste buscando contennido que apuntaba acá y no lo encontrás no nudes en escribirnos a <a href="mailto:ACIntelectuales@gmail.com">ACIntelectuales@gmail.com</a>
          </div>
        </section>

      </div>
    </main>
  );
} 