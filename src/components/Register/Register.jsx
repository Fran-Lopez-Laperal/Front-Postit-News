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
      await registerUserService({
        name,
        email,
        password: pass1,
        bio,
        photo,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className="articleRegister">
      {error !== "" ? <p className="error">{error}</p> : null}
      <h2>FORMULARIO DE REGISTRO</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="formText">
          <label htmlFor="name">Nombre</label>
          <input
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
              setPhoto({ name: e.target.files[0].name });
            }}
          />

          {photo ? (
            <img
              id="selectedPhoto"
              //src={URL.createObjectURL(photo)}
              alt="foto-seleccionada"
            />
          ) : null}
        </fieldset>
        {loading ? <div>Cargando!</div> : <button>¡Crea tu perfil! </button>}
      </form>
    </article>
  );
};

export default Register;
