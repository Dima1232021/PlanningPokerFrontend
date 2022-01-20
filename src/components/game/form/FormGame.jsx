import React from "react";
import { useSelector } from "react-redux";
import FormAnswers from "./FormAnswers";
import FormCards from "./FormCards";

import "./formGame.scss";
import FormMenu from "./FormMenu";
import FormStory from "./FormStory";
import HeaderForm from "./HeaderForm";
export default function () {
  const { userId } = useSelector((state) => state.auth);
  const { driving, isActiveMenu } = useSelector((state) => state.game);
  return (
    <div className={`form-game ${isActiveMenu && "active"}`}>
      <HeaderForm />

      {driving.user_id === userId && <FormMenu />}

      <FormStory />

      <FormAnswers />

      <FormCards />
    </div>
  );
}
