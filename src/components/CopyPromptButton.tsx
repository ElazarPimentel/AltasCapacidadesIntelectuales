// src/components/CopyPromptButton.tsx

'use client';

import { handleCopyClick } from '@/lib/utils';

interface CopyPromptButtonProps {
  targetSelector: string;
}

export default function CopyPromptButton({ targetSelector }: CopyPromptButtonProps) {
  const handleClick = async () => {
    const blockquote = document.querySelector(targetSelector);
    if (blockquote instanceof HTMLElement) {
      const text = blockquote.innerText;
      const success = await handleCopyClick(text);
      if (success) {
      const btn = document.querySelector('.prompt-block button');
      if (btn instanceof HTMLButtonElement) {
        btn.innerText = 'Copiado';
        setTimeout(() => {
          btn.innerText = 'Copiar';
        }, 2000);
        }
      }
    }
  };

  return (
    <button onClick={handleClick}>
      Copiar
    </button>
  );
} 