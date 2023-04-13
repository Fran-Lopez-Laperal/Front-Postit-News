import React from 'react'
import './AboutAs.css'
import fran from '../../../assets/images-footer/fran.png'
import guadi from '../../../assets/images-footer/guadi.jpg'


const AboutAs = () => {
  return (
    <div>
      <h2 className='title-footer'>Sobre nosotros</h2>
      <picture>
        <img classname="foto-perfil" src={fran} alt="fotografía-Fran" />
        <img classname="foto-perfil" src="foto" alt="fotografía-Jose" />
        <img classname="foto-perfil" src="foto" alt="fotografía-Inés" />
        <img classname="foto-perfil" src={guadi} alt="fotografía-Guadi" />
      </picture>
      
      
    </div>
  )
}

export default AboutAs