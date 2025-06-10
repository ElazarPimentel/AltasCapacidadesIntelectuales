import { ReactNode } from 'react';

interface ReferencesProps {
  children: ReactNode;
}

export function References({ children }: ReferencesProps) {
  return (
    <section className="references">
      <h2>Referencias</h2>
      <div className="references__list">
        {children}
      </div>
    </section>
  );
} 