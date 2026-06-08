import React from "react";
import "./projects.css";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Build a responsive business website using AI",
      website: "https://auckland-modern-elec-ydhi.bolt.host/",
      github: "https://github.com/Archana-s-94",
      tech: ["React", "CSS", "AI Tools"],
    },
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tech-stack">
              <ul>
                {item.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            {item.website && (
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                View Website
              </a>
            )}
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
