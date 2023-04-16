import React from 'react'
import './AboutAs.css'
import fran from '../../../assets/images-footer/fran.png'
import guadi from '../../../assets/images-footer/guadi.jpg'
import jose from '../../../assets/images-footer/jose.jpg'
import ines from '../../../assets/images-footer/ines.jpg'


const AboutAs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us-title">Sobre nosotros</h2>
      <div className="about-us-content">
        <div className="about-us-images">
          <img className="about-us-image" src={fran} alt="fotografía-Fran" />
          <img className="about-us-image" src={jose} alt="fotografía-Jose" />
          <img className="about-us-image" src={ines} alt="fotografía-Inés" />
          <img className="about-us-image" src={guadi} alt="fotografía-Guadi" />
        </div>
        <div className="about-us-text">
          <p className="about-us-description">
            Somos un equipo de cuatro apasionados por el desarrollo web, juntos hemos creado este proyecto web que refleja nuestro compromiso y dedicación. Nuestro equipo está compuesto por personas con habilidades diversas y complementarias. Esperamos que nuestra dedicación se refleje en este proyecto. Gracias por visitarnos, esperamos que disfrutes navegando en nuestro sitio web tanto como nosotros disfutamos creándolo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAs