import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGameYouHaveJoinedAction,
  addGameInvitationAction,
  deleteInvitationAction,
  addAnswersAction,
  addStoryAction,
  changeInvitedPlayersAction,
  changePlayersOnlineAction,
} from "../reducers/gamesReducer";
import { addUserAction } from "../reducers/usersReducer";

export default function ListActionCable() {
  // const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.user.user.id);
  const gameId = useSelector((state) => state.games.gameId);

  if (isAuth) {
    return (
      <>
        <ActionCable
          channel={{
            channel: "ShowingGameRequestsChannel",
            userId,
          }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(addGameInvitationAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "ShowUsersChannel" }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(addUserAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "GameChannel", gameId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(changeGameYouHaveJoinedAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "ChangeInvitationsChannel", gameId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(changeInvitedPlayersAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "ChangePlayersOnlineChannel", gameId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(changePlayersOnlineAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "DeleteInvitedChannel", userId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(deleteInvitationAction(data.invitationId));
          }}
        />
        <ActionCable
          channel={{ channel: "AnswersChannel", gameId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(addAnswersAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "StoriesChannel", gameId }}
          onReceived={(data) => {
            console.log(data);
            // dispatch(addStoryAction(data));
          }}
        />
      </>
    );
  }
  return null;
}
