import { createContext, useEffect, useState } from "react";
import { getMyUserDataService } from "../components/service";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  useEffect(() => {
    const [tokenValue] = Object.values(token);
    localStorage.setItem("token", JSON.stringify(tokenValue));
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService(token);
        setUser(data);
      } catch (error) {
        logout();
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
