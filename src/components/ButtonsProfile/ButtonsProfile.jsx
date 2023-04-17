import {
  deleteUserService,
  editUserService,
  getMyUserDataService,
} from "../service";

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import "./ButtonsProfile.css";

const ButtonsProfile = ({
  setHandleEditUser,
  handleEditUser,
  name,
  email,
  bio,
  setError,
  setClickInImg,
}) => {
  const navigate = useNavigate();
  const { token, setUser, logout } = useContext(AuthContext);
  const handleSendChanges = async () => {
    try {
      await editUserService({
        name,
        email,
        bio,
        token,
      });

      const newDataUser = await getMyUserDataService({ token });

      console.log(newDataUser);
      navigate("/perfil");
      setError("");
      setHandleEditUser(false);
      setUser(newDataUser);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  const handleDeleteUser = async () => {
    try {
      await deleteUserService({ token });
      logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };
  return (
    <section id="buttons">
      {handleEditUser ? (
        <>
          <button
            onClick={() => {
              setClickInImg(false);
              handleSendChanges();
            }}
          >
            Guardar cambios
          </button>

          <button
            onClick={() => {
              setHandleEditUser(false);
              setClickInImg(false);
            }}
          >
            Cancelar
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setHandleEditUser(true);
          }}
        >
          Editar
        </button>
      )}

      <button
        onClick={() => {
          handleDeleteUser();
        }}
      >
        Eliminar
      </button>
    </section>
  );
};

export default ButtonsProfile;
