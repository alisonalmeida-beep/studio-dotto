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

        {/* SOBRE + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Sobre</span>
              <p className="section-text">
                A DCVMN (Rede de Fabricantes de Vacinas de Países em Desenvolvimento) é uma aliança de 42 fabricantes de vacinas de 15 países em desenvolvimento.
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo</span>
              <p className="section-text">
                A DCVMN está passando por uma transformação de logo e identidade de marca para fazer uma declaração poderosa. Com foco em colaboração e inovação, sua missão é garantir a disponibilidade de vacinas de alta qualidade em países emergentes, protegendo a saúde das pessoas em todo o mundo.
              </p>
              <p className="section-text">
                O objetivo principal é comunicar de forma eficaz o papel da DCVMN na proteção das pessoas de maneira simples e acessível. O projeto busca transmitir a combinação perfeita de proteção, colaboração e inovação.
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
                <strong>Por que existo? (Propósito)</strong><br />
                O propósito de marca da DCVMN é garantir a disponibilidade de vacinas de alta qualidade em países em desenvolvimento, protegendo a saúde das pessoas em todo o mundo.
              </p>
              <p className="section-text">
                <strong>Como me comporto? (Personalidade)</strong><br />
                Confiável, responsável e inovadora. Abordagem colaborativa, impulsionando mudanças positivas. Responsiva, focada no cliente e adaptável.
              </p>
              <p className="section-text">
                <strong>No que acredito? (Valores)</strong><br />
                1. Compromisso com a saúde pública e a proteção dos indivíduos.<br />
                2. Colaboração e parceria para impulsionar inovação e crescimento.<br />
                3. Qualidade e excelência na produção de vacinas.<br />
                4. Responsabilidade social e ambiental.<br />
                5. Foco na equidade e acessibilidade de vacinas em países em desenvolvimento.
              </p>
              <p className="section-text">
                <strong>O que entrego? (Posicionamento)</strong><br />
                A DCVMN trabalha para aumentar a disponibilidade de vacinas de alta qualidade em países em desenvolvimento, protegendo a saúde das pessoas em todo o mundo.
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz</span>
              <p className="section-text">
                Moderno, neutro, simples e direto.
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>Taglines</span>
              <p className="section-text">
                We innovate, to Protect.<br />
                We work together to Protect.<br />
                We provide knowledge to Protect.<br />
                We develop to Protect.<br />
                We support to Protect.<br />
                Everything we do is to protect.<br />
                DCVMN. We Connect to Protect.
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
                <strong>Direção de Branding:</strong> Diego Mourão<br />
                <strong>Estratégia de Marca:</strong> Diego Mourão<br />
                <strong>Design de Logo e Direção de Arte:</strong> Diego Mourão &amp; Felipe Otto<br />
                <strong>Direção de Arte do Case:</strong> Klayton Fadul &amp; Alison Almeida<br />
                <strong>Copywriting do Case:</strong> Joyce Lima<br />
                <strong>Motion:</strong> Klayton Fadul<br />
                <strong>Cliente:</strong> DCVMN
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
