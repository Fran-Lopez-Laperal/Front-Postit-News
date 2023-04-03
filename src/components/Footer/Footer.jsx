import React from "react";
import "./Footer.css";
import PrivacityCookies from "../PrivacityCookies/PrivacityCookies";
import PrivacityPolicy from "../PrivacityPolicy/PrivacityPolicy";
import Modal from "../Modal/Modal";
import AboutAs from "../AboutAs/AboutAs";
import Contacto from "../Contacto/Contacto";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Modal buttonText="Política de Cookies">
          <PrivacityCookies />
        </Modal>
        <Modal buttonText="Política de Privacidad">
          <PrivacityPolicy />
        </Modal >
        <Modal buttonText="Sobre nosotros">
          <AboutAs />
        </Modal>
        <Modal buttonText="Contacto">
          <Contacto/>
        </Modal>
      </div>
      <div className="copyright">
        <p>© 2023 HACK A BOSS</p>
      </div>
    </footer>
  );
};

export default Footer;
