import React from "react";
import avatar from "../../assets/avatar.jpg";
import posit from "../../assets/posit.png";
import { Link } from "react-router-dom";

import "./NewsCard.css";

const NewsCard = ({ id, title, createdAt, image, ownerName, ownerAvatar, totalLikes }) => {
  let userImg = `http://localhost:4000/images/${ownerAvatar}`;
  image = image ?? false;



  
  console.log(userImg)
  return (
    <>
      <article
        className="news__card"
        key={id}
        style={{
          backgroundImage: image
            ? `url(http://localhost:4000/images/${image})`
            : `url(${posit})`,

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
              <img className="news__card__img" src={userImg} alt="" />
              <figcaption>{ownerName}</figcaption>
            </section>
          </figure>
        </section>
        <footer className="news__card__footer">
          <strong>{createdAt}</strong>
          <Link to={`news/${id}`} style={{ textDecoration: "none" }}>
            {" "}
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </Link>
        </footer>
      </article>
    </>
  );
};

export default NewsCard;
