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


  console.log(news)
  return (
    <div className='newsDetail' >
      <h1></h1>
    </div>
  )
}

export default NewsDetail