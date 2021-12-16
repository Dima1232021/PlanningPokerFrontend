import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGameYouHaveJoinedAction,
  addGameInvitationAction,
  deleteInvitationAction,
  addAnswersAction,
  addStoryAction,
} from "../reducers/gamesReducer";
import { addUserAction } from "../reducers/usersReducer";

export default function ListActionCable() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.logged_in);
  const userid = useSelector((state) => state.user.userid);
  const gameId = useSelector((state) => state.games.gameId);

  if (loggedIn) {
    return (
      <>
        <ActionCable
          channel={{
            channel: "ShowingGameRequestsChannel",
            user: userid,
          }}
          onReceived={(value) => {
            console.log(value);
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
          onReceived={(data) => {
            dispatch(addUserAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "GameChannel", game_id: gameId }}
          onReceived={(data) => {
            dispatch(changeGameYouHaveJoinedAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "AnswersChannel", game_id: gameId }}
          onReceived={(data) => {
            dispatch(addAnswersAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "StoriesChannel", game_id: gameId }}
          onReceived={(data) => {
            dispatch(addStoryAction(data));
          }}
        />
      </>
    );
  }
  return null;
}
