import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TechIcon } from './TechIcon';
import { useProjectModal } from '../context/ProjectModalContext';
import './ProjectCard.css';

const ProjectCard = ({ project, isSelected, onSelect }) => {
  const navigate = useNavigate();
  const { openProjectModal } = useProjectModal();
  const [imgIndex, setImgIndex] = useState(0);

  const imagesList = project.images && project.images.length > 0 ? project.images : [project.cover];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleClick = () => {
    openProjectModal(project.id);
    if (onSelect) onSelect(project.id);
  };

  return (
    <article
      className={`pcard-zalt ${isSelected ? 'pcard-zalt--selected' : ''}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Ver proyecto ${project.name}`}
    >
      {/* Browser Window Header Mockup (Zalt.me style) */}
      <div className="pcard-zalt__browser-bar">
        <div className="pcard-zalt__dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="pcard-zalt__url-bar">
          <span className="pcard-zalt__lock-icon">🔒</span>
          <span className="pcard-zalt__url-text">{project.mockUrl || `${project.id}.darla.dev`}</span>
        </div>
      </div>

      {/* Cover Image Carousel inside browser frame */}
      <div className="pcard-zalt__cover">
        <img src={imagesList[imgIndex]} alt={`Captura ${imgIndex + 1} de ${project.name}`} />
        <div className="pcard-zalt__cover-gradient" />
        
        {/* Multi-image Controls */}
        {imagesList.length > 1 && (
          <div className="pcard-zalt__img-nav">
            <button type="button" className="img-nav-btn" onClick={handlePrevImage} title="Imagen anterior">‹</button>
            <span className="img-nav-pill">{imgIndex + 1} / {imagesList.length}</span>
            <button type="button" className="img-nav-btn" onClick={handleNextImage} title="Siguiente imagen">›</button>
          </div>
        )}

        <span className="pcard-zalt__duration-badge">{project.duration || project.year}</span>
      </div>

      {/* Body Content */}
      <div className="pcard-zalt__body">
        <span className="pcard-zalt__category">{project.category || 'Software Development'}</span>
        <h3 className="pcard-zalt__title">{project.name}</h3>
        <p className="pcard-zalt__tagline">{project.tagline}</p>

        {/* Tech Stack Icons */}
        <div className="pcard-zalt__tech" title={`Stack: ${project.tech.join(', ')}`}>
          {project.tech.map((t) => (
            <TechIcon key={t} name={t} showLabel={false} />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="pcard-zalt__footer">
          <button type="button" className="btn btn--primary pcard-zalt__cta-btn">
            <ArrowIcon /> Ver Caso de Estudio
          </button>
        </div>
      </div>
    </article>
  );
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M5 12h14m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default ProjectCard;
