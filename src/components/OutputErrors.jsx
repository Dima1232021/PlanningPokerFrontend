import React from "react";
import { useSelector } from "react-redux";

export default function OutputErrors() {
  const errors = useSelector((state) => state.errors.errors);
  return (
    !!errors.length && (
      <div className="error">
        <ul className="error__list">
          {errors.map((message, index) => {
            return (
              <li key={index} className="error__link">
                {message}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
