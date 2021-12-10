import React, { useState } from "react";
import { useInput } from "../../../hooks/useInput";

import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../../actions/Game";
import { changeActveFormAction } from "../../../reducers/gamesReducer";
import UsersBlock from "../../usersBlock/UsersBlock";
import Cheks from "./Cheks";

import "./createGame.scss";

export default function CreateGame({ seActive }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const nameGame = useInput(
    "",
    { minLength: 5, maxLength: 50 },
    "Enter a name for the game"
  );
  const textStory = useInput(
    "",
    { minLength: 10, maxLength: 1000 },
    "Enter history"
  );

  const [justDriving, setJustDriving] = useState(true);
  const [addUser, setAddUser] = useState([]);
  const [addStory, setAddStory] = useState([]);

  function createNewGame() {
    nameGame.isValid &&
      dispatch(createGame(nameGame.value, addUser, addStory, justDriving));
  }

  function addUserState(user) {
    let findUser = addUser.find((value) => value.id === user.id);
    !findUser && setAddUser((value) => [...value, user]);
  }

  function deleteUserState(user) {
    let arr = addUser.filter((value) => value.id !== user.id);
    setAddUser(arr);
  }

  function deleteStoryState(story) {
    let arr = addStory.filter((value) => value !== story);
    setAddStory(arr);
  }

  return (
    <div className="create-game">
      <h2 className="create-game__title">The form of creating the game</h2>

      <div className="create-game__form">
        <div className="create-game__block block">
          <p className="block__text">Select users to invite them to the game</p>
          <UsersBlock
            value={users}
            keyValue={["id"]}
            name={["username"]}
            nameBtn="Add"
            setValue={addUserState}
          />
        </div>

        <div className="create-game__block block">
          <p className="block__text">The users you have selected</p>
          <UsersBlock
            value={addUser}
            keyValue={["id"]}
            name={["username"]}
            nameBtn="Remove"
            setValue={deleteUserState}
          />
        </div>

        <div className="create-game__block block">
          <p className="block__text">Create stories</p>
          <div className="block__row">
            <textarea
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
            </button>
          </div>
        </div>

        <div className="create-game__block block">
          <p className="block__text">Stories you have created</p>

          <UsersBlock
            value={addStory}
            nameBtn="Remove"
            setValue={deleteStoryState}
          />
        </div>

        <div className="create-game__block block">
          <input
            type="text"
            placeholder="Enter a name for the game"
            value={nameGame.value}
            onChange={(e) => nameGame.onChange(e)}
            onBlur={nameGame.outputError}
            className="block__input"
          />

          <div className="block__container">
            <Cheks justDriving={justDriving} setJustDriving={setJustDriving} />
            <div className="block__row">
              <button
                onClick={() => dispatch(changeActveFormAction(false))}
                className="block__btn-exit"
              >
                Cancel
              </button>
              <button className="block__btn-create" onClick={createNewGame}>
                Create a game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
