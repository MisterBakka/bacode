import React, { useEffect, useState } from 'react';
import ContactButton from '../Contact/Contact';
import './About.css';

function About() {
  const [showTitle, setShowTitle] = useState(false);
  const [typedText, setTypedText] = useState('');
  const textToType = 'Développeur Web Front-End';
  let currentIndex = 0;

  useEffect(() => {
    const animateTitle = () => {
      setShowTitle(true);

      const typingSpeed = 100;

      const interval = setInterval(() => {
        if (currentIndex <= textToType.length) {
          setTypedText(textToType.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);
    };

    animateTitle();
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="portrait-container">
          <a href='https://ibb.co/NFQBzqH'>
            <img
              src="https://i.ibb.co/L0b7fy2/unnamed.webp"
              alt="Mon Portrait"
              className="portrait"
            />
          </a>
        </div>
        <div className="text-container">
          <h2 className="centered-text">
            {showTitle ? (
              <>
                {typedText}
                <span className="blinking-cursor">|</span>
              </>
            ) : null}
          </h2>
          <p className="centered-text">DAHMOUNI Badre</p>
          <div className={`description ${showTitle ? 'show' : ''}`}>
            <p>
              Je suis un développeur web front-end junior passionné par la création
              de sites web modernes et interactifs. J'ai découvert ma passion pour ce
              domaine et je suis ravi de mettre mes compétences au service de votre
              projet. Que vous ayez besoin d'un site web personnel, professionnel ou
              d'une solution sur mesure, je suis là pour vous aider. N'hésitez pas à
              me contacter pour discuter de votre idée et commencer à concrétiser
              votre vision en ligne.
            </p>
          </div>
        </div>
      </div>
      <ContactButton />
    </div>
  );
}

export default About;

