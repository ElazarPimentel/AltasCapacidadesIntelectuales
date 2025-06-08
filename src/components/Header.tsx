import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

export default function Header({ onToggleDarkMode, isDarkMode }: HeaderProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/historia', label: 'Historia' },
    { href: '/tests', label: 'Tests' },
    { href: '/profesionales', label: 'Profesionales' },
    { href: '/legislacion', label: 'Legislación' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__logo">
            <Link href="/" className="nav__link">
              ACI Adultos
            </Link>
          </div>
          
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`nav__link ${pathname === item.href ? 'nav__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            type="button"
            className="nav__theme-toggle"
            onClick={onToggleDarkMode}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
} 