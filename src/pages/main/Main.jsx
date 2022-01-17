import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import Forms from "../../components/main/Forms";

import { useActions, useAddErrors } from "../../hooks";
import "./main.scss";

function MainPage() {
  const history = useHistory();
  const { addError } = useAddErrors();
  const { deleteGameAction, joinTheGameAction } = useActions();
  const { ownGames, gamesInvitation, isLoadOwnGames, isLoadGamesInv } = useSelector(
    (state) => state.games
  );

  function createGame() {
    history.push("/create_game");
  }

  function joinTheGame(url, id) {
    joinTheGameAction({ gameId: id }, addError);
    // history.push(`/game/${url}`);
  }

  function deleteGame(event, id) {
    event.stopPropagation();
    deleteGameAction({ gameId: id }, addError);
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
            isLoading={isLoadOwnGames}
          />

          <Forms
            title="Games you have been to"
            listGames={gamesInvitation}
            joinTheGame={joinTheGame}
            copyLink={copyLink}
            deleteGame={deleteGameInvitation}
            isLoading={isLoadGamesInv}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
