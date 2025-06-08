import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 