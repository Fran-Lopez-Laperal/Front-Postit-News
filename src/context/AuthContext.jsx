import { createContext, useEffect, useState } from "react";
import { getMyUserDataService } from "../components/service";
import { Link } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [newsFilter, setNewsFilter] = useState([])

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
        setIsLogged(true);
      } catch (error) {
        setToken("");
        setUser(null);
        setIsLogged(false);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);
    //setIsLogged(true);
  };

  const newsFilterFunction= (filterString)=>{
    setNewsFilter(filterString)
  }

  const logout = () => {
    setToken("");
    setUser(null);
    setIsLogged(false);
    <Link to="/"></Link>;
  };

  return (
    <AuthContext.Provider
      value={{ token, user, isLogged, login, logout, setUser, newsFilterFunction, newsFilter }}
    >
      {children}
    </AuthContext.Provider>
  );
};
