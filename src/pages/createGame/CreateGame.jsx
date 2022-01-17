import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlockCreateStory from "../../components/createGame/BlockCreateStory";
import BlockMenu from "../../components/createGame/BlockMenu";
import Loader from "../../components/loader/Loader";
import "./createGame.scss";

export default function CreateGame() {
  const { isLoadCreateGame } = useSelector((state) => state.games);
  const [stories, setStories] = useState([]);

  return (
    <div className="create-game">
      <div className="container">
        <div className="create-game__form relHid">
          <h2 className="create-game__title">The form of creating the game</h2>
          <BlockCreateStory stories={stories} setStories={setStories} />
          <BlockMenu stories={stories} setStories={setStories} />
          {isLoadCreateGame && <Loader />}
        </div>
      </div>
    </div>
  );
}
