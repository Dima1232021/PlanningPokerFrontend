import React from "react";
import CreateGame from "./createGame/CreateGame";
import { useDispatch, useSelector } from "react-redux";
import { changeActveFormAction } from "../../reducers/gamesReducer";

import "./main.scss";
import InformationForms from "./InformationForms";

export default function MainPage() {
  const dispatch = useDispatch();
  const activeForm = useSelector((state) => state.games.activeForm);

  return (
    <div className="main">
      <div className="container">
        <InformationForms />

        <div className="main__row">
          {!activeForm ? (
            <button
              className="main__btn-create"
              onClick={() => dispatch(changeActveFormAction(true))}
            >
              Створити нову гру
            </button>
          ) : (
            <CreateGame />
          )}
        </div>
      </div>
    </div>
  );
}
