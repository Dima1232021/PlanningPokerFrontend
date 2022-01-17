import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors, useActions } from "../hooks/index";
import AppRouter from "./AppRouter";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./app.scss";
import Loader from "./loader/Loader";

function App() {
  const { addError } = useAddErrors();
  const { loggedInAction, getGamesAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isLoaderPage = useSelector((state) => state.game.isLoaderPage);

  useEffect(() => {
    loggedInAction(addError);
  }, []);

  useEffect(() => {
    isAuth && getGamesAction(addError);
  }, [isAuth]);

  return (
    <div className="wrapper relHid">
      <Error />

      {isLoaderPage && <Loader />}
      <Header />
      <div className="content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
