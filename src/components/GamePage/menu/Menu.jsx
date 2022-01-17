import React from "react";

import "./menu.scss";

export default function Menu() {
  function leave() {
    // dispatch(leaveTheGame(game.id));
    console.log("leave");
  }

  return (
    <div className="game-menu ">
      <div className="game-menu__column">
        <button className="game-menu__btn-menu" onClick={() => setActive((val) => !val)}>
          {active ? ">>" : "<<"}
        </button>
      </div>

      <div className="game-menu__column">
        <div className="game-menu__row">
          <h2 className="game-menu__title-menu">Menu</h2>
          <button onClick={leave} className="game-menu__btn-leave">
            Exit game
          </button>
        </div>


        {/* <div className="menu__row">
          <MenuPlayers />
        </div> */}

        {/* {game.driving.user_id === userid && (
          <div className="menu__row">
            <MenuGame />
          </div>
        )}  */}
      </div>
    </div>
  );
}
