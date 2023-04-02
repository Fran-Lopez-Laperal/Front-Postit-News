import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ buttonText,children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button onClick={() => setIsVisible(true)}>{buttonText}</button>
      {isVisible && (
        <div className="modal-background">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
