'use client';

import { useEffect } from 'react';
import BP from '@/lib/basePath';

export default function Nav() {
  useEffect(() => {
    const navCta = document.getElementById('navCta');
    const navSocials = document.getElementById('navSocials');
    const heroEl = document.querySelector('.hero');
    const backToTop = document.getElementById('backToTop');

    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (navCta) navCta.classList.remove('visible');
          if (navSocials) navSocials.classList.remove('hidden');
          if (backToTop) backToTop.classList.remove('visible');
        } else {
          if (navCta) navCta.classList.add('visible');
          if (navSocials) navSocials.classList.add('hidden');
          if (backToTop) backToTop.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (heroEl) heroObserver.observe(heroEl);

    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-center a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    const sections = [
      { id: 'home', el: document.querySelector('.hero') as Element | null },
      { id: 'sobre', el: document.getElementById('sobre') },
      { id: 'projetos', el: document.getElementById('projetos') },
      { id: 'contato', el: document.getElementById('contato') },
    ];

    const navMap: Record<string, Element | null> = {
      'home': document.querySelector('.nav-center a[data-nav="home"]'),
      'sobre': document.querySelector('.nav-center a[href="#sobre"]'),
      'projetos': document.querySelector('.nav-center a[href="#projetos"]'),
      'contato': document.querySelector('.nav-center a[href="#contato"]'),
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const matched = sections.find(s => s.el === entry.target);
          if (matched) {
            navLinks.forEach(l => l.classList.remove('active'));
            if (navMap[matched.id]) (navMap[matched.id] as HTMLElement).classList.add('active');
          }
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => { if (s.el) sectionObserver.observe(s.el); });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <nav>
      <div className="nav-left">
        <a href={`${BP}/`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BP}/assets/logotype/logo-symbol.svg`} alt="Studio Dotto" className="nav-left-logo" width={24} height={24} />
        </a>
      </div>

      <div className="nav-center">
        <a href={`${BP}/`} data-nav="home" className="active">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>

      <div className="nav-right">
        <div className="nav-socials" id="navSocials">
          <a href="https://www.instagram.com/oalisonorsi/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/oalisonalmeida/" target="_blank" rel="noopener noreferrer" className="nav-social" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
        <a href="https://calendly.com/alisonalmeidadsn/30min" target="_blank" rel="noopener noreferrer" className="nav-cta" id="navCta">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Marcar reunião
        </a>
        <button
          className="nav-hamburger"
          aria-label="Menu"
          onClick={() => {
            document.getElementById('mobileMenu')?.classList.add('open');
            document.body.style.overflow = 'hidden';
          }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
