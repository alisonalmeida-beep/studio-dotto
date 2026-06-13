'use client';

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';

export default function Lunes() {
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
        <img src={`${BP}/projects/lunes/1-lunes.jpg`} alt="Lunes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            <h1 className="project-title">Lunes</h1>
          </div>
        </div>

        {/* SOBRE + DESAFIO */}
        <div className="section reveal" id="sec-desafio">
          <div className="section-grid">
            <div>
              <span className="section-label">Sobre</span>
              <p className="section-text">
                A Lunes é uma empresa brasileira de tecnologia baseada em blockchain que fornece serviços financeiros e de autenticidade, seu foco está na solução de problemas por meio de blockchain e moedas digitais.
              </p>
            </div>
            <div>
              <span className="section-label">Desafio</span>
              <p className="section-text">
                A maioria das pessoas enxergavam a empresa apenas como uma criptomoeda, mas a Lunes vai ainda mais longe, agora se posicionando no mercado como uma empresa de tecnologia. Precisávamos redesenhar toda a sua identidade visual.
              </p>
            </div>
          </div>
        </div>

        {/* VISUAL */}
        <div className="section reveal" id="sec-visual">
          <span className="section-label">Visual</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/2-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/3-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/4-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/5-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/6-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/7-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/8-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/9-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* LOGOTIPO + CORES */}
        <div className="section reveal" id="sec-logo">
          <div className="section-grid">
            <div>
              <span className="section-label">Logotipo</span>
              <p className="section-text">
                O logotipo atual apresentava alguns problemas, faltava exclusividade, por ser uma fonte pública. A solução foi criar um logotipo do zero que carregasse a personalidade e exclusividade da marca.
              </p>
            </div>
            <div>
              <span className="section-label">Cores</span>
              <p className="section-text">
                O roxo, juntamente com o preto e o branco, representa a riqueza e vitalidade que a marca possui. É uma cor com presença, pois a marca deseja estar presente na mente dos usuários.
              </p>
            </div>
          </div>
        </div>

        <div className="section reveal">
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/10-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/11-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/12-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/13-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/14-lunes.gif`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* TIPOGRAFIA + ILUSTRAÇÕES */}
        <div className="section reveal" id="sec-tipo">
          <div className="section-grid">
            <div>
              <span className="section-label">Tipografia</span>
              <p className="section-text">
                Space Grotesk é uma fonte moderna e amigável. Traz um ar de tecnologia e passa a confiança desejável, casando perfeitamente com a personalidade da marca.
              </p>
            </div>
            <div>
              <span className="section-label">Ilustrações</span>
              <p className="section-text">
                As ilustrações foram projetadas seguindo o estilo line-art, trazendo leveza e simplicidade, dando mais personalidade ao universo da marca.
              </p>
            </div>
          </div>
        </div>

        <div className="section reveal">
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/15-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/16-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/17-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* ÍCONES */}
        <div className="section reveal" id="sec-icones">
          <span className="section-label">Ícones</span>
          <p className="section-text">
            Foram criados ícones exclusivos, seguindo a proposta da marca, até mesmo replicando algumas características do logotipo. Para que conversassem com os demais elementos, complementando e enriquecendo o universo visual da marca.
          </p>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/18-lunes.jpg`} alt="Lunes Ícones" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/19-lunes.jpg`} alt="Lunes Ícones" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/20-lunes.jpg`} alt="Lunes Ícones" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* APLICAÇÕES */}
        <div className="section reveal" id="sec-aplicacoes">
          <span className="section-label">Aplicações</span>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/21-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/22-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/23-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/24-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/25-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/26-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/27-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/28-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/29-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
          <div className="image-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BP}/projects/lunes/30-lunes.jpg`} alt="Lunes" className="project-img" loading="lazy" />
          </div>
        </div>

        {/* CRÉDITOS */}
        <div className="section reveal" id="sec-creditos">
          <span className="section-label">Créditos</span>
          <div className="section-grid">
            <div>
              <p className="section-text">
                <strong>Cliente:</strong> Lunes<br />
                <strong>Sistema de Identidade Visual:</strong> Alison Almeida<br />
                <strong>UI Design:</strong> Tiago Diniz<br />
                <strong>Ilustrações:</strong> Leandro Alves
              </p>
            </div>
          </div>
        </div>

        {/* NEXT PROJECT */}
        <div className="next-project reveal">
          <div>
            <div className="next-label">Próximo projeto</div>
            <div className="next-title">Unikos</div>
          </div>
          <Button href={`${BP}/projects/unikos`} variant="secondary">
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
