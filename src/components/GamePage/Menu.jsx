import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leaveTheGame } from "../../actions/Game";
import MenuBlock from "../menuBlock/MenuBlock";
import UsersBlock from "../usersBlock/UsersBlock";

export default function Menu({ active, setActive }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const invitationId = useSelector((state) => state.games.invitationId);
  const userId = useSelector((state) => state.user.userid);

  const [players, setPlayers] = useState("Гравці");

  function leave() {
    dispatch(leaveTheGame(game, invitationId));
  }

  function deleteUser(user) {
    console.log(user);
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
            Вийти
          </button>
        </div>

        {userId === game.driving.user_id && (
          <div className="menu__row">
            <div className="menu__users">
              <MenuBlock
                btn1="Гравці"
                btn2="Запросити"
                value={players}
                setValue={setPlayers}
              />
              {players === "Гравці" ? (
                <>
                  <p className="menu__text">Запрошені користувачі</p>
                  <UsersBlock
                    value={game.players}
                    keyValue={"user_id"}
                    name={"user_name"}
                    nameBtn="Видалити"
                    setValue={deleteUser}
                  />
                </>
              ) : null}
            </div>
          </div>
        )}

        <div className="menu__row">
          <div className="menu__users">
            <p className="menu__text">Зараз у грі</p>
            <UsersBlock
              value={game.users_joined}
              keyValue={"user_id"}
              name={"user_name"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
