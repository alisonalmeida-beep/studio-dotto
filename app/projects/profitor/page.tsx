'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function Profitor() {
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

      {/* IMAGE HERO */}
      <div className="video-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${BP}/projects/profitor/1-profitor.png`} alt="Profitor" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            <h1 className="project-title">Profitor</h1>
          </div>
        </div>

        {/* SOBRE + DESAFIO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Sobre</span>
              <p className="section-text">
                Profitor é uma empresa brasileira especializada em investimento e criptoativos. Segurança, transparência, conhecimento e excelência são valores centrais.
              </p>
            </div>
            <div>
              <span className="section-label">Desafio &amp; Solução</span>
              <p className="section-text">
                A empresa precisava desenvolver uma marca a fim de se posicionar e se inserir no mercado digital. Com isso, oferecemos a solução completa contendo Identidade Visual, desenvolvimento de Website, Interface do Usuário e design de Experiência do Usuário.
              </p>
              <p className="section-text">
                Buscamos desenvolver algo clean que tivesse uma experiência limpa e objetiva.
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/2-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/3-profitor.gif`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/4-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/5-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/6-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/7-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/8-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/9-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/10-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/11-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/12-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/13-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/14-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/15-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/profitor/16-profitor.png`} alt="Profitor" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">Créditos</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>Direção:</strong> Mateus Seifert<br />
                <strong>Design:</strong> Mateus Seifert<br />
                <strong>Apresentação:</strong> Alison Almeida
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">Lunes</div>
          </div>
          <Button href={`${BP}/projects/lunes`} variant="secondary">
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
