import React from 'react'
import { FaCode, FaCodeBranch, FaFileCode } from 'react-icons/fa'

const ProjectCard = ({ title, description, technologies, image, liveDemo, sourceCode }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3><FaFileCode /> {title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {liveDemo && (
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn">
              <FaCodeBranch /> Ver Demo
            </a>
          )}
          {sourceCode && (
            <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="btn secondary">
              <FaCode /> Código Fonte
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
