import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getNewsDataService } from "../service";
import OldNews from "../OldNews/OldNews";
import NewsCard from "../NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [newsWithFilter, setNewsWithFilter] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState("");
  const [notNewsToday, setNotNewsToday] = useState(false);
  const { newsFilter } = useContext(AuthContext);
  const navigate = useNavigate();
  const [newsToday, setNewsToday] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsDataService();
        setNews(result);
        setNewsWithFilter(result)
        const today = new Date().toISOString().slice(0, 10);
        const filterTodayNews = result.filter((newsItem) => {
          const createdAt = new Date(newsItem.createdAt)
            .toISOString()
            .slice(0, 10);
          return createdAt === today;
        });

        const sortedNews = filterTodayNews.sort(
          (a, b) => b.totalLikes - a.totalLikes
        );
        setNewsToday(sortedNews);
        
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterNews = (newsFilter) => {
      const arrayFiltered = news.filter(
        (e) =>
          e.title.includes(newsFilter) ||
          e.introduction.includes(newsFilter) ||
          e.text.includes(newsFilter)
      );
      setNewsWithFilter(arrayFiltered);
    };

    filterNews(newsFilter);
    if (newsToday.length === 0) {
      setNotNewsToday(true);
    } else {
      setNotNewsToday(false);
    }
  }, [newsFilter, newsToday]);

  const handleShowNews = () => {
    setShow("news");
    if (newsToday.length === 0) {
      setNotNewsToday(true);
    } else {
      setNotNewsToday(false);
    }
  };

  const handleShowOldNews = () => {
    setShow("old");
    setNotNewsToday(false);
  };

  const sortByDate = (newsArray) => {
    return newsArray.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  };


  return (
    <>
      <section className="news__container">
        <section className="homePage__section__buttons">
          <button className="homePage__button" onClick={handleShowNews}>
            POST´S DE HOY
          </button>
          <button className="homePage__button" onClick={handleShowOldNews}>
            POST´S PASADOS
          </button>
        </section>
        {error ? <p>{error}</p> : null}

        {notNewsToday ? <p>No se han publicado noticias hoy</p> : null}
        <div className="news">
  {show == "old" ? (
    <OldNews />
  ) : show == "news" ?(
    newsToday.length > 0 ? (
      newsToday.map(({ id, title, createdAt, image, name, avatar, nameCategory }) => (
        <NewsCard
          key={id}
          id={id}
          title={title}
          createdAt={createdAt}
          image={image}
          idNew={id}
          ownerName={name}
          ownerAvatar={avatar}
          nameCategory={nameCategory}
        />
      ))
    ) : (
      null
    )
  ): (newsWithFilter.length > 0 ? (
    sortByDate(newsWithFilter).map(({ id, title, createdAt, image, name, avatar, nameCategory }) => (
      <NewsCard
        key={id}
        id={id}
        title={title}
        createdAt={createdAt}
        image={image}
        idNew={id}
        ownerName={name}
        ownerAvatar={avatar}
        nameCategory={nameCategory}
      />
    ))
  ) : (
    <p>No se encontraron noticias</p>
  ))}
</div>

      </section>
    </>
  );
};

export default News;
