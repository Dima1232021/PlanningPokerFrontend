import React from "react";
import { useSelector } from "react-redux";
import addStoryIcon from "../../../icones/addStory.svg";
import edit from "../../../icones/edit.svg";
import deleteIcon from "../../../icones/delete.svg";
import { useActions, useAddErrors } from "../../../hooks";

function Stories() {
  const { addError } = useAddErrors();
  const { removeStoryAction } = useActions();
  const { isActiveMenu, stories } = useSelector((state) => state.game);
  function editStory(story) {
    console.log("editStory", story);
  }

  function addStory() {
    console.log("addStory");
  }

  function removeStory(storyId) {
    removeStoryAction({ storyId }, addError);
    console.log("removeStory", storyId);
  }
  return (
    <div className="game-menu__row">
      <div className="game-menu__header">
        <h3 className="game-menu__title-2">Stories</h3>
        <button className="game-menu__btn-icon btn" onClick={addStory}>
          <img src={addStoryIcon} className="icon" alt="" />
        </button>
      </div>

      <ul className="game-menu__list">
        {stories.map((story, index) => {
          return (
            <li key={story.id} className="game-menu__link">
              <div className="game-menu__header">
                <span>Story {index + 1}</span>

                <div>
                  <button className="game-menu__btn-icon btn" onClick={() => editStory(story)}>
                    <img src={edit} className="icon" alt="" />
                  </button>
                  <button className="game-menu__btn-icon btn" onClick={() => removeStory(story.id)}>
                    <img src={deleteIcon} className="icon" alt="" />
                  </button>
                </div>
              </div>

              <p className="game-menu__text">{story.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Stories;
