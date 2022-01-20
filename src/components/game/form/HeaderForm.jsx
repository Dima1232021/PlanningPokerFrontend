import React from "react";
import { useSelector } from "react-redux";

export default function HeaderForm() {
  const { driving, nameGame } = useSelector((state) => state.game);
  return (
    <div className="form-game__row">
      <div className="form-game__header">
        <h2 className="form-game__title">{nameGame}</h2>
        <p className="form-game__name">
          <b>Driving: &nbsp;</b>
          {driving.user_name}
        </p>
      </div>
    </div>
  );
}
