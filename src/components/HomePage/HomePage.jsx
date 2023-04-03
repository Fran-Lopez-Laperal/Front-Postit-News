import React, { useState } from 'react'

import './HomePage.css'
import News from '../News/News'

const HomePage = () => {

 const [orderBy, setOrderBy] = useState('latest')

  const handleOrder =  (newsOrder) => {
    setOrderBy(newsOrder)
    console.log('hola')
  }

  return (

    <>
      <section className='homePage'>
        <section className='homePage__section__news'>
          <News orderBy={orderBy}/>
        </section>
      </section>

    </>
  )
}
export default HomePage
