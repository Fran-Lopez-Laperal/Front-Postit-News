import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";

import "./Header.css";
import { Auth } from "../Auth/Auth";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = ({handleCloseClick, setShowNavMovile}) => {
  const { user } = useContext(AuthContext);
  const { newsFilterFunction } = useContext(AuthContext);
  const filterFunction = ({ target }) => {
    /* setFilter(target.value) */
    newsFilterFunction(target.value);
  };

  const handleClickLogo = () => {
    /* window.location.reload(); */
    Navigate("/");
  };

  return (
    <div className="header">
      <section className="header__section__search">
        <Link to="/" /* onClick={handleClickLogo} */>
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <article className="header__section__search__article">
          <input
            className="header__section__search--input"
            type="search"
            placeholder="Buscador de noticias por palabras"
            name="search"
            id=""
            onChange={filterFunction}
          />
        </article>
        <section className="buttons-header">
          <Auth hadleCloseClick={handleCloseClick} setShowNavMovile={setShowNavMovile}></Auth>
        </section>
      </section>
    </div>
  );
};

export default Header;
