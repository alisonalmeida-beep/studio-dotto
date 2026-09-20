'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import BP from '@/lib/basePath';
import LazyVideo from './LazyVideo';
import { useI18n } from './LocaleProvider';
import { localePath } from '@/lib/i18n/routes';
import { fmt } from '@/lib/i18n/format';
import Button from './Button';

export default function Projects() {
  const { locale, t } = useI18n();
  useEffect(() => {
    const el = document.getElementById('projetosCarousel');
    const prevBtn = document.getElementById('carouselPrev') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('carouselNext') as HTMLButtonElement | null;
    if (!el) return;

    let down = false, startX = 0, scrollStart = 0;
    let velX = 0, lastX = 0, lastT = 0, rafId: number | null = null;

    function cancelRaf() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

    function momentum() {
      velX *= 0.94;
      el!.scrollLeft += velX;
      updateButtons();
      if (Math.abs(velX) > 0.4) rafId = requestAnimationFrame(momentum);
      else rafId = null;
    }

    let dragged = false;

    function onMouseDown(e: MouseEvent) {
      e.preventDefault();
      cancelRaf();
      down = true; dragged = false; velX = 0;
      startX = e.pageX; scrollStart = el!.scrollLeft;
      lastX = e.pageX; lastT = performance.now();
    }

    function onMouseUp() {
      if (!down) return;
      down = false;
      if (dragged) {
        setTimeout(() => el!.classList.remove('is-dragging'), 150);
      } else {
        el!.classList.remove('is-dragging');
      }
      if (Math.abs(velX) > 0.5) rafId = requestAnimationFrame(momentum);
    }

    function onClickCapture(e: MouseEvent) {
      if (dragged) e.preventDefault();
    }

    function onDragStart(e: DragEvent) {
      e.preventDefault();
    }

    function onMouseMove(e: MouseEvent) {
      if (!down) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) {
        dragged = true;
        el!.classList.add('is-dragging');
      }
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) {
        const instant = (lastX - e.pageX) / dt * 14;
        velX = velX * 0.6 + instant * 0.4;
      }
      lastX = e.pageX; lastT = now;
      el!.scrollLeft = scrollStart - dx;
      updateButtons();
    }

    function scrollTo(target: number) {
      cancelRaf();
      const start = el!.scrollLeft;
      const dist = target - start;
      const t0 = performance.now();
      const dur = 420;
      function step(t: number) {
        const p = Math.min((t - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el!.scrollLeft = start + dist * ease;
        updateButtons();
        if (p < 1) rafId = requestAnimationFrame(step);
        else rafId = null;
      }
      rafId = requestAnimationFrame(step);
    }

    function cardWidth() {
      const c = el!.querySelector('.projeto-card') as HTMLElement | null;
      return c ? c.offsetWidth + 12 : 400;
    }

    function onPrevClick() { scrollTo(el!.scrollLeft - cardWidth()); }
    function onNextClick() { scrollTo(el!.scrollLeft + cardWidth()); }

    function updateButtons() {
      if (!prevBtn || !nextBtn) return;
      prevBtn.disabled = el!.scrollLeft <= 0;
      nextBtn.disabled = el!.scrollLeft >= el!.scrollWidth - el!.clientWidth - 2;
    }

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('dragstart', onDragStart);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    if (prevBtn) prevBtn.addEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.addEventListener('click', onNextClick);
    el.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('dragstart', onDragStart);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
      el.removeEventListener('scroll', updateButtons);
    };
  }, []);

  return (
    <section id="projetos">
      <div className="section-inner">
        <div className="reveal">
          <div className="projetos-header">
            <div><span className="section-label">{t.projects.label}</span></div>
            <div className="carousel-nav">
              <Button variant="secondary" className="carousel-btn" id="carouselPrev" aria-label={t.projects.prev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </Button>
              <Button variant="secondary" className="carousel-btn" id="carouselNext" aria-label={t.projects.next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="projetos-carousel-outer reveal">
        <div className="projetos-carousel" id="projetosCarousel">

          <a href={`${BP}${localePath(locale, '/projects/escritorio-inteligente')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/escritorio-inteligente/cover-escritorio-inteligente.png`} alt={fmt(t.projects.coverAlt, { name: 'Escritório Inteligente' })} width={1872} height={1219} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/escritorio-inteligente/logo-reveal.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Escritório Inteligente</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/trinkery')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/trinkery/6-bag-mockup.png`} alt={fmt(t.projects.coverAlt, { name: 'Trinkery' })} width={1920} height={1280} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/trinkery/4-showcase-1080p.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Trinkery</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/dcvmn')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/dcvmn/cover-dcvmn.png`} alt={fmt(t.projects.coverAlt, { name: 'DCVMN' })} width={1920} height={1280} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/dcvmn/5-logo-reveal-dcvmn.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">DCVMN</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/ligy-energia')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/ligy-energia/cover-ligy-energia.png`} alt={fmt(t.projects.coverAlt, { name: 'Ligy Energia' })} width={1920} height={1280} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/ligy-energia/4-ligy.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Ligy Energia</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/profitor')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/profitor/12-profitor.png`} alt={fmt(t.projects.coverAlt, { name: 'Profitor' })} width={2880} height={1621} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/profitor/3-profitor.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Profitor</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/lunes')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/lunes/18-lunes.jpg`} alt={fmt(t.projects.coverAlt, { name: 'Lunes' })} width={1400} height={788} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/lunes/4-lunes.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Lunes</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/colin')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/colin/1-colin.jpg`} alt={fmt(t.projects.coverAlt, { name: 'Colin' })} width={1400} height={887} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/colin/2-colin.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Colin</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/clave')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/clave/10-clave.jpg`} alt={fmt(t.projects.coverAlt, { name: 'Clave' })} width={1400} height={788} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/clave/2-clave.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Clave</h3>
          </a>

          <a href={`${BP}${localePath(locale, '/projects/unikos')}`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              <Image src={`${BP}/projects/unikos/11-unikos.jpg`} alt={fmt(t.projects.coverAlt, { name: 'Unikos' })} width={1400} height={788} sizes="(max-width: 900px) 80vw, 480px" className="projeto-thumb" />
              <LazyVideo src="/projects/unikos/21-unikos.mp4" width={1600} height={1000} label="" className="projeto-thumb-hover" playOnHover />
              <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
            </div>
            <h3 className="projeto-card-label">Unikos</h3>
          </a>

        </div>
      </div>
      <div className="projetos-ver-mais">
        <Button href={`${BP}${localePath(locale, '/projetos')}`} variant="secondary">
          {t.projects.viewAll}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Button>
      </div>
    </section>
  );
}
