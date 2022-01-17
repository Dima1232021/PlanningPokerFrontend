import React from "react";
import { useSelector } from "react-redux";
import "./loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
