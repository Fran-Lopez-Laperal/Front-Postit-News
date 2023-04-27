import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.jsx";

import { getCategoriesService } from "../service/index.jsx";

import "./NavBar.css";

const NavBar = ({ setIdCategory, setCategoryName }) => {
  const { setFilter } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  let categoriesFromBack;

  useEffect(() => {
    const getCategoriesServiceFunction = async () => {
      categoriesFromBack = await getCategoriesService();
      setCategories(categoriesFromBack);
    };

    getCategoriesServiceFunction();
  }, []);

  const handleFilterNews = (id, name) => {
    setIdCategory(id);
    setCategoryName(name);
    setFilter(true);
    navigate("/");
  };

  return (
    <>
      <nav className="navBar">
        <menu className="navBar__menu">
          <ul className="navBar__menu__ul">
            {categories.map((category) => (
              <li key={category.id} className="navBar__menu__ul__li">
                <button
                  className="navBar__menu__ul__li--button"
                  onClick={() => {
                    handleFilterNews(category.id, category.name);
                  }}
                >
                  <p className="navBar__menu__ul__li--p">{category.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </>
  );
};

export default NavBar;
