import React, { useState, useEffect } from "react";
import { useActions, useAddErrors, useInput } from "../../hooks";
import Switch from "../../components/switch/Switch";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function BlockMenu({ stories, setStories }) {
  const history = useHistory();
  const { addError } = useAddErrors();
  const { addOwnGameAction, setIsCreateGameAction } = useActions();
  const { isLoading, isCreateGame } = useSelector((store) => store.games);
  const nameGame = useInput("", {}, "Enter a name for the game");
  const [player, setPlayer] = useState(false);
  const [autoFlip, setAutoFlip] = useState(false);

  useEffect(() => {
    const storedNames = localStorage.getItem("nameGame");
    storedNames && nameGame.setValue(storedNames);
  }, []);

  function createGame() {
    addOwnGameAction({ nameGame: nameGame.value, stories, player, autoFlip }, addError);
    localStorage.clear();
  }
  useEffect(() => {
    !isLoading && isCreateGame && history.push("/");
    return () => setIsCreateGameAction(false);
  }, [isLoading]);

  return (
    <div className="create-game__block">
      <div className="create-game__row">
        <input
          type="text"
          className="create-game__input"
          value={nameGame.value}
          onChange={(e) => {
            nameGame.onChange(e);
            localStorage.setItem("nameGame", e.target.value);
          }}
          placeholder="Enter a name for the game"
          onBlur={nameGame.outputError}
        ></input>
      </div>
      <div className="create-game__row">
        <div className="create-game__column">
          <div className="create-game__switch">
            <p className="create-game__name">Take part in the game</p>
            <Switch value={autoFlip} setValue={() => setAutoFlip((val) => !val)} />
          </div>
          <div className="create-game__switch">
            <p className="create-game__name">Flip cards automatically</p>
            <Switch value={player} setValue={() => setPlayer((val) => !val)} />
          </div>
        </div>
        <div className="create-game__column">
          <NavLink className="create-game__btn-cancel create-game__btn" to="/">
            Cancel
          </NavLink>
          <button className="create-game__btn-create create-game__btn" to="/" onClick={createGame}>
            Create a game
            {isLoading && (
              <div className="loader">
                <div className="loader__row loader__row-min"></div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlockMenu;
