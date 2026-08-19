import avatar from '../assets/pixel/avatar.png';
import { TechIcon } from '../components/TechIcon';
import './About.css';

const skillCategories = [
  {
    category: 'Lenguajes de Programación',
    skills: ['Java 17', 'Python', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'REST APIs', 'FastAPI', 'Laravel', 'POO'],
  },
  {
    category: 'ERP & Business Applications',
    skills: ['Odoo 19 Enterprise', 'ORM', 'XML', 'QWeb'],
  },
  {
    category: 'Bases de Datos',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Linux'],
  },
  {
    category: 'Herramientas & Metodologías',
    skills: ['Git', 'GitHub', 'Scrum', 'Agile'],
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
            Desarrolladora Backend con experiencia en sistemas empresariales, trabajando en la adaptación y evolución de soluciones para diferentes necesidades de negocio.
          </p>
          <p>
            Mi experiencia incluye desarrollo y mantenimiento de módulos en Python/Odoo, integración de APIs, gestión de bases de datos, depuración, pruebas y resolución de incidencias en entornos de producción.
          </p>
          <p>
            También he participado en la interpretación de requerimientos operativos, implementación de cambios, soporte técnico y capacitación a clientes sobre las soluciones desarrolladas.
          </p>
        </AboutBlock>

        {/* Sección Ciclo de Desarrollo */}
        <AboutBlock label="Experiencia en Ciclo de Desarrollo">
          <div className="about__cycle-grid">
            <div className="about__cycle-item">• Análisis y traducción de requerimientos operativos</div>
            <div className="about__cycle-item">• Desarrollo y adaptación de módulos empresariales</div>
            <div className="about__cycle-item">• Integración de APIs REST y servicios externos</div>
            <div className="about__cycle-item">• Pruebas y depuración técnica de código</div>
            <div className="about__cycle-item">• Resolución de incidencias en producción</div>
            <div className="about__cycle-item">• Mantenimiento continuo en producción</div>
            <div className="about__cycle-item">• Soporte técnico y capacitación a usuarios</div>
            <div className="about__cycle-item">• Colaboración con equipos multidisciplinarios</div>
          </div>
        </AboutBlock>

        {/* Experience Section */}
        <AboutBlock label="Experiencia Laboral">
          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Backend Developer — OGUM Consultoría en TI y RH</p>
              <span className="about__tag">2025 — Presente | Remoto</span>
            </div>
            <ul className="about__list">
              <li>Desarrollo, adaptación y mantenimiento de módulos personalizados en Python dentro de Odoo 19 Enterprise.</li>
              <li>Traducción de requerimientos operativos de clientes en soluciones técnicas dentro del ERP.</li>
              <li>Integración de APIs externas y participación en la conexión de servicios como WhatsApp.</li>
              <li>Depuración, pruebas y resolución de incidencias en módulos desplegados en producción.</li>
              <li>Gestión, respaldo y restauración de bases de datos PostgreSQL sobre hosting (IONOS) y administración en servidores Linux.</li>
              <li>Soporte técnico y capacitación a clientes sobre las funcionalidades y cambios implementados.</li>
            </ul>

            <div className="about__subprojects">
              <p className="about__subprojects-title">Proyectos Destacados (Por Sector de Industria):</p>
              <div className="about__subprojects-grid">
                <div className="about__subproject-card">
                  <strong>Sector Servicios & Gestión Operativa:</strong> Adaptación de modelos de datos y extensión de flujos operativos en Odoo.
                </div>
                <div className="about__subproject-card">
                  <strong>Sector Energía & Comercialización</strong> Automatización de flujos de ventas y personalización de procesos comerciales.
                </div>
                <div className="about__subproject-card">
                  <strong>Sector Hotelería & Nómina:</strong> Integración de procesos operativos y automatización de módulos de nómina.
                </div>
              </div>
            </div>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Interna de Radiología — CERAM Diagnóstico Especializado</p>
              <span className="about__tag">2022 — 2023 | Mérida, MX</span>
            </div>
            <ul className="about__list">
              <li>Rotaciones clínicas completas en entornos hospitalarios de alta exigencia (Rayos X, CT, MRI).</li>
              <li>Operación de equipos avanzados y resolución de situaciones operativas en ambientes de alta responsabilidad.</li>
            </ul>
          </div>
        </AboutBlock>

        {/* Education Section matching official CV */}
        <AboutBlock label="Educación">
          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Ingeniería en Desarrollo de Software y Negocios Digitales</p>
              <span className="about__timeline-date">2026 — 2028</span>
            </div>
            <p className="about__muted">Tecnológico de Software · Mérida, MX</p>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Técnico Superior Universitario en Desarrollo e Innovación de Software</p>
              <span className="about__timeline-date">2024 — 2026</span>
            </div>
            <p className="about__muted">Tecnológico de Software · Mérida, MX</p>
          </div>

          <div className="about__timeline-item">
            <div className="about__timeline-header">
              <p className="about__strong">Técnico Superior Universitario en Radiología e Imagen</p>
              <span className="about__timeline-date">2020 — 2022</span>
            </div>
            <p className="about__muted">Instituto de Estudios Superiores David Alfaro Siqueiros · Mérida, MX</p>
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
