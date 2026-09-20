'use client';

import BP from '@/lib/basePath';
import { useI18n } from './LocaleProvider';
import { localePath } from '@/lib/i18n/routes';

export default function Footer() {
  const { locale, t } = useI18n();
  const home = (hash = '') => `${BP}${localePath(locale, `/${hash}`)}`;
  return (
    <footer className="reveal">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand">
            <a href={home()} className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/assets/logotype/logo-symbol.svg`} alt={t.common.logoAlt} />
            </a>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="footer-col-title">{t.footer.navTitle}</p>
            <ul className="footer-nav-links">
              <li><a href={home()}>{t.footer.nav.home}</a></li>
              <li><a href={home('#sobre')}>{t.footer.nav.about}</a></li>
              <li><a href={home('#projetos')}>{t.footer.nav.projects}</a></li>
              <li><a href={home('#contato')}>{t.footer.nav.contact}</a></li>
              <li><a href={home('#faq')}>{t.footer.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">{t.footer.socialTitle}</p>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/oalisonorsi/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/oalisonalmeida/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <span className="footer-copy">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
