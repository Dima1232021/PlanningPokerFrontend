import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import {
  leaveTheGame,
  addHistory,
  editHistory,
  deleteHistory,
} from "../../../actions/Game";
import UsersBlock from "../../usersBlock/UsersBlock";
import StoriesBlock from "../../storiesBlock/StoriesBlock";
import Modal from "../../Modal/Modal";

import "./menu.scss";
import ModelStory from "./ModelStory";

export default function Menu({ active, setActive }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const gameId = useSelector((state) => state.games.gameId);
  const stories = useSelector((state) => state.games.stories);
  const invitationId = useSelector((state) => state.games.invitationId);
  const userId = useSelector((state) => state.user.userid);
  const [activeModalEditStory, setActiveModalEditStory] = useState(false);
  const [activeModalAddStory, setActiveModalAddStory] = useState(false);
  const [storyId, setStoryId] = useState(null);

  const textStory = useInput(
    "",
    { minLength: 10, maxLength: 1000 },
    "Enter history"
  );

  function leave() {
    dispatch(leaveTheGame(game, invitationId));
  }

  function editStory(value = false) {
    if (value) {
      setStoryId(value.id);
      textStory.setValue(value.body);
      return setActiveModalEditStory(true);
    }
    editHistory(gameId, storyId, textStory.value);
    return textStory.setValue("");
  }

  function addStory() {
    addHistory(gameId, textStory.value);
    textStory.setValue("");
  }

  function removeStory(value) {
    deleteHistory(gameId, value.id);
  }

  return (
    <div className="game__menu menu">
      <div className="menu__column">
        <button
          className="menu__btn-active"
          onClick={() => setActive((val) => !val)}
        >
          {active ? ">>" : "<<"}
        </button>
      </div>

      <div className="menu__column">
        <div className="menu__row">
          <h2 className="menu__title">Menu</h2>
          <button onClick={leave} className="menu__btn-leave">
            Exit game
          </button>
        </div>

        <div className="menu__row">
          <div className="menu__storyes">
            {userId === game.driving.user_id ? (
              <>
                <p className="menu__text">Stories</p>
                <StoriesBlock
                  value={stories}
                  keyValue={"id"}
                  name={"body"}
                  nameBtn="Edit"
                  nameBtn2="Remove"
                  setValue={editStory}
                  setValue2={removeStory}
                />
                <button
                  className="menu__btn-create"
                  onClick={() => setActiveModalAddStory(true)}
                >
                  Create a story
                </button>
              </>
            ) : (
              <>
                <p className="menu__text">Stories</p>
                <StoriesBlock value={stories} keyValue={"id"} name={"body"} />
              </>
            )}
          </div>
        </div>

        <div className="menu__row">
          <div className="menu__users">
            <p className="menu__text">Online</p>
            <UsersBlock
              value={game.users_joined}
              keyValue={"user_id"}
              name={"user_name"}
            />
          </div>
        </div>
      </div>

      <ModelStory
        title="History editing form"
        textStory={textStory}
        active={activeModalEditStory}
        setActive={setActiveModalEditStory}
        setValue={editStory}
        nameBtn="Сhange"
      />
      <ModelStory
        title="Create a story"
        textStory={textStory}
        active={activeModalAddStory}
        setActive={setActiveModalAddStory}
        setValue={addStory}
        nameBtn="Create"
      />
    </div>
  );
}
