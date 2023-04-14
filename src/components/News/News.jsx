import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getNewsDataService } from "../service";
import OldNews from "../OldNews/OldNews";
import NewsCard from "../NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [newsWithFilter, setNewsWithFilter] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const { newsFilter } = useContext(AuthContext);
  const navigate = useNavigate();
  const [newsToday, setNewsToday] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsDataService();
        setNews(result);
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
  }, [newsFilter]);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const filterTodayNews = news.filter((newsItem) => {
      const createdAt = new Date(newsItem.createdAt).toISOString().slice(0, 10);
      return createdAt === today;
    });
    setNewsToday(filterTodayNews);
  }, [news]);

  const handleShowNews = () => {
    setShow(false);
    const today = new Date().toISOString().slice(0, 10);
    const filterTodayNews = news.filter((newsItem) => {
      const createdAt = new Date(newsItem.createdAt).toISOString().slice(0, 10);
      return createdAt === today;
    });
    setNewsToday(filterTodayNews);
  };

  const handleShowOldNews = () => {
    setShow(true);
  };

  return (
    <>
      <section className="homePage__section__buttons">
        <button className="homePage__button" onClick={handleShowOldNews}>
          Noticias pasadas
        </button>
        <button className="homePage__button" onClick={handleShowNews}>
          Noticias de hoy
        </button>
      </section>
      <div className="news">
        {show
          ? <OldNews />
          : newsToday.map(({ id, title, createdAt, image, name, avatar }) => (
              <NewsCard
                key={id}
                id={id}
                title={title}
                createdAt={createdAt}
                image={image}
                idNew={id}
                ownerName={name}
                ownerAvatar={avatar}
              />
            ))
        }
      </div>
    </>
  );
};

export default News;
