import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpg'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <section className='header__section__search'>
        <img src={logo} alt="" />
        <article className='header__section__search__article'>
          <input className='header__section__search--input' type="search" placeholder='Busca un tipo de noticia' name="" id="" />
          <figure className=''>
            <img className='header__section__search__article--img' src={avatar} alt="" />
          </figure>
        </article>
      </section>

    </div>
  )
}

export default Header