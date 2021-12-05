import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Form({ active }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  return (
    <div className={`game__form form ${active && "active"}`}>
      <div className="form__gg"></div>
    </div>
  );
}
