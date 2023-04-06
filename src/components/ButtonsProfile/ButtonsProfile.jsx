import {
  deleteUserService,
  editUserService,
  getMyUserDataService,
} from "../service";

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
  const { token, setUser } = useContext(AuthContext);
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
  const handleDeleteUSer = async () => {
    try {
      await deleteUserService({ token });
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
              handleSendChanges();
            }}
          >
            Guardar cambios
          </button>

          <button
            onClick={() => {
              setHandleEditUser(false);
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
          handleDeleteUSer();
        }}
      >
        Eliminar
      </button>
    </section>
  );
};

export default ButtonsProfile;
