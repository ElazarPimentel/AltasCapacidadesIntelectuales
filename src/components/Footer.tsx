// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <Link href="/tests">Tests</Link> ·{' '}
        <Link href="/legislacion">Legislación</Link> ·{' '}
        <Link href="/profesionales">Profesionales</Link>
      </nav>
      <p>Contenido protegido por el Convenio de Berna sobre Derechos de Autor</p>
      <p>v56.00.57</p>
      <div className="last-updated">
        Actualización más reciente: 13 de Junio de 2025
      </div>
    </footer>
  );
} 