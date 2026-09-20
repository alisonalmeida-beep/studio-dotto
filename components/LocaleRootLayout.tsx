import { IBM_Plex_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/globals.css';
import MobileMenu from '@/components/MobileMenu';
import LoadingScreen from '@/components/LoadingScreen';
import { LocaleProvider } from '@/components/LocaleProvider';
import { HREFLANG, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Layout raiz compartilhado: cada idioma tem o seu (app/(pt)/layout.tsx e app/en/layout.tsx)
// para que o <html lang> seja estático e correto.
export default function LocaleRootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={HREFLANG[locale]} className={ibmPlexSans.className}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.loading-screen{display:none!important}`}</style>
        </noscript>
        <LocaleProvider locale={locale} dictionary={getDictionary(locale)}>
          <LoadingScreen />
          <MobileMenu />
          {children}
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
