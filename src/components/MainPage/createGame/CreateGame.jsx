import React, { useEffect, useState } from "react";
import { ActionCable } from "react-actioncable-provider";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../../actions/users";
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
  const [numberUsers, setNumberUsers] = useState(null);
  const [textStory, setTextStory] = useState("");
  const [addUser, setAddUser] = useState([]);
  const [addStory, setAddStory] = useState([]);

  useEffect(() => {
    dispatch(showUser());
  }, [numberUsers]);

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
      {
        <ActionCable
          channel={{ channel: "ShowUsersChannel" }}
          onReceived={(num) => {
            setNumberUsers(num);
          }}
        />
      }

      <h2 className="create-game__title">Форма створення нової гри</h2>

      <div className="create-game__form">
        <div className="create-game__block block">
          <p className="block__text">
            Виберіть користувачів щоб запросити їх до гри
          </p>
          <UsersBlock
            value={users}
            keyValue={["id"]}
            name={["username"]}
            nameBtn="Додати"
            setValue={addUserState}
          />
        </div>

        <div className="create-game__block block">
          <p className="block__text">Користувачі яких ви вибрали</p>
          <UsersBlock
            value={addUser}
            keyValue={["id"]}
            name={["username"]}
            nameBtn="Видалити"
            setValue={deleteUserState}
          />
        </div>

        <div className="create-game__block block">
          <p className="block__text">Створіть істрорію</p>
          <div className="block__row">
            <textarea
              className="block__testarea"
              value={textStory}
              onChange={(event) => setTextStory(event.target.value)}
            ></textarea>
            <button
              className="block__btn-create"
              onClick={() => setAddStory((value) => [...value, textStory])}
            >
              Створити
            </button>
          </div>
        </div>

        <div className="create-game__block block">
          <p className="block__text">Історії які ви створили</p>

          <UsersBlock
            value={addStory}
            nameBtn="Видалити"
            setValue={deleteStoryState}
          />
        </div>

        <div className="create-game__block block">
          <input
            type="text"
            placeholder="Введіть назву гри"
            value={nameGame}
            onChange={(event) => setNameGame(event.target.value)}
            className="block__input"
          />

          <div className="block__row">
            <Cheks justDriving={justDriving} setJustDriving={setJustDriving} />
            <div>
              <button
                onClick={() => dispatch(changeActveFormAction(false))}
                className="block__btn-exit"
              >
                Відмінити
              </button>
              <button className="block__btn-create" onClick={createNewGame}>
                Створити гру
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
