import avatar from '../assets/pixel/avatar.png';
import { TechIcon } from '../components/TechIcon';
import './About.css';

const skillCategories = [
  {
    category: 'Lenguajes de Programación',
    skills: ['Python', 'Java', 'Bash', 'Dart', 'JavaScript'],
  },
  {
    category: 'Frameworks & Frontend',
    skills: ['React', 'Spring Boot', 'Flutter', 'Laravel', 'REST APIs'],
  },
  {
    category: 'ERP & Business Applications',
    skills: ['Odoo', 'REST APIs'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (Fundamentos)', 'Docker', 'Google Cloud (Fundamentals)'],
  },
  {
    category: 'Bases de Datos',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Herramientas & Metodologías',
    skills: ['Git', 'GitHub', 'Scrum', 'Figma'],
  },
];

const About = () => {
  return (
    <section id="acerca" className="about section">
      <div className="about__visual">
        <div className="about__frame-wrap">
          <div className="about__frame">
            <img src={avatar} alt="Retrato de Darla Danyaly Solis Solis" />
          </div>
        </div>
      </div>

      <div className="about__content">
        <h1 className="about__title">
          Acerca de mí <span className="ruby-glow-text">· Perfil Técnico</span>
        </h1>

        <AboutBlock label="Darla Danyaly Solis Solis">
          <p>
            Apasionada por la tecnología y el desarrollo de software, con sólidas competencias en <strong>desarrollo backend (Python, Java, Odoo 19)</strong> y desarrollo frontend moderno con <strong>React</strong>, además de infraestructura en la nube (AWS & GCP).
          </p>
          <p className="about__cv-bullets">
            • Mentalidad proactiva y sólidas habilidades analíticas para la resolución de problemas técnicos.<br />
            • Curiosidad constante por aprender sobre los avances en este campo dinámico.<br />
            • Gran motivación y adaptabilidad rápida a retos, destacando tanto en equipos ágiles multifuncionales (Scrum) como de forma independiente.
          </p>
        </AboutBlock>

        {/* Education Section matching CV */}
        <AboutBlock label="Educación">
          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Ingeniería en Desarrollo de Software y Negocios Digitales</p>
              <span className="about__timeline-date">2026 — 2027</span>
            </div>
            <p className="about__muted">Tecnológico de Software · Mérida, MX</p>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">TécnicO Superior Universitario en Desarrollo e Innovación de Software</p>
              <span className="about__timeline-date">2024 — 2026</span>
            </div>
            <p className="about__muted">Tecnológico de Software · Mérida, MX</p>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Licenciatura en Radiología e Imagen</p>
              <span className="about__timeline-date">2020 — 2023</span>
            </div>
            <p className="about__muted">Instituto de Estudios Superiores David Alfaro Siqueiros · Mérida, MX</p>
          </div>
        </AboutBlock>

        {/* Experience Section matching CV */}
        <AboutBlock label="Experiencia Laboral">
          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Backend Developer — OGUM Consultoría en TI y RH</p>
              <span className="about__tag">2025 — Presente | Remoto</span>
            </div>
            <ul className="about__list">
              <li>Gestión de configuraciones de bases de datos, infraestructura lógica y módulos en Python para sistemas ERP internos.</li>
              <li>Creación y personalización de módulos nativos en Odoo 19 Enterprise (ORM, XML/QWeb).</li>
              <li>Integración autónoma de APIs REST y dominio de herramientas técnicas para optimizar procesos backend.</li>
              <li>Colaboración en equipos ágiles (Scrum) asegurando la integración fluida de sistemas y flujos de trabajo eficientes.</li>
            </ul>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Interna de Radiología — CERAM Diagnóstico Especializado</p>
              <span className="about__tag">2022 — 2023 | Mérida, MX</span>
            </div>
            <ul className="about__list">
              <li>Rotaciones clínicas completas en departamentos de Rayos X, Tomografía (CT) y Resonancia Magnética (MRI).</li>
              <li>Operación segura de equipos médicos avanzados y colaboración estrecha con personal médico para soporte diagnóstico.</li>
            </ul>
          </div>
        </AboutBlock>

        {/* Skills Categorized */}
        <AboutBlock label="Habilidades Técnicas & Herramientas">
          <div className="about__categories">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="about__cat-group">
                <h3 className="about__cat-title">{cat.category}</h3>
                <div className="about__tech-grid">
                  {cat.skills.map((s) => (
                    <TechIcon key={s} name={s} showLabel={true} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AboutBlock>
      </div>
    </section>
  );
};

const AboutBlock = ({ label, children }) => (
  <div className="about__block">
    <h2 className="about__block-title">
      <span className="about__block-bar" />
      {label}
    </h2>
    {children}
  </div>
);

export default About;
