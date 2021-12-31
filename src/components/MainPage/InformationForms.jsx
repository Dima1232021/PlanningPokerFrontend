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
import { useAddErrors } from "../../hooks/useAddErrors";

export default function InformationForms() {
  const dispatch = useDispatch();
  const yourGames = useSelector((state) => state.games.yourGames);
  const invitationsToGames = useSelector(
    (state) => state.games.invitationsToGames
  );
  const userid = useSelector((state) => state.user.userid);

  const { addError } = useAddErrors();

  useEffect(() => {
    dispatch(showYoyrGame());
    dispatch(showingYourInvitationsToGames());
  }, []);

  function deleteGame(game) {
    dispatch(deleteYoyrGame(game.id));
  }

  function declineInv(data) {
    console.log("gameId", data.game_id, "userId", userid);
    // dispatch(declineInvitation(game.invitation_id));
  }

  function join(game) {
    if (!game.invitation_id) {
      dispatch(joinTheGame(game.id, addError));
    } else {
      dispatch(joinTheGame(game.game_id, addError));
    }
  }

  return (
    <div className="main__row">
      <div className="main__games">
        <div className="main__title">
          <h2>Information on games</h2>
        </div>

        <div className="main__block block">
          <p className="block__text">Games you have created</p>
          <UsersBlock
            value={yourGames}
            keyValue={["id"]}
            name={["name_game"]}
            nameBtn="Enter"
            nameBtn2="Remove"
            setValue={join}
            setValue2={deleteGame}
          />
        </div>

        <div className="main__block block">
          <p className="block__text">Games to which you are invited</p>
          <UsersBlock
            value={invitationsToGames}
            keyValue={["invitation_id"]}
            name={["game_name"]}
            nameBtn="Enter"
            nameBtn2="Refuse"
            setValue={join}
            setValue2={declineInv}
          />
        </div>
      </div>
    </div>
  );
}
