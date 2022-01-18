import React from "react";
import { NavLink } from "react-router-dom";
import "./noMatch.scss";

export default function NoMatch() {
  return (
    <div className="no-match">
      <div className="container">
        <div className="no-match__row">
          <h2 className="no-match__title">404</h2>
          <p className="no-match__subtitle">Page Not Found</p>
          <p className="no-match__text">
            The Page you are looking for doesn't exist or an other error occured. Go to{" "}
            <NavLink to="/" className="no-match__link">
              Main Page
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
