'use client';
import Button from './Button';
import RichText from './RichText';
import { useI18n } from './LocaleProvider';

function toggleFaq(trigger: HTMLButtonElement) {
  const item = trigger.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

export default function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq">
      <div className="section-inner">
        <div className="reveal">
          <div className="faq-layout">

            <div className="faq-left">
              <span className="section-label">{t.faq.label}</span>
              <h2 className="section-title"><RichText text={t.faq.title} /></h2>
              <p className="faq-desc">{t.faq.desc}</p>
              <Button href="https://api.whatsapp.com/send/?phone=5588994360637&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" variant="primary">{t.faq.cta}</Button>
            </div>

            <div className="faq-right">

              {t.faq.items.map(item => (
                <div className="faq-item" key={item.question}>
                  <button className="faq-trigger" onClick={e => toggleFaq(e.currentTarget)}>
                    {item.question}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
