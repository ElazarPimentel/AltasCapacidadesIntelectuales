// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="main-content">
      <div className="container">
        <section className="text-center">
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que buscas no existe.</p>
          <div className="search-bar">
            <input type="text" placeholder="Buscar en el sitio..." />
            <button>Buscar</button>
          </div>
          <div className="common-links">
            <h2>Enlaces comunes:</h2>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/articulos">Artículos</Link></li>
              <li><Link href="/acerca">Acerca de</Link></li>
            </ul>
          </div>
          <Link href="/" className="button">
            Volver al inicio
          </Link>
        </section>
      </div>
    </main>
  );
} 