import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersBlock from "../../../usersBlock/UsersBlock";
import MenuBlock from "../../../menuBlock/MenuBlock";

import "./menuPlayers.scss";

export default function MenuPlayers() {
  const invitedPlayers = useSelector((state) => state.games.invitedPlayers);
  const playersOnline = useSelector((state) => state.games.playersOnline);
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
        <UsersBlock value={playersOnline} keyValue={"id"} name={"username"} />
      ) : (
        <UsersBlock value={invitedPlayers} keyValue={"id"} name={"username"} />
      )}
    </div>
  );
}
