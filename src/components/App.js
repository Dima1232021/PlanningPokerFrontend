import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Error from "./error/Error";
import { useAddErrors } from "../hooks/index";
import useActions from "../hooks/useActions";
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
      <Error />

      <AppRouter />
    </div>
  );
}

export default App;
