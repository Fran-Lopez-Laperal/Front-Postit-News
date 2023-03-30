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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, pass1, pass2, bio);
  };
  return (
    <article className="articleRegister">
      <form onSubmit={handleSubmit}>
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
        <button>¡Crea tu perfil! </button>
      </form>
    </article>
  );
};

export default Register;
