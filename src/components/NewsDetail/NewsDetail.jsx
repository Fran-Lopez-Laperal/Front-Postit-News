import React, { useContext, useEffect, useState } from "react";

import "./NewsDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getNewDetailDataService, getVoteNews } from "../service";
import { AuthContext } from "../../context/AuthContext";
import imgForNew from "../../assets/imgForNew.png";

const NewsDetail = () => {
  const { token, setFilter } = useContext(AuthContext);
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const { idNew } = useParams();

  const handleExpandedButton = () => {
    setExpanded(!expanded);
  };

  const handleCloseExpandedButton = () => {
    setExpanded(!expanded);
  };

  const renderDate = (string) => {
    let arrayDate = string.substring(0, 10).split("-");
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    if (year !== Number(arrayDate[0]))
      return `Hace ${Number(arrayDate[0]) - year} años`;
    if (month !== Number(arrayDate[1]))
      return `Hace ${Number(arrayDate[1]) - month} meses`;
    if (day !== Number(arrayDate[2]))
      return `Hace ${Number(arrayDate[2]) - day} días`;

    return "Hoy";
  };

  useEffect(() => {
    const fetchNew = async () => {
      try {
        const newDetail = await getNewDetailDataService(idNew);
        setNews(newDetail);
        console.log(action);
      } catch (error) {
        setError(error);
      }
    };

    fetchNew();
  }, [idNew]);

  const handleVoteLike = async (vote) => {
    try {
      await getVoteNews(token, idNew, vote);
      const updateNew = await getNewDetailDataService(idNew);
      setNews(updateNew);
    } catch (error) {
      setError(error);
    }
  };

  const handleVoteDisLike = async (vote) => {
    try {
      await getVoteNews(token, idNew, vote);
      const updateNew = await getNewDetailDataService(idNew);
      setNews(updateNew);
    } catch (error) {
      setError(error);
    }
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  if (!news) {
    return null;
  }
  console.log(news);

  return (
    <section className="newsDetail">
      {news.map(
        ({
          avatar,
          title,
          id,
          image,
          createdAt,
          introduction,
          text,
          name,
          nameCategory,
          userVote,
          totalLikes,
          totalDisLikes,
        }) => (
          <article className="newsDetails__article" key={id}>
            <figure
              className="newsDetails__article__figure"
              style={{
                backgroundImage: image
                  ? `url(http://localhost:4000/images/${image})`
                  : `url(${imgForNew})`,
                position: "relative",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <section className="newsDetails__article__figure__section">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button
                    className="newsDetails__article__figure__section--button"
                    onClick={setFilter(false)}
                  >
                    <i
                      className="arrow fa fa-arrow-left fa-3x"
                      aria-hidden="true"
                    ></i>
                  </button>
                </Link>
                <p className="newsDetails__article__figure__section--p">
                  {nameCategory}
                </p>
              </section>
            </figure>
            <section className="newsDetails__article__section--buttonOptions">
              <div className="main-container">
                <div className="btn-container">
                  <div
                    onClick={handleExpandedButton}
                    className={
                      expanded
                        ? "expandable-button expanded"
                        : "expandable-button"
                    }
                  >
                    <div className="fill-block"></div>
                    <div className="close-icon">
                      <div className=" fa fa-times" aria-hidden="true"></div>
                    </div>
                    <button onClick={handleEdit} className="expansion-item">
                      <div className="expansion-content">
                        <div className="icon fa fa-share-alt"></div>
                      </div>
                    </button>
                    <button onClick={handleDelete} className="expansion-item">
                      <div className="expansion-content">
                        <div className="icon fa fa-facebook"></div>
                      </div>
                    </button>
                    <button className="expansion-item">
                      <div className="expansion-content">
                        <div className="icon fa fa-globe"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="newsDetails__article__section__info">
              <article className="newsDetails__article__section__info">
                <header>
                  <h5 className="newsDetails__article__section__info--date">
                  <strong className="strong">Publicada:</strong> {renderDate(createdAt)}
                  </h5>
                </header>
                <section className="newsDetails__article__section__info__user">
                  <section className="newsDetails__article__section__info__user--name">
                    <img
                      className="newsDetails__article__section__info__user--avatar"
                      src={`http://localhost:4000/images/${avatar}`}
                    />
                    <h3>{name}</h3>
                  </section>
                  <section className="newsDetails__article__section__info__votes">
                    <button
                      className="newsDetails__article__section__info__votes--buttons"
                      onClick={() => handleVoteLike("like")}
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                      {totalLikes}
                    </button>
                    <button
                      className="newsDetails__article__section__info__votes--buttons"
                      onClick={() => handleVoteDisLike("disLike")}
                    >
                      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                      {totalDisLikes}
                    </button>
                  </section>
                </section>
                <hr  />
                <section className="newsDetails__article__section__info__text">
                  <h2>{introduction}</h2>
                  <p>{text}</p>
                </section>
              </article>
            </section>
          </article>
        )
      )}
    </section>
  );
};

export default NewsDetail;
