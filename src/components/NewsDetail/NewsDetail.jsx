import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteNewsService,
  editNewService,
  getNewDetailDataService,
  getVoteNews,
} from "../service";
import { AuthContext } from "../../context/AuthContext";
import imgForNew from "../../assets/imgForNew.png";
import { getCategoriesService } from "../service";
import { decodeToken, useJwt } from "react-jwt";


import "./NewsDetail.css";

const NewsDetail = () => {
  const { token, setFilter } = useContext(AuthContext);
  const { idNew } = useParams();

  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [text, setText] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState();

  let idTokenDecoded = decodeToken(token);
  const handleExpandedButton = () => {
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
      return `Hace ${day - Number(arrayDate[2])} días`;

    return "Hoy";
  };

  useEffect(() => {
    const fetchNew = async () => {
      try {
        const newDetail = await getNewDetailDataService(idNew);
        setNews(newDetail);
        setTitle(newDetail[0].title);
        setIntroduction(newDetail[0].introduction);
        setText(newDetail[0].text);
        setCategoryEdit(newDetail[0].idCategory);
        setImageEdit(newDetail[0].image);

      } catch (error) {
        setError(error);
      }
    };

    fetchNew();
  }, [idNew]);

  useEffect(() => {
    const fetchGetAllCategories = async () => {
      try {
        const allCategories = await getCategoriesService();

        setCategories(allCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetAllCategories();
  }, []);

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

  const handleDelete = async (id) => {
    let accept = confirm("Vas a borrar la foto con id " + id);

    if (accept) {
      const res = await deleteNewsService(token, id);

      if (res.status != "ok")
        return alert("Hubo un error al eliminar la noticia");

      alert("Noticia eliminada");
      navigate("/");
    } else {
      alert("no has borrado nada");
    }
  };

  const editFunction = () => {
    setEdit(!edit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataNew = new FormData();
    formDataNew.append("title", title);
    formDataNew.append("introduction", introduction);
    formDataNew.append("text", text);
    formDataNew.append("category", categoryEdit);
    formDataNew.append(
      "image",
      imageEdit === "null" ? news[0].image : imageEdit
    );

    try {
      await editNewService(token, idNew, formDataNew);


      setEdit(false);
      const refreshNew = await getNewDetailDataService(idNew);
      setNews(refreshNew);
    } catch (e) {
      console.log(e.message);
    }
  };

  if (!news) {
    return null;
  }

  return (
    <section className="newsDetail">
      {news.map(
        ({
          avatar,
          title,
          id,
          image,
          idUser,
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
                    onClick={() => setFilter(false)}
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
                    {idUser == idTokenDecoded?.id ? (
                      <button onClick={editFunction} className="expansion-item">
                        <div className="expansion-content">
                          <div id="fa-detail" className="fa fa-edit"></div>
                        </div>
                      </button>
                    ) : null}
                    {idUser == idTokenDecoded?.id ? (
                      <button
                        onClick={() => handleDelete(id)}
                        className="expansion-item"
                      >
                        <div className="expansion-content">
                          <div id="fa-detail" className="fa fa-trash"></div>
                        </div>
                      </button>
                    ) : null}
                    <button className="expansion-item">
                      <div className="expansion-content">
                        <div id="fa-detail" className="fa fa-share"></div>
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
                    <strong className="strong">Publicada:</strong>{" "}
                    {renderDate(createdAt)}
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
                <hr />
                <section className="newsDetails__article__section__info__text">
                  <h2>{introduction}</h2>
                  <p>{text}</p>
                </section>
              </article>
            </section>
          </article>
        )
      )}
      {edit ? (
        <section className="modal__edit">
          <section className="newsDetails__article__section__edit">
            <section className="editNew">
              <div className="form-container-editNew">
                <button className="button__close__modal" onClick={editFunction}>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <h1 className="h1-title">Edita tu noticia</h1>
                <form
                  className="form-createNew"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <div className="title">
                    <label id="labelEdit" htmlFor="title">Título:</label>
                    <input
                    className="titleEdit"
                      type="text"
                      id="title"
                      value={title}
                      minLength="5"
                      maxLength="30"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      required
                      name="title"
                    />
                  </div>
                  <div className="introduction">
                    <label id="labelEdit" htmlFor="introduction">Introducción:</label>
                    <textarea
                      className="texteAreaEdit"
                      id="introduction"
                      minLength="5"
                      maxLength="50"
                      value={introduction}
                      onChange={(e) => {
                        setIntroduction(e.target.value);
                      }}
                      required
                      name="introduction"
                    />
                  </div>
                  <div className="text">
                    <label id="labelEdit" htmlFor="text">Texto:</label>
                    <textarea
                      className="texteAreaEdit"
                      id="text"
                      minLength="5"
                      maxLength="2500"
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                      required
                      name="text"
                    />
                  </div>
                  <div className="category">
                    <label id="labelEdit" htmlFor="category">Categoría:</label>
                    <select
                    className="categotyEdit"
                      id="category"
                      onChange={(e) => {
                        setCategoryEdit(e.target.value);
                      }}
                      required
                      value={categoryEdit}
                      name="category"
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="image">
                    <label id="labelEdit" htmlFor="image">Foto:</label>
                    <input
                    className="fileEdit"
                      type="file"
                      id="image"
                      onChange={(e) => setImageEdit(e.target.files[0])}
                      name="image"
                    />
                    
                  </div>
                  <div  className="button-form-createNew">
                    <button id="button-form-EditNew" type="submit">Editar noticia</button>
                  </div>
                </form>
              </div>
            </section>
          </section>
        </section>
      ) : null}
    </section>
  );
};

export default NewsDetail;
