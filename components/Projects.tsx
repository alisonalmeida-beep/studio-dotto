'use client';

import { useEffect } from 'react';
import BP from '@/lib/basePath';

export default function Projects() {
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
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    if (prevBtn) prevBtn.addEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.addEventListener('click', onNextClick);
    el.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();

    const trinkeryCard = document.getElementById('trinkeryCard');
    const trinkeryVideo = document.getElementById('trinkeryHoverVideo') as HTMLVideoElement | null;
    function onTrinkeryEnter() { trinkeryVideo?.play(); }
    function onTrinkeryLeave() { if (trinkeryVideo) { trinkeryVideo.pause(); trinkeryVideo.currentTime = 0; } }
    trinkeryCard?.addEventListener('mouseenter', onTrinkeryEnter);
    trinkeryCard?.addEventListener('mouseleave', onTrinkeryLeave);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
      el.removeEventListener('scroll', updateButtons);
      trinkeryCard?.removeEventListener('mouseenter', onTrinkeryEnter);
      trinkeryCard?.removeEventListener('mouseleave', onTrinkeryLeave);
    };
  }, []);

  return (
    <section id="projetos">
      <div className="section-inner">
        <div className="reveal">
          <div className="projetos-header">
            <div><span className="section-label">Projetos</span></div>
            <div className="carousel-nav">
              <button className="carousel-btn" id="carouselPrev" aria-label="Anterior">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button className="carousel-btn" id="carouselNext" aria-label="Próximo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projetos-carousel-outer reveal">
        <div className="projetos-carousel" id="projetosCarousel">

          <a href={`${BP}/projects/escritorio-inteligente`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/escritorio-inteligente/cover-escritorio-inteligente.png`} alt="Escritório Inteligente" className="projeto-thumb" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/escritorio-inteligente/logo-reveal.gif`} alt="" className="projeto-thumb-hover" />
              <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
            </div>
            <div className="projeto-card-label">Escritório Inteligente</div>
          </a>

          <a href={`${BP}/projects/trinkery`} className="projeto-card" id="trinkeryCard">
            <div className="projeto-thumb-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/trinkery/6-bag-mockup.png`} alt="Trinkery" className="projeto-thumb" />
              <video
                id="trinkeryHoverVideo"
                className="projeto-thumb-hover"
                muted
                playsInline
                loop
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={`${BP}/projects/trinkery/4-showcase-1080p.mp4`} type="video/mp4" />
              </video>
              <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
            </div>
            <div className="projeto-card-label">Trinkery</div>
          </a>

          <a href={`${BP}/projects/dcvmn`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/dcvmn/cover-dcvmn.png`} alt="DCVMN" className="projeto-thumb" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/dcvmn/5-logo-reveal-dcvmn.gif`} alt="" className="projeto-thumb-hover" />
              <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
            </div>
            <div className="projeto-card-label">DCVMN</div>
          </a>

          <a href={`${BP}/projects/ligy-energia`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/ligy-energia/cover-ligy-energia.png`} alt="Ligy Energia" className="projeto-thumb" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/ligy-energia/4-ligy.gif`} alt="" className="projeto-thumb-hover" />
              <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
            </div>
            <div className="projeto-card-label">Ligy Energia</div>
          </a>

          <a href={`${BP}/projects/profitor`} className="projeto-card">
            <div className="projeto-thumb-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/profitor/12-profitor.png`} alt="Profitor" className="projeto-thumb" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/projects/profitor/3-profitor.gif`} alt="" className="projeto-thumb-hover" />
              <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
            </div>
            <div className="projeto-card-label">Profitor</div>
          </a>

          <div className="projeto-card">
            <div className="projeto-thumb-fallback"><span>PJ</span></div>
            <div className="projeto-card-label">Project Name</div>
          </div>

        </div>
      </div>
    </section>
  );
}
