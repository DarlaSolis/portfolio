import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const CATEGORIES = [
  'Todos',
  'Full Stack & Business',
  'Backend & ERP',
  'UX/UI & Frontend',
  'Mobile Apps',
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.categoryGroup === activeCategory);

  return (
    <section id="proyectos" className="projects section">
      <header className="projects__head">
        <p className="eyebrow">Trabajo seleccionado</p>
        <h1 className="projects__title">Proyectos</h1>
        <div className="divider" />
        <p className="projects__hint">
          Selecciona una tarjeta para resaltarla y vuelve a presionarla para
          ver los detalles completos.
        </p>
      </header>

      {/* Filter Bar (Zalt.me Category Filter - Full Width) */}
      <div className="projects__filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`projects__filter-btn ${
              activeCategory === cat ? 'projects__filter-btn--active' : ''
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedId(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedId === project.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
