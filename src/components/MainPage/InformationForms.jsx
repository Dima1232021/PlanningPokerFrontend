import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showYoyrGame,
  deleteYoyrGame,
  showingYourInvitationsToGames,
  joinTheGame,
  declineInvitation,
} from "../../actions/Game";
import UsersBlock from "../usersBlock/UsersBlock";

export default function InformationForms() {
  const dispatch = useDispatch();
  const yourGames = useSelector((state) => state.games.yourGames);
  const invitationsToGames = useSelector(
    (state) => state.games.invitationsToGames
  );

  useEffect(() => {
    dispatch(showYoyrGame());
    dispatch(showingYourInvitationsToGames());
  }, []);

  function deleteGame(game) {
    dispatch(deleteYoyrGame(game.id));
  }

  function declineInv(game) {
    dispatch(declineInvitation(game.invitation_id));
  }

  function join(game) {
    if (!game.invitation_id) {
      dispatch(joinTheGame(game.id));
    } else {
      dispatch(joinTheGame(game.game_id, game.invitation_id));
    }
  }

  return (
    <div className="main__row">
      <div className="main__games">
        <div className="main__title">
          <h2>Інформація по іграм</h2>
        </div>

        <div className="main__block block">
          <p className="block__text">Ігри які ви створили</p>
          <UsersBlock
            value={yourGames}
            keyValue={["id"]}
            name={["name_game"]}
            nameBtn="До гри"
            nameBtn2="Видалити"
            setValue={join}
            setValue2={deleteGame}
          />
        </div>

        <div className="main__block block">
          <p className="block__text">Ігри до яких вас запрошують</p>
          <UsersBlock
            value={invitationsToGames}
            keyValue={["invitation_id"]}
            name={["game_name"]}
            nameBtn="До гри"
            nameBtn2="Відмовитися"
            setValue={join}
            setValue2={declineInv}
          />
        </div>
      </div>
    </div>
  );
}
