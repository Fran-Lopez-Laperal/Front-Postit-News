import React, { useEffect, useState } from 'react'
import { getNewsDataService } from '../service'
import imgNew from '../../assets/descarga.png'
import avatar from '../../assets/avatar.jpg'
import './News.css'
import { Link } from 'react-router-dom'

const News = (orderBy) => {
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getNewsDataService();
                setNews(result);
                // setLoading(false);
                console.log(result)
            } catch (error) {
                setError(error.message);
                // setLoading(false);
            }
        };
        fetchData();
    }, []);

    const sortByDate = (a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt)
    }

const handleOldNews = () => {
    const sortOldNews = [...news].sort((a, b) =>  new Date(a.createdAt) - new Date(b.createdAt))
    setNews(sortOldNews)
}

const handleTodayNews = () => {
    const sortOldNews = [...news].sort((a, b) =>  new Date(b.createdAt) - new Date(a.createdAt))
    setNews(sortOldNews)
}

    return (
        <>
            <section className='homePage__section__buttons'>
                <button className='homePage__button' onClick={handleOldNews}>Noticias mas antiguas</button>
                <button className='homePage__button'onClick={handleTodayNews} >Noticias actuales</button>
            </section>
            <div className='news'>
                {
                    news.map(({ id, title, createdAt }) => (
                            <article className='news__card' key={id} style={{
                                backgroundImage: `url(${imgNew})`,
                                position: 'relative',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat'
                            }}>

                                <header className='news__card__header'>
                                    <h4>{title}</h4>
                                </header>
                                <section className='news__card__section_info' >
                                    <figure className='news__card__section__figure'>
                                        <section className='news__card__section_info--user'>
                                            <img className='news__card__img' src={avatar} alt="" />
                                            <figcaption>User</figcaption>
                                        </section>

                                        <button className='news__card__section_info__button'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
                                        <button className='news__card__section_info__button'><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
                                    </figure>
                                </section>
                                <footer className='news__card__footer'>
                                    <strong>{createdAt}</strong>
                                    <Link style={{ textDecoration: 'none' }}> <i class="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </footer>
                            </article>

                        ))
                }
            </div>
        </>

    )
}

export default News