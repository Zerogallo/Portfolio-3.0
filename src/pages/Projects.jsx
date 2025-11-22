import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { AiFillCode } from 'react-icons/ai'


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Controle de Estoque - Flask",
      description: "Sistema completo de gerenciamento de estoque desenvolvido em Flask com interface web e API REST. Permite controle de produtos, movimentações de entrada/saída e acompanhamento do histórico.",
      technologies: ["Python 3", "Flask", "SQL", "HTML5", "CSS3"],
      image:"/src/assets/images/Estoque.png",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/Controle-de-Estoque"
    },
    {
      id: 2,
      title: "Sistema de Controle de Acesso",
      description: "Sistema web desenvolvido em Python para controle de acessos com dashboard interativo e relatórios gráficos.",
      technologies: ["Python 3", "Flask","Pandas","Matplotlib","HTML5", "CSS3"],
      image: "/src/assets/images/dat.png",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/Sistema-de-Controle-de-Acesso"
    },
    {
      id: 3,
      title: "Aplicativo de cartão de embarque",
      description: "Um aplicativo de cartão de embarque digital desenvolvido em React Native com Expo e TypeScript, criado no Visual Studio Code. O aplicativo exibe um cartão de embarque estilizado com informações de voo e inclui um QR Code para facilitar o processo de embarque.",
      technologies: ["React Native","Expo","JavaScript", "TypeScript"],
      image: "/src/assets/images/cartao.jpg",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/Cart-o-de-embarque"
    },
     {
      id: 4,
      title: "Conversor de Moedas",
      description: "Aplicativo móvel para conversão de valores entre moedas internacionais (USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF). Exibe resultados em tempo real com taxa de câmbio atualizada.",
      technologies: ["React Native","Expo","JavaScript", "TypeScript"],
      image: "/src/assets/images/moedas.jpeg",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/Conversor-de-Moedas-Mobile"
    },
     {
      id: 5,
      title: "SUPER SAPATOS",
      description: "SUPER SHOES é um carrossel interativo desenvolvido em React que exibe uma coleção de tênis esportivos. Este projeto demonstra técnicas modernas de desenvolvimento front-end utilizando React Hooks para criar uma experiência de usuário fluida e responsiva.",
      technologies: ["React","JavaScript", "HTML5", "CSS3"],
      image: "/src/assets/images/super.png",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/carrossel?tab=readme-ov-file"
    },
     {
      id: 6,
      title: "Portfólio-2.0",
      description: "Um portfólio moderno e responsivo desenvolvido com React.js e Vite para showcase dos meus projetos e habilidades.",
      technologies: ["React","JavaScript", "HTML5", "CSS3"],
      image: "/src/assets/images/cad.PNG",
      liveDemo: "",
      sourceCode: "https://github.com/Zerogallo/NovoPortf-lio"
    }
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1> <AiFillCode />  Meus Projetos</h1>
          <p>Confira alguns dos meus trabalhos mais recentes</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
