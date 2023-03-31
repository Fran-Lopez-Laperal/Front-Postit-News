import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      
      Hola <Link to={`/users/${user.id}`}>{user.name}</Link>{" "}
      
      <button onClick={() => logout()}>Cerrar sesión</button>{" "}
    </section>
  ) : (
    <ul>
      <li>
        <Link to="/registro">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
