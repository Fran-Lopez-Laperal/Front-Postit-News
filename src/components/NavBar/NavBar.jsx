import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [icon, setIcon] = useState('fa fa-arrow-right')

  const handleOpneMenu = () => {
    setShowMenu(!showMenu)
    setIcon(showMenu ? 'fa fa-arrow-right' : 'fa fa-arrow-left')
  }

  const handleCloseMenu = () => {
    setShowMenu(!showMenu)
    setIcon('fa fa-arrow-right')
  }

  return (
    <>


      <nav className={`navBar ${showMenu ? "navBar__expand" : ""}`}>
        <button className='navBar__button' onClick={handleOpneMenu}>
          <i className={icon} aria-hidden="true"></i>
        </button>
        <menu>
          <ul className='navBar__menu__ul'>
          
            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
            <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <Link to='/login' style={{ textDecoration: 'none' }}>Sociedad</Link>
            </li>

            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
            <i className="fa fa-futbol-o" aria-hidden="true"></i>
              </div>
              <Link to='/registro' style={{ textDecoration: 'none' }}>Deportes</Link>
            </li>

            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
            <i className="fa fa-university" aria-hidden="true"></i>
              </div>
              <Link to='/registro' style={{ textDecoration: 'none' }}>Cultura</Link>
            </li>
            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
            <i className="fa fa-book" aria-hidden="true"></i>
              </div>
              <Link to='/registro' style={{ textDecoration: 'none' }}>Actualidad</Link>
            </li>
            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
                <i className="fa fa-balance-scale" aria-hidden="true"></i>
              </div>
              <Link to='/login' style={{ textDecoration: 'none' }}>Politica</Link>
            </li>
            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
            <div className='navBar__menu__ul__li_iconMenu'>
                <i className="fa fa-balance-scale" aria-hidden="true"></i>
              </div>
              <Link to='/registro' style={{ textDecoration: 'none' }}>Sucesos</Link>
            </li>
            <li className='navBar__menu__ul__li' onClick={handleCloseMenu}>
              <div className='navBar__menu__ul__li_iconMenu'>
              <i className="fa fa-eur" aria-hidden="true"></i>
              </div>

              <Link to='/registro' style={{ textDecoration: 'none' }}>Economía</Link>
            </li>
          </ul>
        </menu>
      </nav>
    </>


  )
}

export default NavBar