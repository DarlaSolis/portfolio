import { useEffect, useState } from 'react';
import { useProjectModal } from '../context/ProjectModalContext';
import { projects } from '../data/projects';
import { TechIcon } from '../components/TechIcon';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { activeProjectId, closeProjectModal } = useProjectModal();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const project = projects.find((p) => p.id === activeProjectId);

  // Sync activeImgIndex when project changes
  useEffect(() => {
    setActiveImgIndex(0);
  }, [activeProjectId]);

  // Sync URL route /proyectos/:id when modal opens
  useEffect(() => {
    if (activeProjectId) {
      window.history.pushState(null, '', `/proyectos/${activeProjectId}`);
    } else {
      // restore hash or root
      const hash = window.location.hash || '#proyectos';
      window.history.replaceState(null, '', `/${hash}`);
    }
  }, [activeProjectId]);

  if (!project) return null;

  const imagesList = project.images && project.images.length > 0 ? project.images : [project.cover];

  return (
    <div className="pdetail-overlay" onClick={closeProjectModal} role="dialog" aria-modal="true">
      <div className="pdetail-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="pdetail-modal__close"
          onClick={closeProjectModal}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Top Browser Image Header (Zalt.me Case Study style) */}
        <div className="pdetail-zalt__browser-header">
          <div className="pdetail-zalt__dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="pdetail-zalt__url-bar">
            🔒 https://{project.mockUrl || `${project.id}.darla.dev`}
          </div>
        </div>

        {/* Main Cover / Multi Image Banner */}
        <div className="pdetail-zalt__banner">
          <img
            src={imagesList[activeImgIndex]}
            alt={`${project.name} captura ${activeImgIndex + 1}`}
            className="pdetail-zalt__banner-img"
          />
          <div className="pdetail-zalt__banner-overlay" />

          {/* Thumbnail Selector Bar if multiple images */}
          {imagesList.length > 1 && (
            <div className="pdetail-zalt__thumb-row">
              {imagesList.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pdetail-zalt__thumb-btn ${activeImgIndex === idx ? 'pdetail-zalt__thumb-btn--active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Zalt.me Layout */}
        <div className="pdetail-zalt__layout">
          {/* Main Column */}
          <div className="pdetail-zalt__main">
            <span className="pdetail-zalt__category">{project.category}</span>
            <h1 className="pdetail-zalt__title">{project.name}</h1>
            <p className="pdetail-zalt__tagline">{project.tagline}</p>

            {/* Summary */}
            <div className="pdetail-zalt__section">
              <h3 className="pdetail-zalt__sec-title">Resumen del Proyecto</h3>
              <p className="pdetail-zalt__summary">{project.summary}</p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="pdetail-zalt__section">
                <h3 className="pdetail-zalt__sec-title">Características Clave & Arquitectura</h3>
                <ul className="pdetail-zalt__features">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i}>✦ {feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="pdetail-zalt__section">
              <h3 className="pdetail-zalt__sec-title">Tecnologías & Herramientas</h3>
              <div className="pdetail-zalt__tech-grid">
                {project.tech.map((t) => (
                  <TechIcon key={t} name={t} showLabel={true} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Project Info (Zalt.me style) */}
          <aside className="pdetail-zalt__sidebar">
            <div className="pdetail-zalt__info-card">
              <h3 className="pdetail-zalt__info-title">Project Info</h3>

              <div className="pdetail-zalt__info-rows">
                <div className="pdetail-zalt__info-row">
                  <span className="pdetail-zalt__info-label">Inicio:</span>
                  <span className="pdetail-zalt__info-val">{project.startDate || project.year}</span>
                </div>
                <div className="pdetail-zalt__info-row">
                  <span className="pdetail-zalt__info-label">Fin:</span>
                  <span className="pdetail-zalt__info-val">{project.endDate || 'Completado'}</span>
                </div>
                <div className="pdetail-zalt__info-row">
                  <span className="pdetail-zalt__info-label">Duración:</span>
                  <span className="pdetail-zalt__info-val">{project.duration}</span>
                </div>
                <div className="pdetail-zalt__info-row">
                  <span className="pdetail-zalt__info-label">Rol:</span>
                  <span className="pdetail-zalt__info-val">{project.role}</span>
                </div>
                <div className="pdetail-zalt__info-row">
                  <span className="pdetail-zalt__info-label">Stack:</span>
                  <span className="pdetail-zalt__info-val">{project.tech.length} Tecnologías</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pdetail-zalt__action-buttons">
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary pdetail-zalt__action-btn"
                  >
                    <GithubIcon /> Ver Repositorio GitHub
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost pdetail-zalt__action-btn"
                  >
                    Visitar Sitio Web ↗
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.3 6.84 9.65.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default ProjectDetail;
