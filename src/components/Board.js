// Skills.js
import React from 'react';
import './Skills.css';

const Skill = ({ name }) => {
  return (
    <div className="skill-container">
      <p className="skill-name">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className="skills-heading">Skills</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className="skills-container">
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="React" />
      </div>
    </section>
  );
};

export default Skills;
