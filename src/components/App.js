import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import MainPage from "./MainPage/MainPage";
import AuthenticatePage from "./AuthenticatePage/AuthenticatePage";
import "./app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/authenticate" element={<AuthenticatePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<AuthenticatePage />} />
      </Routes>
    </div>
  );
}

export default App;
