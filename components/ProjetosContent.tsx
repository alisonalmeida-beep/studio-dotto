'use client';

import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Image from 'next/image';
import BP from '@/lib/basePath';
import LazyVideo from '@/components/LazyVideo';
import Button from '@/components/Button';
import Contact from '@/components/Contact';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useI18n } from '@/components/LocaleProvider';
import { localePath } from '@/lib/i18n/routes';
import { fmt } from '@/lib/i18n/format';

type Tag = 'all' | 'branding' | 'identity' | 'websites';

const TABS: Tag[] = ['all', 'branding', 'identity', 'websites'];

type Project = {
  slug: string;
  label: string;
  cover: string;
  hover: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  { slug: 'escritorio-inteligente', label: 'Escritório Inteligente', cover: 'cover-escritorio-inteligente.png', hover: 'logo-reveal.gif', tags: ['branding', 'identity'] },
  { slug: 'trinkery',               label: 'Trinkery',               cover: '6-bag-mockup.png',                hover: '4-showcase-1080p.mp4', tags: ['branding', 'identity'] },
  { slug: 'dcvmn',                  label: 'DCVMN',                  cover: 'cover-dcvmn.png',                 hover: '5-logo-reveal-dcvmn.gif', tags: ['branding', 'identity'] },
  { slug: 'ligy-energia',           label: 'Ligy Energia',           cover: 'cover-ligy-energia.png',          hover: '4-ligy.gif', tags: ['branding', 'identity'] },
  { slug: 'profitor',               label: 'Profitor',               cover: '12-profitor.png',                 hover: '3-profitor.gif', tags: ['identity'] },
  { slug: 'lunes',                  label: 'Lunes',                  cover: '18-lunes.jpg',                    hover: '4-lunes.gif', tags: ['identity'] },
  { slug: 'colin',                  label: 'Colin',                  cover: '1-colin.jpg',                     hover: '2-colin.gif', tags: ['identity'] },
  { slug: 'clave',                  label: 'Clave',                  cover: '10-clave.jpg',                    hover: '2-clave.gif', tags: ['identity'] },
  { slug: 'unikos',                 label: 'Unikos',                 cover: '11-unikos.jpg',                   hover: '21-unikos.mp4', tags: ['branding', 'identity'] },
];

const COVER_DIMS: Record<string, [number, number]> = {
  'escritorio-inteligente': [1872, 1219],
  'trinkery': [1920, 1280],
  'dcvmn': [1920, 1280],
  'ligy-energia': [1920, 1280],
  'profitor': [2880, 1621],
  'lunes': [1400, 788],
  'colin': [1400, 887],
  'clave': [1400, 788],
  'unikos': [1400, 788],
};

export default function Projetos() {
  const { locale, t } = useI18n();
  const [activeTab, setActiveTab] = useState<Tag>('all');

  const showEmpty = activeTab === 'websites';
  const filtered = showEmpty
    ? []
    : activeTab === 'all'
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

  return (
    <>
      <div className="project-nav">
        <a href={`${BP}${localePath(locale, '/')}`} className="nav-back" aria-label={t.common.back}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="nav-back-label">{t.common.back}</span>
        </a>
        <div className="project-nav-right">
          <LanguageSwitch />
          <Button href="https://calendly.com/alisonalmeidadsn/30min" target="_blank" rel="noopener noreferrer" variant="cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {t.common.bookCall}
          </Button>
        </div>
      </div>

      <main className="content">
        <div className="divider"></div>
        <div className="project-header" style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: '1.5rem' }}>
          <div>
            <span className="section-label">{t.portfolio.label}</span>
            <h1 className="project-title">{t.portfolio.title}</h1>
          </div>
        </div>

        <div className="projetos-tabs" role="tablist" aria-label={t.portfolio.filterLabel}>
          {TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`projetos-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {t.portfolio.tabs[tab]}
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
            <p className="projetos-empty-title">{t.portfolio.emptyTitle}</p>
            <p className="projetos-empty-sub">{t.portfolio.emptySub}</p>
          </div>
        ) : (
          <div className="projetos-grid" role="tabpanel">
            {filtered.map(project => (
              <a
                key={project.slug}
                href={`${BP}${localePath(locale, `/projects/${project.slug}`)}`}
                className="projeto-card"
                id={`proj-${project.slug}`}
              >
                <div className="projeto-thumb-wrap">
                  <Image
                    src={`${BP}/projects/${project.slug}/${project.cover}`}
                    alt={fmt(t.projects.coverAlt, { name: project.label })}
                    width={COVER_DIMS[project.slug][0]}
                    height={COVER_DIMS[project.slug][1]}
                    sizes="(max-width: 900px) 100vw, 480px"
                    className="projeto-thumb"
                  />
                  <LazyVideo
                    src={`/projects/${project.slug}/${project.hover.replace(/\.gif$/, '.mp4')}`}
                    width={1600}
                    height={1000}
                    label=""
                    className="projeto-thumb-hover"
                    playOnHover
                  />
                  <div className="projeto-thumb-overlay"><span>{t.common.viewProject}</span></div>
                </div>
                <h3 className="projeto-card-label">{project.label}</h3>
              </a>
            ))}
          </div>
        )}
      </main>

      <div className="divider" style={{ margin: 0 }} />
      <Contact />
      <Footer />
    </>
  );
}
