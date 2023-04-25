import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

import ButtonsProfile from "../ButtonsProfile/ButtonsProfile";
import imgForUser from "../../assets/imgForUser.png";
import { editAvatarUserService, getMyUserDataService } from "../service";

const Profile = () => {
  const { user, token, setUser } = useContext(AuthContext);
  const [handleEditUser, setHandleEditUser] = useState(false);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState(user?.bio);

  const [modifyInputName, setModifyInputName] = useState(false);
  const [modifyInputEmail, setModifyInputEmail] = useState(false);
  const [modifyInputBio, setModifyInputBio] = useState(false);

  const [clickInImg, setClickInImg] = useState(false);

  const [error, setError] = useState("");

  const avatarUserDB = user?.avatar
    ? `http://localhost:4000/images/${user?.avatar}`
    : imgForUser;
  const [userImg, setUserImg] = useState(avatarUserDB);

  const changeImage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", e.target.avatar.files[0]);
      await editAvatarUserService({ token, formData });

      setClickInImg(false);

      setError("");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };

  return user ? (
    <div className="login">
      <article className="login-container">
        <section id="userProfile">
          <section className="dataProfile">
            <h2>Bienvenid@ a tu perfil {user.name}</h2>
            <ul className="ul-data">
              <li className="li-data">
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
              <li className="li-data">
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
              <li className="li-data">
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
            {handleEditUser ? (
              <figure className="figure-img">
                <img
                  className="userPhoto"
                  src={userImg}
                  alt={`foto-de-${user?.name}`}
                  onClick={() => {
                    setClickInImg(true);
                  }}
                />
              </figure>
            ) : (
              <figure className="figure-img">
                <img
                  className="userPhoto"
                  src={userImg}
                  alt={`foto-de-${user?.name}`}
                />
              </figure>
            )}
            {clickInImg ? (
              <form encType="multipart/form-data" onSubmit={changeImage}>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept={"image/*"}
                  onChange={(e) => {
                    setUserImg(URL.createObjectURL(e.target.files[0]));
                  }}
                />

                <button>Cambiar avatar</button>
              </form>
            ) : null}
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
            clickInImg={clickInImg}
          />
        </section>
      </article>
    </div>
  ) : null;
};

export default Profile;
