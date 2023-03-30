import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <article className="articleRegister">
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          minLength={3}
          maxLength={20}
        ></input>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" id="email"></input>
        <label htmlFor="pass1">Contraseña</label>
        <input type="password" name="pass1" id="pass1"></input>
        <label htmlFor="pass2">Confirmar contraseña</label>
        <input type="password" name="pass2" id="pass2"></input>
        <label htmlFor="bio">Biografía</label>
        <textarea
          type="textarea"
          name="bio"
          id="bio"
          minLength={50}
          maxLength={200}
          placeholder="Explica brevemente quién eres"
        ></textarea>
        <button>¡Crea tu perfil! </button>
      </form>
    </article>
  );
};

export default Register;
