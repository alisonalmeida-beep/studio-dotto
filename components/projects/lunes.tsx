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

export default function Lunes({ c }: { c: string[] }) {
  const { locale, t } = useI18n();
  const A = (section: number, n: number) => fmt(t.projects.imageAlt, { name: "Lunes", section: c[section].toLowerCase(), n });
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
        <Image src={`${BP}/projects/lunes/1-lunes.jpg`} alt={fmt(t.projects.heroAlt, { name: "Lunes" })} width={1400} height={785} sizes="100vw" priority style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">{c[6]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/2-lunes.jpg`} alt={A(6, 1)} width={1400} height={796} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/3-lunes.jpg`} alt={A(6, 2)} width={1400} height={386} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/4-lunes.mp4" width={1400} height={788} label={A(6, 3)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/5-lunes.mp4" width={1400} height={788} label={A(6, 4)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/6-lunes.mp4" width={1400} height={788} label={A(6, 5)} className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/7-lunes.mp4" width={1400} height={788} label={A(6, 6)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/8-lunes.jpg`} alt={A(6, 7)} width={1400} height={1005} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/9-lunes.jpg`} alt={A(6, 8)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* LOGOTIPO + CORES */}
        <div className="section reveal" id="sec-logo">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[7]}</span>
              <p className="section-text">
                {c[8]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[9]}</span>
              <p className="section-text">
                {c[10]}
              </p>
            </div>
          </div>
        </div>

        <div className="section reveal">
          <div className="image-full">
            <LazyVideo src="/projects/lunes/10-lunes.mp4" width={1400} height={788} label={A(9, 1)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/11-lunes.jpg`} alt={A(9, 2)} width={1400} height={1013} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/12-lunes.mp4" width={1400} height={788} label={A(9, 3)} className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/13-lunes.jpg`} alt={A(9, 4)} width={1400} height={904} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <LazyVideo src="/projects/lunes/14-lunes.mp4" width={1400} height={774} label={A(9, 5)} className="project-img" />
          </div>
        </div>

        {/* TIPOGRAFIA + ILUSTRAÇÕES */}
        <div className="section reveal" id="sec-tipo">
          <div className="section-grid">
            <div>
              <span className="section-label">{c[11]}</span>
              <p className="section-text">
                {c[12]}
              </p>
            </div>
            <div>
              <span className="section-label">{c[13]}</span>
              <p className="section-text">
                {c[14]}
              </p>
            </div>
          </div>
        </div>

        <div className="section reveal">
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/15-lunes.jpg`} alt={A(13, 1)} width={1400} height={917} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/16-lunes.jpg`} alt={A(13, 2)} width={1400} height={933} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/17-lunes.jpg`} alt={A(13, 3)} width={1400} height={869} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* ÍCONES */}
        <div className="section reveal" id="sec-icones">
          <span className="section-label">{c[15]}</span>
          <p className="section-text">
            {c[16]}
          </p>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/18-lunes.jpg`} alt={c[28]} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/19-lunes.jpg`} alt={c[29]} width={1400} height={933} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/20-lunes.jpg`} alt={c[30]} width={1400} height={828} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">{c[17]}</span>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/21-lunes.jpg`} alt={A(17, 1)} width={1400} height={828} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/22-lunes.jpg`} alt={A(17, 2)} width={1400} height={828} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/23-lunes.jpg`} alt={A(17, 3)} width={1400} height={828} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/24-lunes.jpg`} alt={A(17, 4)} width={1400} height={933} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/25-lunes.jpg`} alt={A(17, 5)} width={1400} height={812} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/26-lunes.jpg`} alt={A(17, 6)} width={1400} height={812} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/27-lunes.jpg`} alt={A(17, 7)} width={1400} height={869} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/28-lunes.jpg`} alt={A(17, 8)} width={1400} height={788} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/29-lunes.jpg`} alt={A(17, 9)} width={1400} height={828} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
          <div className="image-full">
            <Image src={`${BP}/projects/lunes/30-lunes.jpg`} alt={A(17, 10)} width={1400} height={860} sizes="(max-width: 1600px) 100vw, 1600px" className="project-img" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">{c[18]}</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>{c[19]}</strong> {c[20]}<br />
                <strong>{c[21]}</strong> {c[22]}<br />
                <strong>{c[23]}</strong> {c[24]}<br />
                <strong>{c[25]}</strong> {c[26]}
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">{t.common.nextProject}</div>
            <div className="next-title">{c[27]}</div>
          </div>
          <Button href={`${BP}${localePath(locale, '/projects/unikos')}`} variant="secondary">
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
