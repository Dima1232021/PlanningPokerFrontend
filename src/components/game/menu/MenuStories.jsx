import React, { useState } from "react";
import { useSelector } from "react-redux";
import addStoryIcon from "../../../icones/addStory.svg";
import edit from "../../../icones/edit.svg";
import deleteIcon from "../../../icones/delete.svg";
import { useActions, useAddErrors, useConfirm, useInput } from "../../../hooks";
import ModalStory from "./ModalStory";

function MenuStories() {
  const { confirm } = useConfirm();
  const { addError } = useAddErrors();
  const { removeStoryAction, addStoryAction, editStoryAction, changeHistoryNumber } = useActions();
  const { userId } = useSelector((state) => state.auth);
  const { stories, gameId, driving } = useSelector((state) => state.game);
  const textStory = useInput("", {}, "Enter history");
  const [activeModalEditStory, setActiveModalEditStory] = useState(false);
  const [activeModalAddStory, setActiveModalAddStory] = useState(false);
  const [storyId, setStoryId] = useState(null);

  function modalEditStory(event, story) {
    event.stopPropagation();
    setStoryId(story.id);
    textStory.setValue(story.body);
    setActiveModalEditStory(true);
  }

  function editStory() {
    const story = stories.find(({ id }) => id === storyId);
    if (story.body === textStory.value) {
      addError("You haven't changed the story!");
    } else {
      editStoryAction({ gameId, storyId, body: textStory.value }, addError);
      setActiveModalEditStory(false);
    }
  }

  function addStory() {
    addStoryAction({ gameId, body: textStory.value }, addError);
    setActiveModalAddStory(false);
  }

  async function removeStory(event, storyId) {
    event.stopPropagation();
    const isConfirmed = await confirm("Delete history ?");
    isConfirmed && removeStoryAction({ storyId }, addError);
  }

  function setHistoryNumber(index) {
    changeHistoryNumber({ historyNumber: index });
  }

  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Stories</h3>

        {driving.user_id == userId && (
          <button
            className="game-menu__btn-icon btn"
            onClick={() => {
              textStory.setValue("");
              setActiveModalAddStory(true);
            }}
          >
            <img src={addStoryIcon} className="icon" alt="" />
          </button>
        )}
      </div>

      <ul className="game-menu__list">
        {stories.map((story, index) => {
          return (
            <li key={story.id} className="game-menu__link" onClick={() => setHistoryNumber(index)}>
              <div className="game-menu__header">
                <span>Story {index + 1}</span>
                {driving.user_id == userId && (
                  <div>
                    <button
                      className="game-menu__btn-icon btn"
                      onClick={(e) => modalEditStory(e, story)}
                    >
                      <img src={edit} className="icon" alt="" />
                    </button>
                    <button
                      className="game-menu__btn-icon btn"
                      onClick={(e) => removeStory(e, story.id)}
                    >
                      <img src={deleteIcon} className="icon" alt="" />
                    </button>
                  </div>
                )}
              </div>

              <p className="game-menu__text">{story.body}</p>
            </li>
          );
        })}
      </ul>

      <ModalStory
        title="History editing form"
        textStory={textStory}
        active={activeModalEditStory}
        setActive={setActiveModalEditStory}
        setValue={editStory}
        nameBtn="Сhange"
      />
      <ModalStory
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

export default MenuStories;
