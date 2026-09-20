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

export default function EscritorioInteligente({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Escritório Inteligente", section: c[section].toLowerCase(), n });
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
          <source src={`${BP}/projects/escritorio-inteligente/motion-board-escritorio-inteligente.mp4`} type="video/mp4" />
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
            <h1 className="project-title">{c[1]}<br />{c[2]}</h1>
          </div>
        </div>

        {/* DESAFIO + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[3]}</span>
              <p className="section-text">
                {c[4]}
                <br /><br />
                {c[5]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[6]}</span>
              <p className="section-text">
                {c[7]}
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">{c[8]}</span>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/logo-concept-escritorio-inteligente.mp4" width={1920} height={1080} label={c[9]} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/logo-reveal.mp4" width={1920} height={1080} label={c[10]} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/before-after-escritorio-inteligente.mp4" width={1920} height={1080} label={c[11]} className="project-img" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[12]}</span>
              <p className="section-text">
                <strong>{c[13]}</strong><br />
                {c[14]}
                <br /><br />
                <strong>{c[15]}</strong><br />
                {c[16]}<br />
                {c[17]}
                <br /><br />
                <strong>{c[18]}</strong><br />
                {c[19]}<br />
                {c[20]}<br />
                {c[21]}
                <br /><br />
                <strong>{c[22]}</strong><br />
                {c[23]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[24]}</span>
              <p className="section-text">
                <strong>{c[25]}</strong><br />
                {c[26]}
                <br /><br />
                <strong>{c[27]}</strong><br />
                {c[28]}
                <br /><br />
                <strong>{c[29]}</strong><br />
                {c[30]}
                <br /><br />
                <strong>{c[31]}</strong><br />
                {c[32]}<br />
                {c[33]}<br />
                {c[34]}<br />
                {c[35]}
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[36]}</span>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/mockup-bag-escritorio-inteligente.mp4" width={1920} height={1280} label={c[37]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/business-card-escritorio-inteligente.png`} alt={c[58]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/mockup-notebook-escritorio-inteligente.mp4" width={1920} height={1280} label={c[38]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/social-escritorio-inteligente.jpg`} alt={c[59]} width={1920} height={1081} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/social-media-escritorio-inteligente.mp4" width={1920} height={1280} label={c[39]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/mockup-site-escritorio-inteligente.jpg`} alt={c[60]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/mockup-shirt-escritorio-inteligente.png`} alt={c[61]} width={1921} height={1282} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/site-ipad-escritorio-inteligente.jpg`} alt={c[62]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/dash-motion-escritorio-inteligente.mp4" width={1920} height={1280} label={c[40]} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/escritorio-inteligente/website-motion-escritorio-inteligente.mp4" width={1920} height={1280} label={c[41]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/ei-portal-escritorio-inteligente.png`} alt={c[63]} width={1921} height={1282} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/mockup-metro-escritorio-inteligente.png`} alt={c[64]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/escritorio-inteligente/gallery-photos-escritorio-inteligente.png`} alt={c[65]} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[42]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[43]}</strong> {c[44]}<br />
                <strong>{c[45]}</strong> {c[46]}<br />
                <strong>{c[47]}</strong> {c[48]}<br />
                <strong>{c[49]}</strong> {c[50]}<br />
                <strong>{c[51]}</strong> {c[52]}<br />
                <strong>{c[53]}</strong> {c[54]}<br />
                <strong>{c[55]}</strong> {c[56]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[57]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/trinkery')}`} variant="secondary">
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
