import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../actions/users";
import {
  changeGameYouHaveJoinedAction,
  addGameInvitationAction,
  deleteInvitationAction,
} from "../reducers/gamesReducer";

export default function ListActionCable() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);
  const inTheGame = useSelector((state) => state.games.inTheGame);

  const userid = useSelector((state) => state.user.userid);
  const game = useSelector((state) => state.games.gameYouHaveJoined);

  if (loggedIn) {
    return (
      <>
        <ActionCable
          channel={{
            channel: "ShowingGameRequestsChannel",
            user: userid,
          }}
          onReceived={(value) => {
            dispatch(addGameInvitationAction(value));
          }}
        />
        <ActionCable
          channel={{
            channel: "DeleteInvitationChannel",
            user: userid,
          }}
          onReceived={(value) => {
            dispatch(deleteInvitationAction(value.invitation_id));
          }}
        />
        <ActionCable
          channel={{ channel: "ShowUsersChannel" }}
          onReceived={() => {
            dispatch(showUser());
          }}
        />
        {inTheGame && (
          <ActionCable
            channel={{ channel: "GameChannel", game_id: game.id }}
            onReceived={(data) => {
              dispatch(changeGameYouHaveJoinedAction(data));
              console.log("ActionCable", data);
            }}
          />
        )}
      </>
    );
  }
  return null;
}
