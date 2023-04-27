import React, { useContext, useEffect, useState } from "react";

import "./NavBarMovil.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getCategoriesService } from "../service";
import Header from "../Header/Header";
import logo from "../../assets/logo.png";


const NavBarMovil = ({ setIdCategory, setCategoryName, setShowNavMovile }) => {
  4;

  const [categories, setCategories] = useState([]);

  let categoriesFromBack;
  useEffect(() => {
    const getCategoriesServiceFunction = async () => {
      categoriesFromBack = await getCategoriesService();
      setCategories(categoriesFromBack);
    };

    getCategoriesServiceFunction();
  }, [setCategories]);

  const { setFilter } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  const hadleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const hadleCloseClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleFilterNews = (id, name) => {
    setIdCategory(id);
    setCategoryName(name);
    setFilter(true);
    hadleCloseClick();
    navigate("/");
  };

  return (
    <>
      <button className="button__div" onClick={hadleOpenMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {openMenu ? (
        <nav
          id="navbar"
          className={`navbar__movil__expand ${openMenu} ? "open" :" "`}
        >
          <menu className="navbar__movil__expand__menu">
            <ul className="navbar__movil__expand__menu--ul">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="navbar__movil__expand__menu--button"
                  onClick={() => {
                    handleFilterNews(category.id, category.name);
                  }}
                >
                  {category.name}
                </li>
              ))}
              <Header
                handleCloseClick={hadleCloseClick}
                setShowNavMovile={setShowNavMovile}
              />
            </ul>
          </menu>
        </nav>
      ) : (
        <nav className="navbar__movil">
          <button onClick={() => window.location.href = "/"}>
            <img src={logo} alt="" />
          </button>
        </nav>
      )}
    </>
  );
};

export default NavBarMovil;
