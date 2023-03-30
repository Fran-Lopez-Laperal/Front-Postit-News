import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loginUserService } from '../service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({email,password})
      console.log(data);
      login(data);
      navigate('/');

    } catch (error){
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
        
        
          <label htmlFor="password">Password</label>
          <input type="password" id= "password" name="password" required onChange={(e) => setPassword(e.target.value) } />
        
        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};

export default Login;
