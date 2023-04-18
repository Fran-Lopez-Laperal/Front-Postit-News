import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import posit from "../../assets/posit.png";
import imgForUser from "../../assets/imgForUser.png";

import "./NavProfile.css";

export const NavProfile = ({ setShowNavMovile, hadleCloseClick }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  let userImg;

  if (user?.avatar === null) {
    userImg = imgForUser;
  } else {
    userImg = `http://localhost:4000/images/${user?.avatar}`;
  }

  const [showMenu, setShowMenu] = useState(false);
  //   const [icon, setIcon] = useState("fa fa-arrow-right");

  const handleOpenMenu = () => {
    setShowMenu(true);
    // setIcon(showMenu ? "fa fa-arrow-right" : "fa fa-arrow-left");
  };

  const handleLogout = () => {
    logout()
    hadleCloseClick()
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
    // setIcon("fa fa-arrow-right");
  };

  return (


    <section className="navProfile">
      {setShowNavMovile ? (
        <section className="info-profile-movil">
          <section className="logout-profile-movil">
            <Link to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </Link>
            <p>Logout</p> 
          </section>

          <Link to="/perfil">
            <figure
              onClick={hadleCloseClick}
              id="figure-profile-movil"
            >
              <img id="img-profile-movil" src={userImg} alt="" />
            </figure>
          </Link>
        </section>



      ) : (

        <figure
          id="figure-profile"
          className=""
          onClick={showMenu ? handleCloseMenu : handleOpenMenu}
        >
          <img id="img-profile" src={userImg} alt="" />
        </figure>
      )}

      {showMenu && (
        <section className="navProfile_menu">
          <ul className="navProfile_menu_ul">
            <li className="navProfile_menu_ul_li" onClick={handleCloseMenu}>
              <Link to="/perfil" className="link-profile">
                Ver perfil
              </Link>
            </li>
            <li className="navProfile_menu_ul_li" onClick={handleCloseMenu}>
              <Link to="/" className="link-profile" onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
};
