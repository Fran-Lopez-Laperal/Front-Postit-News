import React, { useContext, useEffect, useState } from "react";

import "./HomePage.css";
import News from "../News/News";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import OldNews from "../OldNews/OldNews";
import { FilterNews } from "../FilterNews/FilterNews";
import NavBar from "../NavBar/NavBar";
import FloatingButton from "../FloatingButton/FloatingButton";
import NavBarMovil from "../NavBarMovil/NavBarMovil";

/* const FloatingButton = () => {
  const { isLogged } = useContext(AuthContext);
  if (!isLogged) return null;

  return (
    <div className="floating-button">
      <Link to="/crear-noticia">
        <i className="fa fa-plus-square" aria-hidden="true"></i>
      </Link>
      <Link to="/crear-noticia">Crear Noticia</Link>
    </div>
  );
}; */

const HomePage = () => {
  const [idCategory, setIdCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const { filter } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false)


  useEffect(() => {

    const responsiveMovil = () => window.innerWidth < 420 ? setShowNav(true) : setShowNav(false)
    responsiveMovil()
    window.addEventListener('resize', () => responsiveMovil())

  
  }, [])






  return (
    <section className="homePage">
      <section className="homePage__section__navBar">
        {showNav ? <NavBarMovil setIdCategory={setIdCategory} setCategoryName={setCategoryName}/>
          :
          <NavBar setIdCategory={setIdCategory} setCategoryName={setCategoryName} />
        }

      </section>

      <section className="homePage__section__news">
        {filter ? (
          <FilterNews idCategory={idCategory} categoryName={categoryName} />
        ) : (
          <News />
        )}
      </section>

      <FloatingButton />
    </section>
  );
};
export default HomePage;
