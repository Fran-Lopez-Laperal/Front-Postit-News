import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

import posit from "../../assets/posit.png";
import { editUserService } from "../service";

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [handleEditUser, setHandleEditUser] = useState(false);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState("");

  let userImg = `http://localhost:4000/images/${user?.avatar}`;

  const disabled = "disabled";

  // const Input = ({ state, inputName, setValue }) => {
  //   console.log(name);
  //   return handleEditUser ? (
  //     <input
  //       type={inputName}
  //       id={inputName}
  //       name={inputName}
  //       value={state}
  //       onChange={(e) => {
  //         setValue(e.target.value);
  //       }}
  //     />
  //   ) : (
  //     <input
  //       type={inputName}
  //       id={inputName}
  //       name={inputName}
  //       value={user[inputName]}
  //       disabled
  //     />
  //   );
  // };

  console.log(name);

  return user ? (
    <>
      <article id="articleUserProfile">
        <section id="userProfile">
          <section className="dataProfile">
            <h2>Bienvenid@ a tu perfil {user.name}</h2>
            <ul>
              <li>
                <label name="name"> Nombre </label>
                {handleEditUser ? (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name === "" ? user.name : name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    disabled
                  />
                )}
              </li>
              <li>
                <label name="email"> Email </label>
                {handleEditUser ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email === "" ? user.email : email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    disabled
                  />
                )}
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
          {handleEditUser ? (
            <button
              onClick={() => {
                setHandleEditUser(false);
                editUserService({ name, email, bio, token });
              }}
            >
              Guardar cambios
            </button>
          ) : (
            <button
              onClick={() => {
                setHandleEditUser(true);
              }}
            >
              Editar
            </button>
          )}

          <button>Eliminar</button>
        </section>
      </article>
    </>
  ) : null;
};

export default Profile;
