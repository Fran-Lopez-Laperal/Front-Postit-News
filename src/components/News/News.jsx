import React, { useEffect, useState } from "react";
import { getNewsDataService } from "../service";
// import imgNew from "../../assets/descarga.png";
import avatar from "../../assets/avatar.jpg";
import "./News.css";
import OldNews from "../OldNews/OldNews";
import NewsCard from "../NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false)
  // const [loading, setLoading] = useState(true)
const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsDataService();
        setNews(result);
        // setLoading(false);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);



const handleShowNews = () => {
  navigate('/')
}

  const handleShowOldNews = () => {
    setShow(!show)
  }

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
      
        {show ? <OldNews />
          : (
           
            news.map(({ id, title, createdAt, image, idNew }) => (
              <NewsCard key={id} id={id} title={title} createdAt={createdAt} image={image} idNew={idNew} />
            ))
          )
        }

      </div>
    </>
  );
};

export default News;
