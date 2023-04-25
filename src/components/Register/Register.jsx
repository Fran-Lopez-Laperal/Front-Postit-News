import { registerUserService } from "../service";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", pass1);
      formData.append("bio", bio);
      formData.append("photo", photo);

      await registerUserService({ formData });

      if (!error) {
        navigate("/");
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="register-container">
      <article className="articleRegister">
        <h1 className="h1-title">Registro</h1>

        <form id="myForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <fieldset className="formText">
            <label htmlFor="name">Nombre</label>
            <input
              className="input-register"
              type="text"
              name="name"
              id="name"
              minLength={3}
              maxLength={20}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label htmlFor="email">Correo electrónico</label>
            <input
              className="input-register"
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <label htmlFor="pass1">Contraseña</label>
            <input
              className="input-register"
              type="password"
              name="pass1"
              id="pass1"
              required
              value={pass1}
              onChange={(e) => {
                setPass1(e.target.value);
              }}
            ></input>
            <label htmlFor="pass2">Confirmar contraseña</label>
            <input
              className="input-register"
              type="password"
              name="pass2"
              id="pass2"
              required
              value={pass2}
              onChange={(e) => {
                setPass2(e.target.value);
              }}
            ></input>
            <label htmlFor="bio">Biografía</label>
            <textarea
              className="input-register"
              type="textarea"
              name="bio"
              id="bio"
              minLength={50}
              maxLength={200}
              placeholder="Explica brevemente quién eres"
              required
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            ></textarea>
          </fieldset>
          <fieldset className="formImg">
            <label htmlFor="photo">Imagen de perfil</label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept={"image/*"}
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
            />

            {photo ? (
              <img
                id="selectedPhoto"
                src={URL.createObjectURL(photo)}
                alt="foto-seleccionada"
              />
            ) : null}
          </fieldset>
          <section className="button-register">
            <button className="button-register-class">¡Crea tu perfil! </button>
          </section>
          <section className="p-error-form">
            {error !== "" ? <p className="error">{error}</p> : null}
          </section>
        </form>
      </article>
    </div>
  );
};

export default Register;
