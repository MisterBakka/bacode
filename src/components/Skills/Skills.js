import React, { useState } from 'react';
import './Skills.css';
import HtmlIcon from '../../assets/icon/html5.svg';
import CssIcon from '../../assets/icon/css3-alt.svg';
import JavascriptIcon from '../../assets/icon/js.svg';
import ReactIcon from '../../assets/icon/react.svg';
import GitIcon from '../../assets/icon/github.svg';
import FigmaIcon from '../../assets/icon/figma.svg';
import SassIcon from '../../assets/icon/sass.svg';
import Collapse from 'react-collapse';

function EducationItem({ title, location, date }) {
  return (
    <div className="education-item">
      <h4>{title}</h4>
      <p>{location}</p>
      <p>{date}</p>
    </div>
  );
}

const educationData = [
  {
    title: 'Intégrateur Web',
    location: 'OpenClassRooms',
    date: '2023',
  },
];

function Skills() {
  const iconStyle = {
    width: '40px',
    height: '40px',
  };

  const [isEducationOpen, setIsEducationOpen] = useState(false);

  return (
    <section id="skills" className="skills-container">
    <div className="skills-content">
      <h2>Mes Compétences</h2>
      <div className="skills-list">
        <div className="skill skill-item">
          <img src={HtmlIcon} alt="HTML" style={iconStyle} />
          <p>HTML</p>
        </div>
        <div className="skill skill-item">
          <img src={CssIcon} alt="CSS" style={iconStyle} />
          <p>CSS</p>
        </div>
        <div className="skill skill-item">
          <img src={JavascriptIcon} alt="JavaScript" style={iconStyle} />
          <p>JavaScript</p>
        </div>
        <div className="skill skill-item">
          <img src={ReactIcon} alt="React" style={iconStyle} />
          <p>React</p>
        </div>
        <div className="skill skill-item">
          <img src={GitIcon} alt="Git" style={iconStyle} />
          <p>Git</p>
        </div>
        <div className="skill skill-item">
          <img src={FigmaIcon} alt="Figma" style={iconStyle} />
          <p>Figma</p>
        </div>
        <div className="skill skill-item">
          <img src={SassIcon} alt="Sass" style={iconStyle} />
          <p>Sass</p>
        </div>
      </div>
    </div>
  
        <button  onClick={() => setIsEducationOpen(!isEducationOpen)}>
          {isEducationOpen ? "Masquer les formations" : "Mes Formations"}
        </button>
        <Collapse isOpened={isEducationOpen}>
          <div className="education-list">
            {educationData.map((education, index) => (
              <EducationItem
                key={index}
                title={education.title}
                location={education.location}
                date={education.date}
              />
            ))}
          </div>
        </Collapse>
      
    </section>
  );
}

export default Skills;
