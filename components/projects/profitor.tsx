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

export default function Profitor({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Profitor", section: c[section].toLowerCase(), n });
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

      {/* IMAGE HERO */}
      <div className="video-hero">
        <Image src={`${BP}/projects/profitor/1-profitor.png`} alt={fmt(t.projects.heroAlt, { name: "Profitor" })} width={2880} height={1620} sizes="100vw" priority style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* SOBRE + DESAFIO */}
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
              <p className="section-text">
                {c[6]}
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">{c[7]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/2-profitor.png`} alt={A(7, 1)} width={2880} height={1620} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/profitor/3-profitor.mp4" width={1124} height={632} label={A(7, 2)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/4-profitor.png`} alt={A(7, 3)} width={3840} height={2160} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/5-profitor.png`} alt={A(7, 4)} width={2880} height={1620} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[8]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/6-profitor.png`} alt={A(8, 1)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/7-profitor.png`} alt={A(8, 2)} width={2880} height={2049} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/8-profitor.png`} alt={A(8, 3)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/9-profitor.png`} alt={A(8, 4)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/10-profitor.png`} alt={A(8, 5)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/11-profitor.png`} alt={A(8, 6)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/12-profitor.png`} alt={A(8, 7)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/13-profitor.png`} alt={A(8, 8)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/14-profitor.png`} alt={A(8, 9)} width={2880} height={1621} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/15-profitor.png`} alt={A(8, 10)} width={2880} height={3376} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/profitor/16-profitor.png`} alt={A(8, 11)} width={2880} height={2249} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[9]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[10]}</strong> {c[11]}<br />
                <strong>{c[12]}</strong> {c[13]}<br />
                <strong>{c[14]}</strong> {c[15]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[16]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/lunes')}`} variant="secondary">
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
