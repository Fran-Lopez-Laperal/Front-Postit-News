import React, { useContext , useState} from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";

import "./Header.css";
import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Header = () => {
  const {user} = useContext(AuthContext)
  let userImg = `http://localhost:4000/images/${user?.avatar}`;
  const {newsFilterFunction} = useContext(AuthContext);
  const filterFunction =({target})=>{
    /* setFilter(target.value) */
    newsFilterFunction(target.value)
  }

  return (
    <div className="header">
      <section className="header__section__search">
        
        <Link to="/">
        <img className="logo" src={logo}  alt="logo"/>
        </Link>  
        
        <article className="header__section__search__article">
          <input
            className="header__section__search--input"
            type="search"
            placeholder="Busca un tipo de noticia"
            name="search"
            id=""
            onChange={filterFunction}
          />
          <figure className="">
            <img
              className="header__section__search__article--img"
              src={userImg}
              alt=""
            />
          </figure>
        </article>
        <section className="buttons-header">
        <Auth></Auth>
        </section>
      </section>
    </div>
  );
};

export default Header;
