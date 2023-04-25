import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import imgForUser from "../../assets/imgForUser.png";

import "./NavProfile.css";

export const NavProfile = ({ setShowNavMovile, hadleCloseClick }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  let userImg;

  if (user?.avatar === null) {
    userImg = imgForUser;
  } else {
    userImg = `http://localhost:4000/images/${user?.avatar}`;
  }

  const handleLogout = () => {
    logout();
    //No navega al inicio
    // navigate("/");
  };

  return (
    <section className="navProfile">
      {setShowNavMovile ? (
        <section className="info-profile-movil">
          <section className="logout-profile-movil">
            <button onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </button>
            <p>Logout</p>
          </section>

          <Link to="/perfil">
            <figure onClick={hadleCloseClick} id="figure-profile-movil">
              <img id="img-profile-movil" src={userImg} alt="" />
            </figure>
          </Link>
        </section>
      ) : (
        <>
          <Link to="/perfil">
            <figure id="figure-profile" title="Ver perfil">
              <img id="img-profile" src={userImg} alt="" />
            </figure>
          </Link>
          <Link>
            <button className="button-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </Link>{" "}
        </>
      )}
    </section>
  );
};
