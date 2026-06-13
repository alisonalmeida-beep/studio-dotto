'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function EscritorioInteligente() {
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
          <source src={`${BP}/projects/escritorio-inteligente/motion-board-escritorio-inteligente.mp4`} type="video/mp4" />
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
            <h1 className="project-title">Escritório<br />Inteligente</h1>
          </div>
        </div>

        {/* DESAFIO + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Desafio</span>
              <p className="section-text">
                Transformar a marca do Escritório Inteligente em uma marca moderna e poderosa, com uma estética que capture principalmente seu público-alvo.
                <br /><br />
                O Escritório Inteligente nasceu de um propósito claro: transformar, capacitar e dar protagonismo à profissão contábil. Por meio de sua metodologia, consegue converter um grande volume de trabalho operacional em dados estratégicos para que os contadores possam interpretá-los.
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo</span>
              <p className="section-text">
                Atualizar a identidade visual e verbal da marca para que seja consistente em sua comunicação e essência.
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/logo-concept-escritorio-inteligente.gif`} alt="Logo Concept" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/logo-reveal.gif`} alt="Logo Reveal" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/before-after-escritorio-inteligente.gif`} alt="Before &amp; After" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">Plataforma de Marca</span>
              <p className="section-text">
                <strong>Por que existimos? (Propósito)</strong><br />
                Transformar e capacitar a profissão contábil por meio do nosso método e, claro, reforçando nossa cultura de colaboração e desenvolvimento contínuo.
                <br /><br />
                <strong>Como nos comportamos? (Personalidade)</strong><br />
                Somos muito atenciosos e focados nos objetivos propostos.<br />
                Somos sonhadores, acreditando na mudança e na evolução de pessoas e processos.
                <br /><br />
                <strong>No que acreditamos? (Valores)</strong><br />
                Empatia como chave nas relações com pessoas.<br />
                Paixão em resolver por meio dos nossos processos.<br />
                Inovação na tecnologia com simplicidade.
                <br /><br />
                <strong>O que entregamos? (Posicionamento)</strong><br />
                Convertemos qualquer sistema financeiro em contabilidade, capacitando os contadores a se tornarem protagonistas como consultores e gestores dos dados da plataforma.
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz &amp; Taglines</span>
              <p className="section-text">
                <strong>Para tomadores de decisão (empresas)</strong><br />
                Transmitir seriedade sem perder a essência moderna da marca, com um tom gentil.
                <br /><br />
                <strong>Para profissionais contábeis</strong><br />
                Linguagem mais descontraída, fazendo-os se sentirem acolhidos pelo EI e construindo uma relação de confiança. Tom mais energético.
                <br /><br />
                <strong>Para colaboradores</strong><br />
                Linguagem casual, sempre reforçando o propósito da empresa e aprofundando os laços emocionais. Tom próximo e acolhedor.
                <br /><br />
                <strong>Taglines</strong><br />
                A inteligência da tecnologia na contabilidade.<br />
                Torne sua contabilidade inteligente (principal).<br />
                Juntos, transformando sua contabilidade.<br />
                Contando com inteligência.
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/mockup-bag-escritorio-inteligente.gif`} alt="Mockup Bag" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/business-card-escritorio-inteligente.png`} alt="Business Card" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/mockup-notebook-escritorio-inteligente.gif`} alt="Mockup Notebook" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/social-escritorio-inteligente.jpg`} alt="Social" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/social-media-escritorio-inteligente.gif`} alt="Social Media" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/mockup-site-escritorio-inteligente.jpg`} alt="Mockup Site" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/mockup-shirt-escritorio-inteligente.png`} alt="Mockup Shirt" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/site-ipad-escritorio-inteligente.jpg`} alt="Site iPad" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/dash-motion-escritorio-inteligente.gif`} alt="Dash Motion" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/website-motion-escritorio-inteligente.gif`} alt="Website Motion" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/ei-portal-escritorio-inteligente.png`} alt="EI Portal" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/mockup-metro-escritorio-inteligente.png`} alt="Mockup Metro" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/escritorio-inteligente/gallery-photos-escritorio-inteligente.png`} alt="Gallery Photos" className="project-img" loading="lazy" />
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
                <strong>Cliente:</strong> Escritório Inteligente
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">Trinkery</div>
          </div>
          <Button href={`${BP}/projects/trinkery`} variant="secondary">
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
