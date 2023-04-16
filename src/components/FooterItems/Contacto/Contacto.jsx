import React from 'react';
import './Contacto.css';
import fran from '../../../assets/images-footer/fran.png';
import guadi from '../../../assets/images-footer/guadi.jpg';
import jose from '../../../assets/images-footer/jose.jpg';
import ines from '../../../assets/images-footer/ines.jpg';

const Contacto = () => {
  return (
    <div className="contact-us">
      <h2 className="contact-us-title">Contacto</h2>
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
            <a className="contact-us-link" href="https://github.com/Fran-Lopez-Laperal" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-us-link" href="www.linkedin.com/in/francisco-laperal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Guadalupe Alonso Meira</h3>
            <p className="contact-us-email">guadalupe.alonso.meira@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/Meira81" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/guadalupe-alonso-meira/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Jose Luis Gómez Cano</h3>
            <p className="contact-us-email">jose@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/jose" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/jose" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-us-info">
            <h3 className="contact-us-name">Ines Navarro</h3>
            <p className="contact-us-email">inesnavarro@gmail.com</p>
            <a className="contact-us-link" href="https://github.com/ines" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-us-link" href="https://www.linkedin.com/in/ines" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
