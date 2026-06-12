'use client';

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const contatoWrap = document.querySelector('.contato-wrap') as HTMLElement | null;
    if (contatoWrap) {
      const onEnter = () => {
        contatoWrap.style.backgroundImage = `radial-gradient(circle 280px at 50% 50%, rgba(255,123,0,0.12) 0%, transparent 100%)`;
      };
      const onMove = (e: MouseEvent) => {
        const rect = contatoWrap.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        contatoWrap.style.backgroundImage = `radial-gradient(circle 280px at ${x}% ${y}%, rgba(255,123,0,0.12) 0%, transparent 100%)`;
      };
      const onLeave = () => {
        contatoWrap.style.backgroundImage = 'none';
      };
      contatoWrap.addEventListener('mouseenter', onEnter);
      contatoWrap.addEventListener('mousemove', onMove);
      contatoWrap.addEventListener('mouseleave', onLeave);
      return () => {
        contatoWrap.removeEventListener('mouseenter', onEnter);
        contatoWrap.removeEventListener('mousemove', onMove);
        contatoWrap.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  return (
    <section id="contato">
      <div className="section-inner">
        <div className="contato-wrap reveal">
          <svg className="contato-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="24" r="13" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="32" cy="24" r="13" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <div className="contato-bottom">
            <div>
              <span className="section-label">Contato</span>
              <h2 className="contato-title">Vamos criar seu<br />próximo grande projeto.</h2>
            </div>
            <a href="https://calendly.com/alisonalmeidadsn/30min" target="_blank" rel="noopener noreferrer" className="contato-cta">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              Marcar reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
