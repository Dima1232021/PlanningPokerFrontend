import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Forms from "../../components/main/Forms";
import Message from "../../components/message/Message";
import { useActions, useAddErrors } from "../../hooks";
import "./main.scss";

function MainPage() {
  const history = useHistory();
  const { addError } = useAddErrors();
  const { deleteGameAction, joinTheGameAction } = useActions();
  const { ownGames, gamesInvitation, isLoadOwnGames, isLoadGamesInv } = useSelector(
    (state) => state.games
  );
  const [isActiveMessage, setActiveMessage] = useState(false);

  function createGame() {
    history.push("/create_game");
  }

  function joinToTheGame(url) {
    joinTheGameAction({ urlGame: url }, addError);
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
    setActiveMessage(true);
    setTimeout(() => setActiveMessage(false), 3000);
    navigator.clipboard.writeText(`http://localhost:3001/game/${url}`);
  }

  return (
    <div className="main">
      <div className="container">
        <div className="main__row">
          <Forms
            title="Own games"
            listGames={ownGames}
            joinTheGame={joinToTheGame}
            copyLink={copyLink}
            deleteGame={deleteGame}
            createGame={createGame}
            isLoading={isLoadOwnGames}
          />

          <Forms
            title="Games you have been to"
            listGames={gamesInvitation}
            joinTheGame={joinToTheGame}
            copyLink={copyLink}
            deleteGame={deleteGameInvitation}
            isLoading={isLoadGamesInv}
          />

          {isActiveMessage && <Message />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
