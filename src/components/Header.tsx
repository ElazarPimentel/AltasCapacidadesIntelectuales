'use client';

// src/components/Header.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link href="/" className="header__logo">
            Altas Capacidades Intelectuales
          </Link>
          <div className="header__controls">
            <ThemeToggle />
            <button 
              className="header__toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <Link 
            href="/" 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link 
            href="/arquetipos" 
            className={`nav-link ${pathname === '/arquetipos' ? 'active' : ''}`}
            aria-current={pathname === '/arquetipos' ? 'page' : undefined}
          >
            Arquetipos
          </Link>
          <Link 
            href="/historia" 
            className={`nav-link ${pathname === '/historia' ? 'active' : ''}`}
            aria-current={pathname === '/historia' ? 'page' : undefined}
          >
            Historia
          </Link>
          <Link 
            href="/tests" 
            className={`nav-link ${pathname === '/tests' ? 'active' : ''}`}
            aria-current={pathname === '/tests' ? 'page' : undefined}
          >
            Tests
          </Link>
          <Link 
            href="/legislacion" 
            className={`nav-link ${pathname === '/legislacion' ? 'active' : ''}`}
            aria-current={pathname === '/legislacion' ? 'page' : undefined}
          >
            Legislación
          </Link>
          <Link 
            href="/profesionales" 
            className={`nav-link ${pathname === '/profesionales' ? 'active' : ''}`}
            aria-current={pathname === '/profesionales' ? 'page' : undefined}
          >
            Profesionales
          </Link>
          <Link 
            href="/articulos" 
            className={`nav-link ${pathname === '/articulos' ? 'active' : ''}`}
            aria-current={pathname === '/articulos' ? 'page' : undefined}
          >
            Artículos
          </Link>
          <Link 
            href="/curiosidades" 
            className={`nav-link ${pathname === '/curiosidades' ? 'active' : ''}`}
            aria-current={pathname === '/curiosidades' ? 'page' : undefined}
          >
            Curiosidades
          </Link>
          <Link 
            href="/acerca" 
            className={`nav-link ${pathname === '/acerca' ? 'active' : ''}`}
            aria-current={pathname === '/acerca' ? 'page' : undefined}
          >
            Acerca
          </Link>
        </nav>
      </div>
    </header>
  );
} 