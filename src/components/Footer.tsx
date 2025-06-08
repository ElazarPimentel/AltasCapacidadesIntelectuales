import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Enlaces rápidos</h3>
            <ul className="footer__list">
              <li>
                <Link href="/" className="footer__link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/historia" className="footer__link">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="/tests" className="footer__link">
                  Tests
                </Link>
              </li>
              <li>
                <Link href="/profesionales" className="footer__link">
                  Profesionales
                </Link>
              </li>
              <li>
                <Link href="/legislacion" className="footer__link">
                  Legislación
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Información</h3>
            <p className="footer__text">
              Este sitio está dedicado a proporcionar información sobre Altas Capacidades Intelectuales en adultos.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} ACI Adultos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 