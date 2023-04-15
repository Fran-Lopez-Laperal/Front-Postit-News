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

console.log(news)

  return (
    <div className='oldNews'>
      {news.map(({ id, title, createdAt, image, idNew, name, avatar, nameCategory }) => (
        <NewsCard key={id} id={id} title={title} createdAt={createdAt} image={image} idNew={idNew} ownerName={name}
        ownerAvatar={avatar} nameCategory={nameCategory}/>
      ))}
    </div>
  )
}

export default OldNews