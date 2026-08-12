import { createContext, useContext, useState } from 'react';

const ProjectModalContext = createContext(null);

export const ProjectModalProvider = ({ children }) => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const openProjectModal = (id) => {
    setActiveProjectId(id);
  };

  const closeProjectModal = () => {
    setActiveProjectId(null);
  };

  return (
    <ProjectModalContext.Provider
      value={{
        activeProjectId,
        selectedProjectId: activeProjectId,
        openProjectModal,
        closeProjectModal,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};

export const useProjectModal = () => {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error('useProjectModal debe usarse dentro de ProjectModalProvider');
  }
  return context;
};
