'use client';

import { useEffect, useRef } from 'react';
import Button from './Button';

const R = 56;
const STIFFNESS = 0.10;
const DAMPING = 0.78;

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const cursor = cursorRef.current;
    const reveal = revealRef.current;
    if (!wrap || !cursor || !reveal) return;

    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;
    let velX = 0, velY = 0;
    let active = false;
    let rafId: number;

    function tick() {
      velX = (velX + (targetX - curX) * STIFFNESS) * DAMPING;
      velY = (velY + (targetY - curY) * STIFFNESS) * DAMPING;
      curX += velX;
      curY += velY;

      cursor!.style.transform = `translate(${curX - R}px, ${curY - R}px)`;
      reveal!.style.clipPath = `circle(${R}px at ${curX}px ${curY}px)`;

      if (active) rafId = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    }

    function onEnter(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      curX = e.clientX - rect.left;
      curY = e.clientY - rect.top;
      targetX = curX; targetY = curY;
      velX = 0; velY = 0;
      reveal!.style.clipPath = `circle(${R}px at ${curX}px ${curY}px)`;
      active = true;
      cursor!.style.opacity = '1';
      reveal!.style.opacity = '1';
      rafId = requestAnimationFrame(tick);
    }

    function onLeave() {
      active = false;
      cancelAnimationFrame(rafId);
      cursor!.style.opacity = '0';
      reveal!.style.opacity = '0';
    }

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);

    return () => {
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const titleContent = (
    <>Criando marcas com <span>significado</span><br />e experiências <span>intuitivas.</span></>
  );

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-body">
          <div className="hero-left">
            <p className="hero-left-bio">Mais de 6 anos criando marcas e produtos digitais para startups. Design com método, entregue com intenção.</p>
          </div>
          <div className="hero-title-wrap" ref={wrapRef}>
            <h1 className="hero-title">{titleContent}</h1>
            <h1 className="hero-title hero-title-reveal" ref={revealRef} aria-hidden="true">{titleContent}</h1>
            <div className="hero-cursor" ref={cursorRef} />
          </div>
        </div>
        <div className="hero-bottom">
          <span className="hero-bottom-left">Disponível para novos projetos</span>
          <div className="hero-actions">
            <Button href="#projetos" variant="primary">Ver projetos</Button>
            <Button href="https://api.whatsapp.com/send/?phone=5588994360637&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" variant="ghost">Vamos conversar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
