import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import posit from "../../assets/posit.png";
import imgForUser from "../../assets/imgForUser.png";

import "./NavProfile.css";

export const NavProfile = () => {
  const { user, logout } = useContext(AuthContext);

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

  const handleCloseMenu = () => {
    setShowMenu(false);
    // setIcon("fa fa-arrow-right");
  };

  return (
    <section className="navProfile">
      <figure
        id="figure-profile"
        className=""
        onClick={showMenu ? handleCloseMenu : handleOpenMenu}
      >
        <img id="img-profile" src={userImg} alt="" />
      </figure>
      {showMenu && (
        <section className="navProfile_menu">
          <ul className="navProfile_menu_ul">
            <li className="navProfile_menu_ul_li" onClick={handleCloseMenu}>
              <Link to="/perfil" className="link-profile">
                Ver perfil
              </Link>
            </li>
            <li className="navProfile_menu_ul_li" onClick={handleCloseMenu}>
              <Link to="/" className="link-profile" onClick={() => logout()}>
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
};
