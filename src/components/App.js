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

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);

  useEffect(() => {
    dispatch(logged_in());
  }, []);

  useEffect(() => {
    if (loggedIn) {
      dispatch(searchGameYouHaveJoined());
      dispatch(showUser());
    }
  }, [loggedIn]);

  return (
    <div className="wrapper">
      <ListActionCable />
      <OutputErrors />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
