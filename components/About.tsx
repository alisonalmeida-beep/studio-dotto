'use client';

import Image from 'next/image';
import BP from '@/lib/basePath';
import { useI18n } from './LocaleProvider';

export default function About() {
  const { t } = useI18n();
  return (
    <section id="sobre">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">{t.about.label}</span>
          <div className="sobre-grid">
            <div className="sobre-foto-wrap">
              <div className="sobre-foto-img-clip">
              <Image src={`${BP}/pic_portfolio_about_me.jpg`} alt={t.about.photoAlt} width={5102} height={5358} sizes="(max-width: 900px) 100vw, 600px" className="sobre-foto-img" />
              </div>
              <div className="sobre-foto-overlay">
                <div>
                  <div className="sobre-foto-name">{t.about.name}</div>
                  <div className="sobre-foto-role">{t.about.role}</div>
                </div>
                <div className="sobre-foto-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${BP}/assets/logotype/logo-symbol.svg`} alt={t.common.logoAlt} className="sobre-foto-logo" />
                </div>
              </div>
            </div>
            <div className="sobre-content">
              <h2 className="sobre-heading">{t.about.heading}</h2>
              <div className="sobre-services">
                {t.about.services.map(service => (
                  <div className="sobre-service-row" key={service.title}>
                    <div>
                      <div className="sobre-service-title">{service.title}</div>
                      <div className="sobre-service-desc">{service.desc}</div>
                    </div>
                    <span className="sobre-service-tag">{service.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
