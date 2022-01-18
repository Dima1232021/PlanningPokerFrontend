import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors, useActions } from "../hooks/index";
import AppRouter from "./AppRouter";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Loader from "./loader/Loader";
import { matchPath } from "react-router";

import "./app.scss";
import Confirm from "./confirm/Confirm";

function App() {
  const { addError } = useAddErrors();
  const { loggedInAction, getGamesAction, findGameYouHaveJoinedAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { isLoaderPage, isActivePage } = useSelector((state) => state.game);
  const path = window.location.pathname;

  useEffect(() => {
    loggedInAction(addError);
  }, []);

  useEffect(() => {
    if (isAuth) {
      findGameYouHaveJoinedAction(addError);
      getGamesAction(addError);
    }
  }, [isAuth]);

  return (
    <div className="wrapper relHid">
      <Error />
      <Confirm />

      {isLoaderPage && <Loader />}

      {!isActivePage && <Header />}
      <div className="content">
        <AppRouter />
      </div>
      {!isActivePage && <Footer />}
    </div>
  );
}

export default App;
