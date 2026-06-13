'use client';

import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import BP from '@/lib/basePath';
import Button from '@/components/Button';
import Contact from '@/components/Contact';

type Tag = 'Todos' | 'Branding' | 'Identidade Visual' | 'Websites';

const TABS: Tag[] = ['Todos', 'Branding', 'Identidade Visual', 'Websites'];

type Project = {
  slug: string;
  label: string;
  cover: string;
  hover: string;
  hoverType: 'img' | 'video';
  tags: string[];
};

const PROJECTS: Project[] = [
  { slug: 'escritorio-inteligente', label: 'Escritório Inteligente', cover: 'cover-escritorio-inteligente.png', hover: 'logo-reveal.gif',          hoverType: 'img',   tags: ['Branding', 'Identidade Visual'] },
  { slug: 'trinkery',               label: 'Trinkery',               cover: '6-bag-mockup.png',                hover: '4-showcase-1080p.mp4',        hoverType: 'video', tags: ['Branding', 'Identidade Visual'] },
  { slug: 'dcvmn',                  label: 'DCVMN',                  cover: 'cover-dcvmn.png',                 hover: '5-logo-reveal-dcvmn.gif',      hoverType: 'img',   tags: ['Branding', 'Identidade Visual'] },
  { slug: 'ligy-energia',           label: 'Ligy Energia',           cover: 'cover-ligy-energia.png',          hover: '4-ligy.gif',                   hoverType: 'img',   tags: ['Branding', 'Identidade Visual'] },
  { slug: 'profitor',               label: 'Profitor',               cover: '12-profitor.png',                 hover: '3-profitor.gif',               hoverType: 'img',   tags: ['Identidade Visual'] },
  { slug: 'lunes',                  label: 'Lunes',                  cover: '18-lunes.jpg',                    hover: '4-lunes.gif',                  hoverType: 'img',   tags: ['Identidade Visual'] },
  { slug: 'colin',                  label: 'Colin',                  cover: '1-colin.jpg',                     hover: '2-colin.gif',                  hoverType: 'img',   tags: ['Identidade Visual'] },
  { slug: 'clave',                  label: 'Clave',                  cover: '10-clave.jpg',                    hover: '2-clave.gif',                  hoverType: 'img',   tags: ['Identidade Visual'] },
  { slug: 'unikos',                 label: 'Unikos',                 cover: '11-unikos.jpg',                   hover: '21-unikos.mp4',                hoverType: 'video', tags: ['Branding', 'Identidade Visual'] },
];

export default function Projetos() {
  const [activeTab, setActiveTab] = useState<Tag>('Todos');

  const showEmpty = activeTab === 'Websites';
  const filtered = showEmpty
    ? []
    : activeTab === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeTab));

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videoCards = [
      { cardId: 'proj-trinkery', videoId: 'hover-trinkery' },
      { cardId: 'proj-unikos',   videoId: 'hover-unikos'   },
    ];

    const cleanups: (() => void)[] = [];

    for (const { cardId, videoId } of videoCards) {
      const card = document.getElementById(cardId);
      const video = document.getElementById(videoId) as HTMLVideoElement | null;
      if (!card || !video) continue;

      const onEnter = () => video.play();
      const onLeave = () => { video.pause(); video.currentTime = 0; };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      });
    }

    return () => cleanups.forEach(fn => fn());
  }, [activeTab]);

  return (
    <>
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

      <div className="content">
        <div className="divider"></div>
        <div className="project-header" style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: '1.5rem' }}>
          <div>
            <span className="section-label">Portfólio</span>
            <h1 className="project-title">Todos os projetos</h1>
          </div>
        </div>

        <div className="projetos-tabs" role="tablist" aria-label="Filtrar por categoria">
          {TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`projetos-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {showEmpty ? (
          <div className="projetos-empty" role="tabpanel">
            <div className="projetos-empty-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <path d="M2 10h20"/>
              </svg>
            </div>
            <p className="projetos-empty-title">Ainda não temos projetos de websites</p>
            <p className="projetos-empty-sub">Em breve novidades por aqui.</p>
          </div>
        ) : (
          <div className="projetos-grid" role="tabpanel">
            {filtered.map(project => (
              <a
                key={project.slug}
                href={`${BP}/projects/${project.slug}`}
                className="projeto-card"
                id={`proj-${project.slug}`}
              >
                <div className="projeto-thumb-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BP}/projects/${project.slug}/${project.cover}`}
                    alt={project.label}
                    className="projeto-thumb"
                  />
                  {project.hoverType === 'video' ? (
                    <video
                      id={`hover-${project.slug}`}
                      className="projeto-thumb-hover"
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={`${BP}/projects/${project.slug}/${project.hover}`} type="video/mp4" />
                    </video>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${BP}/projects/${project.slug}/${project.hover}`}
                      alt=""
                      className="projeto-thumb-hover"
                    />
                  )}
                  <div className="projeto-thumb-overlay"><span>Ver projeto</span></div>
                </div>
                <div className="projeto-card-label">{project.label}</div>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="divider" style={{ margin: 0 }} />
      <Contact />
      <Footer />
    </>
  );
}
