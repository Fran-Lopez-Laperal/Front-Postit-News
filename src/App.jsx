import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PrivacityCookies from "./components/FooterItems/PrivacityCookies/PrivacityCookies";
import PrivacityPolicy from "./components/FooterItems/PrivacityPolicy/PrivacityPolicy";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Spinner from "./components/Spinner/Spinner";
import NewsDetail from "./components/NewsDetail/NewsDetail";
import CreateNew from "./components/CreateNew/CreateNew";
const App = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowSpinner(true);
    }, 1000);
  }, []);

  return (
    <>
      {!showSpinner ? (
        <Spinner />
      ) : (
        <main>
          <Header setFilter={setFilter} />

          <Routes>
            <Route
              path="/"
              element={<HomePage setFilter={setFilter} filter={filter} />}
            />
            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="news/:idNew" element={<NewsDetail />} />
            {/* <Route path="/resultado/:parametro" element={'ResultSearch'}/> */}
            <Route path="/politica-privacidad" element={<PrivacityPolicy />} />
            <Route path="/politica-cookies" element={<PrivacityCookies />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/crear-noticia" element={<CreateNew />} />
          </Routes>
          <Outlet />
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
