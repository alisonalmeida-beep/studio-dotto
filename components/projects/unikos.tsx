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

export default function Unikos({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Unikos", section: c[section].toLowerCase(), n });
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
        <Image src={`${BP}/projects/unikos/1-unikos.jpg`} alt={fmt(t.projects.heroAlt, { name: "Unikos" })} width={1400} height={788} sizes="100vw" priority style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* SOBRE */}
        <div className="section reveal" id="sec-sobre">
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
            <Image src={`${BP}/projects/unikos/2-unikos.jpg`} alt={A(6, 1)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/3-unikos.jpg`} alt={A(6, 2)} width={1400} height={886} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/4-unikos.jpg`} alt={A(6, 3)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/5-unikos.jpg`} alt={A(6, 4)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/6-unikos.jpg`} alt={A(6, 5)} width={1400} height={978} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/7-unikos.jpg`} alt={A(6, 6)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/8-unikos.jpg`} alt={A(6, 7)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/9-unikos.jpg`} alt={A(6, 8)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* ABORDAGEM */}
        <div className="section reveal" id="sec-abordagem">
          <span className="section-label">{c[7]}</span>
          <p className="section-text">
            {c[8]}
          </p>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[9]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/10-unikos.jpg`} alt={A(9, 1)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/11-unikos.jpg`} alt={A(9, 2)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/12-unikos.jpg`} alt={A(9, 3)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/13-unikos.jpg`} alt={A(9, 4)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/14-unikos.jpg`} alt={A(9, 5)} width={1400} height={975} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/15-unikos.jpg`} alt={A(9, 6)} width={1400} height={979} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/16-unikos.jpg`} alt={A(9, 7)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/unikos/17-unikos.mp4" width={1400} height={788} label={A(9, 8)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/unikos/18-unikos.jpg`} alt={A(9, 9)} width={1400} height={933} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/unikos/19-unikos.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/unikos/20-unikos.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/unikos/21-unikos.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/unikos/22-unikos.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/unikos/23-unikos.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[10]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[11]}</strong> {c[12]}<br />
                <strong>{c[13]}</strong> {c[14]}<br />
                <strong>{c[15]}</strong> {c[16]}<br />
                <strong>{c[17]}</strong> {c[18]}<br />
                <strong>{c[19]}</strong> {c[20]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[21]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/clave')}`} variant="secondary">
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
