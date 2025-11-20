import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Renan Ferreira. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/Zerogallo" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/renan-ferreira-full-stack" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer