import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState("");
  console.log("user", user);

  let userImg = `http://localhost:4000/images/${user.avatar}`;

  return (
    <>
      <section id="userProfile">
        {" "}
        <h2>Bienvenid@ a tu perfil {user.name}</h2>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Bibliografía: {user.bio}</p>
        <figure>
          <img src={userImg} alt={`avatar-from-${user.name}`} />
        </figure>
        <button>Editar</button>
        <button>Eliminar</button>
      </section>
    </>
  );
};

export default Profile;
