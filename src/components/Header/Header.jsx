import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";

import "./Header.css";
import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ handleCloseClick, setShowNavMovile }) => {
  //setFilter y filter son para filtrar las noticias relacionadas con la categoria del NavBar
  const { setFilter } = useContext(AuthContext);

  const { newsFilterFunction } = useContext(AuthContext);
  const filterFunction = ({ target }) => {
    // setFilter(target.value);
    newsFilterFunction(target.value);
  };

  const handleDeleteFilterNavbar = () => {
    setFilter(false);
  };

  return (
    <div className="header">
      <section className="header__section__search">
        <Link to="/" className="logo">
          <img
            
            src={logo}
            alt="logo"
            onClick={handleDeleteFilterNavbar}
          />
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
          <Auth
            hadleCloseClick={handleCloseClick}
            setShowNavMovile={setShowNavMovile}
          ></Auth>
        </section>
      </section>
    </div>
  );
};

export default Header;
