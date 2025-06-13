// src/components/Footer.tsx
// Footer
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
      <p>v12.23.51</p>
      <div className="last-updated">
        Actualización más reciente: 12 de Junio de 2025
      </div>
    </footer>
  );
} 