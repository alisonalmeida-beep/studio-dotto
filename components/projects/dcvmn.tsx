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

export default function Dcvmn({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "DCVMN", section: c[section].toLowerCase(), n });
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
          <source src={`${BP}/projects/dcvmn/1-video-concept-03-1080p.mp4`} type="video/mp4" />
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
            <LazyVideo src="/projects/dcvmn/2-before-after-dcvmn.mp4" width={1920} height={1080} label={c[8]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/3-grid-logo-dcvmn.png`} alt={c[54]} width={1920} height={1080} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/4-color-pallet-dcvmn.png`} alt={c[55]} width={1920} height={600} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/dcvmn/5-logo-reveal-dcvmn.mp4" width={1920} height={1280} label={c[9]} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/dcvmn/6-logo-concept.mp4" width={1920} height={1080} label={c[10]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/7-brand-board-dcvmn.jpg`} alt={c[56]} width={1920} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[11]}</span>
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
                {c[17]}<br />
                {c[18]}<br />
                {c[19]}<br />
                {c[20]}<br />
                {c[21]}
              </p>
              <p className="section-text">
                <strong>{c[22]}</strong><br />
                {c[23]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[24]}</span>
              <p className="section-text">
                {c[25]}
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>{c[26]}</span>
              <p className="section-text">
                {c[27]}<br />
                {c[28]}<br />
                {c[29]}<br />
                {c[30]}<br />
                {c[31]}<br />
                {c[32]}<br />
                {c[33]}
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[34]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/8-notebook-mockup-dcvmn.jpg`} alt={c[57]} width={1920} height={1080} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/9-id-card-dcvmn.png`} alt={c[58]} width={474} height={632} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/10-book-mockup-dcvmn.jpg`} alt={c[59]} width={561} height={632} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/11-stationary-dcvmn.jpg`} alt={c[60]} width={3840} height={2560} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/dcvmn/12-graphism-dcvmn.mp4" width={474} height={632} label={c[35]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/13-photo-1-dcvmn.png`} alt={c[61]} width={474} height={632} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/14-stationary-2-dcvmn.jpg`} alt={c[62]} width={3840} height={2160} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/15-photo-2-dcvmn.png`} alt={c[63]} width={474} height={632} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/dcvmn/16-graphism-2-dcvmn.mp4" width={474} height={632} label={c[36]} className="project-img" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/dcvmn/17-video-dcvmn-tagline-01-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/18-photo-3-dcvmn.png`} alt={c[64]} width={474} height={632} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/dcvmn/19-graphism-dcvmn-tagline.mp4" width={474} height={632} label={c[37]} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/20-gallery-1-dcvmn.png`} alt={c[65]} width={953} height={954} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/21-gallery-2-dcvmn.png`} alt={c[66]} width={953} height={954} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/22-gallery-3-dcvmn.png`} alt={c[67]} width={953} height={953} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/23-gallery-4-dcvmn.png`} alt={c[68]} width={953} height={953} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/24-outdoor-mockup-dcvmn.png`} alt={c[69]} width={1920} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/25-poster-dcvmn.png`} alt={c[70]} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/dcvmn/25-poster-outdoor-dcvmn.png`} alt={c[71]} width={960} height={1280} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/dcvmn/26-urban-digital-billboard-mockup-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[38]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[39]}</strong> {c[40]}<br />
                <strong>{c[41]}</strong> {c[42]}<br />
                <strong>{c[43]}</strong> {c[44]}<br />
                <strong>{c[45]}</strong> {c[46]}<br />
                <strong>{c[47]}</strong> {c[48]}<br />
                <strong>{c[49]}</strong> {c[50]}<br />
                <strong>{c[51]}</strong> {c[52]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[53]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/ligy-energia')}`} variant="secondary">
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
