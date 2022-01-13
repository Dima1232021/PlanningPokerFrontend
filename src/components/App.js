import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors } from "../hooks/index";
import useActions from "../hooks/useActions";
import { AppRouter } from "./AppRouter";
import "./app.scss";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const { addError } = useAddErrors();
  const { loggedInAction, gamesAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    loggedInAction(addError);
  }, []);

  useEffect(() => {
    isAuth && gamesAction(addError);
  }, [isAuth]);

  // useEffect(() => {
  //   if (isAuth) {
  //     const url = localStorage.getItem("url");
  //     url && history.push(url);
  //   }
  // }, [isAuth]);

  return (
    <div className="wrapper">
      {/* <ListActionCable /> */}
      <Error />

      <AppRouter />
    </div>
  );
}

export default App;
