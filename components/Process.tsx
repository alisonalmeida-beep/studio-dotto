'use client';

import { useEffect } from 'react';

const ICON_SEQUENCES: Record<string, { sel: string; dur: number; delay: number }[]> = {
  'icon-discovery': [
    { sel: '.globe-outer', dur: 500, delay: 50 },
    { sel: '.globe-e1',    dur: 500, delay: 250 },
    { sel: '.globe-e2',    dur: 500, delay: 450 },
    { sel: '.globe-line',  dur: 300, delay: 650 },
  ],
  'icon-development': [
    { sel: '.ring-4', dur: 250, delay: 50 },
    { sel: '.ring-3', dur: 350, delay: 200 },
    { sel: '.ring-2', dur: 450, delay: 350 },
    { sel: '.ring-1', dur: 550, delay: 500 },
  ],
  'icon-presentation': [
    { sel: '.orbit-1', dur: 450, delay: 50 },
    { sel: '.orbit-2', dur: 450, delay: 220 },
    { sel: '.orbit-3', dur: 450, delay: 390 },
    { sel: '.orbit-4', dur: 450, delay: 560 },
  ],
};

function playIcon(step: HTMLElement) {
  const icon = step.querySelector<SVGElement>('.step-icon');
  if (!icon) return;

  const iconClass = Array.from(icon.classList).find(c => c.startsWith('icon-'));
  if (!iconClass) return;

  const sequence = ICON_SEQUENCES[iconClass];
  if (!sequence) return;

  sequence.forEach(({ sel, dur, delay }) => {
    const el = icon.querySelector<SVGGeometryElement>(sel);
    if (!el) return;

    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length}`;

    el.getAnimations().forEach(a => a.cancel());

    el.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      { duration: dur, delay, fill: 'both', easing: 'ease' }
    );
  });
}

export default function Process() {
  useEffect(() => {
    const steps = Array.from(document.querySelectorAll<HTMLElement>('.step'));
    const container = document.querySelector('.processo-steps');
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      steps.forEach((step, i) => {
        setTimeout(() => {
          step.classList.add('visible');
          playIcon(step);
        }, i * 150);
      });
      observer.disconnect();
    }, { threshold: 0.15 });

    observer.observe(container);

    steps.forEach(step => {
      step.addEventListener('mouseenter', () => playIcon(step));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="section-inner">
        <div className="processo-wrap reveal">
          <div className="processo-header">
            <span className="section-label">Método</span>
            <h2 className="section-title">Processo de criação</h2>
          </div>
          <div className="processo-steps">

            <div className="step">
              <svg className="step-icon icon-discovery" width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="globe-outer" cx="30.2725" cy="30.2725" r="29.7959" stroke="black" strokeWidth="0.952993"/>
                <ellipse className="globe-e1" cx="29.8641" cy="30.6797" rx="22.0408" ry="29.7959" stroke="black" strokeWidth="0.952993"/>
                <ellipse className="globe-e2" cx="30.2721" cy="30.6797" rx="13.4694" ry="29.7959" stroke="black" strokeWidth="0.952993"/>
                <path className="globe-line" d="M29.8643 0.475586V60.4756" stroke="black" strokeWidth="0.953124"/>
              </svg>
              <div className="step-title">Descoberta</div>
              <p className="step-desc">Analisamos o mercado em que sua marca está inserida, pesquisando tendências e oportunidades. Estudamos os concorrentes diretos e indiretos para entender suas estratégias visuais e analisamos o comportamento do seu público-alvo.</p>
            </div>

            <div className="step">
              <svg className="step-icon icon-development" width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="ring-1" cx="30.4764" cy="30.4764" r="29.9998" stroke="black" strokeWidth="0.952993"/>
                <circle className="ring-2" cx="30.476" cy="38.9008" r="21.5756" stroke="black" strokeWidth="0.953124"/>
                <circle className="ring-3" cx="30.4766" cy="47.1202" r="13.3565" stroke="black" strokeWidth="0.953124"/>
                <circle className="ring-4" cx="30.4768" cy="54.5179" r="5.95927" stroke="black" strokeWidth="0.953124"/>
              </svg>
              <div className="step-title">Desenvolvimento</div>
              <p className="step-desc">Com as informações coletadas, desenvolvemos conceitos iniciais, sistema visual, paleta de cores, tipografia e elementos gráficos. Garantimos que o design seja versátil e aplicável em diversas mídias, refinando as opções conforme o feedback.</p>
            </div>

            <div className="step">
              <svg className="step-icon icon-presentation" width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse className="orbit-1" cx="30.4765" cy="30.4766" rx="11.0204" ry="30" stroke="black" strokeWidth="0.952993"/>
                <ellipse className="orbit-2" cx="30.4766" cy="30.4776" rx="11.0204" ry="30" transform="rotate(-90 30.4766 30.4776)" stroke="black" strokeWidth="0.952993"/>
                <ellipse className="orbit-3" cx="30.4763" cy="30.4766" rx="11.0204" ry="30" transform="rotate(-135 30.4763 30.4766)" stroke="black" strokeWidth="0.952993"/>
                <ellipse className="orbit-4" cx="11.0204" cy="30" rx="11.0204" ry="30" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 43.8975 59.4824)" stroke="black" strokeWidth="0.952993"/>
              </svg>
              <div className="step-title">Apresentação</div>
              <p className="step-desc">Apresentamos o sistema visual detalhadamente aos responsáveis pelo projeto, explicando as escolhas de design e como elas atendem aos objetivos da marca. Coletamos feedback, realizamos ajustes necessários e buscamos a aprovação final.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
