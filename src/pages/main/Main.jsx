import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./main.scss";
import Forms from "../../components/main/Forms";

const MainPage = () => {
  const history = useHistory();
  const { ownGames, gamesWhichVisitors } = useSelector((state) => state.games);

  function createGame() {
    history.push("/create_game");
  }

  function joinTheGame() {
    console.log("oneclick joinTheGame");
  }
  function deleteGame(event) {
    event.stopPropagation();
    console.log("oneclick deleteGame");
  }
  function copyLink(event) {
    event.stopPropagation();
    console.log("oneclick copyLink");
  }

  return (
    <div className="main">
      <div className="container">
        <div className="main__row">
          <Forms
            title="Own games"
            listGames={ownGames}
            joinTheGame={joinTheGame}
            copyLink={copyLink}
            deleteGame={deleteGame}
            createGame={createGame}
          />

          <Forms
            title="Games you have been to"
            listGames={gamesWhichVisitors}
            joinTheGame={joinTheGame}
            copyLink={copyLink}
            deleteGame={deleteGame}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
