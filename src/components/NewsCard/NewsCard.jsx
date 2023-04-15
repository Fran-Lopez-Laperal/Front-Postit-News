import React from "react";
import imgForUser from "../../assets/imgForUser.png";
import imgForNew from "../../assets/imgForNew.png";
import { Link } from "react-router-dom";

import "./NewsCard.css";

const NewsCard = ({
  id,
  title,
  createdAt,
  image,
  ownerName,
  ownerAvatar,
  totalLikes,
  nameCategory,
}) => {
  let userImg = `http://localhost:4000/images/${ownerAvatar}`;
  ownerAvatar = ownerAvatar ?? false;
  image = image ?? false;

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

  return (
    <>
      <article
        className="news__card"
        key={id}
        style={{
          backgroundImage: image
            ? `url(http://localhost:4000/images/${image})`
            : `url(${imgForNew})`,

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
              <img
                className="news__card__img"
                src={ownerAvatar ? userImg : imgForUser}
                alt=""
              />
              <figcaption>{ownerName}</figcaption>
              {nameCategory}
            </section>
          </figure>
        </section>
        <footer className="news__card__footer">
          <strong>{renderDate(createdAt)}</strong>
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
