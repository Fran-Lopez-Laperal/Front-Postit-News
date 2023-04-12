import React, { useContext, useEffect, useState } from 'react'


import './NewsDetail.css'
import { Link, useParams } from 'react-router-dom'
import { getNewDetailDataService, getVoteNews } from '../service'
import { AuthContext } from '../../context/AuthContext'

const NewsDetail = () => {

  const { token } = useContext(AuthContext)

  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [voteLike, setVoteLike] = useState('')
  const [voteDisLike, setVoteDisLike] = useState('')
  const [disabledLike, setDisabledLike] = useState(false)
  const [disabledDislike, setDisabledDislike] = useState(false)

  const { idNew } = useParams()


  const handleExpandedButton = () => {
    setExpanded(!expanded)
  }

  const handleCloseExpandedButton = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {

    const fetchNew = async () => {
      try {
        const newDetail = await getNewDetailDataService(idNew)
        setNews(newDetail)

      } catch (error) {
        setError(error)
      }
    }

    fetchNew()

  }, [idNew])


  const handleVoteLike = async (vote) => {
    try {
      await getVoteNews(token, idNew, vote)
      const updateNew = await getNewDetailDataService(idNew)
      console.log(updateNew)
      setVoteLike(vote)
      setVoteDisLike("")
      setNews(updateNew)

    } catch (error) {
      setError(error)
    }
  }

  const handleVoteDisLike = async (vote) => {
    try {
      await getVoteNews(token, idNew, vote)
      const updateNew = await getNewDetailDataService(idNew)
      console.log(updateNew)
      setVoteDisLike(vote)
      setVoteLike("")
      setNews(updateNew)
  

    } catch (error) {
      setError(error)
    }
  }


  if (!news) {
    return null
  }


  return (
    <section className='newsDetail' >
      {news.map(({ title, id, image, createdAt, introduction, text }) => (
        <article className='newsDetails__article' key={id}>
          <figure className='newsDetails__article__figure' style={{
            backgroundImage: `url(http://localhost:4000/images/${image})`,
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}>
            <section className='newsDetails__article__figure__section'>
              <button className='newsDetails__article__figure__section--button'><i className="fa fa-arrow-left fa-3x" aria-hidden="true"></i></button>
              <p className='newsDetails__article__figure__section--p'>{title}</p>
            </section>

          </figure>
          <section className='newsDetails__article__section--buttonOptions'>
            <div className='main-container'>
              <div className='btn-container'>
                <button onClick={handleExpandedButton} className={expanded ? 'expandable-button expanded' : 'expandable-button'}>
                  <div className='fill-block'></div>
                  <div className='close-icon'>
                    <div className=" fa fa-times" aria-hidden="true"></div>
                  </div>
                  <Link to={''} className='expansion-item'>
                    <div className='expansion-content'>
                      <div className='icon fa fa-share-alt'></div>
                    </div>
                  </Link>
                  <Link to={'mailto:""'} className='expansion-item'>
                    <div className='expansion-content'>
                      <div className='icon fa fa-facebook'></div>
                    </div>
                  </Link>
                  <Link to={''} className='expansion-item'>
                    <div className='expansion-content'>
                      <div className='icon fa fa-globe'></div>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </section>
          <section className='newsDetails__article__section__info'>
            <article className='newsDetails__article__section__info'>
              <header>
                <h5 className='newsDetails__article__section__info--date'>{new Date(createdAt).toDateString('es')}</h5>
              </header>
              <section className='newsDetails__article__section__info__user' >
                <section className='newsDetails__article__section__info__user--name'>
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                  <h3>OWNUSER</h3>
                </section>
                <section className='newsDetails__article__section__info__votes'>
                  <button className="newsDetails__article__section__info__votes--buttons" onClick={() => handleVoteLike('like')}>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    {voteLike}
                  </button>
                  <button className="newsDetails__article__section__info__votes--buttons" onClick={() => handleVoteDisLike('disLike')}>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    {voteDisLike}
                  </button>
                </section>
              </section>
              <hr />
              <section className='newsDetails__article__section__info__text'>
                <h2>{introduction}</h2>
                <p>{text}</p>
              </section>
            </article>
          </section>
        </article>
      ))}
    </section>
  )
}

export default NewsDetail

