import BP from '@/lib/basePath';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand">
            <a href={`${BP}/`} className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BP}/assets/logotype/logo-symbol.svg`} alt="Studio Dotto" />
            </a>
            <p className="footer-tagline">by Studio Dotto</p>
          </div>

          <div>
            <p className="footer-col-title">Navegação</p>
            <ul className="footer-nav-links">
              <li><a href={`${BP}/`}>Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Social</p>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/oalisonorsi/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/oalisonalmeida/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Studio Dotto. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
