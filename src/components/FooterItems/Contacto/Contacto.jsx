import React from "react";
import "./Contacto.css";
import fran from "../../../assets/images-footer/fran.png";
import guadi from "../../../assets/images-footer/guadi.jpg";
import jose from "../../../assets/images-footer/jose.jpg";
import ines from "../../../assets/images-footer/ines.jpg";
import logogithub from "../../../assets/logogithub.png";
import logolinkedin from "../../../assets/logolinkedin.png";

const Contacto = () => {
  return (
    <div className="contact-us">
      <h2 className="contact-us-title">Contacta con nosotros</h2>
      <div className="contact-us-content">
        <div className="contact-us-images">
          <img className="contact-us-image" src={fran} alt="Fran" />
          <img className="contact-us-image" src={guadi} alt="Guadi" />
          <img className="contact-us-image" src={jose} alt="Jose" />
          <img className="contact-us-image" src={ines} alt="Ines" />
          
        </div>
        <div className="contact-us-text">
          <div className="contact-us-info">
            <h3 className="contact-us-name">Francisco José López Laperal</h3>
            <p className="contact-us-email">fransanxenxo@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/Fran-Lopez-Laperal" target="_blank" rel="noopener noreferrer">
              <img className="logogithub" src={logogithub} alt="GitHub profile" />
            </a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/francisco-laperal" target="_blank" rel="noopener noreferrer">
              <img className="logolinkedin" src={logolinkedin} alt="Linkedin profile" />
            </a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Guadalupe Alonso Meira</h3>
            <p className="contact-us-email">guadalupe.alonso.meira@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/Meira81" target="_blank" rel="noopener noreferrer">
              <img className="logogithub" src={logogithub} alt="GitHub profile" />
            </a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/guadalupe-alonso-meira/" target="_blank" rel="noopener noreferrer">
              <img className="logolinkedin" src={logolinkedin} alt="Linkedin profile" />
            </a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Jose Luis Gómez Cano</h3>
            <p className="contact-us-email">joseluis.gomez.cano@hotmail.es</p>
            <a className="contact-us-link" href="https://github.com/ErReberde1" target="_blank" rel="noopener noreferrer">
              <img className="logogithub" src={logogithub} alt="GitHub profile" />
            </a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/jos%C3%A9-luis-g%C3%B3mez-cano/" target="_blank" rel="noopener noreferrer">
              <img className="logolinkedin" src={logolinkedin} alt="Linkedin profile" />
            </a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Ines Navarro</h3>
            <p className="contact-us-email">inesnavarrodev@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/4cines" target="_blank" rel="noopener noreferrer">
              <img className="logogithub" src={logogithub} alt="GitHub profile" />
            </a>
            <a className="contact-us-link" href="http://linkedin.com/in/navarroinesdev" target="_blank" rel="noopener noreferrer">
              <img className="logolinkedin" src={logolinkedin} alt="Linkedin profile" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
