import React from 'react';
import './ProjetModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) {
    // Si project est undefined, vous pouvez gérer le cas où aucun projet n'est sélectionné
    return (
      <div className="project-modal modal-background">
        <div className="modal-content">
          <p>Aucun projet sélectionné</p>
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-modal modal-background">
      <div className="modal-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="technologies">
            <ul className="tech-icons-container">
              {project.technologies.map((tech, index) => (
                <li key={index}>
                  <img src={tech.logo} alt={tech.name} className="tech-icon" />
                  {tech.name}
                </li>
                
              ))}
            
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
          </div>
        )}
       
        <button onClick={onClose} className="close-button">Fermer</button>
      </div>
    </div>
  );
}

export default ProjectModal;
