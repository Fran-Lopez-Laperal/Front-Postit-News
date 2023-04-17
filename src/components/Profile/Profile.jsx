import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

import ButtonsProfile from "../ButtonsProfile/ButtonsProfile";
import ImageProfile from "../ImageProfile/ImageProfile";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [handleEditUser, setHandleEditUser] = useState(false);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState(user?.bio);

  const [modifyInputName, setModifyInputName] = useState(false);
  const [modifyInputEmail, setModifyInputEmail] = useState(false);
  const [modifyInputBio, setModifyInputBio] = useState(false);

  const [clickInImg, setClickInImg] = useState(false);

  const [error, setError] = useState("");

  const disabled = "disabled";

  //falta refrescar el user cuando se modifican los datos
  return user ? (
    <div className="login">
      <article className="login-container">
        <section id="userProfile">
          <section className="dataProfile">
            <h2>Bienvenid@ a tu perfil {user.name}</h2>
            <ul>
              <li>
                <label className="label-login" name="name">
                  {" "}
                  Nombre{" "}
                </label>
                {handleEditUser ? (
                  <input
                    className="input-user"
                    type="text"
                    id="name"
                    name="name"
                    onClick={() => setModifyInputName(true)}
                    value={modifyInputName ? name : user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <input
                    className="input-user"
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    disabled
                  />
                )}
              </li>
              <li>
                <label className="label-login" name="email">
                  {" "}
                  Email{" "}
                </label>
                {handleEditUser ? (
                  <input
                    className="input-user"
                    type="email"
                    id="email"
                    name="email"
                    onClick={() => setModifyInputEmail(true)}
                    value={modifyInputEmail ? email : user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <input
                    className="input-user"
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    disabled
                  />
                )}
              </li>
              <li>
                <label className="label-login" name="bio">
                  {" "}
                  Bibliografía{" "}
                </label>
                {handleEditUser ? (
                  <textarea
                    className="input-user"
                    id="bio"
                    name="bio"
                    onClick={() => setModifyInputBio(true)}
                    value={modifyInputBio ? bio : user.bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                ) : (
                  <textarea
                    className="input-user"
                    id="bio"
                    name="bio"
                    value={user.bio}
                    disabled
                  />
                )}
              </li>
            </ul>
            <ImageProfile
              handleEditUser={handleEditUser}
              clickInImg={clickInImg}
              setClickInImg={setClickInImg}
            />
            {error ? <p className="p-error-form ">{error}</p> : null}
          </section>
        </section>
        <section className="button-container">
          <ButtonsProfile
            setHandleEditUser={setHandleEditUser}
            handleEditUser={handleEditUser}
            name={name}
            email={email}
            bio={bio}
            setError={setError}
            setClickInImg={setClickInImg}
          />
        </section>
      </article>
    </div>
  ) : null;
};

export default Profile;
