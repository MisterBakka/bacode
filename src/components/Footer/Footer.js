import React from 'react';
import './Footer.css'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/badre-dahmouni-a88a3b242/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/MisterBakka" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MisterBacode - Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
