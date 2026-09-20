'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Image from 'next/image';
import LazyVideo from '@/components/LazyVideo';
import Button from '@/components/Button';
import { useI18n } from '@/components/LocaleProvider';
import LanguageSwitch from '@/components/LanguageSwitch';
import { localePath } from '@/lib/i18n/routes';
import { fmt } from '@/lib/i18n/format';

export default function Trinkery({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Trinkery", section: c[section].toLowerCase(), n });
  useEffect(() => {
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 300px 0px' });

    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < window.innerHeight) el.classList.add('visible');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <div className="project-nav">
        <a href={`${BP}${localePath(locale, '/')}`} className="nav-back" aria-label={t.common.back}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="nav-back-label">{t.common.back}</span>
        </a>
        <div className="project-nav-right">
          <LanguageSwitch />
          <Button href="https://calendly.com/alisonalmeidadsn/30min" target="_blank" rel="noopener noreferrer" variant="cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {t.common.bookCall}
          </Button>
        </div>
      </div>

      {/* VIDEO HERO */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline disablePictureInPicture>
          <source src={`${BP}/projects/trinkery/4-showcase-1080p.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* PROJECT CONTENT */}
      <main className="content">
        <div className="divider"></div>
        <div className="project-header reveal">
          <div>
            <div className="project-badges">
              <span className="badge">{c[0]}</span>
              <span className="badge">{t.portfolio.tabs.identity}</span>
            </div>
            <h1 className="project-title">{c[1]}</h1>
          </div>
        </div>

        {/* ORIGEM + DESAFIO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[2]}</span>
              <p className="section-text">
                {c[3]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[4]}</span>
              <p className="section-text">
                {c[5]}
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">{c[6]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/1-brand-board.png`} alt={c[43]} width={1920} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/trinkery/2-logo-concept.mp4" width={1920} height={600} label={c[7]} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/trinkery/3-logo-process.mp4" width={1920} height={1080} label={c[8]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/5-identity-board.jpg`} alt={c[44]} width={1920} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/trinkery/16-tagline-motion.mp4" width={1920} height={1080} label={c[9]} className="project-img" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[10]}</span>
              <p className="section-text">
                <strong>{c[11]}</strong><br />
                {c[12]}
              </p>
              <p className="section-text">
                <strong>{c[13]}</strong><br />
                {c[14]}
              </p>
              <p className="section-text">
                <strong>{c[15]}</strong><br />
                {c[16]}
              </p>
              <p className="section-text">
                <strong>{c[17]}</strong><br />
                {c[18]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[19]}</span>
              <p className="section-text">
                {c[20]}
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>{c[21]}</span>
              <p className="section-text">
                {c[22]}<br />
                {c[23]}<br />
                {c[24]}<br />
                {c[25]}
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="section reveal" id="sec-video">
          <div className="video-hero" style={{ marginTop: 0 }}>
            <video autoPlay loop muted playsInline disablePictureInPicture>
              <source src={`${BP}/projects/trinkery/14-trinkery-video-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[26]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/6-bag-mockup.png`} alt={c[45]} width={1920} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/7-cap-mockup.png`} alt={c[46]} width={959} height={1278} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/8-flyers-mockup.png`} alt={c[47]} width={959} height={1278} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/9-posters-mockup.jpg`} alt={c[48]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/10-tape-mockup.jpg`} alt={c[49]} width={960} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/11-stories-mockup.jpg`} alt={c[50]} width={960} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/12-jar-mockup.jpg`} alt={c[51]} width={959} height={1278} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/13-business-card-mockup.jpg`} alt={c[52]} width={959} height={1278} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/15-box-mockup.jpg`} alt={c[53]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/18-case-mockup.jpg`} alt={c[54]} width={959} height={1279} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/19-checkout-mockup.jpg`} alt={c[55]} width={959} height={1279} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/20-outdoor-mockup.jpg`} alt={c[56]} width={1920} height={1081} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/trinkery/21-facade-mockup.jpg`} alt={c[57]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[27]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[28]}</strong> {c[29]}<br />
                <strong>{c[30]}</strong> {c[31]}<br />
                <strong>{c[32]}</strong> {c[33]}<br />
                <strong>{c[34]}</strong> {c[35]}<br />
                <strong>{c[36]}</strong> {c[37]}<br />
                <strong>{c[38]}</strong> {c[39]}<br />
                <strong>{c[40]}</strong> {c[41]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[42]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/dcvmn')}`} variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Button>
        </div>
      </main>

      <Footer />

      <button
        className="back-to-top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t.common.backToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  );
}
