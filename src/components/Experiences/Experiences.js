import React, { useState } from 'react';
import './Experiences.css';
import SC2AImage from '../../assets/images/Logo 2.png';
import KasaImage from '../../assets/images/kasa.png';
import OhmyFoodImage from '../../assets/images/ohmyfood.png';
import SophieImage from '../../assets/images/Sophie.png';
import ProjectModal from '../Experiences/ProjetModal'; 
import HtmlIcon from '../../assets/icon/html5.svg';
import CssIcon from '../../assets/icon/css3-alt.svg';
import JavascriptIcon from '../../assets/icon/js.svg';
import ReactIcon from '../../assets/icon/react.svg';

import FigmaIcon from '../../assets/icon/figma.svg';
import SassIcon from '../../assets/icon/sass.svg';

function Experiences() {
  const experiences = [
    {
      title: 'SC2A',
      image: SC2AImage,
      description:
        "Integration avec React d'une maquette, conçue par un UX/UI designer, pour le site one-page d'un courtier en assurance",
      technologies: [
      {logo: ReactIcon},
      {logo: HtmlIcon},
      {logo: CssIcon},
      {logo: FigmaIcon}
      ],
      link: 'https://misterbakka.github.io/SC2A/',
    },
    {
      title: 'Kasa',
      image: KasaImage,
      description:
        "Refonte d'un site de location d'appartements. Intégration de React avec des composants et les différentes routes. Création d'animations CSS de menus déroulants. Intégration dynamique des hôtes, description et rating de chaque logements ainsi qu'un slider à partir de données JSON. Site responsive",
      technologies: [
        { logo: ReactIcon},
        {logo: HtmlIcon},
        { logo: CssIcon},
        {logo: JavascriptIcon}
      ],  
      link: 'https://github.com/MisterBakka/Kasa',
    },
    {
      title: 'OhmyFood',
      image: OhmyFoodImage,
      description:
        "Développement d'un site en mobile first qui répertorie les menus de restaurants gastronomiques. Réaliser les différentes animations en CSS comme le like, le loader, les sélecteurs de plats etc... Intégration responsive du site à partir de maquettes Figma et organisation du code avec SASS",
        technologies: [
          {logo: HtmlIcon},
          { logo: SassIcon}
        ],
      link: 'https://misterbakka.github.io/ohmyfood/',
    },
    {
      title: 'Portfolio Sophie Bluel',
      image: SophieImage,
      description:
        "Réalisation du front-end d'un portfolio pour Sophie Bluel. Intégration de la gestion de log-in log-out administrateur, d'une galerie de travaux filtrables par catégories et ajout de modales pour supprimer ou ajouter des travaux à la galerie. Le tout via une API",
        technologies: [
          { logo: ReactIcon},
          {logo: HtmlIcon},
          { logo: CssIcon}
        ], 
        link: 'https://github.com/MisterBakka/PortfolioArchitecte',
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projets" className="experience-container">
      <h2 className="projets">Mes Projets</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img
              src={experience.image}
              alt={experience.title}
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '150px' }}
            />
            <h3>{experience.title}</h3>
            
            <button onClick={() => openModal(experience)}>
              Voir le projet
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}

export default Experiences;
