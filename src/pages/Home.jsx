import React from 'react'
import { Link } from 'react-router-dom'
import prefl from '../assets/images/prefl.jpg'
import { SiBackendless, SiMongodb, SiXdadevelopers } from 'react-icons/si'
import { ImBooks } from 'react-icons/im'
import { FaCss3Alt, FaDocker, FaFigma, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact, FaSquareShareNodes, FaVuejs } from 'react-icons/fa6'
import { RiJavascriptFill, RiToolsFill } from 'react-icons/ri'
import { GrMysql } from 'react-icons/gr'
import { VscVscodeInsiders } from 'react-icons/vsc'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Olá, eu sou <span className="highlight"><SiXdadevelopers />Renan Ferreira </span></h1>
            <h2>Desenvolvedor Full Stack</h2>
            <p>
              Sou um desenvolvedor apaixonado por criar soluções inovadoras 
              e experiências digitais excepcionais.
            </p>
            <div className="hero-buttons">
              <Link to="/projetos" className="btn primary">Ver Projetos</Link>
              <Link to="/contato" className="btn secondary">Entrar em Contato</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={prefl} alt="Profile" />
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2><ImBooks />Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><FaSquareShareNodes />Frontend</h3>
              <ul>
                <li><FaReact />React.js</li>
                <li><RiJavascriptFill />JavaScript</li>
                <li><FaHtml5 />HTML5</li>
                <li><FaCss3Alt />CSS3</li>
                <li><FaVuejs />Vue.js</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><SiBackendless />Backend</h3>
              <ul>
                <li><FaNodeJs />Node.js</li>
                <li><FaPython />Python</li>
                <li><GrMysql />MySQL</li>
                <li><SiMongodb />MongoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3><RiToolsFill />Ferramentas</h3>
              <ul>
                <li><FaGithub />Git & GitHub</li>
                <li><FaFigma />Figma</li>
                <li><VscVscodeInsiders />VS Code</li>
                <li><FaDocker />Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
