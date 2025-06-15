// src/components/ThemeToggle.tsx

import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Constants for theme management
const STORAGE = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

function applyTheme(theme: string) {
  const root = document.documentElement;
  root.setAttribute('data-theme-transition', 'true');
  root.setAttribute('data-theme', theme);
  setTimeout(() => root.removeAttribute('data-theme-transition'), 300);
}

// This component is used in the Header which is client-side only
export function ThemeToggle() {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<string>(DARK);

  useEffect(() => {
    setReady(true);
    try {
      const saved = localStorage.getItem(STORAGE);
      const initial = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);
      setTheme(initial);
      applyTheme(initial);
    } catch {
      setTheme(LIGHT);
      applyTheme(LIGHT);
    }
  }, []);

  if (!ready) return null;

  const toggle = () => {
    const next = theme === DARK ? LIGHT : DARK;
    setTheme(next);
    localStorage.setItem(STORAGE, next);
    applyTheme(next);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === DARK ? 'Light mode' : 'Dark mode'}
      title={theme === DARK ? 'Light mode' : 'Dark mode'}
    >
      {theme === DARK ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
} 