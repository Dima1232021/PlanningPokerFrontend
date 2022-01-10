import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "../routes";
import ListActionCable from "./ListActionCable";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import OutputErrors from "./OutputErrors";
import { logged_in } from "../actions/authenticate";
import { searchGameYouHaveJoined } from "../actions/Game";
import { showUser } from "../actions/users";

import "./app.scss";
import AuthenticatePage from "./AuthenticatePage/AuthenticatePage";
import { useActions } from "../hooks/useActions";

function App() {
  // const dispatch = useDispatch();
  // const loggedIn = useSelector((state) => state.user.logged_in);
  // const inTheGame = useSelector((state) => state.games.inTheGame);

  // useEffect(() => {
  //   dispatch(logged_in());
  // }, []);

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

      {/* {!inTheGame && <Header />} */}
      <Header />
      <AuthenticatePage />
      <Footer />
      {/* {!inTheGame && <Footer />} */}
    </div>
  );
}

export default App;
