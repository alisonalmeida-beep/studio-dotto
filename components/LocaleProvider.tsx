'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n';

type Value = { locale: Locale; t: Dictionary };

const LocaleContext = createContext<Value | null>(null);

export function LocaleProvider({ locale, dictionary, children }: { locale: Locale; dictionary: Dictionary; children: React.ReactNode }) {
  return <LocaleContext.Provider value={{ locale, t: dictionary }}>{children}</LocaleContext.Provider>;
}

export function useI18n(): Value {
  const value = useContext(LocaleContext);
  if (!value) throw new Error('useI18n precisa estar dentro de <LocaleProvider>');
  return value;
}
