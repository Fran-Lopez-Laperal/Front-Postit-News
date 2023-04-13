import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getNewsDataService } from "../service";
// import imgNew from "../../assets/descarga.png";
import avatar from "../../assets/avatar.jpg";
import "./News.css";
import OldNews from "../OldNews/OldNews";
import NewsCard from "../NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [newsWithFilter, setNewsWhitFilter] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const { newsFilter } = useContext(AuthContext);
  // const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  console.log(news);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsDataService();
        console.log(result);
        setNews(result);
        setNewsWhitFilter(result);
        // setLoading(false);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
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
    setNewsWhitFilter(arrayFiltered);
  };

  useEffect(() => {
    filterNews(newsFilter);
  }, [newsFilter]);

  const handleShowNews = () => {
    const today = new Date().toISOString().slice(0,10);

    const filterTodayNews = newsWithFilter.filter((newsItem) => {
      const createdAt = new Date(newsItem.createdAt).toISOString().slice(0,10);
      return createdAt === today;
    });

    setNewsWhitFilter(filterTodayNews);
  };

  const handleShowOldNews = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="homePage__section__buttons">
        <button className="homePage__button" onClick={handleShowOldNews}>
          Noticias mas antiguas
        </button>
        <button className="homePage__button" onClick={handleShowNews}>
          Noticias actuales
        </button>
      </section>
      <div className="news">
        {show ? (
          <OldNews />
        ) : (
          newsWithFilter.map(({ id, title, createdAt, image }) => (
            <NewsCard
              key={id}
              id={id}
              title={title}
              createdAt={createdAt}
              image={image}
              idNew={id}
            />
          ))
        )}
      </div>
    </>
  );
};

export default News;
