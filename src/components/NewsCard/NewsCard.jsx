import React from 'react'
import avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

import './NewsCard.css'

const NewsCard = ({id, title, createdAt, image, idNew}) => {
  return (
    <>
            <article
                className="news__card"
                key={id}
                style={{
                  backgroundImage: `url(http://localhost:4000/images/${image})`,
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <header className="news__card__header">
                  <h4>{title}</h4>
                </header>
                <section className="news__card__section_info">
                  <figure className="news__card__section__figure">
                    <section className="news__card__section_info--user">
                      <img className="news__card__img" src={avatar} alt="" />
                      <figcaption>User</figcaption>
                    </section>

                    <button className="news__card__section_info__button">
                      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </button>
                    <button className="news__card__section_info__button">
                      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </button>
                  </figure>
                </section>
                <footer className="news__card__footer">
                  <strong>{createdAt}</strong>
                  <Link to={`news/${idNew}`} style={{ textDecoration: "none" }}>
                    {" "}
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
                </footer>
              </article>
    </>
  )
}

export default NewsCard