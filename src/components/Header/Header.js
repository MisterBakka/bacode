import React from "react";
import "./Header.css";
import logo from "../../assets/icon/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo initial un D et un B"
        />
      </div>
      <nav>
        <ul className="menu">
          <li>
            <a href="#about" className="lienancre">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="lienancre">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projets" className="lienancre">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="contactez">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
