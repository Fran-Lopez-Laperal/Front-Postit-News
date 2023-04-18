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
import BackButton from "../BackButton/BackButton";


const HomePage = ({idCategory, setIdCategory, categoryName, setCategoryName}) => {
  const { filter } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {

    const responsiveMovil = () => window.innerWidth > 420 ? setShowNav(true) : setShowNav(false)
    responsiveMovil()
    window.addEventListener('resize', () => responsiveMovil())

  
  }, [])






  return (
    <section className="homePage">
      <section className="homePage__section__navBar">
        {showNav ? <NavBar setIdCategory={setIdCategory} setCategoryName={setCategoryName} />
          :
          ' '
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
