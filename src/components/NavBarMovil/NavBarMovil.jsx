import React, { useContext, useState } from 'react'


import './NavBarMovil.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getCategoriesService } from '../service';

let categories = await getCategoriesService();

const NavBarMovil = ({ setIdCategory, setCategoryName }) => {
  const { setFilter } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false)

  const navigate = useNavigate();

  const hadleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }


  const hadleCloseClick = () => {
    setOpenMenu(!openMenu)
  }

  const handleFilterNews = (id, name) => {
    setIdCategory(id);
    setCategoryName(name);
    setFilter(true);
    hadleCloseClick()
    navigate("/");
  };

  return (
    <>
      <button className='button__div' onClick={hadleOpenMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {openMenu ? (
        <nav id='navbar' className={`navbar__movil__expand ${openMenu} ? 'open' : ''`}>
          <menu className='navbar__movil__expand__menu'>
            <ul className='navbar__movil__expand__menu--ul'>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      handleFilterNews(category.id, category.name);
                    }}>{category.name}</button>

                </li>
              ))}
            </ul>
          </menu>
        </nav>
      )
        :
        <nav className='navbar__movil'></nav>
      }

    </>
  );
}

export default NavBarMovil