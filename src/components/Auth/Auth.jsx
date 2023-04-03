import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Auth.css';
export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section className="p-buttonclose-auth">
      
      <p>Hola <Link to={`/users/${user.id}`}>{user.name}</Link>{" "}</p>
      
      <button onClick={() => logout()}>Cerrar sesión</button>{" "}
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
