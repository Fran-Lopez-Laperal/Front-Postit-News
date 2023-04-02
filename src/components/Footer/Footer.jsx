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
        <Modal>
          <PrivacityCookies />
        </Modal>
        <Modal>
          <PrivacityPolicy />
        </Modal>
        <Modal>
          <AboutAs />
        </Modal>
      </div>
      © 2023 HACK A BOSS
    </footer>
  );
};

export default Footer;
