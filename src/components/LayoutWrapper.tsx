'use client';

import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 