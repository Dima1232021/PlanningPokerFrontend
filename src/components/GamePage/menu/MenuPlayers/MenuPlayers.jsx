import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersBlock from "../../../usersBlock/UsersBlock";
import MenuBlock from "../../../menuBlock/MenuBlock";

import "./menuPlayers.scss";

export default function MenuPlayers() {
  const invitedUsers = useSelector((state) => state.games.invitedUsers);
  const onlineUsers = useSelector((state) => state.games.onlineUsers);
  const [infoPlayers, setInfoPlayers] = useState("In the game");
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
        <UsersBlock value={invitedUsers} keyValue={"id"} name={"username"} />
      )}
    </div>
  );
}
