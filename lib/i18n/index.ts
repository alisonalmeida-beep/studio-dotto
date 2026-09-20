import type { Locale } from './config';
import { pt } from './dictionaries/pt';
import { en } from './dictionaries/en';

export type { Dictionary } from './dictionaries/pt';

export function getDictionary(locale: Locale) {
  return locale === 'en' ? en : pt;
}
