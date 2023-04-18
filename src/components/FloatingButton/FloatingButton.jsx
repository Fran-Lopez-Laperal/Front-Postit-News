import './FloatingButton.css'
import { AuthContext } from "../../context/AuthContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const FloatingButton = () => {
  const { isLogged } = useContext(AuthContext);
  if (!isLogged) return null;

  return (
    <>
      <div className="floating-button">
        <Link to="/crear-noticia">
          <i className="fa fa-plus-square" aria-hidden="true"></i>
        </Link>
        <Link to="/crear-noticia">Crear Noticia</Link>
      </div>
    </>

  );
};

export default FloatingButton;