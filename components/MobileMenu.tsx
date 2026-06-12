'use client';

import BP from '@/lib/basePath';

export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu">
      <div className="mobile-menu-zone mobile-menu-zone-close">
        <button
          className="mobile-menu-close"
          onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
      <div className="mobile-menu-zone mobile-menu-zone-nav">
        <div className="mobile-menu-links">
          <a href={`${BP}/`} onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}>Home</a>
          <a href="#sobre" onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}>Sobre</a>
          <a href="#projetos" onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}>Projetos</a>
          <a href="#contato" onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}>Contato</a>
        </div>
      </div>
      <div className="mobile-menu-zone mobile-menu-zone-footer">
        <div className="mobile-menu-socials">
          <a href="https://www.instagram.com/oalisonorsi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/oalisonalmeida/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
      <div className="mobile-menu-zone mobile-menu-zone-cta">
        <a
          href="https://calendly.com/alisonalmeidadsn/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-cta"
          onClick={() => {
            document.getElementById('mobileMenu')?.classList.remove('open');
            document.body.style.overflow = '';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          Marcar reunião
        </a>
      </div>
    </div>
  );
}
