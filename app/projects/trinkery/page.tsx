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

        {/* ORIGEM + DESAFIO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Origem</span>
              <p className="section-text">
                A Trinkery nasceu do hobby do Rogério, que colocou muita emoção na criação de suas impressoras 3D. Ele viu ali uma oportunidade de negócio viável. Unindo a sustentabilidade das matérias-primas ao design único, a Trinkery ganhou vida como uma plataforma de e-commerce focada na venda de produtos exclusivos.
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo</span>
              <p className="section-text">
                A grande ideia é tornar esses produtos acessíveis para quem não está imerso no nicho de impressão 3D. Produzindo diretamente para o consumidor final, que muitas vezes não tem tanto interesse no processo de produção (impressão 3D) quanto no produto final.
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
                <strong>Por que existo? (Propósito)</strong><br />
                Conectar pessoas a um mundo sustentável, personalizável e criativo de produtos impressos em 3D.
              </p>
              <p className="section-text">
                <strong>Como me comporto? (Personalidade)</strong><br />
                Sou carismática. Sou divertida. Sou comunicativa.
              </p>
              <p className="section-text">
                <strong>No que acredito? (Valores)</strong><br />
                Sempre priorizar a diversão. Guiada pela criatividade. Promover o pensamento sustentável.
              </p>
              <p className="section-text">
                <strong>O que entrego? (Posicionamento)</strong><br />
                Produtos únicos e personalizados que são incrivelmente criativos e transmitem a essência divertida da marca.
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz</span>
              <p className="section-text">
                Casual, amigável e entusiasmado. A linguagem é acessível e próxima do público, transmitindo uma atmosfera divertida e envolvente. A Trinkery visa se comunicar de forma alegre e cativante, refletindo seu posicionamento como uma marca que oferece produtos únicos e personalizados com um toque de diversão.
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>Taglines</span>
              <p className="section-text">
                All the good trinkets<br />
                Have fun with us (and don&apos;t forget our products!)<br />
                Saving you from this boring world<br />
                Release your funniness
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
                <strong>Direção de Branding:</strong> Diego Mourão<br />
                <strong>Estratégia de Marca:</strong> Joyce Lima<br />
                <strong>Design de Logo e Direção de Arte:</strong> Klayton Fadul<br />
                <strong>Direção de Arte do Case:</strong> Alison Almeida &amp; Klayton Fadul<br />
                <strong>Copywriting do Case:</strong> Joyce Lima<br />
                <strong>Motion:</strong> Klayton Fadul<br />
                <strong>Cliente:</strong> Trinkery
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
