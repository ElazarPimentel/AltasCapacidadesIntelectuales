'use client';

interface CopyPromptButtonProps {
  targetSelector: string;
}

export default function CopyPromptButton({ targetSelector }: CopyPromptButtonProps) {
  const handleClick = () => {
    const blockquote = document.querySelector(targetSelector);
    if (blockquote instanceof HTMLElement) {
      const text = blockquote.innerText;
      navigator.clipboard.writeText(text);
      const btn = document.querySelector('.prompt-block button');
      if (btn instanceof HTMLButtonElement) {
        btn.innerText = 'Copiado';
        setTimeout(() => {
          btn.innerText = 'Copiar';
        }, 2000);
      }
    }
  };

  return (
    <button onClick={handleClick}>
      Copiar
    </button>
  );
} 