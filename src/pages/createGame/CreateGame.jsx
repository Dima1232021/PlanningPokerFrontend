import React, { useState } from "react";
import { useInput } from "../../hooks";
import "./createGame.scss";

export default function CreateGame() {
  const nameGame = useInput("", {}, "Enter a name for the game");
  const textStory = useInput("", {}, "Enter history");
  const [story, setStory] = useState([]);
  const [player, setPlayer] = useState(true);

  function createGame() {
    console.log("createGame");
  }
  function addStory() {
    console.log("addStory");
  }
  function deleteStory() {
    console.log("deleteStory");
  }
  return (
    <div className="create-game">
      <div className="container">
        <div className="create-game__form">
          <h2 className="create-game__title">The form of creating the game</h2>

          <div className="create-game__block">
            <div className="block__row">
              {/* <textarea
                className="block__testarea"
                value={textStory.value}
                onChange={(e) => textStory.onChange(e)}
                placeholder="Enter history"
                onBlur={textStory.outputError}
              ></textarea>
              <button
                className="block__btn-create"
                onClick={() => {
                  if (textStory.isValid) {
                    setAddStory((value) => [...value, textStory.value]);
                    return textStory.setValue("");
                  }
                  return textStory.outputError();
                }}
              >
                Create
              </button> */}
            </div>
          </div>
          <div className="create-game__block"></div>
        </div>
      </div>
    </div>
  );
}
