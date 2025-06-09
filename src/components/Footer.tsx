import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copyright">Contenido protegido por el Convenio de Berna sobre Derechos de Autor</p>
        </div>
      </div>
    </footer>
  );
} 