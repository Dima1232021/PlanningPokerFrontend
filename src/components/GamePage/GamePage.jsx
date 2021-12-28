import React, { useState } from "react";
import Form from "./form/Form";
import Menu from "./menu/Menu";

import "./game.scss";

export default function GamePage() {
  const [active, setActive] = useState(true);

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
