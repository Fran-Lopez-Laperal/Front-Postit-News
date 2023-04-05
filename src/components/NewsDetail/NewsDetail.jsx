import React, { useEffect, useState } from 'react'


import './NewsDetail.css'
import { useParams } from 'react-router-dom'
import { getNewDetailDataService } from '../service'

const NewsDetail = () => {

  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)

  const { idNew } = useParams()


  useEffect(() => {

    const fetchNew = async () => {
      console.log(idNew); //
      try {
        const newDetail = await getNewDetailDataService(idNew)
        setNews(newDetail)

      } catch (error) {
        setError(error)
      }
    }

    fetchNew()

  }, [idNew])

  if (!news) {
    return null
  }


  console.log(news)
  return (
    <section className='newsDetail' >
      {news.map(({ title, id,image }) => (
        <article key={id}>
          <p>{title}</p>
          <figure>
            <img src={`url(http://localhost:4000/images/${image}`} alt="" />
          </figure>
        </article>
      ))}
    </section>
  )
}

export default NewsDetail