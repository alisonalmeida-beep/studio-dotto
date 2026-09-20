// Substitui {chave} por valores: fmt('{name} — projeto', { name: 'Clave' })
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}
