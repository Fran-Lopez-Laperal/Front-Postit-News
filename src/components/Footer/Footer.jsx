import React from "react";
import "./Footer.css";
import PrivacityCookies from "../PrivacityCookies/PrivacityCookies";
import PrivacityPolicy from "../PrivacityPolicy/PrivacityPolicy";
import Modal from "../Modal/Modal";
import AboutAs from "../AboutAs/AboutAs";

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
      </div>
      <div className="copyright">
      © 2023 HACK A BOSS
      </div>
    </footer>
  );
};

export default Footer;
