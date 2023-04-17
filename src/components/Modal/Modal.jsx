import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ buttonText,children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button className="modal__button" onClick={() => setIsVisible(true)}>{buttonText}</button>
      {isVisible && (
        <div className="modal-background">
          <div className="modal-content">
            <button className="modal-close-button" onClick={handleClose}>
              <p className="modal-p-close-button">X</p>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
