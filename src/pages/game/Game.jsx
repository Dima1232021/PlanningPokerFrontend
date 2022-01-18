import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions, useAddErrors } from "../../hooks";
import MenuGame from "../../components/game/menu/MenuGame";
import "./game.scss";

function GamePage(props) {
  const { addError } = useAddErrors();
  const { joinTheGameAction, setIsActivePage } = useActions();
  const { isActiveMenu, joinTheGame, isLoaderPage } = useSelector((state) => state.game);

  useEffect(() => {
    setIsActivePage(true);
    return () => setIsActivePage(false);
  }, []);
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
