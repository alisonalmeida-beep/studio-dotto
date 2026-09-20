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

export default function LigyEnergia({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Ligy Energia", section: c[section].toLowerCase(), n });
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
          <source src={`${BP}/projects/ligy-energia/1-video-concept-01-Ligy-1080p.mp4`} type="video/mp4" />
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

        {/* SOBRE + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[2]}</span>
              <p className="section-text">
                {c[3]}
              </p>
              <p className="section-text">
                {c[4]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[5]}</span>
              <p className="section-text">
                {c[6]}
              </p>
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
            <LazyVideo src="/projects/ligy-energia/2-ligy.mp4" width={1920} height={1080} label={A(8, 1)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/3-ligy.mp4" width={1920} height={600} label={A(8, 2)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/4-ligy.mp4" width={1920} height={1280} label={A(8, 3)} className="project-img" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/ligy-energia/5-video-concept-02-Ligy-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/6-ligy.png`} alt={A(8, 4)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[9]}</span>
              <p className="section-text">
                <strong>{c[10]}</strong><br />
                {c[11]}
              </p>
              <p className="section-text">
                <strong>{c[12]}</strong><br />
                {c[13]}
              </p>
              <p className="section-text">
                <strong>{c[14]}</strong><br />
                {c[15]}
              </p>
              <p className="section-text">
                <strong>{c[16]}</strong><br />
                {c[17]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[18]}</span>
              <p className="section-text">
                {c[19]}
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>{c[20]}</span>
              <p className="section-text">
                {c[21]}<br />
                {c[22]}<br />
                {c[23]}
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[24]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/7-ligy.jpg`} alt={A(24, 1)} width={600} height={800} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/8-ligy.mp4" width={1920} height={1280} label={A(24, 2)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/9-ligy.jpg`} alt={A(24, 3)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/10-ligy.jpg`} alt={A(24, 4)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/11-ligy.mp4" width={1920} height={1280} label={A(24, 5)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/12-ligy.mp4" width={1920} height={1280} label={A(24, 6)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/13-ligy.jpg`} alt={A(24, 7)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/14-ligy.png`} alt={A(24, 8)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/15-ligy.jpg`} alt={A(24, 9)} width={1920} height={1281} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/16-ligy.png`} alt={A(24, 10)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/ligy-energia/17-ligy.png`} alt={A(24, 11)} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/ligy-energia/18-ligy.mp4" width={1920} height={1280} label={A(24, 12)} className="project-img" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[25]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[26]}</strong> {c[27]}<br />
                <strong>{c[28]}</strong> {c[29]}<br />
                <strong>{c[30]}</strong> {c[31]}<br />
                <strong>{c[32]}</strong> {c[33]}<br />
                <strong>{c[34]}</strong> {c[35]}<br />
                <strong>{c[36]}</strong> {c[37]}<br />
                <strong>{c[38]}</strong> {c[39]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[40]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/profitor')}`} variant="secondary">
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
