import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Switch from "../../switch/Switch";

export default function SetingsGame() {
  const { game, onlinePlayers } = useSelector((state) => state.game);
  const { userId } = useSelector((state) => state.auth);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    setPlayer(!!onlinePlayers.find((user) => user.id == userId));
  }, [onlinePlayers]);

  function changePlayerSettings() {
    console.log("changePlayerSettings");
  }

  function changesettingsCardFlip() {
    console.log("changesettingsCardFlip");
  }
  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Setings Game</h3>
      </div>

      <div className="game-menu__switch">
        <p className="game-menu__name">Take part in the game</p>
        <Switch value={player} setValue={changePlayerSettings} />
      </div>
      <div className="game-menu__switch">
        <p className="game-menu__name">Flip cards automatically</p>
        <Switch value={game.flipСardsAutomatically} setValue={changesettingsCardFlip} />
      </div>
    </div>
  );
}
