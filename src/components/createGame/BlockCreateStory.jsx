import React, { useState, useEffect } from "react";
import { useInput } from "../../hooks";
import deleteIcon from "../../icones/delete.svg";

function BlockCreateStory({ stories, setStories }) {
  const textStory = useInput("", {}, "Enter history");

  useEffect(() => {
    const storedStories = localStorage.getItem("stories");
    storedStories && setStories(JSON.parse(storedStories));
  }, []);

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
    <div className="create-game__block">
      <div className="create-game__row">
        <textarea
          className="create-game__testarea"
          value={textStory.value}
          onChange={(e) => textStory.onChange(e)}
          placeholder="Enter history"
          onBlur={textStory.outputError}
        ></textarea>
        <button className="create-game__btn btn" onClick={addStory}>
          Create
        </button>
      </div>
      <div className="create-game__row">
        <ul className="create-game__list">
          {stories.map((story, index) => (
            <li key={index} className="create-game__link">
              <p className="create-game__text">{story}</p>
              <button className="create-game__btn btn" onClick={() => deleteStory(index)}>
                <img src={deleteIcon} className="create-game__icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlockCreateStory;
