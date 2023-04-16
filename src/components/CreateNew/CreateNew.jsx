import React, { useState, useContext, useEffect } from "react";
import { createNewService, getCategoriesService } from "../service";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { AuthContext } from "../../context/AuthContext";
import { loginUserService } from "../service";
import Login from "../Login/Login";

//import {categories} from "../ListCategories/ListCategories";
import "./CreateNew.css";
import HomePage from "../HomePage/HomePage";

const CreateNew = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [text, setText] = useState("");

  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }; */
  //evento para al seleccionar en el select la categoría se cambie el valor

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchGetAllCategories = async () => {
      try {
        const allCategories = await getCategoriesService();
        setCategories(allCategories);
        setSelectedCategory(allCategories[0].id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetAllCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Debe iniciar sesión para crear una noticia.");
      return;
    }

    setLoading(true);
    try {
      const formDataNew = new FormData(e.target);
      //e.target??
      formDataNew.append("title", title);
      formDataNew.append("introduction", introduction);
      formDataNew.append("text", text);
      formDataNew.append("category", selectedCategory);
      formDataNew.append("photo", photo);

      const response = await createNewService({ formDataNew, token });
      console.log(response);

      if (!error) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container-createNew">
      <h1 className="h1-title">Crea tu noticia</h1>
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
            value={title}
            minLength="5"
            maxLength="50"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="introduction">
          <label htmlFor="introduction">Introducción:</label>
          <textarea
            id="introduction"
            minLength="5"
            maxLength="50"
            value={introduction}
            onChange={(event) => setIntroduction(event.target.value)}
            required
          />
        </div>
        <div className="text">
          <label htmlFor="text">Texto:</label>
          <textarea
            id="text"
            minLength="5"
            maxLength="500"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
          />
        </div>
        <div className="category">
          <label htmlFor="category">Categoría:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="category">
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
        </div> */}
        <div className="photo">
          <label htmlFor="photo">Foto:</label>
          <input
            type="file"
            id="photo"
            onChange={(event) => setPhoto(event.target.files[0])}
          />
          {photo ? (
            <img
              id="selectedPhoto"
              src={URL.createObjectURL(photo)}
              alt="foto-seleccionada"
            />
          ) : null}
        </div>
        <div className="button-form-createNew">
          <button type="submit">Crear noticia</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNew;
