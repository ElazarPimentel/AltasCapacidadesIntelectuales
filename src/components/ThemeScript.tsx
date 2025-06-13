'use client';

// Constants shared with ThemeToggle
const STORAGE = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

export default function ThemeScript() {
  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('${STORAGE}');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = savedTheme || (prefersDark ? '${DARK}' : '${LIGHT}');
              document.documentElement.dataset.theme = theme;
            } catch (e) {
              document.documentElement.dataset.theme = '${LIGHT}';
            }
          })();
        `,
      }}
    />
  );
} 