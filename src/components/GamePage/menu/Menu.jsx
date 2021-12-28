import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../../actions/Game";
import MenuGame from "./MenuGame/MenuGame";
import MenuPlayers from "./MenuPlayers/MenuPlayers";
import MenuStories from "./MenuStories/MenuStories";

import "./menu.scss";

export default function Menu({ active, setActive }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const userid = useSelector((state) => state.user.userid);
  const invitationId = useSelector((state) => state.games.invitationId);

  function leave() {
    dispatch(leaveTheGame(game, invitationId));
  }

  return (
    <div className="game__menu menu">
      <div className="menu__column">
        <button
          className="menu__btn-menu"
          onClick={() => setActive((val) => !val)}
        >
          {active ? ">>" : "<<"}
        </button>
      </div>

      <div className="menu__column">
        <div className="menu__row">
          <h2 className="menu__title">Menu</h2>
          <button onClick={leave} className="menu__btn-leave">
            Exit game
          </button>
        </div>

        <div className="menu__row">
          <MenuStories />
        </div>

        <div className="menu__row">
          <MenuPlayers />
        </div>

        {game.driving.user_id === userid && (
          <div className="menu__row">
            <MenuGame />
          </div>
        )}
      </div>
    </div>
  );
}
