import type { Locale } from '@/lib/i18n/config';
import type { CaseText } from './types';
import { clave } from './clave';
import { colin } from './colin';
import { dcvmn } from './dcvmn';
import { escritorioInteligente } from './escritorio-inteligente';
import { ligyEnergia } from './ligy-energia';
import { lunes } from './lunes';
import { profitor } from './profitor';
import { trinkery } from './trinkery';
import { unikos } from './unikos';

const CONTENT: Record<string, CaseText[]> = {
  clave,
  colin,
  dcvmn,
  'escritorio-inteligente': escritorioInteligente,
  'ligy-energia': ligyEnergia,
  lunes,
  profitor,
  trinkery,
  unikos,
};

export function getProjectContent(slug: string, locale: Locale): string[] {
  return CONTENT[slug].map(item => item[locale]);
}
