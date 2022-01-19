import React from "react";
import { ActionCable } from "react-actioncable-provider";
import { useSelector } from "react-redux";
import { useActions } from "../hooks";

const ListActionCable = () => {
  const { setIsDataGame, setAddInvitation } = useActions();
  const { isAuth, userId } = useSelector((state) => state.auth);

  const gameId = useSelector((state) => state.game.gameId);

  if (isAuth) {
    return (
      <>
        <ActionCable
          channel={{
            channel: "InvitationChannel",
            userId,
          }}
          onReceived={(data) => {
            console.log("InvitationChannel", data);
            setAddInvitation(data);
            // dispatch(addGameInvitationAction(data));
          }}
        />
        <ActionCable
          channel={{
            channel: "ShowingGameRequestsChannel",
            userId,
          }}
          onReceived={(data) => {
            console.log("ShowingGameRequestsChannel", data);
            // dispatch(addGameInvitationAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "GameChannel", gameId }}
          onReceived={(data) => {
            console.log("GameChannel", data);
            // dispatch(changeGameYouHaveJoinedAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "ChangeInvitationsChannel", gameId }}
          onReceived={(data) => {
            console.log("ChangeInvitationsChannel", data);
            // dispatch(changeInvitedPlayersAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "ChangePlayersOnlineChannel", gameId }}
          onReceived={(data) => {
            console.log("ChangePlayersOnlineChannel", data);
            setIsDataGame(data);
            // dispatch(changePlayersOnlineAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "DeleteInvitedChannel", userId }}
          onReceived={(data) => {
            console.log("DeleteInvitedChannel", data);
            // dispatch(deleteInvitationAction(data.invitationId));
          }}
        />
        <ActionCable
          channel={{ channel: "AnswersChannel", gameId }}
          onReceived={(data) => {
            console.log("AnswersChannel", data);
            // dispatch(addAnswersAction(data));
          }}
        />
        <ActionCable
          channel={{ channel: "StoriesChannel", gameId }}
          onReceived={(data) => {
            console.log("StoriesChannel", data);
            setIsDataGame(data);
            // dispatch(addStoryAction(data));
          }}
        />
      </>
    );
  }
  return null;
};

export default ListActionCable;
