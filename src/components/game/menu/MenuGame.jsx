import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useActions, useAddErrors, useConfirm } from "../../../hooks";
import Stories from "./Stories";

import "./menuGame.scss";

function MenuGame() {
  const history = useHistory();
  const { confirm } = useConfirm();
  const { addError } = useAddErrors();
  const { setIsActiveMenu, liveTheGameAction } = useActions();
  const { isActiveMenu, stories } = useSelector((state) => state.game);

  async function leave() {
    const isConfirmed = await confirm("Do you want to leave the game ?");
    if (isConfirmed) {
      liveTheGameAction(addError);
      history.push("/");
    }
  }

  return (
    <div className="game-menu ">
      <div className="game-menu__column">
        <button className="game-menu__btn-menu btn" onClick={() => setIsActiveMenu(!isActiveMenu)}>
          {isActiveMenu ? ">>" : "<<"}
        </button>
      </div>

      <div className="game-menu__column">
        <div className="game-menu__row">
          <h2 className="game-menu__title">Menu</h2>
          <button onClick={leave} className="game-menu__btn-leave btn">
            Exit game
          </button>
        </div>

        <Stories />

        {/* <div className="menu__row">
          <MenuPlayers />
        </div>

        {game.driving.user_id === userid && (
          <div className="menu__row">
            <MenuGame />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default MenuGame;
