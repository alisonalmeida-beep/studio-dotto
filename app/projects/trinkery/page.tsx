'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function Trinkery() {
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
        <a href={`${BP}/`} className="nav-back">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Voltar
        </a>
        <Button href="https://calendly.com/alisonalmeidadsn/30min" target="_blank" rel="noopener noreferrer" variant="cta">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Marcar reunião
        </Button>
      </div>

      {/* VIDEO HERO */}
      <div className="video-hero">
        <video autoPlay loop muted playsInline disablePictureInPicture>
          <source src={`${BP}/projects/trinkery/4-showcase-1080p.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* PROJECT CONTENT */}
      <div className="content">
        <div className="divider"></div>
        <div className="project-header reveal">
          <div>
            <div className="project-badges">
              <span className="badge">Branding</span>
              <span className="badge">Identidade Visual</span>
            </div>
            <h1 className="project-title">Trinkery</h1>
          </div>
        </div>

        {/* DESAFIO + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Desafio</span>
              <p className="section-text">
                [Descreva aqui o desafio do projeto Trinkery.]
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo</span>
              <p className="section-text">
                [Descreva aqui o objetivo do projeto Trinkery.]
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/1-brand-board.png`} alt="Brand Board" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/2-logo-concept.gif`} alt="Logo Concept" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/3-logo-process.gif`} alt="Logo Process" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/5-identity-board.jpg`} alt="Identity Board" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/16-tagline-motion.gif`} alt="Tagline Motion" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">Plataforma de Marca</span>
              <p className="section-text">
                [Adicione aqui a plataforma de marca da Trinkery: propósito, personalidade, valores e posicionamento.]
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz &amp; Taglines</span>
              <p className="section-text">
                [Adicione aqui o tom de voz e as taglines da Trinkery.]
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
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/6-bag-mockup.png`} alt="Bag Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/7-cap-mockup.png`} alt="Cap Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/8-flyers-mockup.png`} alt="Flyers Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/9-posters-mockup.jpg`} alt="Posters Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/10-tape-mockup.jpg`} alt="Tape Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/11-stories-mockup.jpg`} alt="Stories Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/12-jar-mockup.jpg`} alt="Jar Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/13-business-card-mockup.jpg`} alt="Business Card Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/15-box-mockup.jpg`} alt="Box Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/18-case-mockup.jpg`} alt="Case Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/19-checkout-mockup.jpg`} alt="Checkout Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/20-outdoor-mockup.jpg`} alt="Outdoor Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/trinkery/21-facade-mockup.jpg`} alt="Facade Mockup" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">Créditos</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                [Adicione aqui os créditos do projeto Trinkery.]
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">DCVMN</div>
          </div>
          <Button href={`${BP}/projects/dcvmn`} variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </Button>
        </div>
      </div>

      <Footer />

      <button
        className="back-to-top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Voltar ao topo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  );
}
