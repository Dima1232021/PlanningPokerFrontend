import React from "react";
import { useSelector } from "react-redux";
import "./loader.scss";

export default function Loader() {
  const { isLoading } = useSelector((state) => state.auth);
  return (
    isLoading && (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  );
}
