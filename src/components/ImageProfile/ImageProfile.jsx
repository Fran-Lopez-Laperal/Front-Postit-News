import { useContext, useState } from "react";
import imgForUser from "../../assets/imgForUser.png";
import { AuthContext } from "../../context/AuthContext";
import { editAvatarUserService, getMyUserDataService } from "../service";
import "./ImageProfile.css";

const ImageProfile = ({ handleEditUser, clickInImg, setClickInImg }) => {
  const { user, token, setUser } = useContext(AuthContext);

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

      const newDataUser = await getMyUserDataService({ token });

      setUser(newDataUser);

      setClickInImg(false);

      setError("");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  return (
    <>
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
    </>
  );
};

export default ImageProfile;
