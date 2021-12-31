import React, { useState } from "react";
import { useSelector } from "react-redux";
import UsersBlock from "../../../usersBlock/UsersBlock";
import MenuBlock from "../../../menuBlock/MenuBlock";
import { declineInvitation } from "../../../../actions/Game";

import "./menuPlayers.scss";

export default function MenuPlayers() {
  const invitedUsers = useSelector((state) => state.games.invitedUsers);
  const onlineUsers = useSelector((state) => state.games.onlineUsers);
  const gameId = useSelector((state) => state.games.gameId);
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
        <UsersBlock
          value={invitedUsers}
          keyValue={"id"}
          name={"username"}
          nameBtn="Expel"
          setValue={expelPlayer}
        />
      )}
    </div>
  );
}
