import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Forms from "../../components/main/Forms";
import Message from "../../components/message/Message";
import { useActions, useAddErrors, useConfirm } from "../../hooks";
import "./main.scss";

function MainPage() {
  const history = useHistory();
  const { confirm } = useConfirm();
  const { addError } = useAddErrors();
  const { deleteGameAction, joinTheGameAction, deleteInvitationAction } = useActions();
  const { joinTheGame, urlGame, isLoaderPage } = useSelector((state) => state.game);
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

  async function deleteGame(event, id, name_game) {
    event.stopPropagation();
    const isConfirmed = await confirm(`You want to delete the game "${name_game}" ?`);

    isConfirmed && deleteGameAction({ gameId: id }, addError);
  }

  async function deleteInvitation(event, id, name_game) {
    event.stopPropagation();
    const isConfirmed = await confirm(
      `You want to delete the invitation to the game "${name_game}" ?`
    );

    isConfirmed && deleteInvitationAction({ gameId: id }, addError);
  }

  function copyLink(event, url) {
    event.stopPropagation();
    setActiveMessage(true);
    setTimeout(() => setActiveMessage(false), 3000);
    navigator.clipboard.writeText(`http://localhost:3001/game/${url}`);
  }

  useEffect(() => !isLoaderPage && joinTheGame && history.push(`/game/${urlGame}`), [isLoaderPage]);

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
            deleteGame={deleteInvitation}
            isLoading={isLoadGamesInv}
          />

          {isActiveMessage && <Message />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
