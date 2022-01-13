import React, { useState, useEffect } from "react";
import Switch from "../../components/switch/Switch";
import { useActions, useAddErrors, useInput } from "../../hooks";
import deleteIcon from "../../icones/delete.svg";
import { NavLink } from "react-router-dom";
import "./createGame.scss";

export default function CreateGame() {
  const { addError } = useAddErrors();
  const { addOwnGameAction } = useActions();
  const nameGame = useInput("", {}, "Enter a name for the game");
  const textStory = useInput("", {}, "Enter history");
  const [stories, setStories] = useState([]);
  const [player, setPlayer] = useState(false);
  const [autoFlip, setAutoFlip] = useState(false);

  useEffect(() => {
    const storedStories = localStorage.getItem("stories");
    const storedNames = localStorage.getItem("nameGame");
    storedStories && setStories(JSON.parse(storedStories));
    storedNames && nameGame.setValue(storedNames);
  }, []);

  function createGame() {
    addOwnGameAction({ nameGame: nameGame.value, stories, player, autoFlip }, addError);
    localStorage.clear();
  }

  function addStory() {
    if (textStory.isValid) {
      let newStories = [...stories, textStory.value];
      setStories(newStories);
      localStorage.setItem("stories", JSON.stringify(newStories));
      return textStory.setValue("");
    }
    return textStory.outputError();
  }

  function deleteStory(index) {
    let newStories = stories.filter((_, i) => i != index);
    localStorage.setItem("stories", JSON.stringify(newStories));
    setStories(newStories);
  }

  return (
    <div className="create-game">
      <div className="container">
        <div className="create-game__form">
          <h2 className="create-game__title">The form of creating the game</h2>

          <div className="create-game__block">
            <div className="create-game__row">
              <textarea
                className="create-game__testarea"
                value={textStory.value}
                onChange={(e) => textStory.onChange(e)}
                placeholder="Enter history"
                onBlur={textStory.outputError}
              ></textarea>
              <button className="create-game__btn" onClick={addStory}>
                Create
              </button>
            </div>
            <div className="create-game__row">
              <ul className="create-game__list">
                {stories.map((story, index) => (
                  <li key={index} className="create-game__link">
                    <p className="create-game__text">{story}</p>
                    <button className="create-game__btn" onClick={() => deleteStory(index)}>
                      <img src={deleteIcon} className="create-game__icon" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
                <NavLink
                  className="create-game__btn-create create-game__btn"
                  to="/"
                  onClick={createGame}
                >
                  Create a game
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
