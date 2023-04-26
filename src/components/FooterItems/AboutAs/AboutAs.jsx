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
          <img className="about-us-image" src={guadi} alt="fotografía-Guadi" />
          <img className="about-us-image" src={jose} alt="fotografía-Jose" />
          <img className="about-us-image" src={ines} alt="fotografía-Inés" />
          
        </div>
        <div className="about-us-text">
          <p className="about-us-description">
          Somos un equipo de cuatro apasionados por el desarrollo web, unidos por nuestra experiencia en un bootcamp de programación en Hack A Boss. Juntos hemos creado un proyecto web que refleja nuestra dedicación y compromiso.

<p>Nuestro equipo está compuesto por personas con habilidades diversas y complementarias. Cada uno de nosotros aporta un conjunto único de habilidades, conocimientos y experiencia que se combinan para formar un equipo sólido y efectivo. Desde el diseño hasta el desarrollo y la implementación, trabajamos juntos para crear una experiencia de usuario excepcional.</p>

<p>Nos apasiona la tecnología y nos gusta estar al tanto de las últimas tendencias y mejores prácticas en el campo del desarrollo web. Nuestro objetivo como desarrolladores es crear soluciones digitales innovadoras que hagan la vida más fácil a nuestros usuarios.</p>

<p>En nuestro proyecto, hemos combinado nuestro amor por la tecnología con nuestra pasión por la creatividad. Estamos orgullosos de lo que hemos logrado y esperamos que nuestra pasión y dedicación se reflejen en cada aspecto de nuestra web.</p>

<p>Somos un equipo comprometido con el éxito de nuestro proyecto y estamos emocionados por compartirlo con el mundo. ¡Gracias por visitarnos y esperamos que disfrutes navegando en nuestro sitio web tanto como nosotros disfrutamos creándolo!</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAs