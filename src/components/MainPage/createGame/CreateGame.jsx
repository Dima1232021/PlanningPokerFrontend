import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../../actions/Game";
import { changeActveFormAction } from "../../../reducers/gamesReducer";
import UsersBlock from "../../usersBlock/UsersBlock";
import Cheks from "./Cheks";

import "./createGame.scss";

export default function CreateGame({ seActive }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [nameGame, setNameGame] = useState("");
  const [justDriving, setJustDriving] = useState(true);
  const [textStory, setTextStory] = useState("");
  const [addUser, setAddUser] = useState([]);
  const [addStory, setAddStory] = useState([]);

  function createNewGame() {
    dispatch(createGame(nameGame, addUser, addStory, justDriving));
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
              value={textStory}
              onChange={(event) => setTextStory(event.target.value)}
              placeholder="Enter history"
            ></textarea>
            <button
              className="block__btn-create"
              onClick={() => {
                setAddStory((value) => [...value, textStory]);
                setTextStory("");
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
            value={nameGame}
            onChange={(event) => setNameGame(event.target.value)}
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
