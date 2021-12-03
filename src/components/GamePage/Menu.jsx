import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";
import MenuBlock from "../menuBlock/MenuBlock";

export default function Menu() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [active, setActive] = useState("Гравці");

  function leave() {
    dispatch(leaveTheGame(game));
  }

  return (
    <div className="game__menu menu">
      <div className="menu__row">
        <h2 className="menu__title">Menu</h2>
        <button onClick={leave} className="menu__btn-leave">
          Вийти
        </button>
      </div>

      <div className="menu__row">
        <div className="menu__invited-users">
          <MenuBlock
            btn1="Гравці"
            btn2="Запросити"
            value={active}
            setValue={setActive}
          />
        </div>
      </div>
    </div>
  );
}
