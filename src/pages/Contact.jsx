import React, { useState } from 'react'
import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { FaComments, FaEnvelopeOpenText } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { MdAttachEmail, MdOutlineDriveFileRenameOutline, MdOutlineSubject } from 'react-icons/md'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1><BsTelephoneFill />Entre em Contato</h1>
          <p>Vamos trabalhar juntos no seu próximo projeto!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Informações de Contato</h2>
            <div className="contact-item">
              <h3><MdAttachEmail /> Email</h3>
              <p>renan.genesisgt724532@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3><BsWhatsapp /> WhatsApp</h3>
              <p>‪+55 (21) 97374-5455‬</p>
            </div>
            <div className="contact-item">
              <h3><IoLocation /> Localização</h3>
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><MdOutlineDriveFileRenameOutline /> Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"><MdAttachEmail /> Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject"><MdOutlineSubject /> Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message"><FaComments /> Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary"><FaEnvelopeOpenText /> Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
