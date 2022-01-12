import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import OutputErrors from "./OutputErrors";
import { useActions, useAddErrors } from "../hooks/index";
import { AppRouter } from "./AppRouter";
import "./app.scss";

function App() {
  const { addError } = useAddErrors();
  const { loggedInAction } = useActions();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    loggedInAction(addError);
  }, []);

  // useEffect(() => {
  //   if (loggedIn) {
  //     dispatch(searchGameYouHaveJoined());
  //     dispatch(showUser());
  //   }
  // }, [loggedIn]);

  return (
    <div className="wrapper">
      {/* <ListActionCable /> */}
      <OutputErrors />

      <AppRouter />
    </div>
  );
}

export default App;
