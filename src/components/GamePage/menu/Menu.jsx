import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../../actions/Game";
import UsersBlock from "../../usersBlock/UsersBlock";
import StoriesBlock from "../../storiesBlock/StoriesBlock";

export default function Menu({ active, setActive }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const stories = useSelector((state) => state.games.stories);
  const invitationId = useSelector((state) => state.games.invitationId);
  const userId = useSelector((state) => state.user.userid);

  function leave() {
    dispatch(leaveTheGame(game, invitationId));
  }

  return (
    <div className="game__menu menu">
      <div className="menu__column">
        <button
          className="menu__btn-active"
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

        {userId === game.driving.user_id ? (
          <div className="menu__row">
            <div className="menu__storyes">
              <p className="menu__text">Stories</p>
              <StoriesBlock
                value={stories}
                keyValue={"id"}
                name={"body"}
                nameBtn="Edit"
                nameBtn2="Remove"
              />
            </div>
          </div>
        ) : (
          <div className="menu__row">
            <div className="menu__storyes">
              <p className="menu__text">Stories</p>
              <StoriesBlock value={stories} keyValue={"id"} name={"body"} />
            </div>
          </div>
        )}

        <div className="menu__row">
          <div className="menu__users">
            <p className="menu__text">Online</p>
            <UsersBlock
              value={game.users_joined}
              // value={game.players}
              keyValue={"user_id"}
              name={"user_name"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
