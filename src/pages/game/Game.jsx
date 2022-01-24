import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MenuGame from "../../components/game/menu/MenuGame";
import FormGame from "../../components/game/form/FormGame";
import "./game.scss";
import { useActions } from "../../hooks";

function GamePage() {
  const { changeHistoryNumber, setIsActivePage } = useActions();
  const { isActiveMenu, stories, historyNumber, urlGame } = useSelector((state) => state.game);

  useEffect(() => {
    setIsActivePage(true);
    return () => setIsActivePage(false);
  }, [urlGame]);

  useEffect(() => {
    stories.length - 1 < historyNumber && changeHistoryNumber({ historyNumber: 0 });
  }, [stories]);
  return (
    <div className="game">
      <div className="game__column">
        <FormGame />
      </div>
      <div className={`game__column ${isActiveMenu && "active"}`}>
        <MenuGame />
      </div>
    </div>
  );
}

export default GamePage;
