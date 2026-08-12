import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

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

      <div className="projects__grid">
        {projects.map((project) => (
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
