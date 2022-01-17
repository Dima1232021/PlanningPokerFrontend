import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks";

import "./menuGame.scss";

function MenuGame() {
  const { setIsActiveMenu } = useActions();
  const { isActiveMenu } = useSelector((state) => state.game);
  function leave() {
    console.log("leave");
  }

  return (
    <div className="game-menu ">
      <div className="game-menu__column">
        <button className="game-menu__btn-menu" onClick={() => setIsActiveMenu(!isActiveMenu)}>
          {isActiveMenu ? ">>" : "<<"}
        </button>
      </div>

      <div className="game-menu__column">
        <div className="game-menu__row">
          <h2 className="game-menu__title">Menu</h2>
          <button onClick={leave} className="menu__btn-leave">
            Exit game
          </button>
        </div>

        {/* <div className="menu__row">
          <MenuStories />
        </div>

        <div className="menu__row">
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
