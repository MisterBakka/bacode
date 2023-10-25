import React from 'react';
import './ProjetModal.css'
function ProjectModal({ project, onClose }) {
  if (!project) {
    // Si project est undefined, vous pouvez gérer le cas où aucun projet n'est sélectionné
    return (
      <div className="project-modal">
        <div className="modal-content">
          <p>Aucun projet sélectionné</p>
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-modal">
      <div className="modal-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default ProjectModal;
