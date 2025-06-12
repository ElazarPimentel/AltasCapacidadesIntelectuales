export async function handleCopyClick(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

/**
 * Returns the appropriate variant class for a section based on its index
 * @param index The 0-based index of the section within its parent
 * @returns The variant class name to apply
 */
export function getSectionVariant(index: number): string {
  // Special case: first section is always variant-a (hero style)
  if (index === 0) return 'variant-a';
  
  // Alternate between variant-b and variant-c for subsequent sections
  return index % 2 === 1 ? 'variant-b' : 'variant-c';
} 