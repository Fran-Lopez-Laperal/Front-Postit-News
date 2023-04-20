import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginUserService } from "../service";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, setFilter } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = await loginUserService({ email, password });

      login(token);
      setFilter(false);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <section className="login-container">
        <h2 id="h2-login">Inicia sesión</h2>
        <form className="form-login" onSubmit={handleForm}>
          <label className="label-login" htmlFor="email">
            Email
          </label>
          <input
            className="input-user"
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label-login" htmlFor="password">
            Password
          </label>
          <input
            className="input-user"
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <section className="button-container">
            <button>Entrar</button>
          </section>
          <section className="p-error-form">
            {error ? <p>{error}</p> : null}
          </section>
        </form>
      </section>
    </div>
  );
};

export default Login;
