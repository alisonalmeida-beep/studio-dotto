export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const HREFLANG: Record<Locale, string> = { pt: 'pt-BR', en: 'en' };
// Nome do idioma escrito no próprio idioma (usado no seletor do menu mobile).
export const LANGUAGE_NAMES: Record<Locale, string> = { pt: 'Português', en: 'English' };

export const OG_LOCALE: Record<Locale, string> = { pt: 'pt_BR', en: 'en_US' };

// Cookie gravado pelo toggle de idioma; a escolha do usuário sempre vence a detecção por país.
export const LOCALE_COOKIE = 'NEXT_LOCALE';
