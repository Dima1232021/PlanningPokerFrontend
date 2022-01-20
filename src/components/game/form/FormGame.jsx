import React from "react";
import { useSelector } from "react-redux";

import "./formGame.scss";
import FormMenu from "./FormMenu";
import HeaderForm from "./HeaderForm";
export default function () {
  const { userId } = useSelector((state) => state.auth);
  const { driving, isActiveMenu } = useSelector((state) => state.game);
  return (
    <div className={`form-game ${isActiveMenu && "active"}`}>
      <HeaderForm />

      {driving.user_id === userId && (
        <div className="form__row">
          <FormMenu />
        </div>
      )}

      {/* <div className="form__row">
        <FormStory />
      </div>

      <div className="form__row">
        <FormUsers />
      </div>

      <div className="form__row">
        <FormPlayerCards />
      </div>  */}
    </div>
  );
}
