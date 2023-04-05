import React, { useState } from 'react'
import {createNewService} from '../service';
import { useNavigate } from 'react-router-dom';
//import {categories} from "../ListCategories/ListCategories";
import './CreateNew.css';
import HomePage from '../HomePage/HomePage';


const CreateNew = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState ('');
  const [introduction, setIntroduction] = useState ('');
  const [text, setText] = useState ('');
  //const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
     try {
      const formDataNew = new FormData();

      formData.append("title", title);
      formData.append("introduction", introduction);
      formData.append("text", text);
      formData.append("category", category);
      formData.append("photo", photo);

      await createNewService({ formDataNew });

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
    <div className='form-container-createNew'>
      <form className='form-createNew' onSubmit={handleSubmit}>
        <div className='title'>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className='introduction'>
          <label htmlFor="introduction">Introducción:</label>
          <textarea
            id="introduction"
            value={introduction}
            onChange={(event) => setIntroduction(event.target.value)}
            required
          />
        </div>
        <div className='text'>
          <label htmlFor="text">Texto:</label>
          <textarea
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            required
          />
        </div>
        {/* <div className= 'category'>
          <label htmlFor="category">Categoría:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <ListaCategories />
          </select>
        </div> */}
        <div className='photo'>
          <label htmlFor="photo">Foto:</label>
          <input
            type="file"
            id="photo"
            onChange={(event) => setPhoto(event.target.files[0])}
          />
        </div>
        <div className='button-form-createNew'>
        <button type="submit">Crear noticia</button>
        </div>
      </form>
    </div>
  );
}


export default CreateNew;