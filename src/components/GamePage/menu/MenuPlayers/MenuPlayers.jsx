import React, { useState } from "react";
import { useSelector } from "react-redux";
import UsersBlock from "../../../usersBlock/UsersBlock";
import MenuBlock from "../../../menuBlock/MenuBlock";
import { declineInvitation } from "../../../../actions/Game";

import "./menuPlayers.scss";

export default function MenuPlayers() {
  const invitedUsers = useSelector((state) => state.games.invitedUsers);
  const onlineUsers = useSelector((state) => state.games.onlineUsers);
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const gameId = useSelector((state) => state.games.gameId);
  const userid = useSelector((state) => state.user.userid);
  const [infoPlayers, setInfoPlayers] = useState("In the game");

  function expelPlayer(user) {
    declineInvitation(gameId, user.id);
  }

  return (
    <div className="menu-players">
      <MenuBlock
        btn1="In the game"
        btn2="Invited players"
        value={infoPlayers}
        setValue={setInfoPlayers}
      />
      {infoPlayers == "In the game" ? (
        <UsersBlock value={onlineUsers} keyValue={"id"} name={"username"} />
      ) : (
        <div className="usersBlock">
          <ul className="usersBlock__list">
            {invitedUsers.map((val) => {
              return (
                <li key={val.id} className="usersBlock__link">
                  <span>{val.username}</span>
                  {val.id != userid && game.driving.user_id == userid && (
                    <button onClick={() => expelPlayer(val)}>Expel</button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
