import { deleteUserService, editUserService } from "../service";

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

const ButtonsProfile = ({
  setHandleEditUser,
  handleEditUser,
  name,
  email,
  bio,
  setError,
}) => {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);
  const handleSendChanges = async () => {
    try {
      await editUserService({
        name,
        email,
        bio,
        token,
      });

      navigate("/perfil");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setHandleEditUser(false);
    }
  };
  const handleDeleteUSer = async () => {
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
        <button
          onClick={() => {
            handleSendChanges();
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

      <button
        onClick={() => {
          handleDeleteUSer();
        }}
      >
        Eliminar
      </button>
    </section>
  );
};

export default ButtonsProfile;
