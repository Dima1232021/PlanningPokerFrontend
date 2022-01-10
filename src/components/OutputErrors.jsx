import React from "react";
import { useSelector } from "react-redux";

export default function OutputErrors() {
  const errors = useSelector((state) => state.errors.errors);
  return (
    !!errors.length && (
      <div className="error">
        <ul className="error__list">
          {errors.map((error) => {
            return (
              <li key={error.id} className="error__link">
                {error.message}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
