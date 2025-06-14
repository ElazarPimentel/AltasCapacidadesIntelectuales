// src/components/ThemeScript.tsx

'use client';

import { useEffect } from 'react'

// Constants shared with ThemeToggle
const STORAGE = 'theme';
const DARK = 'dark';
const LIGHT = 'light';

export default function ThemeScript() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE)
      const preferred =
        saved ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT)
      document.documentElement.setAttribute('data-theme', preferred)
    } catch {
      document.documentElement.setAttribute('data-theme', LIGHT)
    }
  }, [])

  return null
} 