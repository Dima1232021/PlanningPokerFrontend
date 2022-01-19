import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StoriesBlock from "../../../storiesBlock/StoriesBlock";
import { useInput } from "../../../../hooks/useInput";
import ModelStory from "../../../game/menu/ModelStory";
import {
  editHistory,
  addHistory,
  deleteHistory,
} from "../../../../actions/Game";

import "./menuStories.scss";

export default function MenuStories() {
  const userId = useSelector((state) => state.user.userid);
  const game = useSelector((state) => state.games.gameYouHaveJoined);
  const gameId = useSelector((state) => state.games.gameId);
  const stories = useSelector((state) => state.games.stories);

  const [activeModalEditStory, setActiveModalEditStory] = useState(false);
  const [activeModalAddStory, setActiveModalAddStory] = useState(false);
  const [storyId, setStoryId] = useState(null);

  const textStory = useInput("", {}, "Enter history");

  useEffect(() => {
    !activeModalEditStory && !activeModalAddStory && textStory.setValue("");
  }, [activeModalEditStory, activeModalAddStory]);

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
    <>
      <div className="menu-stories">
        {userId === game.driving.user_id ? (
          <>
            <p className="menu-stories__text">Stories</p>
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
              className="menu-stories__btn"
              onClick={() => setActiveModalAddStory(true)}
            >
              Create a story
            </button>
          </>
        ) : (
          <>
            <p className="menu-stories__text">Stories</p>
            <StoriesBlock value={stories} keyValue={"id"} name={"body"} />
          </>
        )}
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
    </>
  );
}
