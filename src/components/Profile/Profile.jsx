import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

import posit from "../../assets/posit.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  let userImg = `http://localhost:4000/images/${user?.avatar}`;

  return user ? (
    <>
      <article id="articleUserProfile">
        <section id="userProfile">
          <section className="dataProfile">
            <h2>Bienvenid@ a tu perfil {user.name}</h2>
            <ul>
              <li>
                <label name="name"> Nombre </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  disabled
                />
              </li>
              <li>
                <label name="email"> Email </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  disabled
                />
              </li>
              <li>
                <label name="email"> Bibliografía </label>
                <textarea id="bio" name="bio" value={user.bio} disabled />
              </li>
            </ul>
          </section>
          <section className="imgProfile">
            {user.avatar ? (
              <figure>
                <img
                  className="userPhoto"
                  src={userImg}
                  alt={`foto-de-${user.name}`}
                />
              </figure>
            ) : (
              <figure>
                <img className="userPhoto" src={posit} alt="usuario-sin-foto" />
              </figure>
            )}
          </section>
        </section>
        <section id="buttons">
          <button
            onClick={() => {
              handleEditUser;
            }}
          >
            Editar
          </button>
          <button>Eliminar</button>
        </section>
      </article>
    </>
  ) : null;
};

export default Profile;
