import React, { useState } from "react";
import BlockCreateStory from "../../components/createGame/BlockCreateStory";
import BlockMenu from "../../components/createGame/BlockMenu";
import "./createGame.scss";

export default function CreateGame() {
  const [stories, setStories] = useState([]);
  
  return (
    <div className="create-game">
      <div className="container">
        <div className="create-game__form">
          <h2 className="create-game__title">The form of creating the game</h2>
          <BlockCreateStory stories={stories} setStories={setStories} />
          <BlockMenu stories={stories} setStories={setStories} />
        </div>
      </div>
    </div>
  );
}
