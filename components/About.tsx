import BP from '@/lib/basePath';

export default function About() {
  return (
    <section id="sobre">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Sobre</span>
          <div className="sobre-grid">
            <div className="sobre-foto-wrap">
              <div className="sobre-foto-img-clip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/pic_portfolio_about_me.jpg`} alt="Alison Almeida" className="sobre-foto-img" />
              </div>
              <div className="sobre-foto-overlay">
                <div>
                  <div className="sobre-foto-name">Alison Almeida, 25</div>
                  <div className="sobre-foto-role">Brand Product Designer</div>
                </div>
                <div className="sobre-foto-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${BP}/assets/logotype/logo-symbol.svg`} alt="Studio Dotto" className="sobre-foto-logo" />
                </div>
              </div>
            </div>
            <div className="sobre-content">
              <h2 className="sobre-heading">Designer com mais de 6 anos de experiência em branding e produtos digitais.</h2>
              <div className="sobre-services">
                <div className="sobre-service-row">
                  <div>
                    <div className="sobre-service-title">Identidade de marca</div>
                    <div className="sobre-service-desc">Construímos sistemas visuais completos do posicionamento à aplicação com clareza e consistência.</div>
                  </div>
                  <span className="sobre-service-tag">Branding</span>
                </div>
                <div className="sobre-service-row">
                  <div>
                    <div className="sobre-service-title">Produto digital</div>
                    <div className="sobre-service-desc">Projetamos interfaces e fluxos que conectam marca, negócio e usuário com eficiência.</div>
                  </div>
                  <span className="sobre-service-tag">UI/UX</span>
                </div>
                <div className="sobre-service-row">
                  <div>
                    <div className="sobre-service-title">Website</div>
                    <div className="sobre-service-desc">Desenvolvemos sites que reforçam posicionamento e traduzem a marca em experiência digital.</div>
                  </div>
                  <span className="sobre-service-tag">Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
