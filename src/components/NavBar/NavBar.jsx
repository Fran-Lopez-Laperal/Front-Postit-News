import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getCategoriesService } from "../service/index.jsx";

import "./NavBar.css";

let categories = await getCategoriesService();

const NavBar = ({ setIdCategory, setFilter, setCategoryName }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState("fa fa-arrow-right");
  const navigate = useNavigate();

  const hadleButtonClick = () => {
    
  }

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
                }}>{category.name}</button>
                
              </li>
            ))}
          </ul>
        </menu>
      </nav>
    </>
  );
};

export default NavBar;
