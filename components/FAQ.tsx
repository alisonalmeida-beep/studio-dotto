'use client';

function toggleFaq(trigger: HTMLButtonElement) {
  const item = trigger.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

export default function FAQ() {
  return (
    <section id="faq">
      <div className="section-inner">
        <div className="reveal">
          <div className="faq-layout">

            <div className="faq-left">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Dúvidas<br />frequentes</h2>
              <p className="faq-desc">Não encontrou o que precisava? Entre em contato e te respondemos em até 24 horas.</p>
              <a href="https://api.whatsapp.com/send/?phone=5588994360637&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn-primary">Entrar em contato</a>
            </div>

            <div className="faq-right">

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  O que está incluso no sistema visual?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">O sistema visual inclui logotipo e suas variações, paleta de cores, tipografia, elementos gráficos de apoio, guia de aplicação e arquivos finais prontos para uso em diferentes mídias.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Vocês também criam materiais de aplicação da marca?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">Sim! Além do sistema visual completo, oferecemos criação de materiais como apresentações, posts para redes sociais, papelaria e outros itens de aplicação da marca.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Qual é o prazo para desenvolver uma identidade visual?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">O prazo médio é de 3 a 5 semanas, dependendo da complexidade do projeto e da agilidade nos feedbacks. Um cronograma detalhado é definido no início do projeto.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Como funciona o processo de criação?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">O processo passa por três etapas: Descoberta (imersão e pesquisa), Desenvolvimento (conceitos e refinamento) e Apresentação (entrega e ajustes finais). Cada etapa tem marcos claros e momentos de feedback.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Quantas rodadas de ajuste estão inclusas?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">Estão inclusas duas rodadas de ajuste após cada apresentação. Revisões além desse limite são cobradas separadamente, conforme acordado no briefing inicial.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Como os arquivos finais são entregues?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">Os arquivos são entregues em formatos editáveis (AI, PDF) e de uso (PNG, SVG, JPG) via link de download organizado por categoria. Também é entregue um mini guia de uso da marca.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Tenho direito sobre os arquivos e a marca criada?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">Sim. Após a quitação total do projeto, todos os direitos de uso da marca criada são transferidos integralmente ao cliente, incluindo arquivos editáveis e fontes utilizadas.</div>
              </div>

              <div className="faq-item">
                <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                  Como consigo um orçamento?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">Basta marcar uma reunião de 30 minutos pelo link de agendamento. Nessa conversa, entendo o seu projeto e envio uma proposta personalizada em até 48 horas.</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
