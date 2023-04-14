import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";
import registerIcon from "../../assets/icono-login.png";

import Profile from "../Profile/Profile";
import { NavProfile } from "../NavProfile/NavProfile";

export const Auth = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <NavProfile />
  ) : (
    <>
      <section className="buttons-auth-header">
        <button className="button-register-auth-header">
          <Link to="/registro">Regístrate</Link>
        </button>

        <button className="button-login-auth-header">
          <Link to="/login">
            <img id="registerIcon" src={registerIcon} alt="icono-login" />
          </Link>
        </button>
      </section>
    </>
  );
};
