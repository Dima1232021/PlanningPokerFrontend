import React from "react";
import "./switch.scss";

export default function Switch({ value, setValue }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
      />
      <span className="slider round"></span>
    </label>
  );
}
