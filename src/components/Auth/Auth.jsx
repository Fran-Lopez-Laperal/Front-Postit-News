import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";
import { NavProfile } from "../NavProfile/NavProfile";

export const Auth = ({ hadleCloseClick, setShowNavMovile }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [showButtonsAuth, setShowButtonsAuth] = useState(false)


  useEffect(() => {

    const responsiveMovil = () => window.innerWidth < 420 ? setShowButtonsAuth(true) : setShowButtonsAuth(false)
    responsiveMovil()
    window.addEventListener('resize', () => responsiveMovil())
  }, []);

  return user ? (
    <NavProfile setShowNavMovile={setShowNavMovile} hadleCloseClick={hadleCloseClick} />
  ) : (
    <>
      {showButtonsAuth ? <section className="buttons-auth-header">
        <article className="buttons-auth">
          <section className="buttons-auth-icons">
            <Link onClick={hadleCloseClick} to="/registro">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </Link>
            <p>Registro</p>
          </section>

          <section>
            <Link className="buttons-auth-icons" onClick={hadleCloseClick} to="/login">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </Link>
            <p>Login</p>
          </section>

        </article>


      </section> :
        <section className="buttons-auth-header">
          <button className="button-register-auth-header">
            <Link to="/registro">¡Regístrate!</Link>
          </button>

          <button className="button-login-auth-header">
            <Link to="/login">Inicia sesión</Link>
          </button>
        </section>
      }

    </>
  );
};
