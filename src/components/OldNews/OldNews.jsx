import React, { useEffect, useState } from 'react'
import { getOldNewsService } from '../service'
import NewsCard from '../NewsCard/NewsCard';


import './OldNews.css'

const OldNews = () => {

  const [news, setNews] = useState([])
  const [error, setError] = useState(null);


  useEffect(() => {
    const oldNews = async () => {

      try {
        const result = await getOldNewsService()

        setNews(result)
      } catch (error) {
        setError(error)
      }
    }
    oldNews()
  }, [])



  return (
    <div className='oldNews'>
      {news.map(({ id, title, createdAt, image, idNew }) => (
        <NewsCard key={id} id={id} title={title} createdAt={createdAt} image={image} idNew={idNew} />
      ))}
    </div>
  )
}

export default OldNews