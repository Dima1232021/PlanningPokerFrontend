import React from "react";
import { useSelector } from "react-redux";
import useActions from "../../../hooks/useActions";
import useAddErrors from "../../../hooks/useAddErrors";
import Switch from "../../switch/Switch";

export default function SetingsGame() {
  const { addError } = useAddErrors();
  const { changeGameSettingsStatusChangeAction, changeGameSettingsAutoFlipCardsAction } =
    useActions();
  const { gameId, flipСardsAutomatically, statusChange } = useSelector((state) => state.game);

  function changeGameSettingsStatusChange() {
    changeGameSettingsStatusChangeAction({ gameId }, addError);
  }

  function changeGameSettingsAutoFlipCards() {
    changeGameSettingsAutoFlipCardsAction({ gameId }, addError);
  }

  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Setings Game</h3>
      </div>

      <div className="game-menu__switch">
        <p className="game-menu__name">Allow users to change status</p>
        <Switch value={statusChange} setValue={changeGameSettingsStatusChange} />
      </div>
      <div className="game-menu__switch">
        <p className="game-menu__name">Flip cards automatically</p>
        <Switch value={flipСardsAutomatically} setValue={changeGameSettingsAutoFlipCards} />
      </div>
    </div>
  );
}
