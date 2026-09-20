'use client';

import { usePathname } from 'next/navigation';
import BP from '@/lib/basePath';
import { useI18n } from '@/components/LocaleProvider';
import { HREFLANG, LANGUAGE_NAMES, LOCALE_COOKIE, locales, type Locale } from '@/lib/i18n/config';
import { alternatePath } from '@/lib/i18n/routes';

// Seletor de idioma em formato de pílula (PT | EN). São links reais (rastreáveis pelo Google)
// para a página equivalente; o clique grava a escolha em cookie para vencer a detecção por país.
export default function LanguageSwitch({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const { locale, t } = useI18n();

  function remember(target: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label={t.common.language}>
      {locales.map(target => (
        <a
          key={target}
          href={`${BP}${alternatePath(pathname, target)}`}
          hrefLang={HREFLANG[target]}
          lang={HREFLANG[target]}
          className={target === locale ? 'active' : undefined}
          aria-current={target === locale ? 'true' : undefined}
          aria-label={LANGUAGE_NAMES[target]}
          onClick={() => remember(target)}
        >
          {target.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
