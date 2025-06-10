// src/app/tests/layout.tsx


import { generateMetadata as generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Tests y Evaluación de Altas Capacidades',
  description: 'Tests orientativos y guía para la evaluación profesional de Altas Capacidades Intelectuales en adultos. Entendé el proceso diagnóstico.',
  path: '/tests',
  keywords: ['test ACI', 'evaluación altas capacidades', 'diagnóstico ACI', 'profesionales ACI', 'psicodiagnóstico'],
  type: 'article',
});

export default function TestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 