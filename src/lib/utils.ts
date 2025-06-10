import { Metadata } from 'next'

export const curiosidadesMetadata: Metadata = {
  title: 'Curiosidades que estimulan tu mente | Altas Capacidades Intelectuales',
  description: 'Descubre recursos, juegos y datos interesantes para mentes curiosas. Una colección de estímulos intelectuales para personas con altas capacidades.',
  alternates: {
    canonical: 'https://altascapacidades.info/curiosidades'
  }
}

export const handleCopyClick = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
} 