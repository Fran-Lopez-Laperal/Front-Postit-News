import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";
import Profile from "../Profile/Profile";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section className="p-buttonclose-auth">
      <Link to="/perfil" onClick={() => {user.name}}>
        Hola {user.name}
      </Link>
      
      <Link to="/" onClick={() => logout()}>
        <button>Cerrar sesión</button>
      </Link>
    </section>
  ) : (
    <>
      <section className="buttons-auth-header">
        <button className="button-register-auth-header">
          <Link to="/registro">Register</Link>
        </button>

        <button className="button-login-auth-header">
          <Link to="/login">Login</Link>
        </button>
      </section>
    </>
  );
};
