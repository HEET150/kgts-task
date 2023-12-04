// Projects.js
import React from 'react';
import './Projects.css';

const Project = ({ title, description, link }) => {
  return (
    
    <div className="project-container">
      
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Projects</h2>
      <Project
        title="Project 1"
        description="simple portfolio"
        link="https://heet150.github.io/portfolio-website/"
      />
      <Project
        title="Project 2"
        description="leaderboard website"
        link="https://github.com/HEET150/Task-2-website"
      />
    </div>
  );
};

export default Projects;
