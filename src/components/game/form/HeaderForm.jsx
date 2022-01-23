import React from "react";
import { useSelector } from "react-redux";

export default function HeaderForm() {
  const { driving, nameGame } = useSelector((state) => state.game);
  const { userId } = useSelector((state) => state.auth);
  return (
    <div className="form-game__row">
      <div className="form-game__header">
        <h2 className="form-game__title">{nameGame}</h2>
        <p className="form-game__name">
          <b>Driving: &nbsp;</b>
          {userId === driving.user_id ? "You" : driving.user_name}
        </p>
      </div>
    </div>
  );
}
