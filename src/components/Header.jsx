import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { FaDev, FaHome, FaWhatsappSquare } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/"><FaDev /> Renan Ferreira</Link>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            <FaHome /> 
             Início
          </Link>
          <Link 
            to="/projetos" 
            className={location.pathname === '/projetos' ? 'active' : ''}
          >
            <AiFillCode /> 
            Projetos
          </Link>
          <Link 
            to="/contato" 
            className={location.pathname === '/contato' ? 'active' : ''}
          >
            <FaWhatsappSquare /> 
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
