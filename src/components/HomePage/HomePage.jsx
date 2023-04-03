import React from 'react'

import './HomePage.css'
import News from '../News/News'

const HomePage = () => {

  return (

    <>
      <section className='homePage__section__buttons'>
        <button className='homePage__button'>Noticias mas antiguas</button>
        <button className='homePage__button'>Noticias actuales</button>
      </section>
      <section className='homePage__section__news'>
        <News />
      </section>

    </>
  )
}
export default HomePage
