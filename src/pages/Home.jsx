import './Home.css';

const Home = () => {
  return (
    <section id="inicio" className="home section">
      <div className="home__content-centered">
        <p className="eyebrow home__eyebrow">
          Portafolio Profesional
        </p>

        <h1 className="home__title">
          DARLA DANYALY <span className="home__title-accent">SOLIS SOLIS</span>
        </h1>

        <div className="home__badge">
          <span className="home__badge-dot" />
          DESARROLLADORA FULL STACK
        </div>

        <p className="home__bio">
          Desarrolladora de software especializada en <strong>backend (Python, Java, Odoo 19 Enterprise, REST APIs, PostgreSQL, MySQL)</strong> y desarrollo frontend con <strong>React</strong>. Experiencia en infraestructura en la nube <strong>(AWS & GCP)</strong>, metodologías ágiles <strong>(Scrum)</strong> y arquitectura de software.
        </p>

        <div className="home__actions">
          <a className="btn btn--primary" href="/cv-darla-solis.pdf" download>
            <DownloadIcon /> Descargar CV Completo
          </a>
          <div className="home__socials">
            <a href="https://www.linkedin.com/in/darla-solis" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/darlasolis" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0-4-4m4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19.5h16" strokeLinecap="round" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3v11.5h-3V9Zm6 0h2.88v1.57h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v6.9h-3v-6.12c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.6-2.35 3.24v6.22h-3V9Z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.3 6.84 9.65.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default Home;
