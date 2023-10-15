import React from 'react';
import './Experiences.css';
import SC2AImage from '../../assets/images/Logo 2.png';
import KasaImage from '../../assets/images/kasa.png';
import OhmyFoodImage from '../../assets/images/ohmyfood.png';
import SophieImage from '../../assets/images/Sophie.png';

function Experiences() {
  const experiences = [
    {
      title: 'SC2A',
      image: SC2AImage,
      description:
        "Site web pour un courtier en assurance (SC2A) offrant des services d'assurance pour les particuliers et les entreprises",
      link: 'https://misterbakka.github.io/SC2A/',
    },
    {
      title: 'Portfolio Sophie Bluel',
      image: SophieImage,
      description:
        "Portfolio en ligne pour Sophie Bluel, photographe professionnelle spécialisée dans la capture de moments uniques et la création d'images artistiques",
      link: 'https://github.com/MisterBakka/PortfolioArchitecte',
    },
    {
      title: 'Kasa',
      image: KasaImage,
      description:
        "Plateforme de location d'appartements entre particuliers, Kasa simplifie la recherche et la location de logements",
      link: 'https://github.com/MisterBakka/Kasa',
    },
    {
      title: 'OhmyFood',
      image: OhmyFoodImage,
      description:
        "OhmyFood est une plateforme de réservation de restaurants gastronomiques haut de gamme",
      link: 'https://misterbakka.github.io/ohmyfood/',
    },
  ];

  return (
    <section id="projets" className="experience-container">
      <h2   className='projets'>Mes Projets</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img
              src={experience.image}
              alt={experience.title}
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '150px' }} 
            />
            <h3>{experience.title}</h3>
            <p>{experience.description.substring(0, 100)}...</p>
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
