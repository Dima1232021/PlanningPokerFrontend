import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors, useActions } from "../hooks/index";
import AppRouter from "./AppRouter";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Loader from "./loader/Loader";

import "./app.scss";

function App() {
  const { addError } = useAddErrors();
  const { loggedInAction, getGamesAction, findGameYouHaveJoinedAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { isLoaderPage, joinTheGame } = useSelector((state) => state.game);

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

      {isLoaderPage && <Loader />}
      {!joinTheGame && <Header />}

      <div className="content">
        <AppRouter />
      </div>
      {!joinTheGame && <Footer />}
    </div>
  );
}

export default App;
