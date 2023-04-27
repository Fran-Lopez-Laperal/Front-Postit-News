import React, { useContext, useEffect, useState } from "react";
import "./NewsDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteNewsService, getNewDetailDataService, getVoteNews } from "../service";
import { AuthContext } from "../../context/AuthContext";
import imgForNew from "../../assets/imgForNew.png";
import { getCategoriesService } from "../service";
import { decodeToken, useJwt } from "react-jwt"



const NewsDetail = () => {
  const { token, setFilter } = useContext(AuthContext);
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false)
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [category, setCategory] = useState()
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState(null);
  const { idNew } = useParams();
  const [editNews, setEditNews] = useState()
  const [showModal, setShowModal] = useState(false)
  

  let idTokenDecoded = decodeToken(token)
  const handleExpandedButton = () => {
    setExpanded(!expanded);
  };

  const closeModal = () => {
    setShowModal(!showModal);
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
        setEditNews(...newDetail)
        console.log(action);
      } catch (error) {
        setError(error);
      }

    };

    fetchNew()


      ;
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

  const handleEdit = (event) => {
    
    event.preventDefault()
    setEditNews({...editNews,
      [event.target.name]: event.target.value
    })

    console.log(editNews)
  };

  const handleDelete = async (id) => {


    let accept = confirm("Vas a borrar la foto con id " + id)

    if (accept) {
      const res = await deleteNewsService(token, id)

      if (res.status != "ok") return alert("Hubo un error al eliminar la noticia")

      alert("Noticia eliminada")
      navigate("/")
    } else {
      alert("no has borrado nada")
    }


  };

  const editFunction = () => {
    setEdit(!edit)
    
  }

  const handleSubmit = async (e) => {
    console.log(e.target)
    e.preventDefault()
    const formDataNew = new FormData(e.target);
    formDataNew.append("title", editNews.title);
    formDataNew.append("introduction", editNews.introduction);
    formDataNew.append("text", editNews.text);
    formDataNew.append("category", category);
    formDataNew.append("photo", photo);
    
    console.log(editNews.title)

    const response = await fetch(`http://localhost:4000/news/${news[0].id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: formDataNew
    });

    console.log(response)

    alert("Noticia actualizada correctamente")

  }
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
                    {idUser == idTokenDecoded?.id ? <button onClick={editFunction} className="expansion-item">
                      <div className="expansion-content">
                        <div id="fa-detail" className="fa fa-edit"></div>
                      </div>
                    </button> : null}
                    {idUser == idTokenDecoded?.id ? <button
                      onClick={() => handleDelete(id)}
                      className="expansion-item"
                    >
                      <div className="expansion-content">
                        <div id="fa-detail" className="fa fa-trash"></div>
                      </div>
                    </button> : null}
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

              <section className="createNew">
                <div className="form-container-createNew">
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
                      <label htmlFor="title">Título:</label>
                      <input
                        type="text"
                        id="title"
                        value={editNews.title}
                        minLength="5"
                        maxLength="30"
                        onChange={handleEdit}
                        required
                        name="title"
                      />
                    </div>
                    <div className="introduction">
                      <label htmlFor="introduction">Introducción:</label>
                      <textarea
                        id="introduction"
                        minLength="5"
                        maxLength="50"
                        value={editNews.introduction}
                        onChange={handleEdit}
                        required
                        name="introduction"
                      />
                    </div>
                    <div className="text">
                      <label htmlFor="text">Texto:</label>
                      <textarea
                        id="text"
                        minLength="5"
                        maxLength="2500"
                        value={editNews.text}
                        onChange={handleEdit}
                        required
                        name="text"
                      />
                    </div>
                    <div className="category">
                      <label htmlFor="category">Categoría:</label>
                      <select
                        id="category"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        name="category"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="photo">
                      <label htmlFor="photo">Foto:</label>
                      <input
                        type="file"
                        id="photo"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        name="photo"
                      />
                      {photo ? (
                        <figure className="createNew-figure">
                          <img
                            id="selectedPhoto"
                            src={URL.createObjectURL(photo)}
                            alt="foto-seleccionada"
                          />
                        </figure>
                      ) : null}
                    </div>
                    <div className="button-form-createNew">
                      <button type="submit">Editar noticia</button>
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
