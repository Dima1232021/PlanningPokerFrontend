import React from "react";
import { useSelector } from "react-redux";
import MenuGame from "../../components/game/menu/MenuGame";
import "./game.scss";

function GamePage() {
  const { isActiveMenu } = useSelector((state) => state.game);
  return (
    <div className="game">
      <div className="game__column">a</div>
      <div className={`game__column ${isActiveMenu && "active"}`}>
        <MenuGame />
      </div>
    </div>
  );
}

export default GamePage;
