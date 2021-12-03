import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";

import "./game.scss";

export default function GamePage() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [active, setActive] = useState(false);

  console.log(game);

  function leave() {
    dispatch(leaveTheGame(game));
  }

  return (
    <div className="game">
      <div className="game__column">
        <div className="game__header">
          <h2 className="game__title">{game.name_game}</h2>
          <p>
            <span>Ведучий гри: {game.driving.user_name}</span>
          </p>
        </div>
        <div className="game__form form"></div>
      </div>
      <div className="game__column">
        <div className="game__menu menu">
          <div className="menu__row">
            <h2 className="menu__title">Menu</h2>
            <button onClick={leave}>Вийти</button>
          </div>
          <div className="menu__row">
            <div className="menu__invited-users">
              <div className="menu__block-users block-users">
                <div className="block-users__menu menu__block">
                  
                </div>

                <ul>
                  {game.players.map((user) => {
                    return <li key={user.user_id}>{user.user_name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
