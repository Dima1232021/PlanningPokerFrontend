import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Forms from "../../components/main/Forms";
import "./main.scss";

const MainPage = () => {
  const history = useHistory();
  const { ownGames, gamesInvitation } = useSelector((state) => state.games);

  function createGame() {
    history.push("/create_game");
  }

  function joinTheGame(url) {
    console.log("joinTheGame", url);
  }

  function deleteGame(event, id) {
    event.stopPropagation();
    console.log("deleteGame", id);
  }
  function deleteGameInvitation(event, id) {
    event.stopPropagation();
    console.log("deleteGameInvitation", id);
  }

  function copyLink(event, url) {
    event.stopPropagation();
    navigator.clipboard.writeText(`http://localhost:3001/game/${url}`);
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
            listGames={gamesInvitation}
            joinTheGame={joinTheGame}
            copyLink={copyLink}
            deleteGame={deleteGameInvitation}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
