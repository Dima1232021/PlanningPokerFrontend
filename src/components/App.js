import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import OutputErrors from "./OutputErrors";
import { logged_in } from "../actions/authenticate";

import "./app.scss";
import Routes from "../routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logged_in());
  }, []);

  return (
    <div className="wrapper">
      <OutputErrors />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
