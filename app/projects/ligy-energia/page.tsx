'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function LigyEnergia() {
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
          <source src={`${BP}/projects/ligy-energia/1-video-concept-01-Ligy-1080p.mp4`} type="video/mp4" />
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
            <h1 className="project-title">Ligy Energia</h1>
          </div>
        </div>

        {/* SOBRE + OBJETIVO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Sobre</span>
              <p className="section-text">
                A Ligy é uma empresa disruptiva que busca ser a nova opção no consumo de energia. Com foco em energias renováveis e liberdade de escolha, o principal objetivo da empresa é facilitar o acesso a diferentes fontes de energia, permitindo que seus clientes façam suas próprias escolhas.
              </p>
              <p className="section-text">
                Queríamos um nome fácil e curto que fizesse sentido para a marca. Assim surgiu Ligy, de Liberty + Energy.
              </p>
            </div>
            <div>
              <span className="section-label">Objetivo &amp; Estratégia</span>
              <p className="section-text">
                Desenvolver uma marca atemporal com personalidade que possa ser internacionalizada no futuro.
              </p>
              <p className="section-text">
                Por meio da análise de mercado, buscamos nos diferenciar não apenas pelo nosso serviço inovador, mas também pela nossa identidade visual e verbal.
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/2-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/3-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/4-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            <video autoPlay loop muted playsInline disablePictureInPicture style={{ width: '100%', display: 'block' }}>
              <source src={`${BP}/projects/ligy-energia/5-video-concept-02-Ligy-1080p.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/6-ligy.png`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* BRAND PLATFORM */}
        <div className="section reveal" id="sec-plataforma">
          <div className="section-grid">
            <div>
              <span className="section-label">Plataforma de Marca</span>
              <p className="section-text">
                <strong>Por que existo? (Propósito)</strong><br />
                Facilitamos o acesso à energia limpa. Somos o clube dos libertadores de energia. Aceleramos a liberdade de escolha no mercado de energia, para que você possa decidir como consumi-la.
              </p>
              <p className="section-text">
                <strong>Como me comporto? (Personalidade)</strong><br />
                Quero tornar o mundo melhor. Gosto de ajudar as pessoas. Sempre em busca de uma vida melhor.
              </p>
              <p className="section-text">
                <strong>No que acredito? (Valores)</strong><br />
                Sustentabilidade. Liberdade. Simplicidade. Economia.
              </p>
              <p className="section-text">
                <strong>O que entrego? (Posicionamento)</strong><br />
                Facilito o acesso a diferentes fontes de energia, habilitando e potencializando as escolhas dos meus clientes.
              </p>
            </div>
            <div>
              <span className="section-label">Tom de Voz</span>
              <p className="section-text">
                Moderno, neutro, simples e direto.
              </p>
              <span className="section-label" style={{ marginTop: '2rem', display: 'block' }}>Taglines</span>
              <p className="section-text">
                Ligy — A sua liberdade de energia chegou.<br />
                Ligy — Energia limpa, consciente e sustentável para um futuro melhor.<br />
                Ligy — Escolha a sua energia.
              </p>
            </div>
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/7-ligy.jpg`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/8-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/9-ligy.jpg`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/10-ligy.jpg`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/11-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/12-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/13-ligy.jpg`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/14-ligy.png`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/15-ligy.jpg`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/16-ligy.png`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/17-ligy.png`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/ligy-energia/18-ligy.gif`} alt="Ligy" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">Créditos</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>Direção de Design:</strong> Diego Mourão<br />
                <strong>Naming &amp; Estratégia de Marca:</strong> Diego Mourão<br />
                <strong>Design de Logo e Direção de Arte:</strong> Diego Mourão, Felipe Otto &amp; Klayton Fadul<br />
                <strong>Direção de Arte do Case:</strong> Klayton Fadul &amp; Alison Almeida<br />
                <strong>Copywriting do Case:</strong> Joyce Lima<br />
                <strong>Motion:</strong> Klayton Fadul<br />
                <strong>Cliente:</strong> Ligy Energia
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">Profitor</div>
          </div>
          <Button href={`${BP}/projects/profitor`} variant="secondary">
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
