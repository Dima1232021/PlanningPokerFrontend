import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors, useActions } from "../hooks/index";
import AppRouter from "./AppRouter";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./app.scss";

function App() {
  const { addError } = useAddErrors();
  const { loggedInAction, gamesAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    loggedInAction(addError);
  }, []);

  useEffect(() => {
    isAuth && gamesAction(addError);
  }, [isAuth]);

  return (
    <div className="wrapper">
      <Error />

      <Header />
      <div className="content">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
