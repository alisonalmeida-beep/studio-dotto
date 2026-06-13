'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function Dcvmn() {
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
          <source src={`${BP}/projects/dcvmn/1-video-concept-03-1080p.mp4`} type="video/mp4" />
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
            <h1 className="project-title">DCVMN</h1>
          </div>
        </div>

        {/* DESAFIO + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Desafio</span>
              <p className="section-text">
                [Descreva aqui o desafio do projeto DCVMN.]
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo</span>
              <p className="section-text">
                [Descreva aqui o objetivo do projeto DCVMN.]
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/2-before-after-dcvmn.gif`} alt="Before & After" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/3-grid-logo-dcvmn.png`} alt="Grid Logo" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/4-color-pallet-dcvmn.png`} alt="Color Palette" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/5-logo-reveal-dcvmn.gif`} alt="Logo Reveal" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/6-logo-concept.gif`} alt="Logo Concept" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/7-brand-board-dcvmn.jpg`} alt="Brand Board" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">Plataforma de Marca</span>
              <p className="section-text">
                [Adicione aqui a plataforma de marca da DCVMN: propósito, personalidade, valores e posicionamento.]
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz &amp; Taglines</span>
              <p className="section-text">
                [Adicione aqui o tom de voz e as taglines da DCVMN.]
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/8-notebook-mockup-dcvmn.jpg`} alt="Notebook Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/9-id-card-dcvmn.png`} alt="ID Card" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/10-book-mockup-dcvmn.jpg`} alt="Book Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/11-stationary-dcvmn.jpg`} alt="Stationary" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/12-graphism-dcvmn.gif`} alt="Graphism" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/13-photo-1-dcvmn.png`} alt="Photo 1" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/14-stationary-2-dcvmn.jpg`} alt="Stationary 2" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/15-photo-2-dcvmn.png`} alt="Photo 2" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/16-graphism-2-dcvmn.gif`} alt="Graphism 2" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/dcvmn/17-video-dcvmn-tagline-01-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/18-photo-3-dcvmn.png`} alt="Photo 3" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/19-graphism-dcvmn-tagline.gif`} alt="Graphism Tagline" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/20-gallery-1-dcvmn.png`} alt="Gallery 1" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/21-gallery-2-dcvmn.png`} alt="Gallery 2" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/22-gallery-3-dcvmn.png`} alt="Gallery 3" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/23-gallery-4-dcvmn.png`} alt="Gallery 4" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/24-outdoor-mockup-dcvmn.png`} alt="Outdoor Mockup" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/25-poster-dcvmn.png`} alt="Poster" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/dcvmn/25-poster-outdoor-dcvmn.png`} alt="Poster Outdoor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/dcvmn/26-urban-digital-billboard-mockup-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">Créditos</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                [Adicione aqui os créditos do projeto DCVMN.]
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">Ligy Energia</div>
          </div>
          <Button href={`${BP}/projects/ligy-energia`} variant="secondary">
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
