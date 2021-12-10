import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form/Form";
import Menu from "./menu/Menu";

import "./game.scss";

export default function GamePage() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  const [active, setActive] = useState(false);

  return (
    <div className="game">
      <div className="game__column">
        <Form active={active} />
      </div>

      <div className={`game__column ${!active && "none"}`}>
        <Menu active={active} setActive={setActive} />
      </div>
    </div>
  );
}
