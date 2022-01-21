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
          channel={{ channel: "InvitationChannel", userId }}
          onReceived={(data) => {
            console.log("InvitationChannel", data);
            setAddInvitation(data);
          }}
        />
        <ActionCable
          channel={{ channel: "GameChannel", gameId }}
          onReceived={(data) => {
            console.log("GameChannel", data);
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "AnswersChannel", gameId }}
          onReceived={(data) => {
            console.log("AnswersChannel", data);
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "StoriesChannel", gameId }}
          onReceived={(data) => {
            console.log("StoriesChannel", data);
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "SetingsGameChannel", gameId }}
          onReceived={(data) => {
            console.log("SetingsGameChannel", data);
            setIsDataGame(data);
          }}
        />
        <ActionCable
          channel={{ channel: "DataUsersChannel", gameId }}
          onReceived={(data) => {
            console.log("DataUsersChannel", data);
            setIsDataGame(data);
          }}
        />
      </>
    );
  }
  return null;
};

export default ListActionCable;
