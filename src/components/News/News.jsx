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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsDataService();
        setNews(result);
        setNewsWithFilter(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const filterNews = (newsFilter) => {
    const arrayFiltered = news.filter(
      (e) =>
        e.title.includes(newsFilter) ||
        e.introduction.includes(newsFilter) ||
        e.text.includes(newsFilter)
    );
    setNewsWithFilter(arrayFiltered);
  };

  useEffect(() => {
    filterNews(newsFilter);
  }, [newsFilter]);

  const handleShowNews = () => {
    const today = new Date().toISOString().slice(0, 10);

    const filterTodayNews = news.filter((newsItem) => {
      const createdAt = new Date(newsItem.createdAt).toISOString().slice(0, 10);
      return createdAt === today;
    });

    setNewsWithFilter(filterTodayNews);
  };

  const filterOldNews = () => {
    const today = new Date().toISOString().slice(0, 10);

    const filteredNews = news.filter((newsItem) => {
      const createdAt = new Date(newsItem.createdAt).toISOString().slice(0, 10);
      return createdAt !== today;
    });

    setNewsWithFilter(filteredNews);
  };

  const handleShowOldNews = () => {
    filterOldNews();
    setShow(!show);
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
        {show ? (
          <OldNews />
        ) : (
          newsWithFilter.map(({ id, title, createdAt, image, name, avatar }) => (
          
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
        )}
      </div>
    </>
  );
};

export default News;
